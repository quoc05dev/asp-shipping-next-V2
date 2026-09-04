import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import ServiceContent from '@/components/what-we-do/ServiceContent';
import RelatedServices from '@/components/what-we-do/RelatedServices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marine Consultancy | ASP Shipping',
  description: 'Practical maritime advice for commercial planning, technical projects, compliance and fleet development, grounded in operating experience.',
};

export default function MarineConsultancyPage() {
  return (
    <>
      <Header />
      <main className="legacy-inner-page page wp-theme-restless-theme">
        <div id="page" className="site">
          <div id="content" className="site-content">
            <ServiceBreadcrumb serviceName="Marine Consultancy" />
            
            <ServicePageHero 
              title="Marine Consultancy" 
              imageSrc="/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp"
              imageAlt="Asia Pacific Shipping Marine Consultancy"
            />
            
            <ServiceContent 
              intro="We provide practical maritime advice grounded in decades of operating experience. Our marine consultancy services support commercial planning, technical projects, regulatory compliance, and fleet development, helping our clients navigate complex industry challenges with confidence and strategic foresight."
              features={[
                { title: "Newbuilding Supervision", description: "Expert oversight of vessel construction from design review to delivery, ensuring quality, compliance, and adherence to specifications." },
                { title: "Vessel Inspections & Audits", description: "Independent assessments of vessel condition, safety management systems, and operational practices to identify and mitigate risks." },
                { title: "Regulatory Compliance", description: "Guidance on navigating evolving maritime regulations, including environmental standards, safety codes, and industry best practices." },
                { title: "Technical Feasibility Studies", description: "In-depth analysis of technical projects, retrofits, and fleet expansion strategies to support informed investment decisions." }
              ]}
              imageSrc="/wp-content/uploads/asp_images/partners/logo-client-clarksons.png"
              imageAlt="Consultancy Services"
            />
            
            <RelatedServices currentServicePath="/marine-consultancy" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
