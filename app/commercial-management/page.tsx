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

export default function CommercialManagementPage() {
  return (
    <>
      <Header />
      <main className="page" style={{ backgroundColor: '#ffffff' }}>
        <ServiceBreadcrumb serviceName="Commercial Management" />
        
        <ServicePageHero 
          title="Commercial decisions Better fleet value" 
          imageSrc="/images/heads/tanker-forward-course.webp"
          imageAlt="Asia Pacific Shipping Commercial Management"
        />
        
        {/* Intro / Flexible Employment */}
        <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image 
                    src="/images/ships/hero-asp-rainbow-cinematic.png"
                    alt="ASP Fleet vessel"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6" style={{ paddingLeft: '3rem' }}>
                <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem' }}>Flexible employment</p>
                <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Commercial decisions<br />Better fleet value</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '2rem' }}>
                  The structure changes with the requirement; the discipline around vessel selection, terms and execution stays consistent. By leveraging our deep market insights and robust operational framework, we ensure that every commercial arrangement maximizes fleet value. Whether securing long-term commitments or capitalizing on spot market opportunities, our focus remains on reliability, risk management, and delivering sustained profitability for our partners.
                </p>
              </div>
            </div>

            <div className="row mt-5 pt-4">
              {[
                { title: "Time charter", desc: "Structured vessel employment for charterers who need committed capacity across a defined trading period." },
                { title: "Voyage fixture", desc: "Cargo-by-cargo employment that connects the right vessel, route and timing in the spot market." },
                { title: "Pool partnership", desc: "Revenue-sharing participation that combines compatible tonnage and broader market coverage." }
              ].map((model, idx) => (
                <div key={idx} className="col-12 col-md-4 mb-4 mb-md-0">
                  <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px', height: '100%', borderTop: '4px solid #007236' }}>
                    <h3 className="heading h5 mb-3" style={{ fontWeight: 600 }}>{model.title}</h3>
                    <p style={{ color: '#4b5563', lineHeight: 1.5, margin: 0 }}>{model.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section style={{ padding: '4rem 0', backgroundColor: '#0b1f18', color: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            <h2 className="heading h3 mb-5 text-center" style={{ fontWeight: 400 }}>Key Commercial Highlights</h2>
            <div className="row">
              {[
                { title: "Global Reach", desc: "Operating across major trade routes worldwide with strong regional expertise." },
                { title: "Data-Driven", desc: "Advanced analytics for voyage optimization, fuel efficiency, and routing." },
                { title: "Risk Management", desc: "Comprehensive hedging strategies and exposure tracking to protect margins." },
                { title: "Client Alignment", desc: "Transparent reporting and shared financial goals for mutual success." }
              ].map((hl, idx) => (
                <div key={idx} className="col-12 col-md-3 mb-4 mb-md-0 text-center">
                  <div style={{ marginBottom: '1rem', color: '#00cc66' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  </div>
                  <h3 className="heading h5 mb-3" style={{ fontWeight: 600, color: '#ffffff' }}>{hl.title}</h3>
                  <p style={{ color: '#a0aab2', lineHeight: 1.5, margin: 0, fontSize: '0.95rem' }}>{hl.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section style={{ padding: '5rem 0', backgroundColor: '#fcfcf8' }}>
          <div className="container container-w-outer container-max">
            <div className="row">
              <div className="col-12 col-lg-5 mb-5 mb-lg-0">
                <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem' }}>How we work</p>
                <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Judgment before fixture. Attention after it</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '2rem' }}>
                  Commercial performance is built through a connected sequence, not a single transaction.
                </p>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image 
                    src="/images/ships/asp-luna-turning.webp"
                    alt="ASP Luna turning at sea"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2rem' }}>
                  {[
                    { title: "Read the market", desc: "Monitor cargo demand, vessel supply, route dynamics and counterparties across the markets in which the fleet trades." },
                    { title: "Match vessel and trade", desc: "Position each ship where its size, specification, location and operating profile can create the strongest fit." },
                    { title: "Conclude the fixture", desc: "Coordinate enquiries, commercial terms, charter-party details and handover to the operating team with clear ownership." },
                    { title: "Manage performance", desc: "Stay close to voyage execution, customer communication and commercial performance from delivery through completion." }
                  ].map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#007236', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '1.5rem', flexShrink: 0 }}>
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="heading h4 mb-2" style={{ fontWeight: 600 }}>{step.title}</h3>
                        <p style={{ color: '#4b5563', lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Stories */}
        <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem' }}>Fleet stories</p>
                <h2 className="heading h2 mb-2" style={{ fontWeight: 400 }}>Vessels behind our commercial operations</h2>
                <p style={{ fontSize: '1.1rem', color: '#4b5563', margin: 0 }}>A closer look at selected tankers in ASP's operating fleet.</p>
              </div>
              <a href="/our-fleet" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore all vessels <span>→</span>
              </a>
            </div>

            <div className="row">
              {[
                { name: "ASP Titan", type: "LR2 Tanker", cap: "115,049 SDWT", built: "2026", img: "/images/ships/asp-titan-sunset.webp" },
                { name: "ASP Luna", type: "LR2 Tanker", cap: "115,049 SDWT", built: "2026", img: "/images/ships/asp-luna-turning.webp" },
                { name: "ASP Jewels", type: "Oil Tanker", cap: "114,974 SDWT", built: "2016", img: "/images/ships/asp-jewels-shipyard.webp" }
              ].map((ship, idx) => (
                <div key={idx} className="col-12 col-md-4 mb-4 mb-md-0">
                  <a href="/our-fleet" style={{ display: 'block', textDecoration: 'none', color: 'inherit', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaea', height: '100%', transition: 'transform 0.2s', backgroundColor: '#fff' }} >
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                      <Image src={ship.img} alt={ship.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#666', letterSpacing: '0.05em' }}>{ship.type}</span>
                      <h3 className="heading h4 mb-3" style={{ fontWeight: 600, marginTop: '0.25rem' }}>{ship.name}</h3>
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

        {/* FAQ Section */}
        <section style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
          <div className="container container-w-outer container-max">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <p style={{ color: '#007236', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>Common Questions</p>
                <h2 className="heading h2 mb-5 text-center" style={{ fontWeight: 400 }}>Frequently Asked Questions</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { q: "What types of vessels does ASP manage commercially?", a: "ASP commercially manages a diverse range of vessels, with a strong focus on tanker and bulk carrier operations." },
                    { q: "How does ASP secure the best charter rates?", a: "We leverage our extensive market relationships, real-time data analysis, and proactive approach to match the right vessel with the most lucrative cargo opportunities." },
                    { q: "Does ASP offer both time charter and voyage fixtures?", a: "Yes, we provide flexible commercial models including time charters, voyage fixtures, and pool partnerships tailored to owner requirements." },
                    { q: "How do you ensure operational efficiency during a voyage?", a: "Our dedicated commercial desk monitors performance continuously, providing 24/7 support to optimize routing, fuel consumption, and port operations." }
                  ].map((faq, idx) => (
                    <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #eaeaea' }}>
                      <h3 className="heading h5 mb-2" style={{ fontWeight: 600, display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#007236', marginRight: '0.75rem' }}>Q:</span> {faq.q}
                      </h3>
                      <p style={{ color: '#4b5563', margin: 0, paddingLeft: '1.75rem' }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <RelatedServices currentServicePath="/commercial-management" />
      </main>
      <Footer />
    </>
  );
}
