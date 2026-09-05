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
      <div className="spacer spacer-small"></div>
    </div>
    <div className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
      <div className="layout-inner container container-w-outer container-max">
        <hr className="u-my-0" style={{ borderTop: '1px solid #eaeaea' }} />
      </div>
    </div>
    <div className="layout-inner">
      <div className="spacer spacer-small"></div>
    </div>
  </div>
);

export default function CommercialManagementPage() {
  return (
    <>
      <Header />
      <main className="page" style={{ backgroundColor: '#ffffff' }}>
        <ServiceBreadcrumb serviceName="Commercial Management" />
        
        <ServicePageHero 
          title="Commercial Management" 
          imageSrc="/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp"
          imageAlt="Asia Pacific Shipping Commercial Management"
        />
        
        <Divider />

        {/* 01 - INTRO */}
        <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 mb-5 mb-lg-0 pr-lg-5">
                <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem' }}>Flexible employment</p>
                <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Commercial decisions<br />Better fleet value</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '0' }}>
                  The structure changes with the requirement; the discipline around vessel selection, terms and execution stays consistent. By leveraging our deep market insights and robust operational framework, we ensure that every commercial arrangement maximizes fleet value. Whether securing long-term commitments or capitalizing on spot market opportunities, our focus remains on reliability, risk management, and delivering sustained profitability for our partners.
                </p>
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
        <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            <div className="mb-5">
              <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem' }}>Our Services</p>
              <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>A flexible approach to global markets</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', maxWidth: '800px' }}>
                We provide tailored employment strategies across multiple commercial models to match every vessel to the trade where it can perform best.
              </p>
            </div>
            
            <div className="row mt-5">
              <div className="col-12 col-md-4 mb-4 mb-md-0" style={{ borderRight: '1px solid #eaeaea' }}>
                <div style={{ paddingRight: '2rem' }}>
                  <h3 className="heading h5 mb-3" style={{ fontWeight: 600 }}>Time Charter</h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.5, margin: 0 }}>Structured vessel employment for charterers who need committed capacity across a defined trading period.</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4 mb-md-0" style={{ borderRight: '1px solid #eaeaea' }}>
                <div style={{ padding: '0 2rem' }}>
                  <h3 className="heading h5 mb-3" style={{ fontWeight: 600 }}>Voyage Fixture</h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.5, margin: 0 }}>Cargo-by-cargo employment that connects the right vessel, route and timing in the spot market.</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div style={{ paddingLeft: '2rem' }}>
                  <h3 className="heading h5 mb-3" style={{ fontWeight: 600 }}>Pool Partnership</h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.5, margin: 0 }}>Revenue-sharing participation that combines compatible tonnage and broader market coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 03 - HOW WE WORK */}
        <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 mb-5 mb-lg-0 pr-lg-5">
                <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem' }}>How we work</p>
                <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Judgment before fixture. Attention after it.</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '3rem' }}>
                  Commercial performance is built through a connected sequence, not a single transaction.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { num: '01', title: "Read the market", desc: "Monitor cargo demand, vessel supply, route dynamics and counterparties across the markets in which the fleet trades." },
                    { num: '02', title: "Match vessel and trade", desc: "Position each ship where its size, specification, location and operating profile can create the strongest fit." },
                    { num: '03', title: "Conclude the fixture", desc: "Coordinate enquiries, commercial terms, charter-party details and handover to the operating team with clear ownership." },
                    { num: '04', title: "Manage performance", desc: "Stay close to voyage execution, customer communication and commercial performance from delivery through completion." }
                  ].map((step, idx) => (
                    <div key={idx} style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: idx !== 3 ? '1px solid #eaeaea' : 'none' }}>
                      <div style={{ color: '#007236', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{step.num}</div>
                      <h3 className="heading h5 mb-2" style={{ fontWeight: 600 }}>{step.title}</h3>
                      <p style={{ color: '#4b5563', lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: '4px', overflow: 'hidden' }}>
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
        <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            <div className="mb-5 text-center">
              <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem' }}>Key Commercial Highlights</p>
              <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Driving value across global markets</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', maxWidth: '800px', margin: '0 auto' }}>
                We align with our partners to protect margins, optimize operations, and capitalize on opportunities worldwide.
              </p>
            </div>
            
            <div className="row g-4 mt-4">
              {[
                { title: "Global Reach", desc: "Operating across major trade routes worldwide with strong regional expertise." },
                { title: "Data-Driven", desc: "Advanced analytics for voyage optimization, fuel efficiency, and routing." },
                { title: "Risk Management", desc: "Comprehensive hedging strategies and exposure tracking to protect margins." },
                { title: "Client Alignment", desc: "Transparent reporting and shared financial goals for mutual success." }
              ].map((hl, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <div className="card u-h-100 u-border" style={{ border: "1px solid #e5e5e5", padding: "2.5rem 2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", backgroundColor: '#fcfcfc' }}>
                    <div className="card-body p-0">
                      <h3 className="heading h5 mb-3" style={{ fontWeight: 600, color: '#007236' }}>{hl.title}</h3>
                      <p style={{ color: '#4b5563', lineHeight: 1.5, margin: 0 }}>{hl.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* 05 - FLEET STORIES */}
        <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }} className="d-md-flex flex-md-row align-items-md-end">
              <div className="mb-4 mb-md-0">
                <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem' }}>Fleet stories</p>
                <h2 className="heading h2 mb-2" style={{ fontWeight: 400 }}>Vessels behind our commercial operations</h2>
                <p style={{ fontSize: '1.1rem', color: '#4b5563', margin: 0 }}>A closer look at selected tankers in ASP's operating fleet.</p>
              </div>
              <a href="/our-fleet" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore all vessels <span>→</span>
              </a>
            </div>

            <div className="row mt-4">
              {[
                { name: "ASP Titan", type: "LR2 Tanker", cap: "115,049 SDWT", built: "2026", img: "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp" },
                { name: "ASP Luna", type: "LR2 Tanker", cap: "115,049 SDWT", built: "2026", img: "/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp" },
                { name: "ASP Jewels", type: "Oil Tanker", cap: "114,974 SDWT", built: "2016", img: "/wp-content/uploads/asp_images/ships/asp-jewels.webp" }
              ].map((ship, idx) => (
                <div key={idx} className="col-12 col-md-4 mb-4 mb-md-0">
                  <a href="/our-fleet" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', borderRadius: '4px' }}>
                      <Image src={ship.img} alt={ship.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ paddingTop: '1.5rem' }}>
                      <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#666', letterSpacing: '0.05em' }}>{ship.type}</span>
                      <h3 className="heading h5 mb-3" style={{ fontWeight: 600, marginTop: '0.25rem' }}>{ship.name}</h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eaeaea', paddingTop: '1rem' }}>
                        <div>
                          <small style={{ display: 'block', color: '#666', fontSize: '0.8rem' }}>Deadweight</small>
                          <strong style={{ fontSize: '0.95rem' }}>{ship.cap}</strong>
                        </div>
                        <div>
                          <small style={{ display: 'block', color: '#666', fontSize: '0.8rem' }}>Built</small>
                          <strong style={{ fontSize: '0.95rem' }}>{ship.built}</strong>
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
        <div style={{ padding: '2rem 0' }}>
          <RelatedServices currentServicePath="/commercial-management" />
        </div>

        <Divider />

        {/* 07 - FAQ */}
        <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            <div className="row">
              <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem' }}>Common Questions</p>
                <h2 className="heading h3 mb-4" style={{ fontWeight: 400 }}>Frequently Asked Questions</h2>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>Find quick answers about our commercial management models and operational approach.</p>
              </div>
              <div className="col-12 col-lg-7 offset-lg-1">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { q: "What types of vessels does ASP manage commercially?", a: "ASP commercially manages a diverse range of vessels, with a strong focus on tanker and bulk carrier operations." },
                    { q: "How does ASP secure the best charter rates?", a: "We leverage our extensive market relationships, real-time data analysis, and proactive approach to match the right vessel with the most lucrative cargo opportunities." },
                    { q: "Does ASP offer both time charter and voyage fixtures?", a: "Yes, we provide flexible commercial models including time charters, voyage fixtures, and pool partnerships tailored to owner requirements." },
                    { q: "How do you ensure operational efficiency during a voyage?", a: "Our dedicated commercial desk monitors performance continuously, providing 24/7 support to optimize routing, fuel consumption, and port operations." }
                  ].map((faq, idx) => (
                    <div key={idx} style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #eaeaea' }}>
                      <h3 className="heading h6 mb-2" style={{ fontWeight: 600, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <span>{faq.q}</span>
                        <span style={{ color: '#007236', marginLeft: '1rem', flexShrink: 0 }}>+</span>
                      </h3>
                      <p style={{ color: '#4b5563', margin: 0, marginTop: '1rem', lineHeight: 1.5 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
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
