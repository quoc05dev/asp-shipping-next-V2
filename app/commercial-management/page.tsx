import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import RelatedServices from '@/components/what-we-do/RelatedServices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Management | ASP Shipping',
  description: 'Employment strategy across time charter, spot voyage and pool partnerships, matching every vessel to the trade where it can perform best.',
};

const Divider = () => (
  <div className="layout layout-spacer layout-page layout-root">
    <div className="layout-inner">
      <div className="spacer spacer-medium"></div>
    </div>
    <div className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
      <div className="layout-inner container container-rfs container-w-outer container-max">
        <hr className="u-my-0" style={{ borderTop: '1px solid #e5e5e5' }} />
      </div>
    </div>
    <div className="layout-inner">
      <div className="spacer spacer-medium"></div>
    </div>
  </div>
);

export default function CommercialManagementPage() {
  return (
    <>
      <Header />
      <main className="page wp-theme-restless-theme" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <ServiceBreadcrumb serviceName="Commercial Management" />
        
        <ServicePageHero 
          title="Commercial Management" 
          imageSrc="/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp"
          imageAlt="Asia Pacific Shipping Commercial Management"
        />
        
        <Divider />

        {/* 01 - INTRO */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner container container-rfs container-w-outer container-max">
            <div className="row u-gy-4 u-gx-5 align-items-center">
              <div className="col-12 col-lg-6">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Flexible Employment
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>Commercial decisions.<br/>Better fleet value.</p>
                </div>
                <div className="content-width">
                  <p>
                    The structure changes with the requirement; the discipline around vessel selection, terms and execution stays consistent. By leveraging our deep market insights and robust operational framework, we ensure that every commercial arrangement maximizes fleet value. Whether securing long-term commitments or capitalizing on spot market opportunities, our focus remains on reliability, risk management, and delivering sustained profitability for our partners.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
                  <Image 
                    src="/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png"
                    alt="ASP Fleet vessel"
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
          <div className="layout-inner container container-rfs container-w-outer container-max">
            <div className="row u-mb-5">
              <div className="col-12 col-lg-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Our Services
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>A flexible approach to global markets</p>
                </div>
                <div className="content-width u-mt-3">
                  <p>
                    We provide tailored employment strategies across multiple commercial models to match every vessel to the trade where it can perform best.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="row u-gy-4 u-gx-5 mt-4">
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Time Charter</h3>
                  <p className="u-mb-0">Structured vessel employment for charterers who need committed capacity across a defined trading period.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Voyage Fixture</h3>
                  <p className="u-mb-0">Cargo-by-cargo employment that connects the right vessel, route and timing in the spot market.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Pool Partnership</h3>
                  <p className="u-mb-0">Revenue-sharing participation that combines compatible tonnage and broader market coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 03 - HOW WE WORK */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner container container-rfs container-w-outer container-max">
            <div className="row u-gy-4 u-gx-5">
              <div className="col-12 col-lg-6">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  How We Work
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>Judgment before fixture.<br/>Attention after it.</p>
                </div>
                <div className="content-width u-mb-5">
                  <p>
                    Commercial performance is built through a connected sequence, not a single transaction. Each step requires meticulous planning, deep market knowledge, and proactive communication.
                  </p>
                </div>
                
                <div className="process-list" style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { num: '01', title: "Read the Market", desc: "Monitor cargo demand, vessel supply, route dynamics and counterparties across the markets in which the fleet trades." },
                    { num: '02', title: "Match Vessel and Trade", desc: "Position each ship where its size, specification, location and operating profile can create the strongest fit." },
                    { num: '03', title: "Conclude the Fixture", desc: "Coordinate enquiries, commercial terms, charter-party details and handover to the operating team with clear ownership." },
                    { num: '04', title: "Manage Performance", desc: "Stay close to voyage execution, customer communication and commercial performance from delivery through completion." }
                  ].map((step, idx) => (
                    <div key={idx} style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: idx !== 3 ? '1px solid #e5e5e5' : 'none' }}>
                      <span style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '0.25rem' }}>{step.num}</span>
                      <h3 className="heading h6 u-mb-2 u-font-weight-bold">{step.title}</h3>
                      <p className="u-mb-0">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '500px', borderRadius: '4px', overflow: 'hidden' }}>
                  <Image 
                    src="/wp-content/uploads/asp_images/ships/asp-luna-turning.webp"
                    alt="ASP Luna turning at sea"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 04 - KEY COMMERCIAL HIGHLIGHTS */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner container container-rfs container-w-outer container-max">
            <div className="row u-mb-5 justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Key Commercial Highlights
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Driving value across global markets</p>
                </div>
              </div>
            </div>
            
            <div className="row u-gy-4 u-gx-4">
              {[
                { title: "Global Reach", desc: "Operating across major trade routes worldwide with strong regional expertise." },
                { title: "Data-Driven", desc: "Advanced analytics for voyage optimization, fuel efficiency, and routing." },
                { title: "Risk Management", desc: "Comprehensive hedging strategies and exposure tracking to protect margins." },
                { title: "Client Alignment", desc: "Transparent reporting and shared financial goals for mutual success." }
              ].map((hl, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <div className="card u-h-100 u-border home-service-card" style={{ border: "1px solid #e5e5e5", padding: "2.5rem 2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}>
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
          <div className="layout-inner container container-rfs container-w-outer container-max">
            <div className="row u-mb-5 align-items-end">
              <div className="col-12 col-md-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Fleet Stories
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Vessels behind our commercial operations</p>
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
                { name: "ASP Titan", type: "LR2 Tanker", cap: "115,049 SDWT", built: "2026", img: "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp" },
                { name: "ASP Luna", type: "LR2 Tanker", cap: "115,049 SDWT", built: "2026", img: "/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp" },
                { name: "ASP Jewels", type: "Oil Tanker", cap: "114,974 SDWT", built: "2016", img: "/wp-content/uploads/asp_images/ships/asp-jewels.webp" }
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
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <RelatedServices currentServicePath="/commercial-management" />
          </div>
        </section>

        <Divider />

        {/* 07 - FAQ */}
        <section className="layout layout-page layout-root u-pb-5">
          <div className="layout-inner container container-rfs container-w-outer container-max">
            <div className="row u-gy-4 u-gx-5">
              <div className="col-12 col-lg-4">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Common Questions
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>Frequently Asked Questions</p>
                </div>
                <div className="content-width">
                  <p>Find quick answers about our commercial management models and operational approach.</p>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { q: "What types of vessels does ASP manage commercially?", a: "ASP commercially manages a diverse range of vessels, with a strong focus on tanker and bulk carrier operations." },
                    { q: "How does ASP secure the best charter rates?", a: "We leverage our extensive market relationships, real-time data analysis, and proactive approach to match the right vessel with the most lucrative cargo opportunities." },
                    { q: "Does ASP offer both time charter and voyage fixtures?", a: "Yes, we provide flexible commercial models including time charters, voyage fixtures, and pool partnerships tailored to owner requirements." },
                    { q: "How do you ensure operational efficiency during a voyage?", a: "Our dedicated commercial desk monitors performance continuously, providing 24/7 support to optimize routing, fuel consumption, and port operations." }
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
                {/* Embedded style to hide default summary arrow */}
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
      <Footer />
    </>
  );
}
