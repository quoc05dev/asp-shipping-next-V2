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

export interface HistoryIntroSectionContent {
  heading: string;
  paragraphs: string[];
}

export interface HistoryTimelineItem {
  id: string;
  year?: string;
  paragraphs: string[];
  image?: MediaRef;
}

export interface HistoryTimelineSectionContent {
  itemIds: string[];
}

export type SectionKey = 
  | 'leadership_hero'
  | 'leadership_senior_management'
  | 'leadership_board'
  | 'leadership_more'
  | 'vmv_hero'
  | 'vmv_vision_mission'
  | 'vmv_values'
  | 'vmv_more'
  | 'trades_hero'
  | 'trades_glance'
  | 'trades_intro'
  | 'trades_video1'
  | 'trades_columns'
  | 'trades_articles'
  | 'trades_sts'
  | 'trades_technical'
  | 'trades_pointers'
  | 'trades_more'
  | 'history_hero'
  | 'history_intro'
  | 'history_timeline'
  | 'history_more'
  | 'about_content_columns'
  | 'about_global_service'
  | 'about_lpg_intro'
  | 'about_lpg_pointers'
  | 'about_lpg_details'
  | 'about_applications'
  | 'about_more'
  | 'about_fleet'
  | 'about_who_we_are'
  | 'about_hero'
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
  | 'home_latest_news'
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
  about_content_columns: AboutContentColumnsSectionContent;
  about_global_service: AboutGlobalServiceSectionContent;
  about_lpg_intro: AboutLpgIntroSectionContent;
  about_lpg_pointers: AboutLpgPointersSectionContent;
  about_lpg_details: AboutLpgDetailsSectionContent;
  about_applications: AboutApplicationsSectionContent;
  about_more: AboutMoreAboutUsSectionContent;
  leadership_hero: AboutHeroSectionContent;
  leadership_senior_management: LeadershipSeniorManagementSectionContent;
  leadership_board: LeadershipBoardSectionContent;
  leadership_more: AboutMoreAboutUsSectionContent;
  vmv_hero: AboutHeroSectionContent;
  vmv_vision_mission: VmvVisionMissionSectionContent;
  vmv_values: VmvValuesSectionContent;
  vmv_more: AboutMoreAboutUsSectionContent;
  trades_hero: AboutHeroSectionContent;
  trades_glance: TradesGlanceSectionContent;
  trades_intro: TradesIntroSectionContent;
  trades_video1: TradesVideo1SectionContent;
  trades_columns: TradesColumnsSectionContent;
  trades_articles: TradesArticlesSectionContent;
  trades_sts: TradesStsSectionContent;
  trades_technical: TradesTechnicalSectionContent;
  trades_pointers: TradesPointersSectionContent;
  trades_more: AboutMoreAboutUsSectionContent;
  history_hero: AboutHeroSectionContent;
  history_intro: HistoryIntroSectionContent;
  history_timeline: HistoryTimelineSectionContent;
  history_more: AboutMoreAboutUsSectionContent;
  about_fleet: AboutFleetSectionContent;
  about_who_we_are: AboutWhoWeAreSectionContent;
  about_hero: AboutHeroSectionContent;
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
  home_latest_news: HomeLatestNewsSectionContent;
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

export interface AboutHeroSectionContent {
  title: string;
  desktopImage: MediaRef;
  mobileImage: MediaRef;
}

export interface AboutWhoWeAreSectionContent {
  leftHeading: string;
  leftParagraphs: string[];
  rightHeading: string;
  rightParagraphs: string[];
}

export interface AboutFleetSectionContent {
  heading: string;
  paragraphs: string[];
  image: MediaRef;
  ctaLabel: string;
  ctaHref: string;
}

export interface AboutNavigationCard {
  id: string;
  title: string;
  href: string;
  description: string;
  image: MediaRef;
}

export interface AboutContentColumnsSectionContent {
  columns: Array<{ paragraphs: string[] }>;
}

export interface AboutGlobalServiceSectionContent {
  leftHeading: string;
  leftParagraphs: string[];
  rightHeading: string;
  rightParagraphs: string[];
}

export interface AboutLpgIntroSectionContent {
  heading: string;
  subheading: string;
}

export interface AboutLpgPointersSectionContent {
  pointers: Array<{ title: string; description: string }>;
}

export interface AboutLpgDetailsSectionContent {
  leftHeading: string;
  leftParagraphs: string[];
  rightHeading: string;
  rightParagraphs: string[];
}

export interface AboutApplicationsSectionContent {
  applications: Array<{ title: string; description: string }>;
}

export interface AboutMoreAboutUsSectionContent {
  heading: string;
  intro: string;
  cardIds: string[];
}

export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  image: MediaRef;
  paragraphs: string[];
}

export interface LeadershipSeniorManagementSectionContent {
  heading: string;
  intro: string;
  profiles: LeadershipProfile[];
}

export interface LeadershipBoardSectionContent {
  heading: string;
  intro: string;
  profiles: LeadershipProfile[];
}

export interface VmvVisionMissionSectionContent {
  visionHeading: string;
  visionParagraphs: string[];
  missionHeading: string;
  missionParagraphs: string[];
}

export interface VmvValuesSectionContent {
  heading: string;
  intro: string;
  values: Array<{
    title: string;
    items: string[];
  }>;
}

export interface TradesGlanceSectionContent {
  heading: string;
  intro: string;
  stats: Array<{
    value: string;
    suffix?: string;
    caption: string;
  }>;
  subheadings: Array<{
    heading: string;
    intro: string;
  }>;
}

export interface TradesIntroSectionContent {
  paragraphs: string[];
}

export interface TradesVideo1SectionContent {
  video: VideoMediaRef;
  caption: string;
  heading: string;
  intro: string;
  mobileVideo: VideoMediaRef;
  mobileCaption: string;
}

export interface TradesColumnsSectionContent {
  columns: string[];
}

export interface TradesArticlesSectionContent {
  articles: Array<{
    image: MediaRef;
    heading: string;
    paragraphs: string[];
    ctaLabel?: string;
    ctaHref?: string;
  }>;
}

export interface TradesStsSectionContent {
  heading: string;
  image: MediaRef;
  paragraphs: string[];
}

export interface TradesTechnicalSectionContent {
  leftHeading: string;
  leftIntro: string;
  rightParagraphs: string[];
}

export interface TradesPointersSectionContent {
  pointers: Array<{
    heading: string;
    paragraphs: string[];
    image: MediaRef;
    caption?: string;
  }>;
}


