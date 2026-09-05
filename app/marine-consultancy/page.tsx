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
  description: 'What we do',
};

export default function MarineConsultancyPage() {
  return (
    <>
      <Header />
      <ServiceBreadcrumb serviceName="Marine Consultancy" />
      <main className="page" style={{ backgroundColor: '#ffffff' }}>
        
        <ServicePageHero 
          title={"From practice to strategy"} 
          imageSrc="/images/heads/tanker-forward-course.webp"
          imageAlt="Marine Consultancy"
        />
        
        
        <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            
            <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Specialized solutions</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '2rem', maxWidth: '800px' }}> Core Services</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Our consultancy is grounded in the operational reality of managing a modern, compliant, and efficient fleet.</p>
            
            <div className="row mt-5 pt-4">
              {[{"h3":"Newbuilding Supervision","p":"Providing comprehensive shipbuilding project management from design review and shipyard selection to on-site construction supervision and launching. We bring practical experience from major international newbuild projects (such as the 21-vessel project at CSSC Dalian)."},{"h3":"ESG & Decarbonization","p":"Advising on pathways to meet IMO emission standards (EEXI, CII indices). Supporting the evaluation and implementation of energy-saving technologies and transition plans for dual-fuel (Methanol/LNG) vessel operations."},{"h3":"Marine Due Diligence & S&P","p":"Conducting detailed surveys and technical assessments of vessels prior to Sale & Purchase transactions or Dry-docking, helping investors identify risks and accurately value maritime assets."}].map((item, idx) => (
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
            
            <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '2rem', maxWidth: '800px' }}> Common Questions</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>We consult on a wide range of projects including newbuilding supervision, ESG compliance, and S&P due diligence.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>As active shipowners, our advice is grounded in the practical realities of running a fleet, not just theory.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Yes, we help owners navigate IMO regulations and evaluate transition pathways such as methanol dual-fuel systems.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Absolutely. We offer complete project management from design review to on-site shipyard supervision.</p>
            
          </div>
        </section>
    

        <RelatedServices currentServicePath="/marine-consultancy" />
      </main>
      <Footer />
    </>
  );
}
