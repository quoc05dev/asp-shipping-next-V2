import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';
import ServiceContent from '@/components/what-we-do/ServiceContent';
import RelatedServices from '@/components/what-we-do/RelatedServices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crew Management | ASP Shipping',
  description: 'Recruitment, deployment, training and welfare for qualified seafarers, supporting safe operations and reliable performance on every voyage.',
};

export default function CrewManagementPage() {
  return (
    <>
      <Header />
      <main className="legacy-inner-page page wp-theme-restless-theme">
        <div id="page" className="site">
          <div id="content" className="site-content">
            <ServiceBreadcrumb serviceName="Crew Management" />
            
            <ServicePageHero 
              title="Crew Management" 
              imageSrc="/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg"
              imageAlt="Asia Pacific Shipping Crew Management"
            />
            
            <ServiceContent 
              intro="Our crew management services focus on the recruitment, deployment, training, and welfare of highly qualified seafarers. We believe that our crew is our most valuable asset, and their well-being and professional development are central to ensuring safe operations and reliable performance on every voyage."
              features={[
                { title: "Recruitment & Selection", description: "Rigorous screening and selection processes to ensure we employ skilled, experienced, and certified seafarers who meet our high standards." },
                { title: "Training & Development", description: "Continuous investment in training programs, including simulator courses and onboard drills, to enhance crew competence and safety awareness." },
                { title: "Crew Welfare", description: "Comprehensive support systems focusing on physical and mental well-being, ensuring our seafarers remain motivated and healthy." },
                { title: "Payroll & Administration", description: "Efficient and transparent handling of crew payroll, travel arrangements, and administrative matters to support seamless crew changes." }
              ]}
              imageSrc="/wp-content/uploads/asp_images/news/fleet-expansion.jpg"
              imageAlt="Crew Operations"
            />
            
            <RelatedServices currentServicePath="/crew-management" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
