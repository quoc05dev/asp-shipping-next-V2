import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import RelatedServices from '@/components/what-we-do/RelatedServices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crew Management | ASP Shipping',
  description: 'Recruiting, training and retaining highly qualified seafarers to crew ASP vessels and partner fleets with the highest standards of safety, competence and welfare.',
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

export default function CrewManagementPage() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
      <ServiceBreadcrumb serviceName="Crew Management" />
      <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

        <ServicePageHero
          title="Crew Management"
          imageSrc="/wp-content/uploads/asp_images/ships/asp-luna.webp"
          imageAlt="ASP Crew Management — seafarers on deck"
        />

        <Divider />

        {/* 01 - INTRO */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-gy-4 u-gx-5 align-items-center">
              <div className="col-12 col-lg-6">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Performance On Board
                </h2>
                <div className="section-lead-content u-h4 u-mb-4">
                  <p>People who perform.<br/>Welfare that sustains them.</p>
                </div>
                <div className="content-width">
                  <p>
                    Every voyage depends on the people who run it. Our crew management programme recruits, trains and retains highly qualified seafarers who meet the most rigorous international standards — then invests in their welfare and career development to ensure they stay engaged, safe and committed to the highest levels of professional performance across every voyage.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
                  <Image
                    src="/wp-content/uploads/asp_images/ships/asp-maple.jpg"
                    alt="ASP vessel operations crew"
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
                  <p>End-to-end seafarer management</p>
                </div>
                <div className="content-width u-mt-3">
                  <p>
                    From recruitment and certification through active deployment and welfare support, we manage the complete seafarer journey with the discipline and care that maritime safety demands.
                  </p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-5 mt-4">
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Recruitment &amp; Selection</h3>
                  <p className="u-mb-0">Sourcing qualified, certified seafarers who meet international maritime standards. Our process includes STCW and flag-state certificate verification, ENG1 medical assessment, competency interviews and thorough reference checks.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ paddingRight: '1rem', borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Training &amp; Development</h3>
                  <p className="u-mb-0">Continuous upskilling programmes including vessel familiarisation, safety management system inductions, advanced simulator exercises for tanker and bulk operations, and structured support for officer certification upgrades.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div style={{ borderLeft: '1px solid #e5e5e5', paddingLeft: '1.5rem', height: '100%' }}>
                  <h3 className="heading h6 u-mb-3 u-font-weight-bold">Welfare &amp; Retention</h3>
                  <p className="u-mb-0">A supportive environment at sea through competitive compensation, timely repatriation, mental health and wellbeing resources, and 24/7 shore-side support for crew and their families throughout every voyage.</p>
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
                  <p>Right person, right vessel.<br/>Supported throughout.</p>
                </div>
                <div className="content-width u-mb-5">
                  <p>
                    Effective crew management is a continuous cycle — from identifying the right candidate and placing them on the right vessel, through active voyage support, to planned handover and repatriation. Each step requires rigorous coordination between ship and shore.
                  </p>
                </div>

                <div className="process-list" style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { num: '01', title: 'Screen &amp; Certify', desc: 'Verify STCW and flag-state certificates, confirm medical fitness to ENG1 or equivalent standards, and assess competency through structured interview and reference review before crew pool approval.' },
                    { num: '02', title: 'Deploy &amp; Induct', desc: 'Match each seafarer to the right vessel and position, conduct thorough vessel familiarisation and safety management system induction before commencement of duties.' },
                    { num: '03', title: 'Support On Voyage', desc: 'Provide 24/7 shore-side support throughout the contract — coordinating medical assistance, payroll, communications, and flag state reporting as required.' },
                    { num: '04', title: 'Develop &amp; Retain', desc: 'Conduct performance appraisals, identify development opportunities, support certificate upgrades and career progression to build long-term seafarer relationships and fleet continuity.' },
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
                    src="/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp"
                    alt="ASP vessel in operation"
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
                  Key Crew Management Highlights
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>People at the heart of our operation</p>
                </div>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-4">
              {[
                { title: 'International Standards', desc: 'All crew comply with STCW convention requirements and relevant flag-state endorsements, verified rigorously before each deployment.' },
                { title: '24/7 Shore Support', desc: 'Our crew department is available around the clock to assist seafarers and their families — from medical emergencies to payroll and repatriation coordination.' },
                { title: 'Structured Development', desc: 'Performance appraisal systems identify talent and groom officers for rank advancement, including pathways to shore-based management roles within the ASP group.' },
                { title: 'Crew Welfare Programme', desc: 'Competitive compensation, mental health resources, regular family communication support, and timely repatriation reflect our commitment to seafarer wellbeing as a business priority.' },
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

        {/* 05 - FLEET CREW ROLES */}
        <section className="layout layout-page layout-root">
          <div className="layout-inner">
            <div className="row u-mb-5 align-items-end">
              <div className="col-12 col-md-8">
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                  Our People At Sea
                </h2>
                <div className="section-lead-content u-h4 u-mb-0">
                  <p>Roles that drive performance across the fleet</p>
                </div>
              </div>
              <div className="col-12 col-md-4 text-md-right u-mt-3 u-mt-md-0">
                <a href="/careers" style={{ color: '#007236', fontWeight: 600, textDecoration: 'none' }}>
                  Careers at ASP &rarr;
                </a>
              </div>
            </div>

            <div className="row u-gy-4 u-gx-4">
              {[
                { name: 'Captains &amp; Officers', type: 'Senior Command', focus: 'Navigation &amp; Safety', detail: 'Deck Officers', img: '/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp' },
                { name: 'Marine Engineers', type: 'Engine Department', focus: 'Machinery &amp; Systems', detail: 'Chief &amp; Watch Engineers', img: '/wp-content/uploads/asp_images/ships/asp-luna-turning.webp' },
                { name: 'Ratings &amp; Cadets', type: 'Crew &amp; Trainees', focus: 'Deck &amp; Engine', detail: 'Future Officers', img: '/wp-content/uploads/asp_images/ships/maple-cedar.jpg' },
              ].map((role, idx) => (
                <div key={idx} className="col-12 col-md-4">
                  <div className="card card-page-link u-border-radius u-overflow-hidden u-h-100 home-service-card" style={{ border: '1px solid #e5e5e5' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                      <Image src={role.img} alt={role.name.replace(/&amp;/g, '&')} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="card-body u-px-4 u-py-4">
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#6c757d', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }} dangerouslySetInnerHTML={{ __html: role.type }} />
                      <h3 className="heading h5 u-mb-3 u-text-color-black" dangerouslySetInnerHTML={{ __html: role.name }} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e5e5e5', paddingTop: '1rem' }}>
                        <div>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Department</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a' }} dangerouslySetInnerHTML={{ __html: role.focus }} />
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ display: 'block', color: '#6c757d', fontSize: '0.8rem' }}>Rank Group</span>
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

        {/* 06 - RELATED SERVICES */}
        <RelatedServices currentServicePath="/crew-management" />

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
                  <p>Find quick answers about our crew management process and seafarer welfare standards.</p>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { q: 'How does ASP verify the credentials of its seafarers?', a: 'Every candidate undergoes a rigorous multi-stage process: documentary verification of STCW and flag-state certificates, medical assessment to ENG1 or equivalent standards, competency interviews and thorough reference checks. Only those meeting all criteria are added to our approved crew pool.' },
                    { q: 'What training does ASP provide to its crew?', a: 'We provide a comprehensive training framework including vessel familiarisation courses, safety management system briefings, advanced simulator exercises for tanker and bulk carrier operations, and support for officers pursuing higher certifications. We also run a structured cadet programme to develop the next generation of maritime officers.' },
                    { q: 'How does ASP support crew welfare at sea?', a: 'We invest in crew welfare through regular communication, competitive compensation, timely repatriation, and access to mental health and wellbeing resources. Our shore-side team is available 24/7 to assist crew and their families throughout every voyage.' },
                    { q: 'What are typical contract lengths for ASP seafarers?', a: 'Contract lengths vary depending on vessel type and rank, but typically range from four to nine months. We strive to accommodate seafarer preferences while maintaining operational continuity for our fleet.' },
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
