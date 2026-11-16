import { and, asc, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
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
} from '@/lib/db/schema';
import type { CmsRepository } from './repository';
import type {
  SectionKey,
  PageSection,
  Service,
  ServiceFaq,
  Partner,
  SharedLabels,
  SiteSettings,
  NavigationItem,
  FleetVessel,
  NewsArticle,
  FooterSectionContent,
} from './types';

const FALLBACK_LABELS: SharedLabels = {
  backToAllServices: 'Back to all services',
  exploreMore: 'Explore more',
  downloadPdf: 'Download PDF',
  careersAtAsp: 'Careers at ASP',
  learnMore: 'Learn more',
  readMore: 'Read More',
  viewFleet: 'View Fleet',
  contactUs: 'Contact Us',
  search: 'Search',
  newsletterSubmit: 'Subscribe',
};

function toService(row: typeof services.$inferSelect): Service {
  return {
    id: row.id,
    slug: row.slug,
    name: row.title,
    excerpt: row.description ?? '',
    heroImage: { url: row.iconUrl ?? '', alt: row.title },
    displayOrder: row.displayOrder ?? 0,
  };
}

export class PostgresCmsRepository implements CmsRepository {
  async getPageSection<K extends SectionKey>(
    pageSlug: string,
    sectionKey: K,
  ): Promise<PageSection<K> | null> {
    const [section] = await db
      .select({
        id: pageSections.id,
        pageSlug: pages.slug,
        sectionKey: pageSections.sectionKey,
        content: pageSections.content,
      })
      .from(pageSections)
      .innerJoin(pages, eq(pageSections.pageId, pages.id))
      .where(
        and(
          eq(pages.slug, pageSlug),
          eq(pages.published, true),
          eq(pageSections.sectionKey, sectionKey),
          eq(pageSections.published, true),
        ),
      )
      .limit(1);

    if (!section) return null;

    return {
      id: section.id,
      pageSlug: section.pageSlug,
      sectionKey: section.sectionKey as K,
      content: section.content as PageSection<K>['content'],
    };
  }

  async getServices(): Promise<Service[]> {
    const rows = await db
      .select()
      .from(services)
      .where(eq(services.published, true))
      .orderBy(asc(services.displayOrder));

    return rows.map(toService);
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    const [row] = await db
      .select()
      .from(services)
      .where(and(eq(services.slug, slug), eq(services.published, true)))
      .limit(1);

    return row ? toService(row) : null;
  }

  async getServiceFaqs(serviceSlug: string): Promise<ServiceFaq[]> {
    const rows = await db
      .select({
        id: serviceFaqs.id,
        question: serviceFaqs.question,
        answer: serviceFaqs.answer,
        displayOrder: serviceFaqs.displayOrder,
      })
      .from(serviceFaqs)
      .innerJoin(services, eq(serviceFaqs.serviceId, services.id))
      .where(and(eq(services.slug, serviceSlug), eq(serviceFaqs.published, true)))
      .orderBy(asc(serviceFaqs.displayOrder));

    return rows.map((row) => ({
      id: row.id,
      serviceSlug,
      question: row.question,
      answer: row.answer,
      displayOrder: row.displayOrder ?? 0,
    }));
  }

  async getRelatedServices(serviceSlug: string): Promise<Service[]> {
    const all = await this.getServices();
    return all.filter((service) => service.slug !== serviceSlug).slice(0, 3);
  }

  async getPartners(): Promise<Partner[]> {
    const rows = await db
      .select()
      .from(partners)
      .where(eq(partners.published, true))
      .orderBy(asc(partners.displayOrder));

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      logo: { url: row.logoUrl ?? '', alt: row.logoAlt ?? row.name },
      displayOrder: row.displayOrder ?? 0,
    }));
  }

  async getSharedLabels(): Promise<SharedLabels> {
    const [row] = await db
      .select({ value: siteSettings.settingValue })
      .from(siteSettings)
      .where(eq(siteSettings.settingKey, 'shared_labels'))
      .limit(1);

    return (row?.value as SharedLabels | undefined) ?? FALLBACK_LABELS;
  }

  async getSiteSettings(): Promise<SiteSettings> {
    const [row] = await db
      .select({ value: siteSettings.settingValue })
      .from(siteSettings)
      .where(eq(siteSettings.settingKey, 'site_settings'))
      .limit(1);

    if (!row?.value) {
      throw new Error('[PostgresCmsRepository] site_settings not found in database');
    }

    return row.value as SiteSettings;
  }

  async getNavigation(): Promise<NavigationItem[]> {
    const rows = await db
      .select()
      .from(navigationItems)
      .where(
        and(
          eq(navigationItems.menuLocation, 'header'),
          eq(navigationItems.published, true),
        ),
      )
      .orderBy(asc(navigationItems.displayOrder));

    return rows.map((row) => ({
      id: row.id,
      key: row.label.toLowerCase().replace(/\s+/g, '_'),
      label: row.label,
      href: row.url,
      displayOrder: row.displayOrder ?? 0,
    }));
  }

  async getFleetVessels(): Promise<FleetVessel[]> {
    const rows = await db
      .select()
      .from(fleetVessels)
      .where(eq(fleetVessels.published, true))
      .orderBy(asc(fleetVessels.displayOrder));

    return rows.map((row, index) => {
      const specs = (row.specifications ?? {}) as {
        type?: string;
        trade?: string;
      };
      const dwt = row.dwt === null ? '' : Number(row.dwt).toLocaleString('en-US');

      return {
        id: row.id,
        slug: row.name.toLowerCase().replace(/\s+/g, '-'),
        name: row.name,
        type: specs.type ?? '',
        dwt: dwt ? `${dwt} DWT` : '',
        built: row.builtYear ? `BUILT ${row.builtYear}` : '',
        trade: specs.trade ?? '',
        image: { url: row.imageUrl ?? '', alt: row.name },
        displayOrder: row.displayOrder ?? index,
      };
    });
  }

  async getLatestNews(): Promise<NewsArticle[]> {
    const rows = await db
      .select({
        id: newsArticles.id,
        slug: newsArticles.slug,
        title: newsArticles.title,
        excerpt: newsArticles.excerpt,
        publishedDate: newsArticles.publishedDate,
        imageUrl: newsArticles.imageUrl,
        category: newsCategories.name,
      })
      .from(newsArticles)
      .leftJoin(newsCategories, eq(newsArticles.categoryId, newsCategories.id))
      .where(eq(newsArticles.published, true))
      .orderBy(desc(newsArticles.publishedDate))
      .limit(10);

    return rows.map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt ?? '',
      date: row.publishedDate?.toISOString() ?? '',
      category: row.category ?? '',
      image: { url: row.imageUrl ?? '', alt: row.title },
    }));
  }

  async getFooterSection(): Promise<FooterSectionContent> {
    const [row] = await db
      .select({ value: siteSettings.settingValue })
      .from(siteSettings)
      .where(eq(siteSettings.settingKey, 'footer'))
      .limit(1);

    if (!row?.value) {
      throw new Error('[PostgresCmsRepository] footer setting not found in database');
    }

    return row.value as FooterSectionContent;
  }
}
