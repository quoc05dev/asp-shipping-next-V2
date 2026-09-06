import { createAdminClient } from '@/lib/supabase/admin';
import type {
  CmsRepository
} from './repository';
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

/**
 * SupabaseCmsRepository — real database adapter.
 *
 * Conforms to the CmsRepository contract defined in repository.ts.
 * All methods read from Supabase via the admin (service role) client,
 * applying business logic like filtering by `published = true`.
 *
 * ARCHITECTURE:
 *   Server Page/Component
 *     → requirePageSection / cmsRepository method
 *     → SupabaseCmsRepository (this class)
 *     → Supabase Postgres
 *
 * IMPORTANT: Never import this in Client Components.
 * Use getCmsRepository.ts for server-side provider selection.
 */
export class SupabaseCmsRepository implements CmsRepository {
  private get db() {
    return createAdminClient();
  }

  async getPageSection<K extends SectionKey>(
    pageSlug: string,
    sectionKey: K
  ): Promise<PageSection<K> | null> {
    const { data: page, error: pageErr } = await this.db
      .from('pages')
      .select('id, slug')
      .eq('slug', pageSlug)
      .eq('published', true)
      .single();

    if (pageErr || !page) return null;

    const { data: section, error: sectionErr } = await this.db
      .from('page_sections')
      .select('id, section_key, content')
      .eq('page_id', page.id)
      .eq('section_key', sectionKey)
      .eq('published', true)
      .single();

    if (sectionErr || !section) return null;

    return {
      id: section.id,
      pageSlug: page.slug,
      sectionKey: section.section_key as K,
      content: section.content as any,
    };
  }

  async getServices(): Promise<Service[]> {
    const { data, error } = await this.db
      .from('services')
      .select('id, slug, title, description, icon_url, display_order')
      .eq('published', true)
      .order('display_order', { ascending: true });

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      slug: row.slug,
      name: row.title,
      excerpt: row.description ?? '',
      heroImage: { url: row.icon_url ?? '', alt: row.title },
      displayOrder: row.display_order ?? 0,
    }));
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    const { data, error } = await this.db
      .from('services')
      .select('id, slug, title, description, icon_url, display_order')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error || !data) return null;

    return {
      id: data.id,
      slug: data.slug,
      name: data.title,
      excerpt: data.description ?? '',
      heroImage: { url: data.icon_url ?? '', alt: data.title },
      displayOrder: data.display_order ?? 0,
    };
  }

  async getServiceFaqs(serviceSlug: string): Promise<ServiceFaq[]> {
    // Look up service first
    const { data: svc } = await this.db
      .from('services')
      .select('id')
      .eq('slug', serviceSlug)
      .single();

    if (!svc) return [];

    const { data, error } = await this.db
      .from('service_faqs')
      .select('id, question, answer, display_order')
      .eq('service_id', svc.id)
      .eq('published', true)
      .order('display_order', { ascending: true });

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      serviceSlug,
      question: row.question,
      answer: row.answer,
      displayOrder: row.display_order ?? 0,
    }));
  }

  async getRelatedServices(serviceSlug: string): Promise<Service[]> {
    // For now return all services except the current one
    const all = await this.getServices();
    return all.filter(s => s.slug !== serviceSlug).slice(0, 3);
  }

  async getPartners(): Promise<Partner[]> {
    // Partners not yet in DB schema — return empty for now
    return [];
  }

  async getSharedLabels(): Promise<SharedLabels> {
    const { data } = await this.db
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'shared_labels')
      .single();

    if (data?.setting_value) return data.setting_value as SharedLabels;

    // Fallback labels
    return {
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
  }

  async getSiteSettings(): Promise<SiteSettings> {
    const { data } = await this.db
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'site_settings')
      .single();

    if (data?.setting_value) return data.setting_value as SiteSettings;

    throw new Error('[SupabaseCmsRepository] site_settings not found in database');
  }

  async getNavigation(): Promise<NavigationItem[]> {
    const { data, error } = await this.db
      .from('navigation_items')
      .select('id, menu_location, label, url, parent_id, display_order')
      .eq('menu_location', 'header')
      .eq('published', true)
      .order('display_order', { ascending: true });

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      key: row.label.toLowerCase().replace(/\s+/g, '_'),
      label: row.label,
      href: row.url,
      displayOrder: row.display_order ?? 0,
    }));
  }

  async getFleetVessels(): Promise<FleetVessel[]> {
    const { data, error } = await this.db
      .from('fleet_vessels')
      .select('id, name, specifications, image_url, built_year, dwt')
      .eq('published', true);

    if (error || !data) return [];

    return data.map((row: any, idx: number) => ({
      id: row.id,
      slug: row.name.toLowerCase().replace(/\s+/g, '-'),
      name: row.name,
      type: row.specifications?.type ?? '',
      dwt: row.dwt ? `${row.dwt} DWT` : '',
      built: row.built_year ? `BUILT ${row.built_year}` : '',
      trade: row.specifications?.trade ?? '',
      image: { url: row.image_url ?? '', alt: row.name },
      displayOrder: idx,
    }));
  }

  async getLatestNews(): Promise<NewsArticle[]> {
    const { data, error } = await this.db
      .from('news_articles')
      .select('id, slug, title, excerpt, published_date, image_url, news_categories(name)')
      .eq('published', true)
      .order('published_date', { ascending: false })
      .limit(10);

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt ?? '',
      date: row.published_date ?? '',
      category: row.news_categories?.name ?? '',
      image: { url: row.image_url ?? '', alt: row.title },
    }));
  }

  async getFooterSection(): Promise<FooterSectionContent> {
    const { data } = await this.db
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'footer')
      .single();

    if (data?.setting_value) return data.setting_value as FooterSectionContent;

    throw new Error('[SupabaseCmsRepository] footer setting not found in database');
  }
}
