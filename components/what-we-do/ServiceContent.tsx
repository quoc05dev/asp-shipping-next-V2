import React from 'react';
import Image from 'next/image';

interface ServiceContentProps {
  intro: string;
  features: { title: string; description: string }[];
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceContent({ intro, features, imageSrc, imageAlt }: ServiceContentProps) {
  return (
    <section className="layout layout-page-content" style={{ padding: '4rem 0' }}>
      <div className="container container-w-outer container-max">
        <div className="row">
          <div className="col-12 col-lg-7" style={{ paddingRight: '2rem' }}>
            <h2 className="heading h3 mb-4" style={{ color: '#007236', fontWeight: 600 }}>Overview</h2>
            <p className="lead mb-5" style={{ fontSize: '1.15rem', lineHeight: 1.6, color: '#333' }}>
              {intro}
            </p>
            
            <h3 className="heading h4 mb-4" style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '0.5rem' }}>Capabilities</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#007236', marginRight: '1rem', marginTop: '0.25rem', fontSize: '1.2rem' }}>✓</span>
                  <div>
                    <h4 className="heading h6 mb-1" style={{ fontWeight: 600, color: '#1a1a1a' }}>{feature.title}</h4>
                    <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.5 }}>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-12 col-lg-5 mt-5 mt-lg-0">
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image 
                src={imageSrc}
                alt={imageAlt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div className="mt-4 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #007236' }}>
              <h4 className="heading h6 mb-2">Need to discuss your requirements?</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                Our team of maritime experts is ready to assist you.
              </p>
              <a href="/contact-us" className="button button-outline" style={{ display: 'inline-block', color: '#007236', border: '1px solid #007236', padding: '0.5rem 1rem', textDecoration: 'none', borderRadius: '4px' }}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
