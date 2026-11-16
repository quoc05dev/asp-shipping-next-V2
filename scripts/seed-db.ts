import * as dotenv from 'dotenv';
import path from 'path';
import { eq } from 'drizzle-orm';
import { cmsRepository } from '../data/cms/repository';
import type { SectionKey } from '../data/cms/types';
import { db, pool } from '../lib/db';
import {
  fleetVessels,
  navigationItems,
  newsArticles,
  newsCategories,
  pageSections,
  pages,
  partners,
  serviceFaqs,
  services,
  siteSettings,
} from '../lib/db/schema';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const PAGES = [
  'home',
  'what-we-do',
  'about-us',
  'about-us/leadership',
  'about-us/history',
  'about-us/vision-mission-values',
  'about-us/trades',
  'commercial-management',
  'technical-management',
  'marine-consultancy',
  'crew-management',
  'sea-transportation',
];

const SECTION_KEYS: Record<string, SectionKey[]> = {
  home: ['home_hero', 'home_about', 'home_statistics', 'home_what_we_do', 'home_fleet', 'home_chairman', 'home_latest_news', 'home_sustainability', 'home_callouts'],
  'what-we-do': ['hero', 'hub_intro', 'hub_partners', 'hub_explore'],
  'about-us': ['about_hero', 'about_who_we_are', 'about_fleet', 'about_content_columns', 'about_global_service', 'about_lpg_intro', 'about_lpg_pointers', 'about_lpg_details', 'about_applications', 'about_more'],
  'about-us/leadership': ['leadership_hero', 'leadership_senior_management', 'leadership_board', 'leadership_more'],
  'about-us/history': ['history_hero', 'history_intro', 'history_timeline', 'history_more'],
  'about-us/vision-mission-values': ['vmv_hero', 'vmv_vision_mission', 'vmv_values', 'vmv_more'],
  'about-us/trades': ['trades_hero', 'trades_glance', 'trades_intro', 'trades_video1', 'trades_columns', 'trades_articles', 'trades_sts', 'trades_technical', 'trades_pointers', 'trades_more'],
  'commercial-management': ['hero', 'primary_intro', 'how_we_work', 'capabilities', 'highlights', 'commercial_activity', 'faq'],
  'technical-management': ['hero', 'primary_intro', 'how_we_work', 'faq'],
  'marine-consultancy': ['hero', 'primary_intro', 'how_we_work', 'capabilities', 'highlights', 'marine_advisory', 'faq'],
  'crew-management': ['hero', 'primary_intro', 'how_we_work', 'capabilities', 'highlights', 'crew_roles', 'faq'],
  'sea-transportation': ['hero', 'primary_intro', 'how_we_work', 'capabilities', 'highlights', 'sea_operations', 'faq'],
};

const titleOf = (slug: string) =>
  slug.split('/').pop()!.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const slugify = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function toDate(value: string): Date | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

