import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import ServiceContent from '@/components/what-we-do/ServiceContent';
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
      <main className="legacy-inner-page page wp-theme-restless-theme">
        <div id="page" className="site">
          <div id="content" className="site-content">
            <ServiceBreadcrumb serviceName="Commercial Management" />
            
            <ServicePageHero 
              title="Commercial Management" 
              imageSrc="/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp"
              imageAlt="Asia Pacific Shipping Commercial Management"
            />
            
            <ServiceContent 
              intro="Our commercial management services provide comprehensive employment strategies across time charter, spot voyage, and pool partnerships. We leverage deep market insight and global relationships to match every vessel to the trade where it can perform best, maximizing utilization and profitability while minimizing risk."
              features={[
                { title: "Chartering Strategy", description: "Developing and executing optimal employment strategies tailored to market conditions and vessel capabilities." },
                { title: "Voyage Operations", description: "End-to-end management of voyage execution, ensuring efficient routing, cargo handling, and port operations." },
                { title: "Post-Fixture Operations", description: "Diligent handling of all post-fixture matters, including laytime calculations, freight collection, and claims management." },
                { title: "Market Intelligence", description: "Continuous market monitoring and analysis to identify emerging trends and opportunities for our fleet." }
              ]}
              imageSrc="/wp-content/uploads/asp_images/partners/logo-client-vitol.png"
              imageAlt="Commercial Operations"
            />
            
            <RelatedServices currentServicePath="/commercial-management" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
