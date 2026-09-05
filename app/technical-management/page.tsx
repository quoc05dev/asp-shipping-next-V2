import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import RelatedServices from '@/components/what-we-do/RelatedServices';
import FaqSection from '@/components/what-we-do/FaqSection';
import { cmsRepository } from '@/data/cms/repository';
import HowWeWorkSection from '@/components/what-we-do/HowWeWorkSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Management | ASP Shipping',
  description: 'Rigorous standards in planned maintenance, TMSA compliance, and vessel performance monitoring to keep every ship operating at its highest capability.',
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

export default async function TechnicalManagementPage() {
  const heroContent = await cmsRepository.getPageSection('technical-management', 'hero');
  const primaryIntroContent = await cmsRepository.getPageSection('technical-management', 'primary_intro');
  const hwwContent = await cmsRepository.getPageSection('technical-management', 'how_we_work');
  const faqContent = await cmsRepository.getPageSection('technical-management', 'faq');
  const faqItems = await cmsRepository.getServiceFaqs('technical-management');
  const relatedServices = await cmsRepository.getRelatedServices('technical-management');
  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
      <ServiceBreadcrumb serviceName="Technical Management" />
      <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

        {heroContent && <ServicePageHero content={heroContent.content} />}

        <Divider />

        {/* 01 - INTRO */}
        <section className="layout layout-page layout-root">
          <style>{`
            .intro-img-wrap {
              position: relative;
              width: 100%;
              aspect-ratio: 16/10;
              border-radius: 4px;
              overflow: hidden;
            }
            @media (min-width: 992px) {
              .intro-img-wrap {
                aspect-ratio: auto;
                height: 100%;
              }
            }
          `}</style>
          <div className="layout-inner">
            <div className="row u-gy-4 u-gx-5 align-items-stretch">
              <div className="col-12 col-lg-6">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0 u-mt-0">{primaryIntroContent?.content.eyebrow}</h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p className="u-mt-0" dangerouslySetInnerHTML={{ __html: primaryIntroContent?.content.heading || '' }} />
                </div>
                <div className="content-width">
                  <p className="u-mb-0" dangerouslySetInnerHTML={{ __html: primaryIntroContent?.content.body || '' }} />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="intro-img-wrap">
                  <Image 
                    src={primaryIntroContent?.content.image.url || ''}
                    alt={primaryIntroContent?.content.image.alt || ''}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 02 - OUR SERVICES */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5">
              <div className="col-12 col-lg-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Our Services
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Core disciplines of fleet management</p>
                </div>
                <div className="content-width u-mt-3">
                  <p>
                    We deliver an integrated suite of technical services — from planned maintenance to dry-docking — built around the operational reality of keeping vessels earning.
                  </p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-5 mt-4">
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">TMSA &amp; Vetting</h3>
                  <p className="u-mb-0">Our fleet complies rigorously with TMSA standards and the ISM Code, maintained in a state of readiness to pass SIRE and CDI inspections by leading oil major operators at any time.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Planned Maintenance &amp; Dry-docking</h3>
                  <p className="u-mb-0">Modern Planned Maintenance Systems enable early detection of risk before failures occur. We optimise every dry-docking item to minimise off-hire time and control costs with precision.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Vessel Performance Monitoring</h3>
                  <p className="u-mb-0">Real-time ship-to-shore data acquisition tracks speed, fuel consumption and machinery condition continuously — enabling immediate adjustments that reduce emissions and increase voyage efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 03 - HOW WE WORK */}
        {hwwContent && <HowWeWorkSection content={hwwContent.content} />}

                <Divider />

        {/* 04 - KEY HIGHLIGHTS */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5 justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Key Technical Highlights
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Reliability driven by discipline</p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-4">
              {[
                { title: 'Oil Major Approved', desc: 'Fleet maintained in continual readiness for SIRE and CDI vetting by leading charterers and oil major operators worldwide.' },
                { title: 'Performance Analytics', desc: 'Ship-to-shore sensor integration and real-time data monitoring drive fuel efficiency and machinery condition benchmarking on every voyage.' },
                { title: 'Proactive Maintenance', desc: 'Structured PMS identifies risks early, reducing unplanned repairs, minimising off-hire and extending the operational life of each vessel.' },
                { title: 'Class &amp; Regulatory Compliance', desc: 'All statutory, flag state and classification society requirements are tracked, planned and executed on schedule without exception.' },
              ].map((hl, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <div className="card u-h-100 u-border home-service-card" style={{ border: '1px solid #e5e5e5', padding: '2.5rem 2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                    <div className="card-body p-0">
                      <h3 className="heading h6 u-mb-3 u-font-weight-bold u-text-color-primary" dangerouslySetInnerHTML={{ __html: hl.title }} />
                      <p className="u-mb-0">{hl.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

                {/* 05 - TECHNICAL DISCIPLINES */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5 align-items-end">
              <div className="col-12 col-md-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Technical Disciplines
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Core areas of our technical management</p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-4">
              {[
                { 
                  name: `Planned Maintenance`, 
                  type: `Maintenance Planning`, 
                  focus: `Maintenance`, 
                  detail: `Vessel Systems`, 
                  img: '/wp-content/uploads/asp_images/ships/asp-luna-turning.webp',
                  description: `Maintenance planning supports vessel reliability by organizing machinery, equipment and inspection requirements around the vessel’s operating schedule. A structured approach helps technical teams identify priorities and coordinate work before issues affect operations.`
                },
                { 
                  name: `Performance &amp; Reliability`, 
                  type: `Technical Oversight`, 
                  focus: `Reliability`, 
                  detail: `Performance Monitoring`, 
                  img: '/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp',
                  description: `Technical oversight considers equipment condition, operational performance and reported defects across the vessel. Continuous review supports timely technical decisions and helps maintain safe and dependable ship operations.`
                },
                { 
                  name: `Dry-Docking &amp; Compliance`, 
                  type: `Compliance &amp; Projects`, 
                  focus: `Project Planning`, 
                  detail: `Dry-Docking &amp; Compliance`, 
                  img: '/wp-content/uploads/asp_images/ships/maple-cedar.jpg',
                  description: `Technical projects require careful preparation, coordination and review across maintenance, inspection and regulatory requirements. Structured planning helps vessels complete major work while maintaining appropriate technical and operational standards.`
                },
              ].map((role, idx) => (
                <div key={idx} className="col-12 col-md-4">
                  <div className="card card-page-link u-border-radius u-overflow-hidden u-h-100 home-service-card" style={{ border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', flexShrink: 0 }}>
                      <Image src={role.img} alt={role.name.replace(/&amp;/g, '&')} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="card-body u-px-4 u-py-4" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#6c757d', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }} dangerouslySetInnerHTML={{ __html: role.type }} />
                      <h3 className="heading h5 u-mb-2 u-text-color-black" dangerouslySetInnerHTML={{ __html: role.name }} />
                      <p style={{ color: '#4a4a4a', fontSize: '0.95rem', lineHeight: 1.5 }} className="u-mb-4">{role.description}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e5e5e5', paddingTop: '1rem', marginTop: 'auto' }}>
                        <div>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Focus</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a' }} dangerouslySetInnerHTML={{ __html: role.focus }} />
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Scope</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a' }} dangerouslySetInnerHTML={{ __html: role.detail }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* 07 - FAQ */}
        {faqContent && <FaqSection content={faqContent.content} items={faqItems} />}

        <Divider />

        {/* 06 - RELATED SERVICES */}
        <RelatedServices services={relatedServices} />
      </main>
      </div>
      <Footer />
    </>
  );
}
