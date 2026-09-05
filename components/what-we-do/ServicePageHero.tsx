import React from 'react';
import Image from 'next/image';
import ServiceBreadcrumb from '@/components/what-we-do/ServiceBreadcrumb';

interface ServiceHeroProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumbName?: string;
}

export default function ServicePageHero({ title, imageSrc, imageAlt, breadcrumbName }: ServiceHeroProps) {
  return (
    <header className="entry-header">
      <div className="layout layout-page-header layout-page layout-full u-px-0 layout-root">
        <div className="layout-inner">
          <div className="banner banner-page banner-page-has-image">
            <div className="banner-inner u-pos-relative">
              <div className="banner-media" style={{ height: '500px', width: '100%', position: 'relative' }}>
                <Image 
                  src={imageSrc} 
                  alt={imageAlt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority
                />
                <span className="banner-backdrop u-pos-absolute u-pos-x u-pos-y" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}></span>
              </div>
              <div className="banner-overlay u-pos-absolute u-pos-x u-pos-y u-d-flex u-flex-column u-justify-content-end u-h-100" style={{ paddingBottom: '3rem', zIndex: 10 }}>
                <div className="container container-rfs container-w-outer">
                  <div className="banner-content">
                    {breadcrumbName && <ServiceBreadcrumb serviceName={breadcrumbName} isOverlay={true} />}
                    <hr style={{ borderTop: '2px solid #007236', width: '50px', marginLeft: 0, marginBottom: '1.5rem' }} />
                    <h1 className="heading h2 u-mb-3 entry-title u-font-weight-normal" style={{ color: '#ffffff' }}>
                      {title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
