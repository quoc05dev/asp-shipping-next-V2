import { cmsRepository } from './repository';
import { SectionKey, PageSection } from './types';

export async function requirePageSection<K extends SectionKey>(pageSlug: string, sectionKey: K): Promise<PageSection<K>> {
  const section = await cmsRepository.getPageSection(pageSlug, sectionKey);
  if (!section) {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      throw new Error(`CRITICAL REGRESSION: Required page section '${sectionKey}' for page '${pageSlug}' is missing in CMS data.`);
    } else {
      // In production, we log loudly but could fallback to empty state or throw to 500 error boundary.
      console.error(`[CMS ERROR] Missing required section: ${sectionKey} on ${pageSlug}`);
      throw new Error(`Missing required section: ${sectionKey}`);
    }
  }
  return section;
}
