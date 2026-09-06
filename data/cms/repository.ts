import { PageSection, SectionKey, ServiceFaq, Service, Partner, SharedLabels, SectionContentMap, SiteSettings, NavigationItem, FleetVessel, NewsArticle, VideoMediaRef, HomeHeroSectionContent, HomeAboutSectionContent, HomeStatisticsSectionContent, HomeFleetSectionContent, ChairmanMessageSectionContent, HomeLatestNewsSectionContent, HomeSustainabilitySectionContent, HomeNewsletterSectionContent, FooterSectionContent } from './types';


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
    id: 'news-1',
    slug: 'fleet-expansion',
    title: "ASP Successfully Takes Delivery of Vietnam's First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers",
    excerpt: "ASP has taken delivery of the ASP LUNA and ASP SOLAR, strengthening our position in sustainable shipping.",
    date: "14 Feb 2026",
    category: "Press Releases",
    image: { url: "/wp-content/uploads/asp_images/news/fleet-expansion.jpg", alt: "Fleet Expansion" }
  },
  "safety-milestone": {
    id: 'news-2',
    slug: 'safety-milestone',
    title: "ASP Achieves 1 Million LTI-Free Man Hours Across Fleet",
    excerpt: "Our commitment to safety culture and rigorous operational standards has resulted in a major safety milestone.",
    date: "14 Feb 2026",
    category: "Events",
    image: { url: "/wp-content/uploads/asp_images/news/safety-meeting.jpg", alt: "Safety Meeting" }
  },
  "new-hq": {
    id: 'news-3',
    slug: 'new-hq',
    title: "ASP Opens New Maritime Operations Center in Hanoi",
    excerpt: "The new facility integrates real-time fleet monitoring and commercial operations to enhance service delivery.",
    date: "14 Feb 2026",
    category: "Press Releases",
    image: { url: "/wp-content/uploads/asp_images/news/office-opening.jpg", alt: "Office Opening" }
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

  home: {
      home_hero: {
      id: 'sec-home-hero',
      pageSlug: 'home',
      sectionKey: 'home_hero',
      content: {
        title: 'Turning vision into <span style="color: var(--asp-signal) !important;">value</span>',
        description: 'Asia Pacific Shipping is a leading independent owner and operator of modern tankers and bulk carriers across the region. We are headquartered in Hanoi, delivering safe, reliable and efficient maritime logistics solutions to customers worldwide.',
        videos: [
          { url: '/ASP_LUNA_1.mp4' },
          { url: '/ASP_LUNA_2.mp4' }
        ],
        fallbackImage: { url: '/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png', alt: 'Asia Pacific Shipping' }
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
      sectionKey: 'home_news',
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
          "url": "/wp-content/uploads/asp_images/ships/tanker-forward-course.webp",
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
