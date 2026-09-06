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
  readMore: string;
  viewFleet: string;
  contactUs: string;
  search: string;
  newsletterSubmit: string;
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
  | 'hub_explore'
  | 'home_hero'
  | 'home_about'
  | 'home_statistics'
  | 'home_fleet'
  | 'home_chairman'
  | 'home_news'
  | 'home_sustainability'
  | 'home_callouts'
    | 'home_what_we_do';

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
  home_hero: HomeHeroSectionContent;
  home_about: HomeAboutSectionContent;
  home_statistics: HomeStatisticsSectionContent;
  home_what_we_do: HomeWhatWeDoSectionContent;
    home_fleet: HomeFleetSectionContent;
  home_chairman: ChairmanMessageSectionContent;
  home_news: HomeLatestNewsSectionContent;
  home_sustainability: HomeSustainabilitySectionContent;
  home_callouts: HomeNewsletterSectionContent;
}

export interface SiteSettings {
  companyName: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  defaultOgImage: MediaRef;
  phone: string;
  email: string;
  address: string;
  copyrightText: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
  brandLogo: MediaRef;
}

export interface NavigationItem {
  id: string;
  key: string;
  label: string;
  href: string;
  parentKey?: string;
  displayOrder: number;
  description?: string;
}

export interface VideoMediaRef {
  url: string;
  poster?: MediaRef;
  title?: string;
}

export interface FleetVessel {
  id: string;
  slug: string;
  name: string;
  type: string;
  dwt: string;
  built: string;
  trade: string;
  image: MediaRef;
  displayOrder: number;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: MediaRef;
}

export interface HomeHeroSectionContent {
  title: string;
  description: string;
  videos: VideoMediaRef[];
  fallbackImage: MediaRef;
}

export interface HomeAboutSectionContent {
  eyebrow: string;
  title: string;
  description1: string;
  description2: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface HomeStatisticsSectionContent {
  stats: Array<{
    id: string;
    value: string;
    suffix?: string;
    prefix?: string;
    label: string;
    displayOrder: number;
  }>;
}

export interface HomeWhatWeDoSectionContent {
    eyebrow: string;
    title: string;
    description: string;
  }
  
  export interface HomeFleetSectionContent {
    title: string;
    description1: string;
    description2: string;
    ctaLabel: string;
    ctaHref: string;
    stats: { id: string; value: string; suffix: string; label: string }[];
  }

export interface ChairmanMessageSectionContent {
  subtitle: string;
  quote: string;
  name: string;
  role: string;
}

export interface HomeLatestNewsSectionContent {
  title: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface HomeSustainabilitySectionContent {
  title: string;
  description: string;
  image: MediaRef;
  ctaLabel: string;
  ctaHref: string;
}

export interface HomeNewsletterSectionContent {
  title: string;
  description: string;
}

export interface FooterSectionContent {
  newsletterTitle: string;
  newsletterDescription: string;
  copyrightHtml: string;
  columns: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
}
