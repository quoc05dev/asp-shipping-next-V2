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
  title: 'Sea Transportation | ASP Shipping',
  description: 'Safe and reliable transportation of liquefied petroleum gas, petrochemicals and speciality gases across global trade routes, connecting producers to markets.',
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

export default async function SeaTransportationPage() {
  const heroContent = await cmsRepository.getPageSection('sea-transportation', 'hero');
  const primaryIntroContent = await cmsRepository.getPageSection('sea-transportation', 'primary_intro');
  const hwwContent = await cmsRepository.getPageSection('sea-transportation', 'how_we_work');
  const capContent = await cmsRepository.getPageSection('sea-transportation', 'capabilities');
  const hlContent = await cmsRepository.getPageSection('sea-transportation', 'highlights');
  const opsContent = await cmsRepository.getPageSection('sea-transportation', 'sea_operations');
  const faqContent = await cmsRepository.getPageSection('sea-transportation', 'faq');
  const faqItems = await cmsRepository.getServiceFaqs('sea-transportation');
  const relatedServices = await cmsRepository.getRelatedServices('sea-transportation');
  const labels = await cmsRepository.getSharedLabels();
  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
      <ServiceBreadcrumb serviceName="Sea Transportation" />
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
        {capContent && (
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5">
              <div className="col-12 col-lg-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  {capContent.content.eyebrow}
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>{capContent.content.heading}</p>
                </div>
                <div className="content-width u-mt-3">
                  <p>{capContent.content.intro}</p>
                </div>
              </div>
            </div>
            
            <div className="row u-gy-4 u-gx-5 mt-4">
              {capContent.content.capabilities.map((cap, idx) => (
                <div key={idx} className="col-12 col-md-4">
                  <div style={{ paddingRight: idx < 2 ? '1rem' : '0', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                    <h3 className="heading h6 u-mb-3 u-font-weight-bold" dangerouslySetInnerHTML={{ __html: cap.title }} />
                    <p className="u-mb-0" dangerouslySetInnerHTML={{ __html: cap.description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        <Divider />
        {/* 03 - HOW WE WORK */}
        {hwwContent && <HowWeWorkSection content={hwwContent.content} />}

                <Divider />

        {/* 04 - KEY HIGHLIGHTS */}
        {hlContent && (
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5 justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  {hlContent.content.eyebrow}
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>{hlContent.content.heading}</p>
                </div>
              </div>
            </div>
            
            <div className="row u-gy-4 u-gx-4">
              {hlContent.content.highlights.map((hl, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <div className="card u-h-100 u-border home-service-card" style={{ border: "1px solid #e5e5e5", padding: "2.5rem 2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}>
                    <div className="card-body p-0">
                      <h3 className="heading h6 u-mb-3 u-font-weight-bold u-text-color-primary" dangerouslySetInnerHTML={{ __html: hl.title }} />
                      <p className="u-mb-0" dangerouslySetInnerHTML={{ __html: hl.description }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        <Divider />

        {/* 05 - VOYAGE OPERATIONS */}
        {opsContent && (
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5 align-items-end">
              <div className="col-12 col-md-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  {opsContent.content.eyebrow}
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>{opsContent.content.heading}</p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-4">
              {opsContent.content.items.map((role, idx) => (
                <div key={idx} className="col-12 col-md-4">
                  <div className="card card-page-link u-border-radius u-overflow-hidden u-h-100 home-service-card" style={{ border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', flexShrink: 0 }}>
                      <Image src={role.image.url} alt={role.image.alt} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="card-body u-px-4 u-py-4" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#6c757d', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }} dangerouslySetInnerHTML={{ __html: role.type }} />
                      <h3 className="heading h5 u-mb-2 u-text-color-black" dangerouslySetInnerHTML={{ __html: role.name }} />
                      <p style={{ color: '#4a4a4a', fontSize: '0.95rem', lineHeight: 1.5 }} className="u-mb-4" dangerouslySetInnerHTML={{ __html: role.description }}></p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e5e5e5', paddingTop: '1rem', marginTop: 'auto' }}>
                        <div>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Focus</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a' }} dangerouslySetInnerHTML={{ __html: role.focus }} />
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Scope</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a' }} dangerouslySetInnerHTML={{ __html: role.scope }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

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
