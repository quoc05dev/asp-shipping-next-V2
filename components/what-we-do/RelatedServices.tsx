import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Service, RelatedServicesSectionContent } from '@/data/cms/types';

interface RelatedServicesProps {
  content?: RelatedServicesSectionContent;
  services: Service[];
}

export default function RelatedServices({ content, services }: RelatedServicesProps) {
  // Use default content if not provided by CMS yet
  const eyebrow = content?.eyebrow || 'Related Services';
  const heading = content?.heading || 'Explore more of our maritime services.';

  return (
    <section className="layout layout-page layout-root" style={{ paddingBottom: 'clamp(2rem, 5vw, 4rem)' }}>
      <div className="layout-inner">
        <div className="row u-mb-4 align-items-end">
          <div className="col-12 col-md-8">
            <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
              {eyebrow}
            </h2>
            <div className="section-lead-content u-h4 u-mb-0">
              <p>{heading}</p>
            </div>
          </div>
        </div>
        <div className="row u-gy-4 u-gx-4">
          {services.map(service => (
            <div className="col-12 col-md-4" key={service.slug}>
              <Link 
                href={`/${service.slug}`} 
                className="card card-page-link u-border-radius u-overflow-hidden u-h-100 home-service-card" 
                style={{ textDecoration: 'none', border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', flexShrink: 0 }}>
                  {service.heroImage && (
                    <Image src={service.heroImage.url} alt={service.heroImage.alt} fill style={{ objectFit: 'cover' }} />
                  )}
                </div>
                <div className="card-body u-px-4 u-py-4 u-bg-lighter" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="h5 card-title entry-title u-mb-2 u-text-color-black">{service.name}</h3>
                  <div className="entry-excerpt content-width" style={{ display: 'flex', flexGrow: 1 }}>
                    <p style={{ color: '#4a4a4a', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
                      {service.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
