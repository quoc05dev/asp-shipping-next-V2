import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import ServiceContent from '@/components/what-we-do/ServiceContent';
import RelatedServices from '@/components/what-we-do/RelatedServices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Management | ASP Shipping',
  description: 'Planned maintenance, dry-docking, performance, safety and regulatory oversight delivered through a disciplined, TMSA-aligned management system.',
};

export default function TechnicalManagementPage() {
  return (
    <>
      <Header />
      <main className="legacy-inner-page page wp-theme-restless-theme">
        <div id="page" className="site">
          <div id="content" className="site-content">
            <ServiceBreadcrumb serviceName="Technical Management" />
            
            <ServicePageHero 
              title="Technical Management" 
              imageSrc="/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp"
              imageAlt="Asia Pacific Shipping Technical Management"
            />
            
            <ServiceContent 
              intro="Our technical management services are driven by a commitment to safety, reliability, and environmental stewardship. We deliver planned maintenance, dry-docking, and performance oversight through a disciplined, TMSA-aligned management system, ensuring our vessels operate at peak efficiency and comply with the highest industry standards."
              features={[
                { title: "Planned Maintenance", description: "Rigorous execution of maintenance schedules using advanced fleet management software to prevent breakdowns and extend vessel lifespans." },
                { title: "Safety & Compliance", description: "Strict adherence to international regulations, flag state requirements, and classification society standards, backed by continuous safety training." },
                { title: "Dry-docking & Repairs", description: "Comprehensive planning and execution of dry-docking projects, minimizing off-hire time and controlling costs without compromising quality." },
                { title: "Performance Monitoring", description: "Real-time tracking of vessel performance and fuel consumption to optimize efficiency and reduce our environmental footprint." }
              ]}
              imageSrc="/wp-content/uploads/asp_images/ships/rainbow.jpg"
              imageAlt="Technical Operations"
            />
            
            <RelatedServices currentServicePath="/technical-management" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
