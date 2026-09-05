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
  description: 'What we do',
};

export default function CrewManagementPage() {
  return (
    <>
      <Header />
      <ServiceBreadcrumb serviceName="Crew Management" />
      <main className="page" style={{ backgroundColor: '#ffffff' }}>
        
        <ServicePageHero 
          title={"Performance on board"} 
          imageSrc="/images/heads/tanker-forward-course.webp"
          imageAlt="Crew Management"
        />
        
        
        <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            
            <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Comprehensive crew support</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '2rem', maxWidth: '800px' }}> Crew models</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>From sourcing the right talent to ongoing welfare and development, we invest in our seafarers as the core of our maritime success. We understand that a well-supported crew is the foundation of safe and efficient operations. By providing continuous training, fair compensation, and a culture of respect, we ensure our people are empowered to deliver excellence at sea. This comprehensive approach guarantees that our maritime team remains capable, motivated, and fully prepared for any operational challenges.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Sourcing highly qualified, certified seafarers that meet rigorous international maritime standards. Our process includes thorough verification of STCW and flag-state certificates, comprehensive medical fitness assessments to the ENG1 standard, alongside rigorous competency interviews and detailed reference checks.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Continuous upskilling programs to ensure crews are prepared for modern vessels and regulations. This encompasses extensive vessel familiarization and safety inductions, advanced simulator exercises for both tanker and bulk operations, as well as dedicated support for officer certification upgrades.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Fostering a supportive environment at sea to ensure high morale, safety, and long-term career growth. We provide competitive compensation and timely repatriation, ensuring access to mental health and wellbeing resources, all backed by our 24/7 shore-side support for both crew and their families.</p>
            
            <div className="row mt-5 pt-4">
              {[{"h3":"Recruitment & Selection","p":"Sourcing highly qualified, certified seafarers that meet rigorous international maritime standards. Our process includes thorough verification of STCW and flag-state certificates, comprehensive medical fitness assessments to the ENG1 standard, alongside rigorous competency interviews and detailed reference checks."},{"h3":"Training & Development","p":"Continuous upskilling programs to ensure crews are prepared for modern vessels and regulations. This encompasses extensive vessel familiarization and safety inductions, advanced simulator exercises for both tanker and bulk operations, as well as dedicated support for officer certification upgrades."},{"h3":"Welfare & Retention","p":"Fostering a supportive environment at sea to ensure high morale, safety, and long-term career growth. We provide competitive compensation and timely repatriation, ensuring access to mental health and wellbeing resources, all backed by our 24/7 shore-side support for both crew and their families."}].map((item, idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px', height: '100%', borderTop: '4px solid #007236' }}>
                    <h3 className="heading h5 mb-3" style={{ fontWeight: 600 }}>{item.h3}</h3>
                    <p style={{ color: '#4b5563', lineHeight: 1.5, margin: 0 }}>{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
        
          </div>
        </section>
    
        <section style={{ padding: '5rem 0', backgroundColor: '#fcfcf8' }}>
          <div className="container container-w-outer container-max">
            
            <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Our people in action</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '2rem', maxWidth: '800px' }}> Crew stories</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>The dedication and professionalism of our seafarers, from commanding officers to cadets, driving performance across the fleet.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>crew.roles.0.desc</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>crew.roles.1.desc</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>crew.roles.2.desc</p>
            
            <div className="row mt-5 pt-4">
              {[{"h3":"Captains & Officers","p":"crew.roles.0.desc"},{"h3":"Marine Engineers","p":"crew.roles.1.desc"},{"h3":"Ratings & Cadets","p":"crew.roles.2.desc"}].map((item, idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px', height: '100%', borderTop: '4px solid #007236' }}>
                    <h3 className="heading h5 mb-3" style={{ fontWeight: 600 }}>{item.h3}</h3>
                    <p style={{ color: '#4b5563', lineHeight: 1.5, margin: 0 }}>{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
        
          </div>
        </section>
    
        <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            
            <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '2rem', maxWidth: '800px' }}> Common Questions</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Every seafarer candidate undergoes a rigorous multi-stage process: documentary verification of certificates (STCW, flag state endorsements), medical assessment to ENG1 or equivalent standards, competency interviews, and background checks. Only those meeting all criteria are added to our approved crew pool.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>ASP provides a comprehensive training framework including vessel familiarization courses, safety management system briefings, advanced simulator exercises for tanker and bulk carrier operations, and support for officers pursuing higher certifications. We also run a structured cadet program to develop the next generation of maritime officers.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>We invest in crew welfare through regular communication, competitive compensation, timely repatriation, and access to mental health and wellbeing resources. Our shore-side team is available 24/7 to assist crew and their families throughout every voyage.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>We have established protocols with telemedicine providers for immediate remote consultation. If shore-side medical attention is required, we coordinate with local agents to ensure prompt treatment and repatriation if necessary, fully covered by P&I insurance.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Contract lengths vary depending on the vessel type and rank, but they typically range from 4 to 9 months. We strive to accommodate seafarers' preferences while maintaining operational continuity for our fleet.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Absolutely. We prioritize promoting from within. Our performance appraisal system and continuous training programs are designed to identify and groom talent for higher ranks, including transition to shore-based management roles.</p>
            
          </div>
        </section>
    

        <RelatedServices currentServicePath="/crew-management" />
      </main>
      <Footer />
    </>
  );
}
