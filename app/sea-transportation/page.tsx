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
  description: 'What we do',
};

export default function SeaTransportationPage() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
      <ServiceBreadcrumb serviceName="Sea Transportation" />
      <main className="page" style={{ backgroundColor: '#ffffff' }}>
        
        <ServicePageHero 
          title={"The Engine of Global Supply Chains"} 
          imageSrc="/images/heads/tanker-forward-course.webp"
          imageAlt="Sea Transportation"
        />
        
        
        <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
          <div className="container container-w-outer container-max">
            
            <h2 className="heading h2 mb-4" style={{ fontWeight: 400 }}>Specialized transport</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '2rem', maxWidth: '800px' }}> Fleet Capabilities</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Our modern fleet provides immense payload capacity and highly specialized cargo handling.</p>
            
            <div className="row mt-5 pt-4">
              {[{"h3":"CPP/DPP & Chemicals","p":"Safely transporting Clean Petroleum Products (CPP) and Dirty Petroleum Products (DPP). Our modern MR2 and LR2 fleet (up to 114,800 DWT) operates under absolute anti-pollution protocols, ensuring complete cargo integrity."},{"h3":"Dry Bulk","p":"Providing immense payload capacity for the transport of essential raw materials such as coal, iron ore, cement, and agricultural products. Ensuring stable scheduling across bustling trade routes in the Asia-Pacific region and beyond."},{"h3":"LPG","p":"Operating specialized tanker vessels for liquefied gas. Our highly experienced officers and crew execute extremely rigorous cargo pressure and temperature control procedures, guaranteeing absolute safety from load port to discharge port."}].map((item, idx) => (
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
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>We transport a wide range of cargoes including Clean and Dirty Petroleum Products, Chemicals, LPG, and Dry Bulk commodities.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Our fleet operates on global trade routes, with a strong presence in the Asia-Pacific region and beyond.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Our modern fleet and experienced crews operate under strict anti-pollution and safety protocols, especially for LPG and chemical transport.</p>
<p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4b5563', marginBottom: '1rem', maxWidth: '800px' }}>Yes, we provide flexible transportation solutions including spot voyages, time charters, and Contracts of Affreightment (COA).</p>
            
          </div>
        </section>
    

        <RelatedServices currentServicePath="/sea-transportation" />
      </main>
      </div>
      <Footer />
    </>
  );
}
