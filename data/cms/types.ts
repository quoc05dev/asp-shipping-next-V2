export interface MediaRef {
  url: string;
  alt: string;
}

export interface SharedLabels {
  backToAllServices: string;
  exploreMore: string;
  downloadPdf: string;
  careersAtAsp: string;
  learnMore: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: MediaRef;
  displayOrder: number;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  excerpt: string;
  heroImage: MediaRef;
  displayOrder: number;
}

export interface ServiceFaq {
  id: string;
  serviceSlug: string;
  question: string;
  answer: string;
  displayOrder: number;
}

export type SectionKey = 
  | 'hero' 
  | 'primary_intro' 
  | 'how_we_work' 
  | 'faq' 
  | 'related_services'
  | 'capabilities'
  | 'highlights'
  | 'commercial_activity'
  | 'technical_disciplines'
  | 'marine_advisory'
  | 'crew_roles'
  | 'sea_operations'
  | 'hub_intro'
  | 'hub_partners'
  | 'hub_explore';

export interface PageSection<K extends SectionKey = SectionKey> {
  id: string;
  pageSlug: string;
  sectionKey: K;
  content: SectionContentMap[K];
}

export interface HeroSectionContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: MediaRef;
}

export interface TextImageSectionContent {
  eyebrow: string;
  heading: string;
  body: string;
  image: MediaRef;
}

export interface HowWeWorkSectionContent {
  eyebrow: string;
  heading: string;
  intro: string;
  image: MediaRef;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export interface FaqSectionContent {
  eyebrow: string;
  heading: string;
  intro: string;
  image: MediaRef;
}

export interface RelatedServicesSectionContent {
  eyebrow: string;
  heading: string;
  intro: string;
}

export interface HubIntroSectionContent {
  heading: string;
  body1: string;
  body2: string;
}

export interface HubPartnersSectionContent {
  heading: string;
  body: string;
}

export interface HubExploreSectionContent {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: Array<{
    title: string;
    description: string;
    href: string;
    ctaLabel: string;
  }>;
}

export interface CapabilitiesSectionContent {
  eyebrow: string;
  heading: string;
  intro: string;
  capabilities: Array<{
    title: string;
    description: string;
  }>;
}

export interface HighlightsSectionContent {
  eyebrow: string;
  heading: string;
  highlights: Array<{
    title: string;
    description: string;
  }>;
}

export interface CommercialActivitySectionContent {
  eyebrow: string;
  heading: string;
  items: Array<{
    name: string;
    type: string;
    focus: string;
    application: string;
    image: MediaRef;
    description: string;
  }>;
}

export interface TechnicalDisciplinesSectionContent {
  eyebrow: string;
  heading: string;
  items: Array<{
    name: string;
    type: string;
    focus: string;
    scope: string;
    image: MediaRef;
    description: string;
  }>;
}

export interface MarineAdvisorySectionContent {
  eyebrow: string;
  heading: string;
  items: Array<{
    name: string;
    type: string;
    focus: string;
    lifecycle: string;
    image: MediaRef;
    description: string;
  }>;
}

export interface CrewRolesSectionContent {
  eyebrow: string;
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  roles: Array<{
    name: string;
    type: string;
    department: string;
    rankGroup: string;
    image: MediaRef;
    description: string;
  }>;
}

export interface SeaOperationsSectionContent {
  eyebrow: string;
  heading: string;
  items: Array<{
    name: string;
    type: string;
    focus: string;
    scope: string;
    image: MediaRef;
    description: string;
  }>;
}

export interface SectionContentMap {
  hero: HeroSectionContent;
  primary_intro: TextImageSectionContent;
  how_we_work: HowWeWorkSectionContent;
  faq: FaqSectionContent;
  related_services: RelatedServicesSectionContent;
  capabilities: CapabilitiesSectionContent;
  highlights: HighlightsSectionContent;
  commercial_activity: CommercialActivitySectionContent;
  technical_disciplines: TechnicalDisciplinesSectionContent;
  marine_advisory: MarineAdvisorySectionContent;
  crew_roles: CrewRolesSectionContent;
  sea_operations: SeaOperationsSectionContent;
  hub_intro: HubIntroSectionContent;
  hub_partners: HubPartnersSectionContent;
  hub_explore: HubExploreSectionContent;
}
