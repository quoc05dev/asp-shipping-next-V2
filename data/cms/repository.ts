import { AboutHeroSectionContent, HistoryIntroSectionContent, HistoryTimelineItem, HistoryTimelineSectionContent, AboutNavigationCard, PageSection, SectionKey, ServiceFaq, Service, Partner, SharedLabels, SectionContentMap, SiteSettings, NavigationItem, FleetVessel, NewsArticle, VideoMediaRef, HomeHeroSectionContent, HomeAboutSectionContent, HomeStatisticsSectionContent, HomeFleetSectionContent, ChairmanMessageSectionContent, HomeLatestNewsSectionContent, HomeSustainabilitySectionContent, HomeNewsletterSectionContent, FooterSectionContent } from './types';


export interface CmsRepository {
  getPageSection<K extends SectionKey>(pageSlug: string, sectionKey: K): Promise<PageSection<K> | null>;
  getServiceFaqs(serviceSlug: string): Promise<ServiceFaq[]>;
  getServiceBySlug(slug: string): Promise<Service | null>;
  getServices(): Promise<Service[]>;
  getPartners(): Promise<Partner[]>;
  getRelatedServices(serviceSlug: string): Promise<Service[]>;
  getSharedLabels(): Promise<SharedLabels>;
  getSiteSettings(): Promise<SiteSettings>;
  getNavigation(): Promise<NavigationItem[]>;
  getFleetVessels(): Promise<FleetVessel[]>;
  getLatestNews(): Promise<NewsArticle[]>;
  getFooterSection(): Promise<FooterSectionContent>;
}


const MOCK_SHARED_LABELS: SharedLabels = {
  backToAllServices: "Back to all services",
  exploreMore: "Explore more",
  downloadPdf: "Download PDF",
  careersAtAsp: "Careers at ASP",
  learnMore: "Learn more",
  readMore: "Read More",
  viewFleet: "View Fleet",
  contactUs: "Contact Us",
  search: "Search",
  newsletterSubmit: "Subscribe"
};


const MOCK_SITE_SETTINGS: SiteSettings = {
  companyName: "Asia Pacific Shipping",
  defaultSeoTitle: "ASP Shipping",
  defaultSeoDescription: "Asia Pacific Shipping is a leading independent owner and operator of modern tankers and bulk carriers.",
  defaultOgImage: { url: "/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png", alt: "ASP Shipping" },
  phone: "+84 28 1234 5678",
  email: "info@aspshipping.vn",
  address: "Hanoi, Vietnam",
  copyrightText: "Copyright (c) 2026 ASP. All Rights Reserved.",
  socialLinks: {
    linkedin: "https://linkedin.com"
  },
  brandLogo: { url: "/wp-content/themes/restless-theme/dist/images/logo.svg", alt: "ASP Shipping" }
};

const MOCK_NAVIGATION: NavigationItem[] = [
  { id: 'nav-1', key: 'what_we_do', label: 'What We Do', href: '/what-we-do', displayOrder: 1 },
  { id: 'nav-2', key: 'about_us', label: 'About Us', href: '/about-us', displayOrder: 2 },
  { id: 'nav-3', key: 'sustainability', label: 'Sustainability', href: '/sustainability', displayOrder: 3 },
  { id: 'nav-4', key: 'media', label: 'Media', href: '/media', displayOrder: 4 },
  { id: 'nav-5', key: 'careers', label: 'Careers', href: '/careers', displayOrder: 5 },
  { id: 'nav-6', key: 'our_fleet', label: 'Our Fleet', href: '/our-fleet', displayOrder: 6 },
  { id: 'nav-7', key: 'contact_us', label: 'Contact Us', href: '/contact-us', displayOrder: 7 },
  { id: 'nav-8', key: 'en_vi', label: 'EN / VI', href: '#', displayOrder: 8 },
  { id: 'nav-9', key: 'search', label: 'Search', href: '#', displayOrder: 9 }
];

const MOCK_FLEET_VESSELS: Record<string, FleetVessel> = {
  "asp-luna": {
    id: 'fleet-1',
    slug: 'asp-luna',
    name: "ASP LUNA",
    type: "LR2 TANKER",
    dwt: "114,800 DWT",
    built: "BUILT 2026",
    trade: "ASP / WORLD TRADES",
    image: { url: "/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp", alt: "ASP LUNA" },
    displayOrder: 1
  },
  "asp-solar": {
    id: 'fleet-2',
    slug: 'asp-solar',
    name: "ASP SOLAR",
    type: "MR2 TANKER",
    dwt: "49,999 DWT",
    built: "BUILT 2026",
    trade: "ASP / WORLD TRADES",
    image: { url: "/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png", alt: "ASP SOLAR" },
    displayOrder: 2
  },
  "asp-titan": {
    id: 'fleet-3',
    slug: 'asp-titan',
    name: "ASP TITAN",
    type: "AFRAMAX TANKER",
    dwt: "115,000 DWT",
    built: "BUILT 2025",
    trade: "ASP / WORLD TRADES",
    image: { url: "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp", alt: "ASP TITAN" },
    displayOrder: 3
  }
};

const MOCK_NEWS_ARTICLES: Record<string, NewsArticle> = {
  "fleet-expansion": {
    id: '2136',
    slug: 'fleet-expansion',
    title: "ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers",
    excerpt: "ASP has taken delivery of the ASP LUNA and ASP SOLAR, strengthening our position in sustainable shipping.",
    date: "2026-05-29T07:00:59+00:00",
    category: "Press Releases",
    image: { url: "/wp-content/uploads/asp_images/news/fleet-expansion.jpg", alt: "" }
  },
  "methanol-delivery": {
    id: '2086',
    slug: 'methanol-delivery',
    title: "ASP Expands The Fleet with Two New MR2 Tankers from K Shipbuilding",
    excerpt: "ASP expands the fleet with two new MR2 Tankers.",
    date: "2025-09-09T13:30:01+00:00",
    category: "Press Releases",
    image: { url: "/wp-content/uploads/asp_images/news/methanol-delivery.jpg", alt: "" }
  },
  "vision-into-value": {
    id: '2051',
    slug: 'vision-into-value',
    title: "5 Years of Turning Vision into Value",
    excerpt: "5 Years of Turning Vision into Value.",
    date: "2025-04-16T07:18:11+00:00",
    category: "Press Releases",
    image: { url: "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp", alt: "" }
  },
  "asp-luna-joins": {
    id: '2023',
    slug: 'asp-luna-joins',
    title: "ASP Luna Joins The Fleet",
    excerpt: "ASP Luna Joins The Fleet.",
    date: "2024-10-09T02:39:25+00:00",
    category: "Articles",
    image: { url: "/wp-content/uploads/asp_images/ships/ship-home-news-1.jpg", alt: "ASP Luna" }
  },
  "asp-titan-joins": {
    id: '2004',
    slug: 'asp-titan-joins',
    title: "ASP Titan Joins The Fleet",
    excerpt: "ASP Titan Joins The Fleet.",
    date: "2024-06-19T03:37:15+00:00",
    category: "Articles",
    image: { url: "/wp-content/uploads/asp_images/ships/ship-home-news-2.jpg", alt: "ASP Titan" }
  }
};

const MOCK_FOOTER_CONTENT: FooterSectionContent = {
  newsletterTitle: "Subscribe to our Newsletter",
  newsletterDescription: "Sign up to receive alerts on press releases and updates on business activities.",
  copyrightHtml: "Copyright (c) 2026 ASP. All Rights Reserved.",
  columns: [
    {
      title: "What We Do",
      links: [
        { label: "Commercial Management", href: "/commercial-management" },
        { label: "Technical Management", href: "/technical-management" },
        { label: "Marine Consultancy", href: "/marine-consultancy" },
        { label: "Crew Management", href: "/crew-management" },
        { label: "Sea Transportation", href: "/sea-transportation" }
      ]
    },
    {
      title: "About Us",
      links: [
        { label: "Company Overview", href: "/about-us" },
        { label: "Vision, Mission & Values", href: "/about-us/vision-mission-values" },
        { label: "History", href: "/about-us/history" },
        { label: "Leadership", href: "/about-us/leadership" },
        { label: "Trades", href: "/about-us/trades" }
      ]
    },
    {
      title: "Our Fleet",
      links: [
        { label: "Overview", href: "/our-fleet" },
        { label: "Ammonia Propulsion", href: "/our-fleet/ammonia-propulsion" },
        { label: "LCO2 Shipping", href: "/our-fleet/lco2-shipping" }
      ]
    },
    {
      title: "Sustainability",
      links: [
        { label: "Overview", href: "/sustainability" },
        { label: "Environment", href: "/sustainability/environment" },
        { label: "Social", href: "/sustainability/social" },
        { label: "Governance", href: "/sustainability/governance" },
        { label: "Stakeholder Engagement", href: "/sustainability/stakeholder-engagement" },
        { label: "Policies & Guidelines", href: "/sustainability/policies-guidelines" }
      ]
    },
    {
      title: "Media",
      links: [
        { label: "Overview", href: "/media" },
        { label: "Latest News", href: "/media/latest-news" },
        { label: "Gallery", href: "/media/gallery" },
        { label: "Glossary of terms", href: "/media/glossary-of-terms" }
      ]
    }
  ]
};


const MOCK_RELATED_SERVICES: Record<string, string[]> = {
  "commercial-management": [
    "technical-management",
    "marine-consultancy",
    "crew-management"
  ],
  "technical-management": [
    "commercial-management",
    "marine-consultancy",
    "crew-management"
  ],
  "marine-consultancy": [
    "commercial-management",
    "technical-management",
    "crew-management"
  ],
  "crew-management": [
    "commercial-management",
    "technical-management",
    "marine-consultancy"
  ],
  "sea-transportation": [
    "commercial-management",
    "technical-management",
    "marine-consultancy"
  ]
};

const MOCK_SERVICES: Record<string, Service> = {
  'commercial-management': {
    "id": "commercial-management",
    "slug": "commercial-management",
    "name": "Commercial Management",
    "excerpt": "Employment strategy across time charter, spot voyage and pool partnerships, matching every vessel to the trade where it can perform best. By leveraging our deep market insights and robust operational framework, we ensure that every commercial arrangement maximizes fleet value. We work intimately with owners to secure optimal chartering terms, manage post-fixture operations diligently, and continuously optimize voyage earnings in a volatile global market.",
    "heroImage": {
      "url": "/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp",
      "alt": "Commercial Management"
    },
    "displayOrder": 1
  },
  'technical-management': {
    "id": "technical-management",
    "slug": "technical-management",
    "name": "Technical Management",
    "excerpt": "Planned maintenance, dry-docking, performance, safety and regulatory oversight delivered through a disciplined, TMSA-aligned management system. Our proactive inspection regimes and continual performance monitoring ensure every ship operates safely, efficiently, and in full regulatory compliance. Through rigorous defect reporting, spare parts procurement, and expert superintendent oversight, we protect asset value and minimize off-hire time, maintaining the highest standard of vessel readiness.",
    "heroImage": {
      "url": "/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp",
      "alt": "Technical Management"
    },
    "displayOrder": 2
  },
  'marine-consultancy': {
    "id": "marine-consultancy",
    "slug": "marine-consultancy",
    "name": "Marine Consultancy",
    "excerpt": "Practical maritime advice for commercial planning, technical projects, compliance and fleet development, grounded in operating experience. We offer specialist advisory across the vessel lifecycle, from newbuilding supervision and S&P due diligence to ESG and decarbonisation strategy. Our technical experts provide customized, actionable insights that help shipping stakeholders navigate complex regulatory shifts, adopt future-proof technologies, and confidently make high-stakes commercial decisions.",
    "heroImage": {
      "url": "/wp-content/uploads/asp_images/about/history-03-first-tanker.png",
      "alt": "Marine Consultancy"
    },
    "displayOrder": 3
  },
  'crew-management': {
    "id": "crew-management",
    "slug": "crew-management",
    "name": "Crew Management",
    "excerpt": "Recruitment, deployment, training and welfare for qualified seafarers, supporting safe operations and reliable performance on every voyage. We manage the complete seafarer journey with the discipline and care that maritime safety demands, ensuring retention and continued skill development. By maintaining a robust talent pool and emphasizing continuous onboard training, we supply vessels with highly competent and motivated crews capable of handling complex operations.",
    "heroImage": {
      "url": "/wp-content/uploads/asp_images/ships/asp-maple.jpg",
      "alt": "Crew Management"
    },
    "displayOrder": 4
  },
  'sea-transportation': {
    "id": "sea-transportation",
    "slug": "sea-transportation",
    "name": "Sea Transportation",
    "excerpt": "Flexible sea transportation across clean and dirty petroleum products, LPG and chemical cargoes, delivered with disciplined planning and cargo care. Our robust safety management and route optimisation connect producers to buyers reliably across global trade corridors. We operate a versatile fleet designed for maximum cargo flexibility, ensuring safe, on-time delivery while adhering strictly to the highest international environmental and industry standards.",
    "heroImage": {
      "url": "/wp-content/uploads/asp_images/ships/asp-titan-aerial-aft.webp",
      "alt": "Sea Transportation"
    },
    "displayOrder": 5
  }
};

