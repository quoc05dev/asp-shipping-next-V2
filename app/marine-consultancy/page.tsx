import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import RelatedServices from '@/components/what-we-do/RelatedServices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marine Consultancy | ASP Shipping',
  description: 'Practical maritime advisory grounded in the experience of active shipowners — from newbuilding supervision to ESG compliance and S&P due diligence.',
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

export default function MarineConsultancyPage() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
      <ServiceBreadcrumb serviceName="Marine Consultancy" />
      <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

        <ServicePageHero
          title="Marine Consultancy"
          imageSrc="/wp-content/uploads/asp_images/ships/asp-luna-turning.webp"
          imageAlt="ASP Marine Consultancy — vessel operations"
        />

        <Divider />

        {/* 01 - INTRO */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-gy-4 u-gx-5 align-items-center">
              <div className="col-12 col-lg-6">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  From Practice To Strategy
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>Advice rooted in ownership.<br/>Solutions grounded in reality.</p>
                </div>
                <div className="content-width">
                  <p>
                    Our consultancy is built on the experience of active shipowners and operators who have managed complex fleets across multiple market cycles. We bring that practical perspective to every advisory mandate — whether assessing a vessel acquisition, supervising a newbuild programme, or charting a pathway to decarbonisation. The advice we give is the advice we follow ourselves.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
                  <Image
                    src="/wp-content/uploads/asp_images/about/history-03-first-tanker.png"
                    alt="ASP marine consultancy operations"
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
                  <p>Specialist advisory across the vessel lifecycle</p>
                </div>
                <div className="content-width u-mt-3">
                  <p>
                    From initial acquisition through active operation to eventual recycling, our consultants provide expert guidance at every stage of a vessel&apos;s commercial and technical life.
                  </p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-5 mt-4">
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Newbuilding Supervision</h3>
                  <p className="u-mb-0">Comprehensive project management from design review and shipyard selection through on-site construction supervision, sea trials and vessel delivery — drawing on ASP&apos;s direct newbuilding experience.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">ESG &amp; Decarbonisation</h3>
                  <p className="u-mb-0">Advisory on pathways to meet IMO emission requirements including EEXI and CII ratings, evaluation of energy-saving technologies, and transition planning for alternative fuel vessel operations.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Marine Due Diligence &amp; S&amp;P</h3>
                  <p className="u-mb-0">Detailed vessel surveys, technical assessments and condition reports prior to Sale &amp; Purchase transactions or dry-docking, helping investors and owners accurately value and risk-assess maritime assets.</p>
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
                  <p>Owner&apos;s perspective.<br/>Independent judgement.</p>
                </div>
                <div className="content-width u-mb-5">
                  <p>
                    Every consultancy engagement begins with understanding the client&apos;s specific objectives and constraints. We combine our direct operational experience with independent analysis to deliver advice that is both commercially sound and technically credible.
                  </p>
                </div>

                <div className="process-list" style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { num: '01', title: 'Define the Mandate', desc: 'Establish clear project objectives, scope and timeline with the client — whether an acquisition assessment, newbuild supervision, compliance review or strategic advisory.' },
                    { num: '02', title: 'Investigate &amp; Assess', desc: 'Conduct thorough technical and commercial investigation, including vessel inspection, documentation review, regulatory analysis and market benchmarking.' },
                    { num: '03', title: 'Advise &amp; Recommend', desc: 'Deliver clear, evidence-based recommendations that balance technical integrity with commercial reality — the same standard we apply to our own fleet decisions.' },
                    { num: '04', title: 'Support Implementation', desc: 'Provide continued support through the execution phase — from shipyard supervision and project oversight to regulatory filings and operational handover.' },
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
                    src="/wp-content/uploads/asp_images/ships/asp-rainbow.jpg"
                    alt="ASP vessel at port"
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
                  Key Consultancy Highlights
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Expertise earned through direct ownership</p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-4">
              {[
                { title: 'Active Ownership Experience', desc: 'Our advice reflects the practical realities of owning and operating a modern fleet — not theoretical frameworks divorced from commercial pressure.' },
                { title: 'Newbuilding Track Record', desc: 'ASP has directly supervised major newbuilding programmes including multi-vessel projects at leading international shipyards, bringing that experience to client mandates.' },
                { title: 'Decarbonisation Advisory', desc: 'We support clients in navigating IMO emission regulations, evaluating energy-saving technologies and planning transitions to alternative fuel vessels including methanol dual-fuel systems.' },
                { title: 'Independent Assessment', desc: 'Our due diligence and S&P advisory services are conducted with full independence, providing objective valuations and risk assessments that clients can rely on without conflict of interest.' },
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

        {/* 05 - PROJECT FOCUS */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5 align-items-end">
              <div className="col-12 col-md-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Project Focus
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Representative consultancy work</p>
                </div>
              </div>
              <div className="col-12 col-md-4 text-md-right u-mt-3 u-mt-md-0">
                <a href="/our-fleet" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none' }}>
                  View our fleet &rarr;
                </a>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-4">
              {[
                { name: 'Newbuilding Programme', type: 'Project Advisory', focus: 'LR2 Tankers', detail: 'Multi-vessel supervision', img: '/wp-content/uploads/asp_images/ships/newbuild.jpg' },
                { name: 'Decarbonisation Pathway', type: 'ESG Advisory', focus: 'Emission Compliance', detail: 'EEXI / CII Planning', img: '/wp-content/uploads/asp_images/ships/ship-home-sust-1.jpg' },
                { name: 'Vessel Assessment', type: 'S&P Due Diligence', focus: 'Technical Condition', detail: 'Pre-purchase survey', img: '/wp-content/uploads/asp_images/ships/asp-jewels-shipyard.jpg' },
              ].map((proj, idx) => (
                <div key={idx} className="col-12 col-md-4">
                  <div className="card card-page-link u-border-radius u-overflow-hidden u-h-100 home-service-card" style={{ border: '1px solid #e5e5e5' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                      <Image src={proj.img} alt={proj.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="card-body u-px-4 u-py-4">
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#6c757d', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>{proj.type}</span>
                      <h3 className="heading h5 u-mb-3 u-text-color-black">{proj.name}</h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e5e5e5', paddingTop: '1rem' }}>
                        <div>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Focus</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a' }}>{proj.focus}</span>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Scope</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a' }}>{proj.detail}</span>
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

        {/* 06 - RELATED SERVICES */}
        <RelatedServices currentServicePath="/marine-consultancy" />

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
                  <p>Find quick answers about our marine consultancy capabilities and approach.</p>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { q: 'What types of projects does ASP Marine Consultancy handle?', a: 'We consult across a broad range of projects including newbuilding supervision, ESG and decarbonisation pathway planning, Sale & Purchase due diligence, vessel condition surveys, and technical advisory for fleet acquisition or disposal.' },
                    { q: 'What makes ASP consultancy different from other marine advisors?', a: 'Our advice is grounded in the practical realities of owning and operating a modern fleet. We apply the same standards to client mandates that we apply to our own fleet decisions — giving clients the perspective of an experienced shipowner, not just a consultant.' },
                    { q: 'Can ASP help with IMO emission compliance planning?', a: 'Yes. We advise on EEXI and CII compliance strategies, evaluate energy-saving technologies and provide guidance on transition pathways including dual-fuel vessel options such as methanol propulsion.' },
                    { q: 'Does ASP provide pre-purchase technical surveys?', a: 'Absolutely. Our technical team conducts thorough vessel assessments prior to Sale & Purchase, identifying technical risks and condition issues that investors and owners need to accurately value maritime assets.' },
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
