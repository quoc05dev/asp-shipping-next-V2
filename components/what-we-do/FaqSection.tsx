'use client';

import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import Image from 'next/image';
import { FaqSectionContent, ServiceFaq } from '@/data/cms/types';

interface FaqSectionProps {
  content: FaqSectionContent;
  items: ServiceFaq[];
}

export default function FaqSection({ content, items }: FaqSectionProps) {
  const rightColRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  // eslint-disable-next-line react-hooks/refs -- refs are only read inside the effect, never during render
  useIsomorphicLayoutEffect(() => {
    const calculateHeight = () => {
      if (window.innerWidth < 992) {
        setImageHeight(undefined);
        return;
      }
      
      if (!rightColRef.current || !imageWrapperRef.current) return;

      const details = rightColRef.current.querySelectorAll('details');
      if (details.length === 0) return;
      
      const openStates = Array.from(details).map(d => d.open);
      
      // Temporarily close all to measure the collapsed baseline
      details.forEach(d => d.open = false);
      
      // Measure the exact visible bottom of the last FAQ question (its bottom border)
      const lastDetails = details[details.length - 1];
      const lastRect = lastDetails.getBoundingClientRect();
      const imageTop = imageWrapperRef.current.getBoundingClientRect().top;
      
      // Restore states
      details.forEach((d, i) => d.open = openStates[i]);
      
      // The desired height of the image wrapper is exactly the distance from its top to the last divider
      const calculatedImageHeight = lastRect.bottom - imageTop;
      
      if (calculatedImageHeight > 0) {
        setImageHeight(calculatedImageHeight);
      }
    };

    calculateHeight();
    
    window.addEventListener('resize', calculateHeight);
    
    if (document.fonts) {
      document.fonts.ready.then(calculateHeight);
    }
    
    return () => window.removeEventListener('resize', calculateHeight);
  }, [items]);

  return (
    <section className="layout layout-page layout-root">
      <div className="layout-inner">
        <div className="row u-gy-4 u-gx-5">
          <div className="col-12 col-lg-4" style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                {content.eyebrow}
              </h2>
              <div className="section-lead-content u-h4 u-mb-4">
                <p>{content.heading}</p>
              </div>
              <div className="content-width u-mb-4">
                <p>{content.intro}</p>
              </div>
            </div>
            
            <div 
              ref={imageWrapperRef}
              style={{ 
                position: 'relative', 
                width: '100%', 
                height: imageHeight !== undefined ? `${imageHeight}px` : '250px',
                // Ensure it stacks nicely on mobile
                minHeight: imageHeight === undefined ? '250px' : undefined
              }}
            >
              <Image src={content.image.url} alt={content.image.alt} fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-12 col-lg-8" ref={rightColRef}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {items.map((faq, idx) => (
                <details 
                  key={faq.id || idx} 
                  style={{ paddingBottom: '1rem', marginBottom: '1rem', borderBottom: '1px solid #e5e5e5' }}
                  className="faq-details"
                >
                  <summary 
                    className="u-font-weight-bold" 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', margin: 0, listStyle: 'none' }}
                  >
                    <span style={{ paddingRight: '2rem' }}>{faq.question}</span>
                    <span style={{ color: '#007236', flexShrink: 0, fontSize: '1.2rem', fontWeight: 400 }}>+</span>
                  </summary>
                  <div className="u-mt-3 content-width" style={{ paddingRight: '2rem' }}>
                    <p className="u-mb-0" style={{ fontWeight: 400 }}>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
            {/* Embedded style to hide default summary arrow */}
            <style dangerouslySetInnerHTML={{__html: `
              .faq-details summary::-webkit-details-marker { display: none; }
              .faq-details[open] summary span:last-child { transform: rotate(45deg); display: inline-block; }
              .faq-details summary span:last-child { transition: transform 0.2s ease; }
            `}} />
          </div>
        </div>
      </div>
    </section>
  );
}