const MOCK_PARTNERS: Partner[] = [
  {
    "id": "partner-1",
    "name": "Partner 1",
    "logo": {
      "url": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\"><text x=\"100\" y=\"45\" font-family=\"sans-serif\" font-weight=\"600\" font-size=\"16\" fill=\"%23a0a0a0\" text-anchor=\"middle\">PARTNER 1</text></svg>",
      "alt": "Partner 1"
    },
    "displayOrder": 1
  },
  {
    "id": "partner-2",
    "name": "Partner 2",
    "logo": {
      "url": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\"><text x=\"100\" y=\"45\" font-family=\"sans-serif\" font-weight=\"600\" font-size=\"16\" fill=\"%23a0a0a0\" text-anchor=\"middle\">PARTNER 2</text></svg>",
      "alt": "Partner 2"
    },
    "displayOrder": 2
  },
  {
    "id": "partner-3",
    "name": "Partner 3",
    "logo": {
      "url": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\"><text x=\"100\" y=\"45\" font-family=\"sans-serif\" font-weight=\"600\" font-size=\"16\" fill=\"%23a0a0a0\" text-anchor=\"middle\">PARTNER 3</text></svg>",
      "alt": "Partner 3"
    },
    "displayOrder": 3
  },
  {
    "id": "partner-4",
    "name": "Partner 4",
    "logo": {
      "url": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\"><text x=\"100\" y=\"45\" font-family=\"sans-serif\" font-weight=\"600\" font-size=\"16\" fill=\"%23a0a0a0\" text-anchor=\"middle\">PARTNER 4</text></svg>",
      "alt": "Partner 4"
    },
    "displayOrder": 4
  },
  {
    "id": "partner-5",
    "name": "Partner 5",
    "logo": {
      "url": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\"><text x=\"100\" y=\"45\" font-family=\"sans-serif\" font-weight=\"600\" font-size=\"16\" fill=\"%23a0a0a0\" text-anchor=\"middle\">PARTNER 5</text></svg>",
      "alt": "Partner 5"
    },
    "displayOrder": 5
  },
  {
    "id": "partner-6",
    "name": "Partner 6",
    "logo": {
      "url": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\"><text x=\"100\" y=\"45\" font-family=\"sans-serif\" font-weight=\"600\" font-size=\"16\" fill=\"%23a0a0a0\" text-anchor=\"middle\">PARTNER 6</text></svg>",
      "alt": "Partner 6"
    },
    "displayOrder": 6
  },
  {
    "id": "partner-7",
    "name": "Partner 7",
    "logo": {
      "url": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\"><text x=\"100\" y=\"45\" font-family=\"sans-serif\" font-weight=\"600\" font-size=\"16\" fill=\"%23a0a0a0\" text-anchor=\"middle\">PARTNER 7</text></svg>",
      "alt": "Partner 7"
    },
    "displayOrder": 7
  },
  {
    "id": "partner-8",
    "name": "Partner 8",
    "logo": {
      "url": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\"><text x=\"100\" y=\"45\" font-family=\"sans-serif\" font-weight=\"600\" font-size=\"16\" fill=\"%23a0a0a0\" text-anchor=\"middle\">PARTNER 8</text></svg>",
      "alt": "Partner 8"
    },
    "displayOrder": 8
  }
];

