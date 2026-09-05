import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import RelatedServices from '@/components/what-we-do/RelatedServices';
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

export default function SeaTransportationPage() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
      <ServiceBreadcrumb serviceName="Sea Transportation" />
      <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

        <ServicePageHero
          title="Sea Transportation"
          imageSrc="/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png"
          imageAlt="ASP Sea Transportation — vessel at open sea"
        />

        <Divider />

        {/* 01 - INTRO */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-gy-4 u-gx-5 align-items-center">
              <div className="col-12 col-lg-6">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Global Trade Connectivity
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>Safe passage.<br/>Reliable delivery.</p>
                </div>
                <div className="content-width">
                  <p>
                    Since 2005, Asia Pacific Shipping has been dedicated to the safe and reliable transportation of liquefied petroleum gas, petrochemicals and speciality gases to global markets. Every cargo movement is planned with the same discipline — rigorous safety management, meticulous route planning, and a commitment to on-time performance that our customers have come to depend on.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
                  <Image
                    src="/wp-content/uploads/asp_images/ships/asp-titan-aerial-aft.webp"
                    alt="ASP vessel at sea"
                    fill
                    style={{ objectFit: 'cover' }}
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
                  <p>Cargo solutions across global trade routes</p>
                </div>
                <div className="content-width u-mt-3">
                  <p>
                    We transport LPG, petrochemicals and speciality gases under a range of flexible commercial arrangements, connecting producers to buyers across the Asia-Pacific region and beyond.
                  </p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-5 mt-4">
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">LPG &amp; Petrochemical Transport</h3>
                  <p className="u-mb-0">Specialised transportation of liquefied petroleum gas and petrochemical cargoes in pressure and fully refrigerated vessels, serving regional and international trade routes with consistent reliability.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Time Charter &amp; Spot Voyage</h3>
                  <p className="u-mb-0">Flexible transportation solutions spanning committed time charter arrangements for consistent capacity needs, through to spot voyage fixtures that respond rapidly to market opportunities and short-term cargo requirements.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Contract of Affreightment</h3>
                  <p className="u-mb-0">Long-term cargo volume agreements providing shippers with guaranteed transportation capacity over a defined period — offering predictable cost, reliable scheduling, and supply chain security for sustained cargo flows.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 03 - HOW WE WORK */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-gy-4 u-gx-5">
              <div className="col-12 col-lg-6">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  How We Work
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>Cargo planned.<br/>Voyage executed.</p>
                </div>
                <div className="content-width u-mb-5">
                  <p>
                    Safe and efficient sea transportation is the result of meticulous planning, expert coordination and continuous performance monitoring from cargo booking through to final discharge and vessel redelivery.
                  </p>
                </div>

                <div className="process-list" style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { num: '01', title: 'Plan the Voyage', desc: 'Coordinate cargo booking, terminal scheduling, routing and weather optimisation before departure — ensuring every voyage is planned for safety, efficiency and on-time performance.' },
                    { num: '02', title: 'Prepare the Vessel', desc: 'Confirm cargo compatibility, tank readiness and equipment certification. Coordinate crew briefings, cargo documentation and pre-loading inspections with shipper and terminal teams.' },
                    { num: '03', title: 'Execute the Voyage', desc: 'Monitor vessel position, speed, weather and cargo conditions continuously during transit, coordinating with port agents and receivers to ensure smooth approach, berth and discharge operations.' },
                    { num: '04', title: 'Review &amp; Report', desc: 'Complete post-voyage performance analysis covering fuel efficiency, schedule adherence and cargo condition — feeding continuous improvement and transparent reporting to cargo owners.' },
                  ].map((step, idx) => (
                    <div key={idx} style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: idx !== 3 ? '1px solid #e5e5e5' : 'none' }}>
                      <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '0.25rem' }}>{step.num}</span>
                      <h3 className="heading h6 u-mb-2 u-font-weight-bold" dangerouslySetInnerHTML={{ __html: step.title }} />
                      <p className="u-mb-0">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '500px', borderRadius: '4px', overflow: 'hidden' }}>
                  <Image
                    src="/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp"
                    alt="ASP vessel at sea"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 04 - KEY HIGHLIGHTS */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5 justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Key Transportation Highlights
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Safety and reliability on every voyage</p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-4">
              {[
                { title: 'Specialised Fleet', desc: 'A modern fleet designed and maintained for the safe carriage of LPG, petrochemicals and speciality gases in compliance with the highest international safety standards.' },
                { title: 'Asia-Pacific Focus', desc: 'Deep regional expertise and established relationships with producers, terminals and buyers across key Asia-Pacific and international trade corridors.' },
                { title: 'Flexible Commercial Models', desc: 'Time charter, spot voyage and Contract of Affreightment arrangements provide shippers with the right level of commitment, flexibility and cost certainty for their cargo needs.' },
                { title: 'Safety-First Culture', desc: 'A strong safety management system, TMSA-compliant operations, and a culture of continuous improvement underpin every cargo movement across our fleet.' },
              ].map((hl, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <div className="card u-h-100 u-border home-service-card" style={{ border: '1px solid #e5e5e5', padding: '2.5rem 2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                    <div className="card-body p-0">
                      <h3 className="heading h6 u-mb-3 u-font-weight-bold u-text-color-primary">{hl.title}</h3>
                      <p className="u-mb-0">{hl.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* 05 - FLEET STORIES */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5 align-items-end">
              <div className="col-12 col-md-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Fleet Stories
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Vessels carrying our cargoes to market</p>
                </div>
              </div>
              <div className="col-12 col-md-4 text-md-right u-mt-3 u-mt-md-0">
                <a href="/our-fleet" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none' }}>
                  Explore all vessels &rarr;
                </a>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-4">
              {[
                { name: 'ASP Titan', type: 'LR2 Tanker', cap: '115,049 SDWT', built: '2026', img: '/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp' },
                { name: 'ASP Luna', type: 'LR2 Tanker', cap: '115,049 SDWT', built: '2026', img: '/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp' },
                { name: 'ASP Jewels', type: 'Oil Tanker', cap: '114,974 SDWT', built: '2016', img: '/wp-content/uploads/asp_images/ships/asp-jewels.webp' },
              ].map((ship, idx) => (
                <div key={idx} className="col-12 col-md-4">
                  <a href="/our-fleet" className="card card-page-link u-border-radius u-overflow-hidden u-h-100 home-service-card" style={{ textDecoration: 'none', border: '1px solid #e5e5e5' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                      <Image src={ship.img} alt={ship.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="card-body u-px-4 u-py-4">
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#6c757d', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>{ship.type}</span>
                      <h3 className="heading h5 u-mb-3 u-text-color-black">{ship.name}</h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e5e5e5', paddingTop: '1rem' }}>
                        <div>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Deadweight</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a' }}>{ship.cap}</span>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Built</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a' }}>{ship.built}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* 06 - RELATED SERVICES */}
        <RelatedServices currentServicePath="/sea-transportation" />

        <Divider />

        {/* 07 - FAQ */}
        <section className="layout layout-page layout-root u-pb-5">
          <div className="layout-inner">
            <div className="row u-gy-4 u-gx-5">
              <div className="col-12 col-lg-4">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Common Questions
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>Frequently Asked Questions</p>
                </div>
                <div className="content-width">
                  <p>Find quick answers about our sea transportation capabilities and cargo services.</p>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { q: 'What types of cargo does ASP transport?', a: 'ASP specialises in the safe transportation of liquefied petroleum gas (LPG), petrochemicals and other speciality gases. Our fleet is purpose-designed and maintained for these cargo categories, with all required certifications and equipment.' },
                    { q: 'What commercial arrangements does ASP offer for cargo transportation?', a: 'We provide flexible transportation solutions including time charter arrangements for committed capacity over a defined period, spot voyage fixtures for individual cargo movements, and Contracts of Affreightment (COA) for sustained volume commitments over the long term.' },
                    { q: 'What trade routes does ASP operate on?', a: 'ASP operates primarily across Asia-Pacific trade routes, with vessels also trading on international routes connecting major LPG and petrochemical producing regions to key consumer markets. Our regional expertise and established port relationships support reliable on-time performance.' },
                    { q: 'How does ASP ensure safety during sea transportation?', a: 'Safety is fundamental to every voyage. Our operations comply with TMSA standards and the ISM Code. Voyage planning, cargo compatibility checks, pre-loading inspections, continuous voyage monitoring, and post-voyage performance review are all embedded in our standard operating procedures.' },
                  ].map((faq, idx) => (
                    <details
                      key={idx}
                      style={{ paddingBottom: '1.25rem', marginBottom: '1.25rem', borderBottom: '1px solid #e5e5e5' }}
                      className="faq-details"
                    >
                      <summary
                        className="heading h6 u-font-weight-bold"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', margin: 0, listStyle: 'none' }}
                      >
                        <span style={{ paddingRight: '2rem' }}>{faq.q}</span>
                        <span style={{ color: '#007236', flexShrink: 0, fontSize: '1.2rem', fontWeight: 400 }}>+</span>
                      </summary>
                      <div className="u-mt-3 content-width" style={{ paddingRight: '2rem' }}>
                        <p className="u-mb-0">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
                <style dangerouslySetInnerHTML={{__html: `
                  .faq-details summary::-webkit-details-marker { display: none; }
                  .faq-details[open] summary span:last-child { transform: rotate(45deg); display: inline-block; }
                  .faq-details summary span:last-child { transition: transform 0.2s ease; }
                `}} />
              </div>
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
