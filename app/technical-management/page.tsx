import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import RelatedServices from '@/components/what-we-do/RelatedServices';
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

export default function TechnicalManagementPage() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
      <ServiceBreadcrumb serviceName="Technical Management" />
      <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

        <ServicePageHero
          title="Technical Management"
          imageSrc="/wp-content/uploads/asp_images/ships/asp-titan-aerial-aft.webp"
          imageAlt="ASP Technical Management — vessel at sea"
        />

        <Divider />

        {/* 01 - INTRO */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-gy-4 u-gx-5 align-items-center">
              <div className="col-12 col-lg-6">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Superior Standards
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>Technical discipline.<br/>Operational continuity.</p>
                </div>
                <div className="content-width">
                  <p>
                    The condition of a vessel reflects the quality of the people who maintain it. Our technical management team applies rigorous planned maintenance systems, proactive inspection regimes, and continual performance monitoring to ensure every ship in our fleet operates at its highest capability — safely, efficiently, and in full regulatory compliance at all times.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
                  <Image
                    src="/wp-content/uploads/asp_images/ships/asp-titan.webp"
                    alt="ASP vessel technical operations"
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
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-gy-4 u-gx-5">
              <div className="col-12 col-lg-6">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  How We Work
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>Prevention before breakdown.<br/>Precision in every intervention.</p>
                </div>
                <div className="content-width u-mb-5">
                  <p>
                    Technical performance is built through a systematic cycle of inspection, maintenance, monitoring and review. Each phase requires specialist knowledge, disciplined execution and close coordination between ship and shore.
                  </p>
                </div>

                <div className="process-list" style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { num: '01', title: 'Plan &amp; Schedule', desc: 'Develop and maintain structured planned maintenance schedules, ensuring all class, flag and statutory requirements are met well ahead of critical dates.' },
                    { num: '02', title: 'Inspect &amp; Assess', desc: 'Conduct routine condition assessments, defect monitoring and superintendent visits to identify technical risks before they become operational problems.' },
                    { num: '03', title: 'Execute &amp; Maintain', desc: 'Coordinate repairs, dry-docking and critical spares procurement with approved service providers to restore and maintain fleet standards.' },
                    { num: '04', title: 'Monitor &amp; Optimise', desc: 'Analyse real-time performance data to drive fuel savings, reduce emissions, extend machinery life and benchmark each vessel against targets.' },
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

        {/* 05 - FLEET FOCUS */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5 align-items-end">
              <div className="col-12 col-md-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Fleet Focus
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Vessels maintained to the highest standard</p>
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
        <RelatedServices currentServicePath="/technical-management" />

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
                  <p>Find quick answers about our technical management approach and fleet maintenance standards.</p>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { q: 'How does ASP ensure its fleet meets oil major vetting standards?', a: 'Our technical management system complies rigorously with TMSA standards and the ISM Code. The fleet is maintained in a state of constant readiness to pass SIRE and CDI inspections by leading charterers at any time.' },
                    { q: 'What planned maintenance systems does ASP use?', a: 'We utilise modern computerised Planned Maintenance Systems (PMS) to schedule and track all maintenance tasks, enabling early identification of potential issues before they affect vessel performance or availability.' },
                    { q: 'How are dry-dockings managed to reduce off-hire time?', a: 'Our technical superintendents develop detailed dry-docking scopes in advance, coordinate with approved repair yards, and manage each project tightly to minimise time in dock and return vessels to trading as quickly as possible.' },
                    { q: 'Does ASP use real-time monitoring for vessel performance?', a: 'Yes. We integrate ship-to-shore sensor technology to monitor speed, fuel consumption, and machinery condition continuously. This data is analysed onshore to drive optimisation recommendations and measure performance against targets.' },
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