const MOCK_PAGE_SECTIONS: Record<string, Record<string, any>> = {
  "about-us/trades": {
    "trades_hero": {
      id: "trades-hero",
      pageSlug: "about-us/trades",
      sectionKey: "trades_hero",
      content: {
        title: "Trades",
        desktopImage: { url: "/wp-content/uploads/asp_images/about/history-03-first-tanker.jpg", alt: "Asia Pacific Shipping LPG Carrier" },
        mobileImage: { url: "/wp-content/uploads/asp_images/ships/asp-titan-sunset.jpg", alt: "Asia Pacific Shipping LPG Carrier" }
      }
    },
    "trades_glance": {
      id: "trades-glance",
      pageSlug: "about-us/trades",
      sectionKey: "trades_glance",
      content: {
        heading: "BW Kosan at a Glance",
        intro: "Asia Pacific Shipping operates a fleet of 50 vessels ranging in size from 6,400 to 12,000 cubic meters in the pressurised, semi-refrigerated and ethylene-capable shipping sectors.",
        stats: [
          { value: "50", caption: "Vessels in the fleet" },
          { value: "6,400 ' 12,000", suffix: "CBM", caption: "Capacity of vessels" }
        ],
        subheadings: [
          { heading: "Our Vessels", intro: "Pressurised, semi-refrigerated, ethylene and ammonia-capable ships" },
          { heading: "Our Team", intro: "In-house operational, technical and crewing teams" }
        ]
      }
    },
    "trades_intro": {
      id: "trades-intro",
      pageSlug: "about-us/trades",
      sectionKey: "trades_intro",
      content: {
        paragraphs: [
          "We aim to deliver to our customers' the best solution for their transportation needs, along with exceptional service and operational standards. Our organisation has significant commercial and technical capability to meet our customers' requirements worldwide. The company is headquartered in Singapore with Copenhagen covering our regional activities in the West, alongside teams in Manila and Tokyo.",
          "We have the scale and operational strength for future success. We are working to grow our average vessel size, to maintain an attractive vessel average age, so that we can provide safe transportation in a lower carbon world. We believe that LPG will continue to serve as a cleaner form of energy than many alternatives ' especially in the residential sector, where it is a growing source of fuel in developing economies. Alongside LPG, we are optimistic for growth opportunities in adjacent sectors such as ammonia and carbon dioxide (CO2) shipping."
        ]
      }
    },
    "trades_video1": {
      id: "trades-video1",
      pageSlug: "about-us/trades",
      sectionKey: "trades_video1",
      content: {
        video: { url: "https://youtu.be/qh7VCsj-y84", poster: { url: "/wp-content/uploads/asp_images/partners/logo-client-western-bulk.png", alt: "" } },
        caption: "Watch our corporate video.",
        heading: "A Shipping Partner of Choice",
        intro: "At Asia Pacific Shipping, we are experienced in high-intensity short-sea or coastal trades, as well as in long-haul transportation.",
        mobileVideo: { url: "https://youtu.be/qh7VCsj-y84", poster: { url: "/wp-content/uploads/asp_images/news/fleet-expansion.jpg", alt: "" } },
        mobileCaption: "Watch our corporate video."
      }
    },
    "trades_columns": {
      id: "trades-columns",
      pageSlug: "about-us/trades",
      sectionKey: "trades_columns",
      content: {
        columns: [
          "We are facilitating the global supply chain for cleaner energy ' actively managing response to sustainability, decarbonisation and future fuels.",
          "With a strong balance sheet of close to USD 830 million and low leverage, we are a financially responsible business partner that is investing in our growth for the long term."
        ]
      }
    },
    "trades_articles": {
      id: "trades-articles",
      pageSlug: "about-us/trades",
      sectionKey: "trades_articles",
      content: {
        articles: [
          {
            image: { url: "/wp-content/uploads/asp_images/partners/logo-client-maersk-tankers.png", alt: "" },
            heading: "Our Fleet",
            paragraphs: [
              "We continue to optimise performance from our fleet both in economic and environmental terms, whilst working with partners on projects in areas such as ammonia and CO2 shipping. The fine-tuning of our fleet with asset transactions highlights our ability to evolve our fleet positively and deliver profitable growth."
            ],
            ctaLabel: "See our fleet list",
            ctaHref: "/our-fleet"
          },
          {
            image: { url: "/wp-content/uploads/asp_images/news/fleet-expansion.jpg", alt: "" },
            heading: "Geographical and Commodity Diversity",
            paragraphs: [
              "Our business is globally diversified with vessels operating in Asia, Europe/Middle East/Africa, and Central/Southern Americas. On average, each year, we perform about three loading operations every day across our fleet, loading over four million tonnes, and engage in about 2,500 cargo operations in 247 different ports. Our cargo mix is split about 59% /41% between LPG and petrochemicals such as ethylene, propylene, butadiene and VCM, and one vessel in the growing ammonia trade.",
              "This diversity in geography and commodity provides options for our fleet and relative earnings stability. Ship-to-ship (or STS) operations are an important part of our business is an integral part of the global LPG supply chain. We continue to perform STS operations for delivery of LPG over the 'last mile' into developing economies, with an average of about 175 STS operations annually."
            ],
            ctaLabel: "Read about our presence on the Amazon River",
            ctaHref: "/media/news/2024/03/04/navigating-the-amazon"
          },
          {
            image: { url: "/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp", alt: "" },
            heading: "Safety as our Priority",
            paragraphs: [
              "With a workforce of more than 1,800 people, our prime responsibility is to provide a safe operating environment. Zero Harm drives our safety culture and commitment to operating without accidents and achieving our environmental goals. We believe in zero harm to people, the environment, cargo and assets. To realise our vision, we commit to prioritising safety towards our employees, the environment, our assets and cargo."
            ],
            ctaLabel: "See our approach to safety",
            ctaHref: "/sustainability/social"
          }
        ]
      }
    },
    "trades_sts": {
      id: "trades-sts",
      pageSlug: "about-us/trades",
      sectionKey: "trades_sts",
      content: {
        heading: "Ship to Ship Transfer (STS)",
        image: { url: "/wp-content/uploads/asp_images/partners/logo-client-javelin.png", alt: "" },
        paragraphs: [
          "During an STS operation, one vessel, typically the larger vessel, will keep its course, while the other vessel approaches slowly by course alternation. When they are close enough, and mooring lines tightened, STS operation begins.",
          "STS operations allow for the delivery of cargo from larger vessels to ports which are unable to accomodate larger-sized vessels due to available infrastructure, storage capacity or swallow water depths."
        ]
      }
    },
    "trades_technical": {
      id: "trades-technical",
      pageSlug: "about-us/trades",
      sectionKey: "trades_technical",
      content: {
        leftHeading: "Technical Expertise for Flawless Operations and R&D Projects",
        leftIntro: "Our deep operational and technical experience enables us to support our customers' with the safe, reliable and sustainability shipping of liquified petroleum gas (LPG), petrochemicals and other speciality gases.",
        rightParagraphs: [
          "We also work alongside industry partners to not only reduce emissions, but to also explore projects that support wider decarbonisation such as shipping related to carbon capture and storage."
        ]
      }
    },
    "trades_pointers": {
      id: "trades-pointers",
      pageSlug: "about-us/trades",
      sectionKey: "trades_pointers",
      content: {
        pointers: [
          {
            heading: "LCO2 shipping for Carbon Capture and Storage",
            paragraphs: [
              "We can facilitate the shipment of CO2 as part of the Carbon Capture and Storage (CCS) process. CCS is an established technology and capture hubs are being developed. CO2 storage sites are often far away from producers. With a need to move an estimated 90 million tons of CO2 annually to storage sites by 2040, linking CO2 producers with storage facilities will be increasingly important. While the majority of CO2 will be transported by pipelines, this may not be possible or suitable for all locations and distances. This is where shipping can play a complementary role. Read more about our offering <a href='/media/news/2024/03/04/shipping-for-carbon-capture-and-storage'>here</a>."
            ],
            image: { url: "/wp-content/uploads/asp_images/about/history-02-first-ship.jpg", alt: "" }
          },
          {
            heading: "Powered by Ammonia",
            paragraphs: [
              "Ammonia has been identified as one of the leading potential zero emission fuels as it can be produced from renewable electricity and is already produced in large quantities in the Nordic countries. However, ammonia-powered vessels present several challenges from the technical, safety, fuel supply and commercial viability fronts ' all of which must be overcome before the promise of ships running safely on green ammonia can become a reality. The Nordic Green Ammonia Powered Ships (NoGAPS) project aims to pave the way for ammonia-powered vessels first in the Nordic region, and globally. Read more about our participation in NoGAPS <a href='/media/news/2024/03/04/towards-zero-carbon-shipping-with-ammonia'>here</a>."
            ],
            image: { url: "/wp-content/uploads/asp_images/partners/logo-client-totalenergies.png", alt: "" },
            caption: "Copyright: Breeze Ship Design / M'rsk Mc-Kinney M'ller Center for Zero Carbon Shipping"
          }
        ]
      }
    },
    "trades_more": {
      id: "trades-more",
      pageSlug: "about-us/trades",
      sectionKey: "trades_more",
      content: {
        heading: "More About Us",
        intro: "Learn more about Asia Pacific Shipping.",
        cardIds: ["nav-about-us", "nav-history", "nav-leadership", "nav-vmv"]
      }
    }
  },

  "about-us/vision-mission-values": {
    "vmv_hero": {
      id: "vmv-hero",
      pageSlug: "about-us/vision-mission-values",
      sectionKey: "vmv_hero",
      content: {
        title: "Vision, Mission, Values",
        desktopImage: { url: "/wp-content/uploads/asp_images/sustainability/governance-oversight.webp", alt: "Asia Pacific Shipping crew" },
        mobileImage: { url: "/wp-content/uploads/asp_images/partners/logo-client-javelin.png", alt: "Asia Pacific Shipping crew" }
      }
    },
    "vmv_vision_mission": {
      id: "vmv-vision-mission",
      pageSlug: "about-us/vision-mission-values",
      sectionKey: "vmv_vision_mission",
      content: {
        visionHeading: "Vision",
        visionParagraphs: [
          "We aspire to be our <strong>customers' partner of choice</strong> for transportation of <strong>Liquefied Petroleum Gas (LPG), Petrochemicals &amp; Speciality Gases</strong> in a lower carbon world, recognised for our <strong>leading service &amp; operational standards.</strong>"
        ],
        missionHeading: "Mission",
        missionParagraphs: [
          "We work <strong>to improve our service continuously</strong> with <strong>safe high quality</strong> Gas Carriers at a competitive price, <strong>investing in our people, with focus on efficiency and long-term sustainability.</strong>"
        ]
      }
    },
    "vmv_values": {
      id: "vmv-values",
      pageSlug: "about-us/vision-mission-values",
      sectionKey: "vmv_values",
      content: {
        heading: "Company Values",
        intro: "Our CARE values are fully integrated with our culture and guide the way we work together.",
        values: [
          {
            title: "Collaborative",
            items: [
              "We engage our customers' to find solutions together",
              "We interact positively and constructively with our colleagues",
              "We are open and authentic in everything we do"
            ]
          },
          {
            title: "Ambitious",
            items: [
              "We recognise that to be our customers' first choice we must be responsive and excel in what we do",
              "We strive for operational excellence, challenging our own performance and goals, as individuals and as teams, seeking to continuously simplify and improve",
              "We give and we value honest and respectful feedback"
            ]
          },
          {
            title: "Reliable",
            items: [
              "We deliver on our promises to customers' and colleagues",
              "We recognise that accountability and reliability are essential for success",
              "We act with integrity and uphold high ethical standards, target zero harm, care for our people with a focus on health, safety and security"
            ]
          },
          {
            title: "Enduring",
            items: [
              "We serve our customers' with a long-term perspective",
              "We apply ourselves with a commitment to sustainability and to make a positive impact",
              "We are attuned to the changes around us, and adapt to stay relevant"
            ]
          }
        ]
      }
    },
    "vmv_more": {
      id: "vmv-more",
      pageSlug: "about-us/vision-mission-values",
      sectionKey: "vmv_more",
      content: {
        heading: "More About Us",
        intro: "Learn more about Asia Pacific Shipping.",
        cardIds: ["nav-about-us", "nav-history", "nav-leadership", "nav-trades"]
      }
    }
  },

  "about-us/leadership": {
    "leadership_hero": {
      id: "leadership-hero",
      pageSlug: "about-us/leadership",
      sectionKey: "leadership_hero",
      content: {
        title: "Leadership",
        desktopImage: { url: "/wp-content/uploads/asp_images/news/methanol-delivery.jpg", alt: "Asia Pacific Shipping's LPG carrier" },
        mobileImage: { url: "/wp-content/uploads/asp_images/ships/asp-jewels.webp", alt: "Asia Pacific Shipping's LPG carrier" }
      }
    },
    "leadership_senior_management": {
      id: "leadership-senior-management",
      pageSlug: "about-us/leadership",
      sectionKey: "leadership_senior_management",
      content: {
        heading: "Senior Management",
        intro: "The Asia Pacific Shipping Senior Management Team includes some of the industry's most experienced, effective and diverse leaders.",
        profiles: [
          {
            id: "jakob-bode",
            name: "Jakob Bode",
            role: "Chief Executive Officer",
            image: { url: "/wp-content/uploads/asp_images/ships/asp-maple.jpg", alt: "" },
            paragraphs: [
              "Jakob began his shipping career with AP Moller Maersk in 1997, and held positions at Maersk Tankers in USA, Saudia Arabia and Singapore. He subsequently worked with the Eitzen Group as Managing Director of Eitzen Solvang Ethylene. He joined Lauritzen Kosan in 2010 and was appointed Managing Director of J. Lauritzen Singapore in 2016. He assumed the role of Head of Chartering, East of Suez, at Asia Pacific Shipping in 2021, and was appointed Chief Commercial Officer in March 2024.",
              "He was appointed Chief Executive Office on 1st June 2025, and he is currently a Director of Dan Swift Singapore Pte Ltd. Jakob has completed various executive courses from IESE and INSEAD."
            ]
          },
          {
            id: "uta-urbaniak-sage",
            name: "Uta Urbaniak-Sage",
            role: "Chief Financial Officer",
            image: { url: "/wp-content/uploads/asp_images/ships/maple-cedar.jpg", alt: "" },
            paragraphs: [
              "Uta joined Asia Pacific Shipping (formerly Epic Gas) in 2007 as Managing Director of the Singapore operation and became group CFO in 2012 where she has been closely involved in numerous debt/equity raising and M&A transactions. Before joining Asia Pacific Shipping, Uta worked for HSH Nordbank in Hamburg and Hong Kong in various management positions in the bank's shipping division. Uta is currently a Director of Skuld Mutual P&I Association (Bermuda) Ltd."
            ]
          },
          {
            id: "niraj-singh",
            name: "Niraj Singh",
            role: "Technical Director",
            image: { url: "/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg", alt: "" },
            paragraphs: [
              "Niraj has over 30 years of marine industry experience. He began his career with P&O Bulk in 1989. After spending 6 years as a Chief Engineer with varied experience on Bulk Carriers, Tankers & Oil & Chemical, he joined Gemarfin (Gestioni Maritima Finanziare) as a Technical Superintendent in 2000 at Lugano, Switzerland. In 2003, Niraj joined Epic Gas as Ship Manager, and since 2013 as a Fleet Manager. He took up the role of Technical Director in 2016, and is responsible for our global technical management including Ship Management, SHEQ, Crewing, and Newbuilding."
            ]
          },
          {
            id: "fevian-leong",
            name: "Fevian Leong",
            role: "Human Resources Director",
            image: { url: "/wp-content/uploads/asp_images/ships/asp-rainbow.jpg", alt: "" },
            paragraphs: [
              "Fevian joined Asia Pacific Shipping in August 2022 as Human Resources Director. She has over 20 years of human resources management and development experience, spanning across healthcare, hospitality, maritime, IT and gas industries. Fevian has extensive experience in handling merger and acquisition, and leading organisational change across global corporations. Prior to joining Asia Pacific Shipping, she was the Head of HR, ASEAN at Linde Gas Asia and ASEAN HR Director at Signify (formerly known as Philips Lighting)."
            ]
          },
          {
            id: "christian-fjeldborg",
            name: "Christian Fjeldborg Grønlund",
            role: "Commercial Director",
            image: { url: "/wp-content/uploads/asp_images/ships/maple-cedar.jpg", alt: "" },
            paragraphs: [
              "Christian brings over 20 years of expertise in the shipping industry. His career began in 2005 with J. Lauritzen, where he held key commercial positions across Hong Kong, Singapore, and Copenhagen. Since 2021, he has led ASP's commercial activities in Copenhagen as Head of Chartering, West of Suez. In June 2025, Christian was appointed Commercial Director, overseeing our world-wide commercial activities. Christian has completed management courses with Copenhagen Business School and Leadership Development Program by BW Group."
            ]
          }
        ]
      }
    },
    "leadership_board": {
      id: "leadership-board",
      pageSlug: "about-us/leadership",
      sectionKey: "leadership_board",
      content: {
        heading: "Board of Directors",
        intro: "The Asia Pacific Shipping Board brings a lifetime of entrepreneurship, business experience and industry knowledge to the table.",
        profiles: [
          {
            id: "andreas-sohmen-pao",
            name: "Andreas Sohmen-Pao",
            role: "Chairman",
            image: { url: "/wp-content/uploads/asp_images/partners/logo-client-swissmarine.png", alt: "" },
            paragraphs: [
              "Andreas Sohmen-Pao is Chairman of BW Group and listed affiliates BW Offshore, BW LPG, Hafnia, BW Energy and Cadeler. He is also Chairman of Sembcorp Industries and the Global Centre for Maritime Decarbonisation, and a trustee of the Lloyd's Register Foundation.",
              "Mr Sohmen-Pao was previously Chairman of the Singapore Maritime Foundation and has served as a non-executive director of The Hongkong and Shanghai Banking Corporation Ltd, London P&I Club, Navigator Holdings, Singapore Symphonia Company, National Parks Board Singapore, Sport Singapore and the Maritime and Port Authority of Singapore amongst others.",
              "Mr Sohmen-Pao graduated from Oxford University in England with an honours degree in Oriental Studies and has an MBA from Harvard Business School."
            ]
          },
          {
            id: "nicholas-lykiardopulo",
            name: "Nicholas Lykiardopulo",
            role: "Board Member",
            image: { url: "/wp-content/uploads/asp_images/about/earth-day.jpg", alt: "" },
            paragraphs: [
              "Nicholas joined the Board in 2017, and brings many years of experience in shipping, commodities and finance. Within his family shipping business, Neda Maritime, he was involved in purchases, disposals and financing of numerous shipping assets, he has also advised on investments in private equity and financial products, both on behalf of Neda as well as in his role as Director of The UK Mutual Steamship Association of Bermuda. Nicholas is on the Board of Diorasis International SA, an alternative Investment Advisory firm based in Luxembourg. He holds an MA from Oxford University and is a Fellow of the Institute of Chartered Shipbrokers."
            ]
          },
          {
            id: "esben-poulsson",
            name: "Esben Poulsson",
            role: "Board Member",
            image: { url: "/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png", alt: "" },
            paragraphs: [
              "Esben has worked in the maritime industry for over 50 years, holding a variety of senior management positions in Hong Kong, London, Copenhagen and Singapore. He is Non-Executive Chairman of Cambiaso Risso Asia Pte. Ltd. and of KST Group (formerly Keppel Smit Towage Pte Ltd.). He is Non-Executive Director of Finnlines PLc, Helsinki, Singapore, and of Abu Dhabi Ports Group (Maritime & Shipping Cluster). He also serves as Senior Advisor to the Chairman of X-Press Feeders Ltd. He served an 8-year term on the Board of the Maritime & Port Authority of Singapore (MPA) stepping down in January 2024. He is immediate past President of the Singapore Shipping Association (2019) and immediate past Chairman of the International Chamber of Shipping (2022)."
            ]
          },
          {
            id: "tommy-thomsen",
            name: "Tommy Thomsen",
            role: "Board Member",
            image: { url: "/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg", alt: "" },
            paragraphs: [
              "Tommy brings over 35 years of experience in shipping, logistics, finance and international business. He is currently CEO of the Lauritzen Foundation and it's holding company Lauritzen Fonden Holding. He also serves as Chairman of J. Lauritzen and Vice Chairman of Lauritzen Bulkers. Tommy was previously the CEO of Denmark's Investment Fund for Developing Countries and before that CEO of Nordic Tankers and prior partner in Clipper Group. He has also had a long career in A.P. Moller-Maersk, latest as member of the executive board with responsibility of APM Terminals and other activities. He was also the CEO of Maersk Inc. based in USA. Further he earlier held the responsibility of Maersk Tankers. Tommy is Chairman of The Danish Maritime Fund and serves as non-executive director of PSA International and also serves on the Panama Canal advisory board. He also holds several other board memberships within the Lauritzen Group of companies."
            ]
          },
          {
            id: "kristian-verner",
            name: "Kristian Verner Mørch",
            role: "Board Member",
            image: { url: "/wp-content/uploads/asp_images/partners/logo-client-anglo-eastern.png", alt: "" },
            paragraphs: [
              "Kristian has more than 30 years' experience in the shipping industry, working across both Europe and Asia. He currently serves as CEO of J.Lauritzen. He was CEO of Odfjell SE until May 2022. Prior to that, he was partner and CEO of Clipper Group, and before that had a career at A.P.Moller-Maersk — most significantly as COO of Maersk Tankers. He has served on the boards of Odfjell SE, Nordic Shipholding, Danish Ferries and Brostrøm. Kristian holds an MBA from IMD Switzerland, and has attended the Advanced Management Programme at Harvard Business School."
            ]
          },
          {
            id: "billy-chiu",
            name: "Billy Chiu",
            role: "Board Member",
            image: { url: "/wp-content/uploads/asp_images/partners/logo-client-adnoc.png", alt: "" },
            paragraphs: [
              "Billy is Executive Vice President of BW Group and has been with BW since 1985 with over 30 years of experience in the shipping industry. His current role as EVP oversees the Dry Cargo business, Group Crewing Services, Quality and Compliance department, SOX Compliance, Internal Audit, and Asset Management teams. Billy was appointed as Director of Commercial and Operations in 2003 and later as SVP of Commercial (Tankers). From 2002 to 2003, he was COO responsible for operations, manning, fleet systems and purchasing. He also oversaw the Corporate Affairs and Compliance division of the company from 2011 to 2016. From 1995 to 2002, Billy held senior positions within World-Wide. Billy graduated from the University of Hong Kong with a Bachelor of Social Science degree, majoring in management studies and economics. Currently, he is also a Director at the International Tanker Owners Pollution Federation (ITOPF) and the UK P&I Club."
            ]
          }
        ]
      }
    },
    "leadership_more": {
      id: "leadership-more",
      pageSlug: "about-us/leadership",
      sectionKey: "leadership_more",
      content: {
        heading: "More About Us",
        intro: "Learn more about Asia Pacific Shipping.",
        cardIds: ["nav-about-us", "nav-history", "nav-vmv", "nav-trades"]
      }
    }
  },

  "about-us/history": {
    "history_hero": {
      id: "history-hero",
      pageSlug: "about-us/history",
      sectionKey: "history_hero",
      content: {
        title: "History",
        desktopImage: { url: "/wp-content/uploads/asp_images/about/history-03-first-tanker.png", alt: "Asia Pacific Shipping's LPG carrier, Helena Kosan" },
        mobileImage: { url: "/wp-content/uploads/asp_images/about/history-02-first-ship.jpg", alt: "Asia Pacific Shipping's LPG carrier, Helena Kosan" }
      }
    },
    "history_intro": {
      id: "history-intro",
      pageSlug: "about-us/history",
      sectionKey: "history_intro",
      content: {
        heading: "Established in 2005",
        paragraphs: [
          "Since 2005, Asia Pacific Shipping has been dedicated to the safe and reliable transportation of liquefied petroleum gas (LPG), petrochemicals and other speciality gases to the global market.",
          "We offer customers' the best solution for their transportation needs with our leading service and high operational standards."
        ]
      }
    },
    "history_timeline": {
      id: "history-timeline",
      pageSlug: "about-us/history",
      sectionKey: "history_timeline",
      content: {
        itemIds: ["item1", "item2", "item3", "item4", "item5", "item6"]
      }
    },
    "history_more": {
      id: "history-more",
      pageSlug: "about-us/history",
      sectionKey: "history_more",
      content: {
        heading: "More About Us",
        intro: "Learn more about Asia Pacific Shipping.",
        cardIds: ["overview", "leadership", "vmv", "trades"]
      }
    }
  },
  "about-us": {
    "about_content_columns": {
      id: "about-us-content-columns",
      pageSlug: "about-us",
      sectionKey: "about_content_columns",
      content: {
        columns: [
          { paragraphs: ["We have progressively focused on the larger pressure vessels, especially those over 7,000cbm, as with many shipping sectors there is an ongoing up-sizing in the tonnage demanded by our customers', assisting to capture the economies of scale in improved value freight for our customer."] },
          { paragraphs: ["The underlying global seaborne LPG market is positive with an annual growth rate that currently stands at 5 ' 6%. Additionally, our ships are designed to also carry a range of petrochemical products which provides us diversified earnings as we can switch between LPG and petrochemical markets. This also offers us an opportunity to have a global reach across key trading regions and strengthen relationships with highly diversified blue-chip customers'."] },
          { paragraphs: ["With strong revenue momentum, a robust financial profile and supportive ownership, we remain an attractive counterparty for industry stakeholders. We can position our ships in growing and active markets on a global scale and develop a mix of time-charters, voyage-charters and Contracts of Affreightment (COAs)."] },
          { paragraphs: ["Our seafarers and teams ashore are 100% focused on delivering a full array of high-quality real-time services to existing customers' and developing new customers', niche markets and trade lanes."] }
        ]
      }
    },
    "about_global_service": {
      id: "about-us-global-service",
      pageSlug: "about-us",
      sectionKey: "about_global_service",
      content: {
        leftHeading: "Serving Our Customers on a Global Basis",
        leftParagraphs: ["With our headquarters in Singapore, and offices in Copenhagen, Manila and Tokyo, we have the scale and operational resources to serve our customers' on a truly global basis. Our clients include many of the world's leading energy majors and commodity trading houses for whom we work throughout Southeast Asia, Europe, West Africa and the Americas."],
        rightHeading: "Long Term Relationships and the Best Solutions",
        rightParagraphs: ["Our experienced team of seafarers and staff ashore are customer service focused. We value long term relationships with our clients for whom we deliver the best solutions, as promised, meeting deadlines and honouring our agreements. From spot voyages and time charters to Contracts of Affreightment (CoA), we deliver flexible solutions and high-quality service. We strive for excellence and operate to the highest standards of safety, health and environmental care."]
      }
    },
    "about_lpg_intro": {
      id: "about-us-lpg-intro",
      pageSlug: "about-us",
      sectionKey: "about_lpg_intro",
      content: {
        heading: "Liquefied Petroleum Gas (LPG) is a versatile energy source that is used in many applications",
        subheading: "Shipping cleaner-burning LPG to world markets"
      }
    },
    "about_lpg_pointers": {
      id: "about-us-lpg-pointers",
      pageSlug: "about-us",
      sectionKey: "about_lpg_pointers",
      content: {
        pointers: [
          { title: "Delivering to Often Hard To Reach Places", description: "Our operations touch everyday life. As the world's leader in the pressurised LPG shipping, we play a crucial role in the last-mile transportation of energy and petrochemicals, particularly to communities in developing nations." },
          { title: "Powering Communities Worldwide", description: "While large vessels are used to transport LPG and petrochemicals on long-haul routes, smaller vessels like ours distribute these commodities over shorter distances, often navigating into smaller ports and terminals that larger ships cannot access. These shipments serve local communities by supplying energy for residential use, powering industries and providing essential feedstock for manufacturing." },
          { title: "Committed to Operational Excellence", description: "We are committed to delivering safe, reliable and efficient shipping services. Through our modern fleet and experienced crew, we aim to support global supply chains while upholding the highest standards of safety and environmental responsibility." }
        ]
      }
    },
    "about_lpg_details": {
      id: "about-us-lpg-details",
      pageSlug: "about-us",
      sectionKey: "about_lpg_details",
      content: {
        leftHeading: "What is LPG?",
        leftParagraphs: ["Liquefied Petroleum Gas (LPG) is a versatile energy source that is used in many applications, from heating and cooking to transport and industrial processes. When used as a fuel, LPG burns cleanly with no soot and very low sulphur emissions.", "LPG is a mixture of propane and butane. It is a co-product of natural gas and oil extraction and oil refining. The majority of LPG is derived from natural gas extraction.", "LPG is a gas at room temperature and normal atmospheric pressure. However, it can be liquefied by applying moderate pressure or by cooling. This makes it easy to store and transport in cylinders or bulk tanks."],
        rightHeading: "The LPG Market",
        rightParagraphs: ["The global LPG market is growing, driven by increasing demand from the residential and commercial sectors, particularly in developing countries where it is used as a cleaner alternative to traditional cooking fuels like wood and coal. The petrochemical industry is also a significant consumer of LPG, using it as a feedstock for the production of plastics and other materials.", "Seaborne trade plays a vital role in the global LPG market, connecting producing regions like the Middle East and the US with consuming regions like Asia and Europe. The pressurised LPG shipping sector, in which Asia Pacific Shipping operates, is a specialized segment of this market, focused on regional distribution and last-mile delivery."]
      }
    },
    "about_applications": {
      id: "about-us-applications",
      pageSlug: "about-us",
      sectionKey: "about_applications",
      content: {
        applications: [
          { title: "Residential / Commercial", description: "Cooking (kitchen and barbecues), heating and lighting" },
          { title: "Chemicals and Refinery", description: "Petrochemicals feedstock" },
          { title: "Industry", description: "Furnaces, fuel for power generators" },
          { title: "Transport", description: "Low-emission alternative to gasoline and diesel for taxis, buses and private cars" },
          { title: "Agriculture", description: "Crop harvesting and drying, heating and power for farm equipment" }
        ]
      }
    },
    "about_more": {
      id: "about-us-more",
      pageSlug: "about-us",
      sectionKey: "about_more",
      content: {
        heading: "More About Us",
        intro: "Learn more about Asia Pacific Shipping",
        cardIds: ["history", "leadership", "vmv", "trades"]
      }
    },

    "about_fleet": {
      id: "about-us-fleet",
      pageSlug: "about-us",
      sectionKey: "about_fleet",
      content: {
        heading: "The Asia Pacific Shipping Fleet of LPG and Petrochemical Carriers",
        paragraphs: ["Our fleet is modern and our vessels have cargo carrying capacity that cover a wide spectrum ' from 6,400cbm to 12,000cbm. Asia Pacific Shipping has the scale to provide our customers' flexibility with a varied sized and high-quality fleet that is globally accepted."],
        image: { url: "/wp-content/uploads/asp_images/partners/logo-client-swissmarine.png", alt: "Asia Pacific Shipping Ship and Staff" },
        ctaLabel: "Learn About Our Fleet",
        ctaHref: "/our-fleet"
      }
    },


    "about_who_we_are": {
      id: "about-us-who-we-are",
      pageSlug: "about-us",
      sectionKey: "about_who_we_are",
      content: {
        leftHeading: "Who We Are",
        leftParagraphs: ["Asia Pacific Shipping is the world's leading owner and operator of modern high-quality fully pressurised, semi-refrigerated as well as ethylene and ammonia capable vessels which provide maritime transportation of liquified petroleum gas (LPG), petrochemicals and other speciality gases."],
        rightHeading: "Asia Pacific Shipping Way",
        rightParagraphs: ["Thinking Big and Small - a global business, with a regional focus on last tonne-mile delivery. We are the world's largest owner and commercial operator of pressurised LPG carriers. We have a market-leading LPG and petrochemical shipping platform, with strong brand recognition and an experienced in-house commercial and technical management team."]
      }
    },

    "about_hero": {
      id: "about-us-hero",
      pageSlug: "about-us",
      sectionKey: "about_hero",
      content: {
        title: "About Us",
        desktopImage: { url: "/wp-content/uploads/asp_images/about/history-04-new-building.jpg", alt: "Asia Pacific Shipping's LPG carrier, Katherine Kosan" },
        mobileImage: { url: "/wp-content/uploads/asp_images/ships/asp-maple.jpg", alt: "Asia Pacific Shipping's LPG carrier, Katherine Kosan" }
      }
    }
  },


  home: {
      home_hero: {
        id: 'sec-home-hero',
        pageSlug: 'home',
        sectionKey: 'home_hero',
        content: {
          title: 'Turning vision into <span style="color: var(--asp-signal) !important;">value</span>',
          description: 'Asia Pacific Shipping is a leading independent owner and operator of modern tankers and bulk carriers across the region. We are headquartered in Hanoi, delivering safe, reliable and efficient maritime logistics solutions to customers worldwide.',
          videos: [
            { url: '/videos/home/asp-luna-1.mp4' },
            { url: '/videos/home/asp-luna-2.mp4' }
          ],
          fallbackImage: { url: '/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png', alt: 'Asia Pacific Shipping' }
        }
      },
      home_what_we_do: {
        id: 'sec-home-wwd',
        pageSlug: 'home',
        sectionKey: 'home_what_we_do',
        content: {
          eyebrow: 'WHAT WE DO',
          title: 'We provide comprehensive maritime solutions',
          description: 'Our core services are built on decades of operational excellence.'
        }
      },
      home_about: {
      id: 'sec-home-about',
      pageSlug: 'home',
      sectionKey: 'home_about',
      content: {
        eyebrow: 'About Us',
        title: 'We have the scale, fleet and operational resources to serve our customers on a truly global basis, operating a young fleet of modern vessels.',
        description1: 'ASP is an independent, wholly Vietnamese-owned shipowner and manager, founded by experienced captains, officers and maritime professionals, with strong backing from Vietnamese investors, banks and leasing partners.',
        description2: 'We maintain the highest standards of safety, quality, and environmental protection, offering customers the best solutions for their transportation needs with our leading service and operational excellence.',
        ctaLabel: 'Learn About Asia Pacific Shipping',
        ctaHref: '/about-us'
      }
    },
      home_statistics: {
      id: 'sec-home-stats',
      pageSlug: 'home',
      sectionKey: 'home_statistics',
      content: {
        stats: [
          { id: 'stat-1', value: '41', suffix: '+', label: 'Vessels in Fleet', displayOrder: 1 },
          { id: 'stat-2', value: '3', suffix: 'M+', label: 'Total DWT', displayOrder: 2 },
          { id: 'stat-3', value: '30', suffix: '+', label: 'Years of Experience', displayOrder: 3 },
          { id: 'stat-4', value: '1,500', suffix: '+', label: 'Seafarers', displayOrder: 4 }
        ]
      }
    },
      home_fleet: {
      id: 'sec-home-fleet',
      pageSlug: 'home',
      sectionKey: 'home_fleet',
      content: {
        title: 'Our Fleet',
        description1: 'We own and manage a modern, diversified fleet serving customers across global trades, including bulk carriers, oil tankers, LPG carriers and chemical tankers.',
        description2: 'Our commitment to safety, continuous improvement, and operational efficiency ensures that we meet the highest standards of maritime transportation.',
      }
    },
      home_chairman: {
      id: 'sec-home-chairman',
      pageSlug: 'home',
      sectionKey: 'home_chairman',
      content: {
        subtitle: 'A MESSAGE FROM OUR CHAIR',
        quote: 'These vessels not only strengthen our fleet and let us serve clients more effectively - they reaffirm our dedication to advancing sustainable practices across the industry.',
        name: 'NGUYEN QUYNH ANH',
        role: 'Chair, ASP'
      }
    },
      home_latest_news: {
      id: 'sec-home-news',
      pageSlug: 'home',
      sectionKey: 'home_latest_news',
      content: {
        title: 'Latest News',
        intro: 'Keep up to date with our business, people and activities.',
        ctaLabel: 'View All News',
        ctaHref: '/media/latest-news'
      }
    },
      home_sustainability: {
      id: 'sec-home-sust',
      pageSlug: 'home',
      sectionKey: 'home_sustainability',
      content: {
        title: 'Sustainability',
        description: "Asia Pacific Shipping is committed to safe and efficient marine transportation. We focus on environmental responsibility, fleet renewal with modern technologies like methanol dual-fuel vessels, and contributing toward the maritime industry's Net Zero 2050 goals.",
        image: { url: '/wp-content/uploads/asp_images/ships/ship-home-sust-1.jpg', alt: 'Ship at sea' },
        ctaLabel: 'Our Role in Sustainability',
        ctaHref: '/sustainability'
      }
    },
      home_callouts: {
      id: 'sec-home-callouts',
      pageSlug: 'home',
      sectionKey: 'home_callouts',
      content: {
        title: 'Subscribe to Our Newsletter',
        description: 'Sign up to receive alerts on press releases and updates on business activities.'
      }
    }
  },

  "commercial-management": {
    "hero": {
      "id": "sec-commercial-management-hero",
      "pageSlug": "commercial-management",
      "sectionKey": "hero",
      "content": {
        "title": "Commercial Management",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp",
          "alt": "Asia Pacific Shipping Commercial Management"
        }
      }
    },
    "primary_intro": {
      "id": "sec-commercial-management-primary_intro",
      "pageSlug": "commercial-management",
      "sectionKey": "primary_intro",
      "content": {
        "eyebrow": "Flexible Employment",
        "heading": "Commercial decisions. Better fleet value.",
        "body": "The structure changes with the requirement; the discipline around vessel selection, terms and execution stays consistent. By leveraging our deep market insights and robust operational framework, we ensure that every commercial arrangement maximizes fleet value. Whether securing long-term commitments or capitalizing on spot market opportunities, our focus remains on reliability, risk management, and delivering sustained profitability for our partners.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png",
          "alt": "ASP Fleet vessel"
        }
      }
    },
    "how_we_work": {
      "id": "sec-commercial-management-how_we_work",
      "pageSlug": "commercial-management",
      "sectionKey": "how_we_work",
      "content": {
        "heading": "Judgment before fixture.<br/>Attention after it.",
        "intro": "Commercial performance is built through a connected sequence, not a single transaction. Each step requires meticulous planning, deep market knowledge and proactive communication.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-luna-turning.webp",
          "alt": "ASP Luna turning at sea"
        },
        "items": [
          {
            "title": "Read the Market",
            "desc": "Monitor cargo demand, vessel supply, route dynamics and counterparty activity across relevant markets. Commercial assessment should provide the context needed to evaluate opportunities and position vessels where their capability and trading profile can create the strongest fit."
          },
          {
            "title": "Match Vessel and Trade",
            "desc": "Evaluate vessel size, specification, availability and operating profile against cargo and route requirements. The objective is to align each vessel with practical employment opportunities while considering operational and commercial requirements."
          },
          {
            "title": "Conclude the Fixture",
            "desc": "Coordinate enquiries, commercial terms, charter-party requirements and handover details with clear ownership. A disciplined fixture process helps ensure that key commercial and operational considerations are understood before voyage execution begins."
          },
          {
            "title": "Manage Performance",
            "desc": "Maintain visibility over voyage execution, customer communication and commercial performance through completion. Ongoing coordination helps commercial and operational teams respond to changing requirements while maintaining a clear view of vessel performance."
          }
        ]
      }
    },
    "capabilities": {
      "id": "sec-cm-cap",
      "pageSlug": "commercial-management",
      "sectionKey": "capabilities",
      "content": {
        "eyebrow": "Our Services",
        "heading": "A flexible approach to global markets",
        "intro": "We provide tailored employment strategies across multiple commercial models to match every vessel to the trade where it can perform best.",
        "capabilities": [
          {
            "title": "Time Charter",
            "description": "Structured vessel employment for charterers who need committed capacity across a defined trading period."
          },
          {
            "title": "Voyage Fixture",
            "description": "Cargo-by-cargo employment that connects the right vessel, route and timing in the spot market."
          },
          {
            "title": "Pool Partnership",
            "description": "Revenue-sharing participation that combines compatible tonnage and broader market coverage."
          }
        ]
      }
    },
    "highlights": {
      "id": "sec-cm-hl",
      "pageSlug": "commercial-management",
      "sectionKey": "highlights",
      "content": {
        "eyebrow": "Key Commercial Highlights",
        "heading": "Driving value across global markets",
        "highlights": [
          {
            "title": "Global Reach",
            "description": "Operating across major trade routes worldwide with strong regional expertise."
          },
          {
            "title": "Data-Driven",
            "description": "Advanced analytics for voyage optimization, fuel efficiency, and routing."
          },
          {
            "title": "Risk Management",
            "description": "Comprehensive hedging strategies and exposure tracking to protect margins."
          },
          {
            "title": "Client Alignment",
            "description": "Transparent reporting and shared financial goals for mutual success."
          }
        ]
      }
    },
    "commercial_activity": {
      "id": "sec-cm-ca",
      "pageSlug": "commercial-management",
      "sectionKey": "commercial_activity",
      "content": {
        "eyebrow": "Commercial Activity",
        "heading": "Disciplined execution and clear decision-making",
        "items": [
          {
            "name": "Vessel Positioning",
            "type": "Market &amp; Employment",
            "focus": "Market Analysis",
            "application": "Vessel Employment",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-luna-turning.webp",
              "alt": "Vessel Positioning"
            },
            "description": "Commercial planning brings together vessel capability, market conditions and trading opportunities to determine where each ship can be employed most effectively. Careful positioning supports stronger fixture decisions and better alignment between vessel and trade."
          },
          {
            "name": "Fixture Strategy",
            "type": "Chartering",
            "focus": "Chartering",
            "application": "Fixture Planning",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp",
              "alt": "Fixture Strategy"
            },
            "description": "Each commercial opportunity is assessed against vessel availability, route requirements and contractual considerations. The objective is to develop practical fixture strategies that support disciplined execution and clear commercial decision-making."
          },
          {
            "name": "Commercial Follow-Through",
            "type": "Voyage Performance",
            "focus": "Voyage Execution",
            "application": "Performance Review",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/maple-cedar.jpg",
              "alt": "Commercial Follow-Through"
            },
            "description": "Commercial management continues after a fixture is concluded through coordination, voyage monitoring and communication with relevant parties. This helps maintain visibility over performance and supports consistent delivery throughout the engagement."
          }
        ]
      }
    },
    "faq": {
      "id": "sec-commercial-management-faq",
      "pageSlug": "commercial-management",
      "sectionKey": "faq",
      "content": {
        "eyebrow": "Common Questions",
        "heading": "Frequently Asked Questions",
        "intro": "Find quick answers about our commercial management services.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp",
          "alt": "ASP Shipping - commercial-management FAQ"
        }
      }
    }
  },
  "technical-management": {
    "hero": {
      "id": "sec-technical-management-hero",
      "pageSlug": "technical-management",
      "sectionKey": "hero",
      "content": {
        "title": "Technical Management",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-titan-aerial-aft.webp",
          "alt": "ASP Technical Management — vessel at sea"
        }
      }
    },
    "primary_intro": {
      "id": "sec-technical-management-primary_intro",
      "pageSlug": "technical-management",
      "sectionKey": "primary_intro",
      "content": {
        "eyebrow": "Superior Standards",
        "heading": "Technical discipline. Operational continuity.",
        "body": "The condition of a vessel reflects the quality of the people who maintain it. Our technical management team applies rigorous planned maintenance systems, proactive inspection regimes, and continual performance monitoring to ensure every ship in our fleet operates at its highest capability — safely, efficiently, and in full regulatory compliance at all times.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-titan.webp",
          "alt": "ASP vessel technical operations"
        }
      }
    },
    "how_we_work": {
      "id": "sec-technical-management-how_we_work",
      "pageSlug": "technical-management",
      "sectionKey": "how_we_work",
      "content": {
        "heading": "Prevention before breakdown.<br/>Precision in every intervention.",
        "intro": "Technical performance is built through a systematic cycle of inspection, maintenance, monitoring and review. Each phase requires specialist knowledge, disciplined execution and close coordination between ship and shore.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-jewels-shipyard.jpg",
          "alt": "ASP Ship management technical operations"
        },
        "items": [
          {
            "title": "Plan & Schedule",
            "desc": "Develop and maintain structured planned maintenance schedules, ensuring all class, flag and statutory requirements are met well ahead of critical dates."
          },
          {
            "title": "Inspect & Assess",
            "desc": "Conduct routine condition assessments, defect monitoring and superintendent visits to identify technical risks before they become operational problems."
          },
          {
            "title": "Execute & Maintain",
            "desc": "Coordinate repairs, dry-docking and critical spares procurement with approved service providers to restore and maintain fleet standards."
          },
          {
            "title": "Monitor & Optimise",
            "desc": "Analyse real-time performance data to drive fuel savings, reduce emissions, extend machinery life and benchmark each vessel against targets."
          }
        ]
      }
    },
    "capabilities": {
      "id": "sec-tm-cap",
      "pageSlug": "technical-management",
      "sectionKey": "capabilities",
      "content": {
        "eyebrow": "Our Services",
        "heading": "Core disciplines of fleet management",
        "intro": "Our technical teams deliver comprehensive vessel support, combining operational discipline with strict adherence to industry regulations.",
        "capabilities": [
          {
            "title": "TMSA &amp; Vetting",
            "description": "Our fleet complies rigorously with TMSA standards and the ISM Code, maintained in a state of readiness to pass SIRE and CDI inspections by leading oil major operators at any time."
          },
          {
            "title": "Planned Maintenance &amp; Dry-docking",
            "description": "Modern Planned Maintenance Systems enable early detection of risk before failures occur. We optimise every dry-docking item to minimise off-hire time and control costs with precision."
          },
          {
            "title": "Vessel Performance Monitoring",
            "description": "Real-time ship-to-shore data acquisition tracks speed, fuel consumption and machinery condition continuously — enabling immediate adjustments that reduce emissions and increase voyage efficiency."
          }
        ]
      }
    },
    "highlights": {
      "id": "sec-tm-hl",
      "pageSlug": "technical-management",
      "sectionKey": "highlights",
      "content": {
        "eyebrow": "Key Technical Highlights",
        "heading": "Reliability driven by discipline",
        "highlights": [
          {
            "title": "Oil Major Approved",
            "description": "Fleet maintained in continual readiness for SIRE and CDI vetting by leading charterers and oil major operators worldwide."
          },
          {
            "title": "Performance Analytics",
            "description": "Ship-to-shore sensor integration and real-time data monitoring drive fuel efficiency and machinery condition benchmarking on every voyage."
          },
          {
            "title": "Proactive Maintenance",
            "description": "Structured PMS identifies risks early, reducing unplanned repairs, minimising off-hire and extending the operational life of each vessel."
          },
          {
            "title": "Class &amp; Regulatory Compliance",
            "description": "All statutory, flag state and classification society requirements are tracked, planned and executed on schedule without exception."
          }
        ]
      }
    },
    "technical_disciplines": {
      "id": "sec-tm-td",
      "pageSlug": "technical-management",
      "sectionKey": "technical_disciplines",
      "content": {
        "eyebrow": "Technical Disciplines",
        "heading": "Core areas of our technical management",
        "items": [
          {
            "name": "Planned Maintenance",
            "type": "Maintenance Planning",
            "focus": "Maintenance",
            "scope": "Vessel Systems",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-luna-turning.webp",
              "alt": "Planned Maintenance"
            },
            "description": "Maintenance planning supports vessel reliability by organizing machinery, equipment and inspection requirements around the vessel's operating schedule. A structured approach helps technical teams identify priorities and coordinate work before issues affect operations."
          },
          {
            "name": "Performance &amp; Reliability",
            "type": "Technical Oversight",
            "focus": "Reliability",
            "scope": "Performance Monitoring",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp",
              "alt": "Performance &amp; Reliability"
            },
            "description": "Technical oversight considers equipment condition, operational performance and reported defects across the vessel. Continuous review supports timely technical decisions and helps maintain safe and dependable ship operations."
          },
          {
            "name": "Dry-Docking &amp; Compliance",
            "type": "Compliance &amp; Projects",
            "focus": "Project Planning",
            "scope": "Dry-Docking &amp; Compliance",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/maple-cedar.jpg",
              "alt": "Dry-Docking &amp; Compliance"
            },
            "description": "Technical projects require careful preparation, coordination and review across maintenance, inspection and regulatory requirements. Structured planning helps vessels complete major work while maintaining appropriate technical and operational standards."
          }
        ]
      }
    },
    "faq": {
      "id": "sec-technical-management-faq",
      "pageSlug": "technical-management",
      "sectionKey": "faq",
      "content": {
        "eyebrow": "Common Questions",
        "heading": "Frequently Asked Questions",
        "intro": "Find quick answers about our technical management process.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp",
          "alt": "ASP Shipping - technical-management FAQ"
        }
      }
    }
  },
  "marine-consultancy": {
    "hero": {
      "id": "sec-marine-consultancy-hero",
      "pageSlug": "marine-consultancy",
      "sectionKey": "hero",
      "content": {
        "title": "Marine Consultancy",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-luna-turning.webp",
          "alt": "ASP Marine Consultancy — vessel operations"
        }
      }
    },
    "primary_intro": {
      "id": "sec-marine-consultancy-primary_intro",
      "pageSlug": "marine-consultancy",
      "sectionKey": "primary_intro",
      "content": {
        "eyebrow": "From Practice To Strategy",
        "heading": "Advice rooted in ownership. Solutions grounded in reality.",
        "body": "Our consultancy is built on the experience of active shipowners and operators who have managed complex fleets across multiple market cycles. We bring that practical perspective to every advisory mandate — whether assessing a vessel acquisition, supervising a newbuild programme, or charting a pathway to decarbonisation. The advice we give is the advice we follow ourselves.",
        "image": {
          "url": "/wp-content/uploads/asp_images/about/history-03-first-tanker.png",
          "alt": "ASP marine consultancy operations"
        }
      }
    },
    "how_we_work": {
      "id": "sec-marine-consultancy-how_we_work",
      "pageSlug": "marine-consultancy",
      "sectionKey": "how_we_work",
      "content": {
        "heading": "Insight before investment.<br/>Experience in execution.",
        "intro": "Marine consultancy delivers value when practical seafaring experience meets structured engineering analysis. Every project relies on a proven sequence of assessment, planning, delivery and validation.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp",
          "alt": "ASP Titan at sunset"
        },
        "items": [
          {
            "title": "Scope & Assess",
            "desc": "Define the operational requirement, regulatory boundaries and commercial objectives. Conduct initial feasibility studies and condition assessments to establish a factual baseline."
          },
          {
            "title": "Engineer & Plan",
            "desc": "Develop detailed technical specifications, compliance strategies and project schedules. Identify suitable shipyards, suppliers and technical partners required for successful execution."
          },
          {
            "title": "Oversee & Execute",
            "desc": "Deploy experienced superintendents and project managers to site. Monitor daily progress, control costs and resolve technical challenges as they arise during construction or modification."
          },
          {
            "title": "Validate & Deliver",
            "desc": "Conduct rigorous sea trials, verify compliance documentation and manage the formal handover process to ensure the asset is ready for commercial operation."
          }
        ]
      }
    },
    "capabilities": {
      "id": "sec-mc-cap",
      "pageSlug": "marine-consultancy",
      "sectionKey": "capabilities",
      "content": {
        "eyebrow": "Our Services",
        "heading": "Specialist advisory across the vessel lifecycle",
        "intro": "We provide technical and commercial consultancy backed by direct operating experience to support informed maritime decisions.",
        "capabilities": [
          {
            "title": "Newbuilding Supervision",
            "description": "Comprehensive project management from design review and shipyard selection through on-site construction supervision, sea trials and vessel delivery — drawing on ASP's direct newbuilding experience."
          },
          {
            "title": "ESG &amp; Decarbonisation",
            "description": "Advisory on pathways to meet IMO emission requirements including EEXI and CII ratings, evaluation of energy-saving technologies, and transition planning for alternative fuel vessel operations."
          },
          {
            "title": "Marine Due Diligence &amp; S&amp;P",
            "description": "Detailed vessel surveys, technical assessments and condition reports prior to Sale &amp; Purchase transactions or dry-docking, helping investors and owners accurately value and risk-assess maritime assets."
          }
        ]
      }
    },
    "highlights": {
      "id": "sec-mc-hl",
      "pageSlug": "marine-consultancy",
      "sectionKey": "highlights",
      "content": {
        "eyebrow": "Key Consultancy Highlights",
        "heading": "Expertise earned through direct ownership",
        "highlights": [
          {
            "title": "Owner's Perspective",
            "description": "We evaluate every project with the rigor and practical mindset of a vessel owner, focusing on long-term value."
          },
          {
            "title": "Technical Depth",
            "description": "Advisory backed by a robust technical management team with direct experience across diverse vessel types."
          },
          {
            "title": "Future-Ready",
            "description": "Deep understanding of evolving environmental regulations, decarbonisation technologies, and future fuel pathways."
          },
          {
            "title": "Comprehensive Scope",
            "description": "End-to-end support from initial concept and feasibility through to project execution and operational handover."
          }
        ]
      }
    },
    "marine_advisory": {
      "id": "sec-mc-ma",
      "pageSlug": "marine-consultancy",
      "sectionKey": "marine_advisory",
      "content": {
        "eyebrow": "Advisory Services",
        "heading": "Targeted support for maritime projects",
        "items": [
          {
            "name": "Project Assessment",
            "type": "Technical Advisory",
            "focus": "Advisory",
            "lifecycle": "Technical Assessment",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-luna-turning.webp",
              "alt": "Project Assessment"
            },
            "description": "Marine consultancy supports owners and stakeholders with practical technical assessment across vessel and maritime projects. Reviews can help clarify project requirements, technical considerations and potential risks before key decisions are made."
          },
          {
            "name": "Newbuilding &amp; Fleet Development",
            "type": "Vessel Projects",
            "focus": "Vessel Projects",
            "lifecycle": "Development Support",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp",
              "alt": "Newbuilding &amp; Fleet Development"
            },
            "description": "Advisory support may extend across newbuilding, vessel development and technical project planning. The scope is shaped around the owner's requirements, vessel specification and the practical needs of each project."
          },
          {
            "name": "Efficiency &amp; Regulatory Strategy",
            "type": "Future Readiness",
            "focus": "Future Readiness",
            "lifecycle": "Efficiency &amp; Regulation",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/maple-cedar.jpg",
              "alt": "Efficiency &amp; Regulatory Strategy"
            },
            "description": "Maritime projects increasingly require consideration of vessel efficiency, regulatory change and lower-emission technologies. Consultancy helps structure these technical questions so stakeholders can evaluate practical options for future operations."
          }
        ]
      }
    },
    "faq": {
      "id": "sec-marine-consultancy-faq",
      "pageSlug": "marine-consultancy",
      "sectionKey": "faq",
      "content": {
        "eyebrow": "Common Questions",
        "heading": "Frequently Asked Questions",
        "intro": "Find quick answers about our marine consultancy and advisory.",
        "image": {
          "url": "/wp-content/uploads/asp_images/about/history-03-first-tanker.png",
          "alt": "ASP Shipping - marine-consultancy FAQ"
        }
      }
    }
  },
  "crew-management": {
    "hero": {
      "id": "sec-crew-management-hero",
      "pageSlug": "crew-management",
      "sectionKey": "hero",
      "content": {
        "title": "Crew Management",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-luna.webp",
          "alt": "ASP Crew Management — seafarers on deck"
        }
      }
    },
    "primary_intro": {
      "id": "sec-crew-management-primary_intro",
      "pageSlug": "crew-management",
      "sectionKey": "primary_intro",
      "content": {
        "eyebrow": "Performance On Board",
        "heading": "People who perform. Welfare that sustains them.",
        "body": "Every voyage depends on the people who run it. Our crew management programme recruits, trains and retains highly qualified seafarers who meet the most rigorous international standards — then invests in their welfare and career development to ensure they stay engaged, safe and committed to the highest levels of professional performance across every voyage.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-maple.jpg",
          "alt": "ASP vessel operations crew"
        }
      }
    },
    "how_we_work": {
      "id": "sec-crew-management-how_we_work",
      "pageSlug": "crew-management",
      "sectionKey": "how_we_work",
      "content": {
        "heading": "Competence before deployment.<br/>Support throughout the voyage.",
        "intro": "A high-performing fleet relies on qualified, motivated seafarers. Effective crew management requires a structured approach to sourcing, training, deployment and ongoing welfare.",
        "image": {
          "url": "/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg",
          "alt": "ASP Seafarers"
        },
        "items": [
          {
            "title": "Source & Select",
            "desc": "Identify and recruit qualified seafarers through our established global manning network. Rigorous screening ensures every candidate meets our technical, medical and safety standards."
          },
          {
            "title": "Train & Prepare",
            "desc": "Provide comprehensive pre-joining familiarisation, simulator training and safety briefings. Continuous skills development ensures crews are ready for vessel-specific and regulatory requirements."
          },
          {
            "title": "Deploy & Manage",
            "desc": "Coordinate seamless crew changes, travel logistics, payroll administration and certification management to ensure vessels remain fully manned and compliant."
          },
          {
            "title": "Support & Retain",
            "desc": "Prioritise seafarer wellbeing through dedicated welfare programmes, clear career progression and responsive shore-based support. High retention rates directly improve operational consistency."
          }
        ]
      }
    },
    "capabilities": {
      "id": "sec-cr-cap",
      "pageSlug": "crew-management",
      "sectionKey": "capabilities",
      "content": {
        "eyebrow": "Our Services",
        "heading": "End-to-end seafarer management",
        "intro": "We manage every aspect of the seafarer lifecycle, ensuring that vessels are safely and reliably crewed by qualified professionals.",
        "capabilities": [
          {
            "title": "Recruitment &amp; Selection",
            "description": "Sourcing qualified, certified seafarers who meet international maritime standards. Our process includes STCW and flag-state certificate verification, ENG1 medical assessment, competency interviews and thorough reference checks."
          },
          {
            "title": "Training &amp; Development",
            "description": "Continuous upskilling programmes including vessel familiarisation, safety management system inductions, advanced simulator exercises for tanker and bulk operations, and structured support for officer certification upgrades."
          },
          {
            "title": "Welfare &amp; Retention",
            "description": "A supportive environment at sea through competitive compensation, timely repatriation, mental health and wellbeing resources, and 24/7 shore-side support for crew and their families throughout every voyage."
          }
        ]
      }
    },
    "highlights": {
      "id": "sec-cr-hl",
      "pageSlug": "crew-management",
      "sectionKey": "highlights",
      "content": {
        "eyebrow": "Key Crew Highlights",
        "heading": "People at the heart of our operation",
        "highlights": [
          {
            "title": "High Retention Rates",
            "description": "We prioritize crew welfare and career development, resulting in excellent retention and continuity of experience."
          },
          {
            "title": "Stringent Vetting",
            "description": "Rigorous selection processes ensure all crew members meet or exceed international certification and competency standards."
          },
          {
            "title": "Continuous Training",
            "description": "Mandatory ongoing training programs that address emerging technologies, new regulations, and safety best practices."
          },
          {
            "title": "Global Network",
            "description": "Extensive sourcing networks across major maritime hubs to secure the right personnel for every vessel type."
          }
        ]
      }
    },
    "crew_roles": {
      "id": "sec-cr-roles",
      "pageSlug": "crew-management",
      "sectionKey": "crew_roles",
      "content": {
        "eyebrow": "Our People At Sea",
        "heading": "Roles that drive performance across the fleet",
        "ctaLabel": "Careers at ASP &rarr;",
        "ctaHref": "/careers",
        "roles": [
          {
            "name": "Captains &amp; Officers",
            "type": "Senior Command",
            "department": "Navigation &amp; Safety",
            "rankGroup": "Deck Officers",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp",
              "alt": "Captains &amp; Officers"
            },
            "description": "Responsible for safe navigation, vessel command and the coordination of deck operations throughout each voyage. These roles support disciplined decision-making, regulatory awareness and effective communication across shipboard operations."
          },
          {
            "name": "Marine Engineers",
            "type": "Engine Department",
            "department": "Machinery &amp; Systems",
            "rankGroup": "Chief &amp; Watch Engineers",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-luna-turning.webp",
              "alt": "Marine Engineers"
            },
            "description": "Responsible for the operation, maintenance and reliability of vessel machinery and technical systems. Marine engineers help maintain safe, efficient performance through disciplined monitoring, maintenance and technical problem-solving."
          },
          {
            "name": "Ratings &amp; Cadets",
            "type": "Crew &amp; Trainees",
            "department": "Deck &amp; Engine",
            "rankGroup": "Future Officers",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/maple-cedar.jpg",
              "alt": "Ratings &amp; Cadets"
            },
            "description": "Support deck and engine operations while developing practical skills and professional experience at sea. These roles contribute to everyday vessel operations and provide a foundation for continued maritime career development."
          }
        ]
      }
    },
    "faq": {
      "id": "sec-crew-management-faq",
      "pageSlug": "crew-management",
      "sectionKey": "faq",
      "content": {
        "eyebrow": "Common Questions",
        "heading": "Frequently Asked Questions",
        "intro": "Find quick answers about our crew management process and seafarer welfare standards.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-maple.jpg",
          "alt": "ASP Shipping - crew-management FAQ"
        }
      }
    }
  },
  "sea-transportation": {
    "hero": {
      "id": "sec-sea-transportation-hero",
      "pageSlug": "sea-transportation",
      "sectionKey": "hero",
      "content": {
        "title": "Sea Transportation",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png",
          "alt": "ASP Sea Transportation — vessel at open sea"
        }
      }
    },
    "primary_intro": {
      "id": "sec-sea-transportation-primary_intro",
      "pageSlug": "sea-transportation",
      "sectionKey": "primary_intro",
      "content": {
        "eyebrow": "Global Trade Connectivity",
        "heading": "Safe passage. Reliable delivery.",
        "body": "Since 2005, Asia Pacific Shipping has been dedicated to the safe and reliable transportation of liquefied petroleum gas, petrochemicals and speciality gases to global markets. Every cargo movement is planned with the same discipline — rigorous safety management, meticulous route planning, and a commitment to on-time performance that our customers have come to depend on.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-titan-aerial-aft.webp",
          "alt": "ASP vessel at sea"
        }
      }
    },
    "how_we_work": {
      "id": "sec-sea-transportation-how_we_work",
      "pageSlug": "sea-transportation",
      "sectionKey": "how_we_work",
      "content": {
        "heading": "Precision in planning.<br/>Reliability in transit.",
        "intro": "Safe and efficient sea transportation is built on a foundation of rigorous voyage planning, continuous monitoring and proactive operational management.",
        "image": {
          "url": "/wp-content/uploads/asp_images/heads/tanker-forward-course.webp",
          "alt": "ASP Tanker underway"
        },
        "items": [
          {
            "title": "Analyse & Prepare",
            "desc": "Evaluate cargo requirements, port constraints and weather routing. Develop comprehensive voyage plans that balance safety, schedule integrity and fuel efficiency."
          },
          {
            "title": "Load & Secure",
            "desc": "Coordinate terminal operations, cargo handling and stowage planning. Strict adherence to industry guidelines ensures cargo integrity and vessel stability before departure."
          },
          {
            "title": "Transit & Monitor",
            "desc": "Execute the voyage plan with continuous shore-based support. Real-time monitoring of weather, vessel performance and navigational safety allows for timely adjustments."
          },
          {
            "title": "Arrive & Discharge",
            "desc": "Manage port approaches, pilotage and terminal interfaces. Efficient discharge operations and clear communication ensure a smooth handover and readiness for the next fixture."
          }
        ]
      }
    },
    "capabilities": {
      "id": "sec-st-cap",
      "pageSlug": "sea-transportation",
      "sectionKey": "capabilities",
      "content": {
        "eyebrow": "Our Services",
        "heading": "Cargo solutions across global trade routes",
        "intro": "We operate a modern, versatile fleet capable of meeting diverse cargo requirements with a steadfast commitment to safety and environmental standards.",
        "capabilities": [
          {
            "title": "LPG &amp; Petrochemical Transport",
            "description": "Specialised transportation of liquefied petroleum gas and petrochemical cargoes in pressure and fully refrigerated vessels, serving regional and international trade routes with consistent reliability."
          },
          {
            "title": "Time Charter &amp; Spot Voyage",
            "description": "Flexible transportation solutions spanning committed time charter arrangements for consistent capacity needs, through to spot voyage fixtures that respond rapidly to market opportunities and short-term cargo requirements."
          },
          {
            "title": "Contract of Affreightment",
            "description": "Long-term cargo volume agreements providing shippers with guaranteed transportation capacity over a defined period — offering predictable cost, reliable scheduling, and supply chain security for sustained cargo flows."
          }
        ]
      }
    },
    "highlights": {
      "id": "sec-st-hl",
      "pageSlug": "sea-transportation",
      "sectionKey": "highlights",
      "content": {
        "eyebrow": "Key Transportation Highlights",
        "heading": "Safety and reliability on every voyage",
        "highlights": [
          {
            "title": "Versatile Fleet",
            "description": "Operating diverse vessel sizes and types to meet precise cargo, route, and terminal requirements."
          },
          {
            "title": "Impeccable Safety",
            "description": "Adhering to the highest industry safety standards and maintaining a flawless operational track record."
          },
          {
            "title": "Route Optimization",
            "description": "Utilizing advanced weather routing and voyage analytics to minimize fuel consumption and emissions."
          },
          {
            "title": "Cargo Care",
            "description": "Specialized expertise in handling sensitive and hazardous cargoes safely and without degradation."
          }
        ]
      }
    },
    "sea_operations": {
      "id": "sec-st-so",
      "pageSlug": "sea-transportation",
      "sectionKey": "sea_operations",
      "content": {
        "eyebrow": "Voyage Operations",
        "heading": "Discipline across the transportation lifecycle",
        "items": [
          {
            "name": "Pre-Voyage Planning",
            "type": "Preparation",
            "focus": "Voyage Planning",
            "scope": "Route &amp; Stowage",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-luna-turning.webp",
              "alt": "Pre-Voyage Planning"
            },
            "description": "Safe sea transportation starts with careful planning. Route assessment, weather analysis and cargo stowage planning are established before departure to identify risks and support efficient execution."
          },
          {
            "name": "Cargo Operations",
            "type": "Execution",
            "focus": "Cargo Handling",
            "scope": "Loading &amp; Discharge",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp",
              "alt": "Cargo Operations"
            },
            "description": "Loading and discharge operations require coordination between vessel command, technical teams and terminal operators. Clear procedures and active monitoring help ensure cargo is handled safely and according to requirements."
          },
          {
            "name": "Voyage Monitoring",
            "type": "Oversight",
            "focus": "Passage Execution",
            "scope": "Performance Tracking",
            "image": {
              "url": "/wp-content/uploads/asp_images/ships/maple-cedar.jpg",
              "alt": "Voyage Monitoring"
            },
            "description": "Vessel progress is tracked throughout the voyage. Shore-based teams monitor performance, weather routing and operational data to support the crew and ensure the vessel meets its schedule while maintaining safety standards."
          }
        ]
      }
    },
    "faq": {
      "id": "sec-sea-transportation-faq",
      "pageSlug": "sea-transportation",
      "sectionKey": "faq",
      "content": {
        "eyebrow": "Common Questions",
        "heading": "Frequently Asked Questions",
        "intro": "Find quick answers about our sea transportation operations.",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-titan-aerial-aft.webp",
          "alt": "ASP Shipping - sea-transportation FAQ"
        }
      }
    }
  },
  "what-we-do": {
    "hero": {
      "id": "sec-what-we-do-hero",
      "pageSlug": "what-we-do",
      "sectionKey": "hero",
      "content": {
        "title": "What We Do",
        "image": {
          "url": "/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp",
          "alt": "Asia Pacific Shipping Operations"
        }
      }
    },
    "hub_intro": {
      "id": "sec-hub-intro",
      "pageSlug": "what-we-do",
      "sectionKey": "hub_intro",
      "content": {
        "heading": "Our Approach",
        "body1": "Asia Pacific Shipping provides integrated maritime solutions across the vessel lifecycle, combining commercial insight, technical expertise and operational discipline to support safe, efficient and reliable shipping.",
        "body2": "Our approach is built around practical execution, close collaboration and long-term value. We work with owners, crews and partners to respond to operational needs, maintain high standards and support dependable performance across changing market conditions."
      }
    },
    "hub_partners": {
      "id": "sec-hub-partners",
      "pageSlug": "what-we-do",
      "sectionKey": "hub_partners",
      "content": {
        "heading": "Trusted Relationships",
        "body": "Our operations are supported by strong relationships with major charterers, oil majors, classification societies and maritime service providers. These partnerships reflect our commitment to transparency, performance and shared maritime standards."
      }
    },
    "hub_explore": {
      "id": "sec-hub-explore",
      "pageSlug": "what-we-do",
      "sectionKey": "hub_explore",
      "content": {
        "eyebrow": "Explore ASP",
        "heading": "Discover More About Asia Pacific Shipping",
        "intro": "Learn about our heritage, explore our fleet, and understand our commitment to sustainable maritime operations.",
        "cards": [
          {
            "title": "About Us",
            "description": "Discover our history, leadership, and the values that drive our approach to maritime services.",
            "href": "/about-us",
            "ctaLabel": "Explore About Us"
          },
          {
            "title": "Our Fleet",
            "description": "Explore the modern vessels we operate across commercial, technical, and transportation sectors.",
            "href": "/our-fleet",
            "ctaLabel": "Explore Our Fleet"
          },
          {
            "title": "Sustainability",
            "description": "Read about our environmental policies, social commitments, and decarbonisation pathway.",
            "href": "/sustainability",
            "ctaLabel": "Explore Sustainability"
          },
          {
            "title": "Media",
            "description": "Latest news, press releases, articles, and insights from across the ASP shipping network.",
            "href": "/media",
            "ctaLabel": "Explore Media"
          },
          {
            "title": "Careers",
            "description": "Join our team. Opportunities for seafarers and shore-based maritime professionals.",
            "href": "/careers",
            "ctaLabel": "Explore Careers"
          },
          {
            "title": "Contact Us",
            "description": "Get in touch with our global offices to discuss your specific maritime requirements.",
            "href": "/contact-us",
            "ctaLabel": "Contact Us"
          }
        ]
      }
    }
  }
};

