import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What We Do | ASP Shipping',
  description: 'Commercial judgment, technical discipline and operational care across every stage of a vessel\'s lifecycle. We provide end-to-end maritime services.',
};

const Divider = () => (
  <div className="layout layout-spacer layout-page layout-root">
    <div className="layout-inner">
      <div className="spacer spacer-medium"></div>
    </div>
    <div className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
      <div className="layout-inner container container-max">
        <hr className="u-my-0" style={{ borderTop: '1px solid #e5e5e5' }} />
      </div>
    </div>
    <div className="layout-inner">
      <div className="spacer spacer-medium"></div>
    </div>
  </div>
);

const SectionLead = ({ title, heading, description }: { title: string, heading: string, description: string }) => (
  <>
    <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
      {title}
    </h2>
    <div className="section-lead-content u-h4 u-mb-4">
      <p dangerouslySetInnerHTML={{ __html: heading }} />
    </div>
    <div className="content-width">
      <p>{description}</p>
    </div>
  </>
);

export default function WhatWeDoHubPage() {
  const trustedPartners = Array.from({ length: 8 }).map((_, idx) => ({
    id: idx + 1,
    name: `Partner ${idx + 1}`,
    logo: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"><text x="100" y="45" font-family="sans-serif" font-weight="600" font-size="16" fill="%23a0a0a0" text-anchor="middle">PARTNER ${idx + 1}</text></svg>`,
    href: '#'
  }));

  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
        <ServiceBreadcrumb />
        <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
          
          <ServicePageHero 
            title="What We Do" 
            imageSrc="/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp"
            imageAlt="Asia Pacific Shipping Operations"
          />
          
          <Divider />

          {/* 01 - INTRO */}
          <section className="layout layout-two-columns layout-page layout-root layout-columns layout-two-columns-6x4">
            <div className="layout-inner layout-row row">
              <div className="layout layout-column layout-page col-12 col-lg-6">
                <div className="layout layout-section-lead layout-page">
                  <div className="layout-inner">
                    <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                      What We Do
                    </h2>
                    <div className="section-lead-content u-h4">
                      <div className="content-width">
                        <p>Asia Pacific Shipping provides integrated maritime solutions across the vessel lifecycle, combining commercial insight, technical expertise and operational discipline to support safe, efficient and reliable shipping.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="layout layout-column layout-page col-12 col-lg-6 col-xl-5 col-xxl-4 offset-xl-1 offset-xxl-2">
                <div className="layout layout-subheader layout-page">
                  <div className="layout-inner">
                    <h3 className="heading h5 u-mb-3 subheading u-text-color-primary u-mb-0">
                      Our Approach
                    </h3>
                  </div>
                </div>
                <div className="layout layout-content layout-page">
                  <div className="layout-inner">
                    <div className="content-width left">
                      <p>Our approach is built around practical execution, close collaboration and long-term value. We work with owners, crews and partners to respond to operational needs, maintain high standards and support dependable performance across changing market conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 01.5 - TRUSTED RELATIONSHIPS */}
          <section className="layout layout-page layout-root u-py-5" style={{ backgroundColor: '#ffffff' }}>
            <div className="layout-inner">
              {/* Heading Row */}
              <div 
                className="u-mb-4"
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  justifyContent: 'space-between', 
                  alignItems: 'flex-end',
                  gap: '1rem'
                }}
              >
                <h2 className="heading h5 subheading u-text-color-primary u-mb-0" style={{ margin: 0, flex: '1 1 auto' }}>
                  Trusted by leading charterers &amp; traders
                </h2>
                <span className="u-text-size-small u-font-weight-bold u-text-uppercase" style={{ letterSpacing: '0.12em', color: '#666666', flex: '0 0 auto' }}>
                  Selected Market Relationships
                </span>
              </div>

              {/* Marquee Row */}
              <div className="trusted-marquee-wrapper">
                <div className="trusted-marquee-track">
                  {trustedPartners.map((partner, idx) => (
                    <div key={`orig-${idx}`} className="trusted-partner-card">
                      <img src={partner.logo} alt={partner.name} className="trusted-partner-img" />
                    </div>
                  ))}
                  {trustedPartners.map((partner, idx) => (
                    <div key={`dup-${idx}`} className="trusted-partner-card" aria-hidden="true">
                      <img src={partner.logo} alt={partner.name} className="trusted-partner-img" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <style>{`
              .trusted-marquee-wrapper {
                overflow: hidden;
                position: relative;
                width: 100%;
                /* Soft edge masking for smooth entry/exit */
                mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
                -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
              }
              .trusted-marquee-track {
                display: flex;
                gap: 2rem;
                align-items: center;
                animation: trusted-scroll 45s linear infinite;
                width: max-content;
              }
              .trusted-marquee-wrapper:hover .trusted-marquee-track {
                animation-play-state: paused;
              }
              .trusted-partner-card {
                flex: 0 0 auto;
                width: 190px;
                height: 90px;
                background-color: #ffffff;
                border: 1px solid #eaeaea;
                border-radius: 2px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
              }
              .trusted-partner-img {
                max-width: 85%;
                max-height: 65%;
                width: auto;
                height: auto;
                object-fit: contain;
                opacity: 0.9;
                transition: opacity 0.2s ease;
              }
              .trusted-partner-card:hover .trusted-partner-img {
                opacity: 1;
              }
              @keyframes trusted-scroll {
                0% { transform: translateX(0); }
                /* Shift by exactly 50% of the duplicated track width minus half the gap */
                100% { transform: translateX(calc(-50% - 1rem)); }
              }
              @media (max-width: 991px) {
                .trusted-partner-card {
                  width: 160px;
                  height: 85px;
                }
              }
              @media (prefers-reduced-motion: reduce) {
                .trusted-marquee-track {
                  animation: none;
                  flex-wrap: wrap;
                  justify-content: center;
                  width: 100%;
                }
                .trusted-marquee-wrapper {
                  mask-image: none;
                  -webkit-mask-image: none;
                  overflow: visible;
                }
              }
            `}</style>
          </section>

          <Divider />

          {/* 02 - SERVICE GRID */}
          <section className="layout layout-page layout-root u-pb-5">
            <div className="layout-inner">
              <style>{`
                .service-checker-grid {
                  border: 1px solid #eaeaea;
                  border-bottom: none;
                  margin-bottom: 2rem;
                  border-radius: 4px;
                  overflow: hidden;
                }
                .service-checker-row {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  width: 100%;
                  border-bottom: 1px solid #eaeaea;
                }
                .service-grid-text {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  padding: 3rem 4rem;
                  background-color: #ffffff;
                }
                .service-grid-image {
                  position: relative;
                  width: 100%;
                  height: 100%;
                  aspect-ratio: 16 / 9;
                }
                @media (max-width: 991px) {
                  .service-checker-row {
                    grid-template-columns: 1fr;
                  }
                  .service-grid-text {
                    padding: 2.5rem 1.5rem;
                    order: 2 !important;
                  }
                  .service-grid-image {
                    order: 1 !important;
                    aspect-ratio: 16 / 10;
                  }
                }
              `}</style>
              
              <div className="service-checker-grid">
                {[
                  {
                    id: '01',
                    title: 'Commercial Management',
                    desc: 'Employment strategy across time charter, spot voyage and pool partnerships, matching every vessel to the trade where it can perform best. By leveraging our deep market insights and robust operational framework, we ensure that every commercial arrangement maximizes fleet value. We work intimately with owners to secure optimal chartering terms, manage post-fixture operations diligently, and continuously optimize voyage earnings in a volatile global market.',
                    href: '/commercial-management',
                    img: '/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp'
                  },
                  {
                    id: '02',
                    title: 'Technical Management',
                    desc: 'Planned maintenance, dry-docking, performance, safety and regulatory oversight delivered through a disciplined, TMSA-aligned management system. Our proactive inspection regimes and continual performance monitoring ensure every ship operates safely, efficiently, and in full regulatory compliance. Through rigorous defect reporting, spare parts procurement, and expert superintendent oversight, we protect asset value and minimize off-hire time, maintaining the highest standard of vessel readiness.',
                    href: '/technical-management',
                    img: '/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp'
                  },
                  {
                    id: '03',
                    title: 'Marine Consultancy',
                    desc: 'Practical maritime advice for commercial planning, technical projects, compliance and fleet development, grounded in operating experience. We offer specialist advisory across the vessel lifecycle, from newbuilding supervision and S&P due diligence to ESG and decarbonisation strategy. Our technical experts provide customized, actionable insights that help shipping stakeholders navigate complex regulatory shifts, adopt future-proof technologies, and confidently make high-stakes commercial decisions.',
                    href: '/marine-consultancy',
                    img: '/wp-content/uploads/asp_images/about/history-03-first-tanker.png'
                  },
                  {
                    id: '04',
                    title: 'Crew Management',
                    desc: 'Recruitment, deployment, training and welfare for qualified seafarers, supporting safe operations and reliable performance on every voyage. We manage the complete seafarer journey with the discipline and care that maritime safety demands, ensuring retention and continued skill development. By maintaining a robust talent pool and emphasizing continuous onboard training, we supply vessels with highly competent and motivated crews capable of handling complex operations.',
                    href: '/crew-management',
                    img: '/wp-content/uploads/asp_images/ships/asp-maple.jpg'
                  },
                  {
                    id: '05',
                    title: 'Sea Transportation',
                    desc: 'Flexible sea transportation across clean and dirty petroleum products, LPG and chemical cargoes, delivered with disciplined planning and cargo care. Our robust safety management and route optimisation connect producers to buyers reliably across global trade corridors. We operate a versatile fleet designed for maximum cargo flexibility, ensuring safe, on-time delivery while adhering strictly to the highest international environmental and industry standards.',
                    href: '/sea-transportation',
                    img: '/wp-content/uploads/asp_images/ships/asp-titan-aerial-aft.webp'
                  }
                ].map((svc, idx) => {
                  const isImageRight = idx % 2 === 0;
                  return (
                    <div key={svc.id} className="service-checker-row">
                      <div className="service-grid-text" style={{ order: isImageRight ? 1 : 2 }}>
                        <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>{svc.id}</span>
                        <h2 className="heading h3 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" style={{ fontWeight: 400 }}>
                          {svc.title}
                        </h2>
                        <div className="content-width u-mt-4 u-mb-4">
                          <p>{svc.desc}</p>
                        </div>
                        <Link href={svc.href} style={{ color: '#007236', fontWeight: 600, textDecoration: 'none' }}>
                          Explore {svc.title} &rarr;
                        </Link>
                      </div>
                      <div className="service-grid-image" style={{ order: isImageRight ? 2 : 1 }}>
                        <Image 
                          src={svc.img}
                          alt={svc.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 08 - EXPLORE ASP */}
          <section className="layout layout-page layout-root u-pb-5">
            <div className="layout-inner">
              <div className="row u-mb-5 justify-content-center text-center">
                <div className="col-12 col-lg-8">
                  <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                    Explore ASP
                  </h2>
                  <div className="section-lead-content u-h4 u-mb-0">
                    <p>Discover More About Asia Pacific Shipping</p>
                  </div>
                  <p className="u-mt-3 content-width mx-auto">
                    Learn about our heritage, explore our fleet, and understand our commitment to sustainable maritime operations.
                  </p>
                </div>
              </div>

              <div className="row u-gy-4 u-gx-4 u-gx-lg-5">
                {[
                  { title: 'About Us', desc: 'Discover our history, leadership, and the values that drive our approach to maritime services.', href: '/about-us' },
                  { title: 'Our Fleet', desc: 'Explore the modern vessels we operate across commercial, technical, and transportation sectors.', href: '/our-fleet' },
                  { title: 'Sustainability', desc: 'Read about our environmental policies, social commitments, and decarbonisation pathway.', href: '/sustainability' },
                  { title: 'Media', desc: 'Latest news, press releases, articles, and insights from across the ASP shipping network.', href: '/media' },
                  { title: 'Careers', desc: 'Join our team. Opportunities for seafarers and shore-based maritime professionals.', href: '/careers' },
                  { title: 'Contact Us', desc: 'Get in touch with our global offices to discuss your specific maritime requirements.', href: '/contact-us' }
                ].map((item, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-4 u-mb-4 u-mb-lg-0">
                    <div className="explore-card">
                      <h3 className="heading h6 u-mb-3 u-font-weight-bold u-text-color-primary">{item.title}</h3>
                      <p className="u-mb-4" style={{ flexGrow: 1, color: '#444444' }}>{item.desc}</p>
                      <Link href={item.href} className="explore-card-link">
                        {item.title === 'Contact Us' ? 'Contact Us' : `Explore ${item.title}`} &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <style>{`
              .explore-card {
                height: 100%;
                display: flex;
                flex-direction: column;
                padding: 2.5rem;
                background-color: #ffffff;
                border: 1px solid #eaeaea;
                transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
              }
              .explore-card:hover {
                transform: translateY(-4px);
                border-color: #007236;
                box-shadow: 0 12px 32px rgba(0, 0, 0, 0.05);
              }
              .explore-card-link {
                color: #007236;
                font-weight: 600;
                text-decoration: none;
                display: inline-block;
                transition: color 0.2s ease;
              }
              .explore-card:hover .explore-card-link {
                color: #005628;
              }
            `}</style>
          </section>

          <Divider />
        </main>
      </div>
      <Footer />
    </>
  );
}