async function seed() {
  console.log('Seeding PostgreSQL database...\n');

  await db.transaction(async (tx) => {
    for (const slug of PAGES) {
      await tx
        .insert(pages)
        .values({ slug, title: titleOf(slug), published: true })
        .onConflictDoUpdate({
          target: pages.slug,
          set: { title: titleOf(slug), published: true },
        });
    }

    const pageRecords = await tx.select({ id: pages.id, slug: pages.slug }).from(pages);
    const pageMap = new Map(pageRecords.map((page) => [page.slug, page.id]));
    console.log(`Pages: ${pageMap.size}`);

    let sectionCount = 0;
    for (const [pageSlug, keys] of Object.entries(SECTION_KEYS)) {
      const pageId = pageMap.get(pageSlug);
      if (!pageId) continue;

      for (let index = 0; index < keys.length; index++) {
        const sectionKey = keys[index];
        const section = await cmsRepository.getPageSection(pageSlug, sectionKey);
        if (!section) {
          console.error(`? section ${pageSlug}/${sectionKey}: missing in local data`);
          continue;
        }

        await tx
          .insert(pageSections)
          .values({
            pageId,
            sectionKey,
            content: section.content,
            displayOrder: index,
            published: true,
          })
          .onConflictDoUpdate({
            target: [pageSections.pageId, pageSections.sectionKey],
            set: {
              content: section.content,
              displayOrder: index,
              published: true,
            },
          });
        sectionCount++;
      }
    }
    console.log(`Page sections: ${sectionCount}`);

    const localServices = await cmsRepository.getServices();
    for (const service of localServices) {
      await tx
        .insert(services)
        .values({
          slug: service.slug,
          title: service.name,
          description: service.excerpt,
          iconUrl: service.heroImage.url || null,
          displayOrder: service.displayOrder,
          published: true,
        })
        .onConflictDoUpdate({
          target: services.slug,
          set: {
            title: service.name,
            description: service.excerpt,
            iconUrl: service.heroImage.url || null,
            displayOrder: service.displayOrder,
            published: true,
          },
        });
    }

    const serviceRecords = await tx.select({ id: services.id, slug: services.slug }).from(services);
    const serviceMap = new Map(serviceRecords.map((service) => [service.slug, service.id]));

    let faqCount = 0;
    for (const service of localServices) {
      const serviceId = serviceMap.get(service.slug);
      if (!serviceId) continue;

      await tx.delete(serviceFaqs).where(eq(serviceFaqs.serviceId, serviceId));
      const faqs = await cmsRepository.getServiceFaqs(service.slug);
      if (faqs.length) {
        await tx.insert(serviceFaqs).values(
          faqs.map((faq, index) => ({
            serviceId,
            question: faq.question,
            answer: faq.answer,
            displayOrder: index,
            published: true,
          })),
        );
        faqCount += faqs.length;
      }
    }
    console.log(`Service FAQs: ${faqCount}`);

    const settings = [
      ['shared_labels', await cmsRepository.getSharedLabels()],
      ['site_settings', await cmsRepository.getSiteSettings()],
      ['footer', await cmsRepository.getFooterSection()],
    ] as const;

    for (const [key, value] of settings) {
      await tx
        .insert(siteSettings)
        .values({ settingKey: key, settingValue: value })
        .onConflictDoUpdate({
          target: siteSettings.settingKey,
          set: { settingValue: value },
        });
    }
    console.log(`Site settings: ${settings.length}`);

    await tx.delete(navigationItems).where(eq(navigationItems.menuLocation, 'header'));
    const navigation = await cmsRepository.getNavigation();
    if (navigation.length) {
      await tx.insert(navigationItems).values(
        navigation.map((item) => ({
          menuLocation: 'header',
          label: item.label,
          url: item.href,
          displayOrder: item.displayOrder,
          published: true,
        })),
      );
    }
    console.log(`Navigation items: ${navigation.length}`);

    const localVessels = await cmsRepository.getFleetVessels();
    for (const vessel of localVessels) {
      const dwt = Number(vessel.dwt.replace(/[^\d.]/g, '')) || null;
      const builtYear = Number(vessel.built.replace(/[^\d]/g, '')) || null;

      await tx
        .insert(fleetVessels)
        .values({
          name: vessel.name,
          builtYear,
          dwt: dwt === null ? null : String(dwt),
          specifications: {
            type: vessel.type,
            trade: vessel.trade,
            slug: vessel.slug,
          },
          imageUrl: vessel.image.url || null,
          displayOrder: vessel.displayOrder,
          published: true,
        })
        .onConflictDoUpdate({
          target: fleetVessels.name,
          set: {
            builtYear,
            dwt: dwt === null ? null : String(dwt),
            specifications: {
              type: vessel.type,
              trade: vessel.trade,
              slug: vessel.slug,
            },
            imageUrl: vessel.image.url || null,
            displayOrder: vessel.displayOrder,
            published: true,
          },
        });
    }
    console.log(`Fleet vessels: ${localVessels.length}`);

    const localArticles = await cmsRepository.getLatestNews();
    const categoryNames = [...new Set(localArticles.map((article) => article.category).filter(Boolean))];

    for (const name of categoryNames) {
      await tx
        .insert(newsCategories)
        .values({ slug: slugify(name), name })
        .onConflictDoUpdate({
          target: newsCategories.slug,
          set: { name },
        });
    }

    const categoryRecords = await tx
      .select({ id: newsCategories.id, name: newsCategories.name })
      .from(newsCategories);
    const categoryMap = new Map(categoryRecords.map((category) => [category.name, category.id]));

    for (let index = 0; index < localArticles.length; index++) {
      const article = localArticles[index];
      await tx
        .insert(newsArticles)
        .values({
          categoryId: categoryMap.get(article.category) ?? null,
          slug: article.slug,
          title: article.title,
          excerpt: article.excerpt,
          imageUrl: article.image.url || null,
          publishedDate: toDate(article.date),
          displayOrder: index,
          published: true,
        })
        .onConflictDoUpdate({
          target: newsArticles.slug,
          set: {
            categoryId: categoryMap.get(article.category) ?? null,
            title: article.title,
            excerpt: article.excerpt,
            imageUrl: article.image.url || null,
            publishedDate: toDate(article.date),
            displayOrder: index,
            published: true,
          },
        });
    }
    console.log(`News articles: ${localArticles.length}`);

    await tx.delete(partners);
    const localPartners = await cmsRepository.getPartners();
    if (localPartners.length) {
      await tx.insert(partners).values(
        localPartners.map((partner) => ({
          name: partner.name,
          logoUrl: partner.logo.url || null,
          logoAlt: partner.logo.alt || null,
          displayOrder: partner.displayOrder,
          published: true,
        })),
      );
    }
    console.log(`Partners: ${localPartners.length}`);
  });

  console.log('\nSeed complete.');
}

seed()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => pool.end());