const MOCK_FAQS: Record<string, ServiceFaq[]> = {
  "commercial-management": [
    {
      "id": "faq-commercial-management-1",
      "question": "What types of vessels does ASP manage commercially?",
      "answer": "ASP commercially manages a diverse range of vessels, with a strong focus on tanker and bulk carrier operations.",
      "displayOrder": 1,
      "serviceSlug": "commercial-management"
    },
    {
      "id": "faq-commercial-management-2",
      "question": "How does ASP secure the best charter rates?",
      "answer": "We leverage our extensive market relationships, real-time data analysis, and proactive approach to match the right vessel with the most lucrative cargo opportunities.",
      "displayOrder": 2,
      "serviceSlug": "commercial-management"
    },
    {
      "id": "faq-commercial-management-3",
      "question": "Does ASP offer both time charter and voyage fixtures?",
      "answer": "Yes, we provide flexible commercial models including time charters, voyage fixtures, and pool partnerships tailored to owner requirements.",
      "displayOrder": 3,
      "serviceSlug": "commercial-management"
    },
    {
      "id": "faq-commercial-management-4",
      "question": "How do you ensure operational efficiency during a voyage?",
      "answer": "Our dedicated commercial desk monitors performance continuously, providing 24/7 support to optimize routing, fuel consumption, and port operations.",
      "displayOrder": 4,
      "serviceSlug": "commercial-management"
    },
    {
      "id": "faq-commercial-management-5",
      "question": "How does ASP monitor and mitigate counterparty risk?",
      "answer": "Commercial planning considers counterparty suitability alongside market conditions, vessel positioning and contractual requirements. The objective is to support disciplined fixture decisions while maintaining clear commercial terms and communication throughout the engagement.",
      "displayOrder": 5,
      "serviceSlug": "commercial-management"
    },
    {
      "id": "faq-commercial-management-6",
      "question": "What kind of commercial reporting can owners expect?",
      "answer": "Commercial management requires clear communication on vessel employment, market developments and voyage performance. Reporting should provide owners with useful context for understanding current activity and supporting future commercial decisions.",
      "displayOrder": 6,
      "serviceSlug": "commercial-management"
    }
  ],
  "technical-management": [
    {
      "id": "faq-technical-management-1",
      "question": "How does ASP ensure its fleet meets oil major vetting standards?",
      "answer": "Our technical management system complies rigorously with TMSA standards and the ISM Code. The fleet is maintained in a state of constant readiness to pass SIRE and CDI inspections by leading charterers at any time.",
      "displayOrder": 1,
      "serviceSlug": "technical-management"
    },
    {
      "id": "faq-technical-management-2",
      "question": "What planned maintenance systems does ASP use?",
      "answer": "We utilise modern computerised Planned Maintenance Systems (PMS) to schedule and track all maintenance tasks, enabling early identification of potential issues before they affect vessel performance or availability.",
      "displayOrder": 2,
      "serviceSlug": "technical-management"
    },
    {
      "id": "faq-technical-management-3",
      "question": "How are dry-dockings managed to reduce off-hire time?",
      "answer": "Our technical superintendents develop detailed dry-docking scopes in advance, coordinate with approved repair yards, and manage each project tightly to minimise time in dock and return vessels to trading as quickly as possible.",
      "displayOrder": 3,
      "serviceSlug": "technical-management"
    },
    {
      "id": "faq-technical-management-4",
      "question": "Does ASP use real-time monitoring for vessel performance?",
      "answer": "Yes. We integrate ship-to-shore sensor technology to monitor speed, fuel consumption, and machinery condition continuously. This data is analysed onshore to drive optimisation recommendations and measure performance against targets.",
      "displayOrder": 4,
      "serviceSlug": "technical-management"
    },
    {
      "id": "faq-technical-management-5",
      "question": "How does ASP handle spare parts procurement and logistics?",
      "answer": "Spare-parts planning forms part of maintaining vessel readiness. Technical management coordinates requirements, procurement timing and delivery needs with maintenance schedules so essential equipment can be supported without unnecessary disruption.",
      "displayOrder": 5,
      "serviceSlug": "technical-management"
    },
    {
      "id": "faq-technical-management-6",
      "question": "What is your approach to defect management and emergency repairs?",
      "answer": "Defects are assessed according to their operational and technical impact. The management process focuses on timely reporting, appropriate corrective action and coordination with the relevant technical parties to maintain safe and reliable vessel operation.",
      "displayOrder": 6,
      "serviceSlug": "technical-management"
    }
  ],
  "marine-consultancy": [
    {
      "id": "faq-marine-consultancy-1",
      "question": "What types of projects does ASP Marine Consultancy handle?",
      "answer": "We consult across a broad range of projects including newbuilding supervision, ESG and decarbonisation pathway planning, Sale & Purchase due diligence, vessel condition surveys, and technical advisory for fleet acquisition or disposal.",
      "displayOrder": 1,
      "serviceSlug": "marine-consultancy"
    },
    {
      "id": "faq-marine-consultancy-2",
      "question": "What makes ASP consultancy different from other marine advisors?",
      "answer": "Our advice is grounded in the practical realities of owning and operating a modern fleet. We apply the same standards to client mandates that we apply to our own fleet decisions - giving clients the perspective of an experienced shipowner, not just a consultant.",
      "displayOrder": 2,
      "serviceSlug": "marine-consultancy"
    },
    {
      "id": "faq-marine-consultancy-3",
      "question": "Can ASP help with IMO emission compliance planning?",
      "answer": "Yes. We advise on EEXI and CII compliance strategies, evaluate energy-saving technologies and provide guidance on transition pathways including dual-fuel vessel options such as methanol propulsion.",
      "displayOrder": 3,
      "serviceSlug": "marine-consultancy"
    },
    {
      "id": "faq-marine-consultancy-4",
      "question": "Does ASP provide pre-purchase technical surveys?",
      "answer": "Absolutely. Our technical team conducts thorough vessel assessments prior to Sale & Purchase, identifying technical risks and condition issues that investors and owners need to accurately value maritime assets.",
      "displayOrder": 4,
      "serviceSlug": "marine-consultancy"
    },
    {
      "id": "faq-marine-consultancy-5",
      "question": "How does ASP assist with newbuilding supervision?",
      "answer": "Newbuilding support may cover technical review, specification assessment and supervision during key stages of a vessel project. The scope should be adapted to the owner's requirements and the technical needs of the project.",
      "displayOrder": 5,
      "serviceSlug": "marine-consultancy"
    },
    {
      "id": "faq-marine-consultancy-6",
      "question": "What support do you offer for ESG and decarbonisation strategy?",
      "answer": "Marine consultancy can support evaluation of efficiency improvements, technical alternatives and regulatory considerations associated with the industry's transition toward lower-emission operations.",
      "displayOrder": 6,
      "serviceSlug": "marine-consultancy"
    }
  ],
  "crew-management": [
    {
      "id": "faq-crew-management-1",
      "question": "How does ASP verify the credentials of its seafarers?",
      "answer": "Every candidate undergoes a rigorous multi-stage process: documentary verification of STCW and flag-state certificates, medical assessment to ENG1 or equivalent standards, competency interviews and thorough reference checks. Only those meeting all criteria are added to our approved crew pool.",
      "displayOrder": 1,
      "serviceSlug": "crew-management"
    },
    {
      "id": "faq-crew-management-2",
      "question": "What training does ASP provide to its crew?",
      "answer": "We provide a comprehensive training framework including vessel familiarisation courses, safety management system briefings, advanced simulator exercises for tanker and bulk carrier operations, and support for officers pursuing higher certifications. We also run a structured cadet programme to develop the next generation of maritime officers.",
      "displayOrder": 2,
      "serviceSlug": "crew-management"
    },
    {
      "id": "faq-crew-management-3",
      "question": "How does ASP support crew welfare at sea?",
      "answer": "We invest in crew welfare through regular communication, competitive compensation, timely repatriation, and access to mental health and wellbeing resources. Our shore-side team is available 24/7 to assist crew and their families throughout every voyage.",
      "displayOrder": 3,
      "serviceSlug": "crew-management"
    },
    {
      "id": "faq-crew-management-4",
      "question": "What are typical contract lengths for ASP seafarers?",
      "answer": "Contract lengths vary depending on vessel type and rank, but typically range from four to nine months. We strive to accommodate seafarer preferences while maintaining operational continuity for our fleet.",
      "displayOrder": 4,
      "serviceSlug": "crew-management"
    },
    {
      "id": "faq-crew-management-5",
      "question": "How does ASP manage crew rotation and deployment?",
      "answer": "Crew deployment requires coordination of vessel schedules, rank requirements, availability and handover timing. Effective planning aims to maintain continuity onboard while supporting safe and orderly crew changes.",
      "displayOrder": 5,
      "serviceSlug": "crew-management"
    },
    {
      "id": "faq-crew-management-6",
      "question": "What strategies do you use for seafarer retention?",
      "answer": "Long-term crew stability is supported through appropriate training, development, welfare and clear communication. The objective is to maintain capable, experienced personnel who can contribute consistently to vessel operations.",
      "displayOrder": 6,
      "serviceSlug": "crew-management"
    }
  ],
  "sea-transportation": [
    {
      "id": "faq-sea-transportation-1",
      "question": "What types of cargo does ASP transport?",
      "answer": "ASP specialises in the safe transportation of liquefied petroleum gas (LPG), petrochemicals and other speciality gases. Our fleet is purpose-designed and maintained for these cargo categories, with all required certifications and equipment.",
      "displayOrder": 1,
      "serviceSlug": "sea-transportation"
    },
    {
      "id": "faq-sea-transportation-2",
      "question": "What commercial arrangements does ASP offer for cargo transportation?",
      "answer": "We provide flexible transportation solutions including time charter arrangements for committed capacity over a defined period, spot voyage fixtures for individual cargo movements, and Contracts of Affreightment (COA) for sustained volume commitments over the long term.",
      "displayOrder": 2,
      "serviceSlug": "sea-transportation"
    },
    {
      "id": "faq-sea-transportation-3",
      "question": "What trade routes does ASP operate on?",
      "answer": "ASP operates primarily across Asia-Pacific trade routes, with vessels also trading on international routes connecting major LPG and petrochemical producing regions to key consumer markets. Our regional expertise and established port relationships support reliable on-time performance.",
      "displayOrder": 3,
      "serviceSlug": "sea-transportation"
    },
    {
      "id": "faq-sea-transportation-4",
      "question": "How does ASP ensure safety during sea transportation?",
      "answer": "Safety is fundamental to every voyage. Our operations comply with TMSA standards and the ISM Code. Voyage planning, cargo compatibility checks, pre-loading inspections, continuous voyage monitoring, and post-voyage performance review are all embedded in our standard operating procedures.",
      "displayOrder": 4,
      "serviceSlug": "sea-transportation"
    },
    {
      "id": "faq-sea-transportation-5",
      "question": "How is cargo handling and conditioning managed during the voyage?",
      "answer": "Cargo handling is planned around cargo characteristics, vessel capability, voyage requirements and applicable safety procedures. Operational teams monitor the voyage so cargo can be transported safely and efficiently.",
      "displayOrder": 5,
      "serviceSlug": "sea-transportation"
    },
    {
      "id": "faq-sea-transportation-6",
      "question": "What operational support is provided to ensure reliable scheduling?",
      "answer": "Voyage execution requires coordination between the vessel, customer and relevant operational parties. Planning considers routing, port calls, operational requirements and changing voyage conditions to support reliable transportation.",
      "displayOrder": 6,
      "serviceSlug": "sea-transportation"
    }
  ]
};



