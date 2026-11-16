import React from 'react';
import { getCmsRepository } from '@/data/cms/getCmsRepository';
import { requirePageSection } from '@/data/cms/requirePageSection';

export function ServiceIcon({ icon }: { icon: string }) {
  let artwork: React.ReactNode;

  switch (icon) {
    case "commercial":
      artwork = (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path className="icon-accent" d="M8 15l3-3 2 2 4-4" />
          <path className="icon-accent" d="M17 14v-4h-4" />
        </>
      );
      break;
    case "technical":
      artwork = (
        <>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 9v3l1.5 1.5" />
          <path className="icon-accent" d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
        </>
      );
      break;
    case "marine":
      artwork = (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path className="icon-accent" d="M8 11l3 3 5-5" />
        </>
      );
      break;
    case "crew":
      artwork = (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path className="icon-accent" d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path className="icon-accent" d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      );
      break;
    case "sea":
      artwork = (
        <>
          <path d="M2 11h20" />
          <path d="M16 11h5" />
          <rect className="icon-accent" x="6" y="11" width="4" height="4" />
          <rect className="icon-accent" x="11" y="11" width="4" height="4" />
          <path className="icon-accent" d="M2 20c2 0 3 1 5 1s3-1 5-1 3 1 5 1 3-1 5-1" />
        </>
      );
      break;
  }

  return (
    <svg
      className="home-service-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {artwork}
    </svg>
  );
}

export default async function WhatWeDo() {
  const cmsRepository = await getCmsRepository();
  const services = await cmsRepository.getServices();
  const wwd = await requirePageSection('home', 'home_what_we_do');

  return (
    <>
      <div id="what-we-do" className="layout layout-page layout-root" data-cms-section="what_we_do">
        <div className="layout-inner">
          <div className="row u-gy-4 u-gx-4">
            {/*  Left Column: Title and Text  */}
            <div className="col-12 col-lg-4">
              <div className="content-width left" style={{paddingRight: "2rem", height: "100%", }}>
                <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">{wwd?.content?.eyebrow || 'What We Do'}</h2>

                <div className="section-lead-content u-h4 u-mb-3" data-cms-field="title"><p>{wwd?.content?.title || 'Maritime solutions'}</p></div>
                <p data-cms-field="description">{wwd?.content?.description || 'Commercial judgment, technical discipline and operational care across every stage of a vessel\'s lifecycle. We provide end-to-end maritime services, ensuring optimal performance, stringent regulatory compliance, and sustainable operations worldwide. Our dedicated team of experts works closely with partners to navigate the complexities of global shipping and deliver exceptional, reliable value.'}</p>
              </div>
            </div>
            
            {services.map((service, index) => {
              let iconName = "commercial";
              if (service.name.toLowerCase().includes("technical")) iconName = "technical";
              if (service.name.toLowerCase().includes("marine")) iconName = "marine";
              if (service.name.toLowerCase().includes("crew")) iconName = "crew";
              if (service.name.toLowerCase().includes("sea")) iconName = "sea";

              return (
                <div key={service.id || index} className="col-12 col-md-6 col-lg-4">
                  <div className="card u-h-100 u-border home-service-card" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
                    <div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

                      <div className="home-service-heading-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                        <ServiceIcon icon={iconName} />
                        <div className="section-lead-content u-h4 u-mb-0"><p style={{ margin: 0 }}>{service.name}</p></div>
                      </div>
                      <p className="u-mb-5" style={{flexGrow: "1", }}>{service.excerpt}</p>
                      <div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
                        <a href={`/${service.slug}`} className="button button-outline"><span>Explore {service.name}</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
