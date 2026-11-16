import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import { getCmsRepository } from '@/data/cms/getCmsRepository';
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

export default async function WhatWeDoHubPage() {
  const cmsRepository = await getCmsRepository();
  const heroContent = await cmsRepository.getPageSection('what-we-do', 'hero');
  const introContent = await cmsRepository.getPageSection('what-we-do', 'hub_intro');
  const partnersContent = await cmsRepository.getPageSection('what-we-do', 'hub_partners');
  const exploreContent = await cmsRepository.getPageSection('what-we-do', 'hub_explore');
  const services = await cmsRepository.getServices();
  const partners = await cmsRepository.getPartners();
  const labels = await cmsRepository.getSharedLabels();

  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
        <ServiceBreadcrumb />
        <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
          
          {heroContent && <ServicePageHero content={heroContent.content} />}
          
          <Divider />

          {/* 01 - INTRO */}
          {introContent && (
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
                        <p>{introContent.content.body1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="layout layout-column layout-page col-12 col-lg-6 col-xl-5 col-xxl-4 offset-xl-1 offset-xxl-2">
                <div className="layout layout-subheader layout-page">
                  <div className="layout-inner">
                    <h3 className="heading h5 u-mb-3 subheading u-text-color-primary u-mb-0">
                      {introContent.content.heading}
                    </h3>
                  </div>
                </div>
                <div className="layout layout-content layout-page">
                  <div className="layout-inner">
                    <div className="content-width left">
                      <p>{introContent.content.body2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          )}

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
                  {partners.map((partner, idx) => (
                    <div key={`orig-${idx}`} className="trusted-partner-card">
                      <img src={partner.logo.url} alt={partner.logo.alt || partner.name} className="trusted-partner-img" style={{ objectFit: "contain" }} />
                    </div>
                  ))}
                  {partners.map((partner, idx) => (
                    <div key={`dup-${idx}`} className="trusted-partner-card" aria-hidden="true">
                      <img src={partner.logo.url} alt={partner.logo.alt || partner.name} className="trusted-partner-img" style={{ objectFit: "contain" }} />
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
                  display: grid;
                  grid-auto-rows: 1fr;
                  border: 1px solid #eaeaea;
                  border-bottom: none;
                  margin-bottom: 2rem;
                  border-radius: 4px;
                  overflow: hidden;
                  width: 100%;
                }
                .service-checker-row {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  width: 100%;
                  height: 100%;
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
                }
                @media (max-width: 991px) {
                  .service-checker-grid {
                    display: block;
                  }
                  .service-checker-row {
                    grid-template-columns: 1fr;
                    height: auto;
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
                {services.map((svc, idx) => {
                  const isImageRight = idx % 2 === 0;
                  return (
                    <div key={svc.name} className="service-checker-row">
                      <div className="service-grid-text" style={{ order: isImageRight ? 1 : 2 }}>
                        <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>{svc.name}</span>
                        <h2 className="heading h3 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" style={{ fontWeight: 400 }}>
                          {svc.name}
                        </h2>
                        <div className="content-width u-mt-4 u-mb-4">
                          <p>{svc.excerpt}</p>
                        </div>
                        <Link href={`/${svc.slug}`} className="asp-btn-outline">
                          Explore {svc.name}
                        </Link>
                      </div>
                      <div className="service-grid-image" style={{ order: isImageRight ? 2 : 1 }}>
                        <Image 
                          src={svc.heroImage.url}
                          alt={svc.name}
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
            {exploreContent && (
            <section className="layout layout-page layout-root u-pb-5">
              <div className="layout-inner">
                <div className="row u-mb-5 justify-content-center text-center">
                  <div className="col-12 col-lg-8">
                    <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                      {exploreContent.content.eyebrow}
                    </h2>
                    <div className="section-lead-content u-h4 u-mb-0">
                      <p>{exploreContent.content.heading}</p>
                    </div>
                    <p className="u-mt-3 content-width mx-auto">
                      {exploreContent.content.intro}
                    </p>
                  </div>
                </div>
  
                <div className="row u-gy-4 u-gx-4 u-gx-lg-5">
                  {exploreContent.content.cards.map((item, idx) => (
                    <div key={idx} className="col-12 col-md-6 col-lg-4 u-mb-4 u-mb-lg-0">
                      <div className="explore-card">
                        <h3 className="heading h6 u-mb-3 u-font-weight-bold u-text-color-primary">{item.title}</h3>
                        <p className="u-mb-4" style={{ flexGrow: 1, color: '#444444' }}>{item.description}</p>
                        <Link href={item.href} className="asp-btn-outline">
                          {item.ctaLabel}
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
                .asp-btn-outline {
                  display: inline-block;
                  color: #007236 !important;
                  font-weight: 600;
                  text-decoration: none;
                  padding: 0.75rem 1.75rem;
                  border: 1px solid #007236;
                  border-radius: 4px;
                  background-color: #ffffff;
                  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
                  margin-top: auto;
                  align-self: flex-start;
                }
                .asp-btn-outline:hover {
                  background-color: #007236;
                  border-color: #007236;
                  color: #ffffff !important;
                }
              `}</style>
            </section>
            )}
        </main>
      </div>
      <Footer />
    </>
  );
}