export const historyTimelineItems: Record<string, HistoryTimelineItem> = {
  item1: {
    id: "item1",
    year: "2005 ' 2012",
    paragraphs: ["Epic Shipping builds a reputation in Asia as a preferred operator and supplier of 3,500 ' 5,000 cbm Japanese built pressurised LPG vessels. Ownership increases to 9 vessels, plus 6 bareboat charters. The Company manages a further 8 vessels outside the pressurised LPG sector for third parties."],
    image: { url: "/wp-content/uploads/asp_images/about/earth-day.jpg", alt: "" }
  },
  item2: {
    id: "item2",
    year: "2013",
    paragraphs: ["Pacific Basin divests its 12 vessels and partners with BW Group to recapitalize Epic Shipping. The new company is named Asia Pacific Shipping and is headquartered in Singapore.", "The company places an order for up to six 11,000cbm ships in Japan, securing significant growth in the larger pressurized vessel segment."],
    image: { url: "/wp-content/uploads/asp_images/about/history-03-first-tanker.png", alt: "" }
  },
  item3: {
    id: "item3",
    year: "2014 ' 2018",
    paragraphs: ["Asia Pacific Shipping establishes an office in Geneva and completes a secondary listing on the Merkur Market (now Euronext Growth) in Oslo.", "The company expands its fleet to 39 vessels by acquiring ships and executing further newbuilding programs in Japan."],
    image: { url: "/wp-content/uploads/asp_images/about/history-04-new-building.jpg", alt: "" }
  },
  item4: {
    id: "item4",
    year: "2019",
    paragraphs: ["Following an offer to all shareholders, BW Group purchases 82.6% of shares in Epic Gas Ltd."],
    image: { url: "/wp-content/uploads/asp_images/sustainability/environment-methanol.webp", alt: "" }
  },
  item5: {
    id: "item5",
    year: "2020",
    paragraphs: ["Epic Gas and Lauritzen Kosan signed an agreement to combine their fleet and business activities to create Asia Pacific Shipping."],
    image: { url: "/wp-content/uploads/asp_images/ships/asp-titan.webp", alt: "" }
  },
  item6: {
    id: "item6",
    year: "2023",
    paragraphs: ["Following the successful privatisation offer from Web Holding Limited, Asia Pacific Shipping delists from the Oslo Stock Exchange on 6 December.' The major shareholders in the privatised company continue to be BW Group, J. Lauritzen and a group of previously existing Geneva based shareholders including the Lykiardopulo family."],
    image: { url: "/wp-content/uploads/asp_images/about/earth-topology.jpg", alt: "Sustainability Report 2023" }
  }
};

