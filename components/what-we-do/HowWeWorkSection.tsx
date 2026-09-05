import React from 'react';
import Image from 'next/image';
import { HowWeWorkSectionContent } from '@/data/cms/types';

export interface HowWeWorkSectionProps {
  content: HowWeWorkSectionContent;
}

export default function HowWeWorkSection({ content }: HowWeWorkSectionProps) {
  return (
    <section className="layout layout-page layout-root">
      <style>{`
        .how-we-work-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .hww-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          border-radius: 4px;
          overflow: hidden;
        }
        .hww-right-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (min-width: 992px) {
          .how-we-work-grid {
            grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
            gap: 4rem;
          }
        }
      `}</style>
      <div className="layout-inner">
        <div className="how-we-work-grid">
          
          {/* LEFT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0 u-mt-0">
              {content.eyebrow}
            </h2>
            <div className="section-lead-content u-h4 u-mb-4" dangerouslySetInnerHTML={{ __html: content.heading }} />
            <div className="content-width u-mb-5" dangerouslySetInnerHTML={{ __html: content.intro }} />
            <div className="hww-image-wrapper">
              <Image 
                src={content.image.url}
                alt={content.image.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hww-right-col">
            <div className="process-list" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: '1.5rem' }}>
              {content.items.map((item, idx) => (
                <div key={idx} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 className="heading h6 u-mb-2 u-font-weight-bold">{item.title}</h3>
                  <p className="u-mb-0" style={{ color: '#4a4a4a', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
