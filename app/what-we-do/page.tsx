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
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-gy-4 u-gx-5 align-items-center">
                <div className="col-12 col-lg-6">
                  <SectionLead 
                    title="What We Do"
                    heading="Maritime Solutions"
                    description="Commercial judgment, technical discipline and operational care across every stage of a vessel's lifecycle. We provide end-to-end maritime services, ensuring optimal performance, stringent regulatory compliance, and sustainable operations worldwide. Our dedicated team of experts works closely with partners to navigate the complexities of global shipping and deliver exceptional, reliable value."
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image 
                      src="/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png"
                      alt="ASP Maritime Solutions"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 02 - SERVICE INDEX */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-gy-4 justify-content-center">
                {[
                  { id: '01', title: 'Commercial Management', href: '/commercial-management' },
                  { id: '02', title: 'Technical Management', href: '/technical-management' },
                  { id: '03', title: 'Marine Consultancy', href: '/marine-consultancy' },
                  { id: '04', title: 'Crew Management', href: '/crew-management' },
                  { id: '05', title: 'Sea Transportation', href: '/sea-transportation' }
                ].map((svc, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-4 mb-3">
                    <Link href={svc.href} style={{ textDecoration: 'none', display: 'block', paddingBottom: '1rem', borderBottom: '1px solid #e5e5e5', height: '100%' }}>
                      <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '0.25rem' }}>{svc.id}</span>
                      <h3 className="heading h6 u-mb-0 u-font-weight-bold u-text-color-primary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {svc.title}
                        <span style={{ color: '#007236' }}>&rarr;</span>
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* 03 - COMMERCIAL PREVIEW */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-gy-4 u-gx-5 align-items-center">
                <div className="col-12 col-lg-6">
                  <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>01</span>
                  <h2 className="heading h3 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" style={{ fontWeight: 400 }}>
                    Commercial Management
                  </h2>
                  <div className="content-width u-mt-4 u-mb-4">
                    <p>
                      Employment strategy across time charter, spot voyage and pool partnerships, matching every vessel to the trade where it can perform best. By leveraging our deep market insights and robust operational framework, we ensure that every commercial arrangement maximizes fleet value.
                    </p>
                  </div>
                  <Link href="/commercial-management" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none' }}>
                    Explore Commercial Management &rarr;
                  </Link>
                </div>
                <div className="col-12 col-lg-6">
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image 
                      src="/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp"
                      alt="Commercial Management"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 04 - TECHNICAL PREVIEW */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-gy-4 u-gx-5 align-items-center flex-lg-row-reverse">
                <div className="col-12 col-lg-6">
                  <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>02</span>
                  <h2 className="heading h3 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" style={{ fontWeight: 400 }}>
                    Technical Management
                  </h2>
                  <div className="content-width u-mt-4 u-mb-4">
                    <p>
                      Planned maintenance, dry-docking, performance, safety and regulatory oversight delivered through a disciplined, TMSA-aligned management system. Our proactive inspection regimes and continual performance monitoring ensure every ship operates safely, efficiently, and in full regulatory compliance.
                    </p>
                  </div>
                  <Link href="/technical-management" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none' }}>
                    Explore Technical Management &rarr;
                  </Link>
                </div>
                <div className="col-12 col-lg-6">
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image 
                      src="/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp"
                      alt="Technical Management"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 05 - MARINE CONSULTANCY PREVIEW */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-gy-4 u-gx-5 align-items-center">
                <div className="col-12 col-lg-6">
                  <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>03</span>
                  <h2 className="heading h3 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" style={{ fontWeight: 400 }}>
                    Marine Consultancy
                  </h2>
                  <div className="content-width u-mt-4 u-mb-4">
                    <p>
                      Practical maritime advice for commercial planning, technical projects, compliance and fleet development, grounded in operating experience. We offer specialist advisory across the vessel lifecycle, from newbuilding supervision and S&amp;P due diligence to ESG and decarbonisation strategy.
                    </p>
                  </div>
                  <Link href="/marine-consultancy" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none' }}>
                    Explore Marine Consultancy &rarr;
                  </Link>
                </div>
                <div className="col-12 col-lg-6">
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image 
                      src="/wp-content/uploads/asp_images/about/history-03-first-tanker.png"
                      alt="Marine Consultancy"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 06 - CREW MANAGEMENT PREVIEW */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-gy-4 u-gx-5 align-items-center flex-lg-row-reverse">
                <div className="col-12 col-lg-6">
                  <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>04</span>
                  <h2 className="heading h3 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" style={{ fontWeight: 400 }}>
                    Crew Management
                  </h2>
                  <div className="content-width u-mt-4 u-mb-4">
                    <p>
                      Recruitment, deployment, training and welfare for qualified seafarers, supporting safe operations and reliable performance on every voyage. We manage the complete seafarer journey with the discipline and care that maritime safety demands, ensuring retention and continued skill development.
                    </p>
                  </div>
                  <Link href="/crew-management" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none' }}>
                    Explore Crew Management &rarr;
                  </Link>
                </div>
                <div className="col-12 col-lg-6">
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image 
                      src="/wp-content/uploads/asp_images/ships/asp-maple.jpg"
                      alt="Crew Management"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 07 - SEA TRANSPORTATION PREVIEW */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-gy-4 u-gx-5 align-items-center">
                <div className="col-12 col-lg-6">
                  <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>05</span>
                  <h2 className="heading h3 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" style={{ fontWeight: 400 }}>
                    Sea Transportation
                  </h2>
                  <div className="content-width u-mt-4 u-mb-4">
                    <p>
                      Flexible sea transportation across clean and dirty petroleum products, LPG and chemical cargoes, delivered with disciplined planning and cargo care. Our robust safety management and route optimisation connect producers to buyers reliably across global trade corridors.
                    </p>
                  </div>
                  <Link href="/sea-transportation" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none' }}>
                    Explore Sea Transportation &rarr;
                  </Link>
                </div>
                <div className="col-12 col-lg-6">
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image 
                      src="/wp-content/uploads/asp_images/ships/asp-titan-aerial-aft.webp"
                      alt="Sea Transportation"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

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

              <div className="row u-gy-4 u-gx-5">
                {[
                  { title: 'About Us', desc: 'Discover our history, leadership, and the values that drive our approach to maritime services.', href: '/about-us' },
                  { title: 'Our Fleet', desc: 'Explore the modern vessels we operate across commercial, technical, and transportation sectors.', href: '/our-fleet' },
                  { title: 'Sustainability', desc: 'Read about our environmental policies, social commitments, and decarbonisation pathway.', href: '/sustainability' },
                  { title: 'Media', desc: 'Latest news, press releases, articles, and insights from across the ASP shipping network.', href: '/media' },
                  { title: 'Careers', desc: 'Join our team. Opportunities for seafarers and shore-based maritime professionals.', href: '/careers' },
                  { title: 'Contact Us', desc: 'Get in touch with our global offices to discuss your specific maritime requirements.', href: '/contact-us' }
                ].map((item, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-4">
                    <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #e5e5e5', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <h3 className="heading h6 u-mb-3 u-font-weight-bold u-text-color-primary">{item.title}</h3>
                      <p className="u-mb-4" style={{ flexGrow: 1 }}>{item.desc}</p>
                      <Link href={item.href} style={{ color: '#007236', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
                        {item.title === 'Contact Us' ? 'Contact Us' : `Explore ${item.title}`} &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />
        </main>
      </div>
      <Footer />
    </>
  );
}
