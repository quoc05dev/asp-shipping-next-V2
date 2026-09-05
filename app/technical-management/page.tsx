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
  description: 'What we do',
};

export default function TechnicalManagementPage() {
  return (
    <>
      <Header />
      <main className="page" style={{ backgroundColor: '#ffffff' }}>
        <ServiceBreadcrumb serviceName="Technical Management" />
        
        <ServicePageHero 
          title={"Superior Standards"} 
          imageSrc="/images/heads/tanker-forward-course.webp"
          imageAlt="Technical Management"
        />
        
        
        <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            
            <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Core disciplines</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '2rem', maxWidth: '800px' }}> Management Pillars</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Our technical management approach integrates stringent safety protocols with advanced monitoring.</p>
            
            <div className="row mt-5 pt-4">
              {[{"h3":"TMSA & Vetting","p":"ASP's technical management system strictly complies with TMSA (Tanker Management and Self Assessment) standards and the ISM Code. The fleet is constantly maintained in a state of readiness to pass the most rigorous inspections (SIRE/CDI) from leading energy conglomerates (Oil Majors)."},{"h3":"Preventive Maintenance & Dry-docking","p":"Utilizing modern Planned Maintenance Systems (PMS) for the early detection of malfunction risks. We optimize every dry-docking item, minimizing off-hire time and effectively controlling costs."},{"h3":"Vessel Performance Monitoring","p":"Integrating sensor technology and real-time data acquisition systems (ship-to-shore). Closely monitoring speed, fuel consumption, and machinery conditions to make instantaneous adjustments, reducing emissions and increasing economic efficiency for every voyage."}].map((item, idx) => (
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
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>We prioritize preventive maintenance using advanced PMS to minimize downtime and ensure peak performance.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Our fleet is maintained in a constant state of readiness to pass the most rigorous SIRE/CDI inspections.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Yes, we handle all aspects of dry-docking, optimizing work scopes to control costs and reduce off-hire time.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>We integrate ship-to-shore sensor technology to closely monitor speed and consumption, making adjustments to maximize efficiency.</p>
            
          </div>
        </section>
    

        <RelatedServices currentServicePath="/technical-management" />
      </main>
      <Footer />
    </>
  );
}
