import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import ServiceContent from '@/components/what-we-do/ServiceContent';
import RelatedServices from '@/components/what-we-do/RelatedServices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sea Transportation | ASP Shipping',
  description: 'Flexible sea transportation across dry bulk, clean and dirty petroleum products, LPG and chemical cargoes, delivered with disciplined planning and cargo care.',
};

export default function SeaTransportationPage() {
  return (
    <>
      <Header />
      <main className="legacy-inner-page page wp-theme-restless-theme">
        <div id="page" className="site">
          <div id="content" className="site-content">
            <ServiceBreadcrumb serviceName="Sea Transportation" />
            
            <ServicePageHero 
              title="Sea Transportation" 
              imageSrc="/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png"
              imageAlt="Asia Pacific Shipping Sea Transportation"
            />
            
            <ServiceContent 
              intro="We provide flexible and reliable sea transportation services across a diverse range of cargo types. Our modern fleet and experienced crews ensure the safe and efficient delivery of dry bulk, clean and dirty petroleum products, LPG, and specialized chemical cargoes, backed by disciplined planning and uncompromising cargo care."
              features={[
                { title: "Specialized Gas Transport", description: "Expert handling and transportation of LPG, petrochemicals, and other specialty gases using our specialized fleet." },
                { title: "Dry Bulk & Tankers", description: "Versatile shipping solutions for various commodities, maintaining high standards of cargo integrity throughout the voyage." },
                { title: "Global Reach", description: "Operating across major global trade routes with the capability to service complex logistical requirements." },
                { title: "Safety & Sustainability", description: "Committed to minimizing environmental impact and ensuring the highest safety standards in all our transportation activities." }
              ]}
              imageSrc="/wp-content/uploads/asp_images/partners/logo-client-chinaland.png"
              imageAlt="Sea Transportation Services"
            />
            
            <RelatedServices currentServicePath="/sea-transportation" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
