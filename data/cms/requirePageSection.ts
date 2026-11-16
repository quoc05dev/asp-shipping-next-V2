import { notFound } from 'next/navigation';
import { getCmsRepository } from './getCmsRepository';
import { SectionKey, PageSection } from './types';

export async function requirePageSection<K extends SectionKey>(pageSlug: string, sectionKey: K): Promise<PageSection<K>> {
  const cmsRepository = await getCmsRepository();
  const section = await cmsRepository.getPageSection(pageSlug, sectionKey);
  if (!section) {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      throw new Error(`CRITICAL REGRESSION: Required page section '${sectionKey}' for page '${pageSlug}' is missing in CMS data.`);
    }
    console.error(`[CMS ERROR] Missing required section: ${sectionKey} on ${pageSlug}`);
    notFound();
  }
  return section;
}
