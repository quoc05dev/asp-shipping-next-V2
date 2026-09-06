import { createAdminClient } from '../lib/supabase/admin';
import { cmsRepository } from '../data/cms/repository';
import type { 
  SectionKey, 
  PageSection, 
  Service, 
  ServiceFaq, 
  HistoryTimelineItem 
} from '../data/cms/types';
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

/**
 * Seed Supabase with canonical local CMS data.
 * Safe to run multiple times (uses UPSERT).
 */
async function seedSupabase() {
  const db = createAdminClient();
  
  console.log('Seeding Supabase Database...');

  // 1. Pages
  const pages = [
    { slug: 'home', title: 'Home', published: true },
    { slug: 'what-we-do', title: 'What We Do', published: true },
    { slug: 'about-us', title: 'About Us', published: true },
    { slug: 'about-us/leadership', title: 'Leadership', published: true },
    { slug: 'about-us/history', title: 'History', published: true },
    { slug: 'about-us/vision-mission-values', title: 'Vision, Mission & Values', published: true },
    { slug: 'about-us/trades', title: 'Our Trades', published: true }
  ];

  console.log(`Upserting ${pages.length} Pages...`);
  for (const page of pages) {
    const { error } = await db.from('pages').upsert(
      { slug: page.slug, title: page.title, published: page.published },
      { onConflict: 'slug' }
    );
    if (error) console.error(`Error upserting page ${page.slug}:`, error.message);
  }

  // Fetch page IDs
  const { data: pageRecords } = await db.from('pages').select('id, slug');
  const pageMap = new Map((pageRecords || []).map(p => [p.slug, p.id]));

  // 2. Page Sections (Home, What We Do, About)
  const sectionsToSeed = [
    { pageSlug: 'home', keys: ['home_hero', 'home_about', 'home_statistics', 'home_what_we_do', 'home_fleet', 'home_chairman', 'home_latest_news', 'home_sustainability', 'home_callouts'] },
    { pageSlug: 'what-we-do', keys: ['hero', 'primary_intro', 'how_we_work', 'faq'] },
    { pageSlug: 'about-us', keys: ['about_hero', 'about_who_we_are', 'about_fleet', 'about_content_columns', 'about_global_service', 'about_lpg_intro', 'about_lpg_pointers', 'about_lpg_details', 'about_applications', 'about_more'] },
    { pageSlug: 'about-us/leadership', keys: ['leadership_hero', 'leadership_senior_management', 'leadership_board', 'leadership_more'] },
    { pageSlug: 'about-us/history', keys: ['history_hero', 'history_intro', 'history_timeline', 'history_more'] },
    { pageSlug: 'about-us/vision-mission-values', keys: ['vmv_hero', 'vmv_vision_mission', 'vmv_values', 'vmv_more'] },
    { pageSlug: 'about-us/trades', keys: ['trades_hero', 'trades_glance', 'trades_intro', 'trades_video1', 'trades_columns', 'trades_articles', 'trades_sts', 'trades_technical', 'trades_pointers', 'trades_more'] },
  ];

  let sectionCount = 0;
  console.log('Upserting Page Sections...');
  
  for (const { pageSlug, keys } of sectionsToSeed) {
    const pageId = pageMap.get(pageSlug);
    if (!pageId) continue;

    for (let i = 0; i < keys.length; i++) {
      const sectionKey = keys[i] as SectionKey;
      const sectionData = await cmsRepository.getPageSection(pageSlug, sectionKey);
      
      if (sectionData) {
        const { error } = await db.from('page_sections').upsert(
          {
            page_id: pageId,
            section_key: sectionKey,
            content: sectionData.content,
            display_order: i,
            published: true
          },
          { onConflict: 'page_id,section_key' } // Note: need a unique constraint on page_id, section_key
        );
        if (error) console.error(`Error upserting section ${sectionKey}:`, error.message);
        else sectionCount++;
      }
    }
  }
  console.log(`Upserted ${sectionCount} Page Sections.`);

  // 3. Services
  console.log('Upserting Services...');
  const services = await cmsRepository.getServices();
  for (const svc of services) {
    const { error } = await db.from('services').upsert(
      {
        slug: svc.slug,
        title: svc.name,
        description: svc.excerpt,
        icon_url: svc.heroImage.url,
        published: true,
        display_order: svc.displayOrder
      },
      { onConflict: 'slug' }
    );
    if (error) console.error(`Error upserting service ${svc.slug}:`, error.message);
  }

  // Re-fetch services for IDs to link FAQs
  const { data: svcRecords } = await db.from('services').select('id, slug');
  const svcMap = new Map((svcRecords || []).map(s => [s.slug, s.id]));

  // 4. Service FAQs
  console.log('Upserting Service FAQs...');
  let faqCount = 0;
  for (const svc of services) {
    const svcId = svcMap.get(svc.slug);
    if (!svcId) continue;
    
    const faqs = await cmsRepository.getServiceFaqs(svc.slug);
    for (const faq of faqs) {
      // For FAQs, we don't have a natural key to upsert on besides service_id + question,
      // but without a unique constraint, we'll just delete existing and re-insert to avoid duplicates.
      await db.from('service_faqs').delete().eq('service_id', svcId);
      
      const { error } = await db.from('service_faqs').insert(
        faqs.map((f, idx) => ({
          service_id: svcId,
          question: f.question,
          answer: f.answer,
          display_order: idx,
          published: true
        }))
      );
      if (error) {
        console.error(`Error inserting faqs for ${svc.slug}:`, error.message);
      } else {
        faqCount += faqs.length;
        break; // Only insert the array once
      }
    }
  }
  console.log(`Inserted ${faqCount} Service FAQs.`);

  console.log('\nSeed Complete!');
}

seedSupabase().catch(console.error);
