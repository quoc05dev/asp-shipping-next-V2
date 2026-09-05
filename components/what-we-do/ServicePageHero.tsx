import React from 'react';
import Image from 'next/image';
import { HeroSectionContent } from '@/data/cms/types';

interface ServiceHeroProps {
  content: HeroSectionContent;
}

export default function ServicePageHero({ content }: ServiceHeroProps) {
  return (
    <header className="entry-header">
      <div className="layout layout-page-header layout-page layout-full u-px-0 layout-root">
        <div className="layout-inner">
          <div className="banner banner-page banner-page-has-image">
            <div className="banner-inner u-pos-relative">
              <div className="banner-media">
                <span className="ratio">
                  <span className="ratio-size"></span>
                  <Image 
                    src={content.image.url} 
                    alt={content.image.alt}
                    fill
                    className="banner-img"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                  />
                  <span className="banner-backdrop u-pos-absolute u-pos-x u-pos-y" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}></span>
                </span>
              </div>
              <div className="banner-overlay u-pos-absolute u-pos-x u-pos-y u-d-flex u-flex-column u-justify-content-end u-h-100">
                <div className="container container-rfs container-w-outer">
                  <div className="banner-content">
                    <hr />
                    <h1 className="heading h2 u-mb-3 entry-title u-font-weight-normal" style={{ color: '#ffffff' }}>
                      {content.title}
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