export const aboutNavigationCards: Record<string, AboutNavigationCard> = {
  history: {
    id: 'history',
    title: 'History',
    href: '/about-us/history',
    description: 'Growing from strength to strength over the years, we are now the leading owner and operator of pressurised LPG vessels.',
    image: { url: '/wp-content/uploads/asp_images/partners/logo-client-swissmarine.png', alt: "Asia Pacific Shipping's LPG carrier, Helena Kosan" }
  },
  leadership: {
    id: 'leadership',
    title: 'Leadership',
    href: '/about-us/leadership',
    description: 'Led by CEO Jakob Bode, our leadership team has many years of experience in shipping and maritime operations.',
    image: { url: '/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg', alt: "Asia Pacific Shipping's LPG Carrier" }
  },
  vmv: {
    id: 'vmv',
    title: 'Vision, Mission, Values',
    href: '/about-us/vision-mission-values',
    description: "Our Vision, Mission and Values serve as our guide as we aspire to be our customers' preferred partner for LPG and Petrochemicals transportation.",
    image: { url: '/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.jpg', alt: "Asia Pacific Shipping Crew" }
  },
  trades: {
    id: 'trades',
    title: 'Trades',
    href: '/about-us/trades',
    description: 'At Asia Pacific Shipping, we are a global business with a regional focus on last tonne-mile delivery.',
    image: { url: '/wp-content/uploads/asp_images/ships/sunshine.jpg', alt: "Asia Pacific Shipping LPG Carrier" }
  },
  overview: {
    id: 'overview',
    title: 'About Us (Overview)',
    href: '/about-us',
    description: 'Asia Pacific Shipping is the world leader in last-mile delivery of liquefied petroleum gas (LPG), petrochemicals and other speciality gases.',
    image: { url: '/wp-content/uploads/asp_images/about/history-03-first-tanker.png', alt: "Asia Pacific Shipping's LPG carrier, Katherine Kosan" }
  }
};

class MockCmsRepository implements CmsRepository {
  async getPageSection<K extends SectionKey>(pageSlug: string, sectionKey: K): Promise<PageSection<K> | null> {
    const pageData = MOCK_PAGE_SECTIONS[pageSlug];
    if (!pageData) return null;
    const section = pageData[sectionKey];
    if (!section) return null;
    return section as PageSection<K>;
  }
  
  async getSiteSettings(): Promise<SiteSettings> {
    return MOCK_SITE_SETTINGS;
  }
  
  async getNavigation(): Promise<NavigationItem[]> {
    return MOCK_NAVIGATION.sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getFleetVessels(): Promise<FleetVessel[]> {
    return Object.values(MOCK_FLEET_VESSELS).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getLatestNews(): Promise<NewsArticle[]> {
    return Object.values(MOCK_NEWS_ARTICLES);
  }

  async getFooterSection(): Promise<FooterSectionContent> {
    return MOCK_FOOTER_CONTENT;
  }
  async getServiceFaqs(serviceSlug: string): Promise<ServiceFaq[]> {
    return MOCK_FAQS[serviceSlug] || [];
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    return MOCK_SERVICES[slug] || null;
  }

  async getServices(): Promise<Service[]> {
    return Object.values(MOCK_SERVICES).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getPartners(): Promise<Partner[]> {
    return MOCK_PARTNERS.sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getRelatedServices(serviceSlug: string): Promise<Service[]> {
    const slugs = MOCK_RELATED_SERVICES[serviceSlug] || [];
    return slugs.map(s => MOCK_SERVICES[s]).filter(Boolean);
  }

  async getSharedLabels(): Promise<SharedLabels> {
    return MOCK_SHARED_LABELS;
  }
}

export const cmsRepository: CmsRepository = new MockCmsRepository();
