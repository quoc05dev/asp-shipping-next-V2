import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What We Do | ASP Shipping',
  description: 'Commercial judgment, technical discipline and operational care across every stage of a vessel\'s lifecycle. We provide end-to-end maritime services.',
};

const services = [
  {
    id: '01',
    title: 'Commercial Management',
    description: 'Employment strategy across time charter, spot voyage and pool partnerships, matching every vessel to the trade where it can perform best.',
    href: '/commercial-management',
    image: '/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp',
  },
  {
    id: '02',
    title: 'Technical Management',
    description: 'Planned maintenance, dry-docking, performance, safety and regulatory oversight delivered through a disciplined, TMSA-aligned management system.',
    href: '/technical-management',
    image: '/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp',
  },
  {
    id: '03',
    title: 'Marine Consultancy',
    description: 'Practical maritime advice for commercial planning, technical projects, compliance and fleet development, grounded in operating experience.',
    href: '/marine-consultancy',
    image: '/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp',
  },
  {
    id: '04',
    title: 'Crew Management',
    description: 'Recruitment, deployment, training and welfare for qualified seafarers, supporting safe operations and reliable performance on every voyage.',
    href: '/crew-management',
    image: '/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg',
  },
  {
    id: '05',
    title: 'Sea Transportation',
    description: 'Flexible sea transportation across dry bulk, clean and dirty petroleum products, LPG and chemical cargoes, delivered with disciplined planning and cargo care.',
    href: '/sea-transportation',
    image: '/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png',
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="what-we-do-page" style={{ paddingBottom: '6rem' }}>
      {/* Hero Section */}
      <section 
        style={{ 
          padding: '6rem 2rem 4rem', 
          backgroundColor: '#f9f9f9',
          borderBottom: '1px solid #e5e7eb'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 
            style={{ 
              fontSize: '3rem', 
              fontWeight: 600, 
              color: '#1a1a1a', 
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            What We Do
          </h1>
          <p 
            style={{ 
              fontSize: '1.25rem', 
              lineHeight: 1.6, 
              color: '#4b5563', 
              maxWidth: '800px',
              margin: 0
            }}
          >
            Commercial judgment, technical discipline and operational care across every stage of a vessel's lifecycle. We provide end-to-end maritime services, ensuring optimal performance, stringent regulatory compliance, and sustainable operations worldwide. Our dedicated team of experts works closely with partners to navigate the complexities of global shipping and deliver exceptional, reliable value.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                  direction: index % 2 === 1 ? 'rtl' : 'ltr'
                }}
              >
                <div style={{ direction: 'ltr' }}>
                  <div 
                    style={{ 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      color: '#059669', // ASP Green accent
                      marginBottom: '1rem',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {service.id}
                  </div>
                  <h2 
                    style={{ 
                      fontSize: '2rem', 
                      fontWeight: 600, 
                      color: '#1a1a1a', 
                      marginBottom: '1.5rem',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {service.title}
                  </h2>
                  <p 
                    style={{ 
                      fontSize: '1.125rem', 
                      lineHeight: 1.6, 
                      color: '#4b5563', 
                      marginBottom: '2rem'
                    }}
                  >
                    {service.description}
                  </p>
                  <Link 
                    href={service.href}
                    className="service-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      borderBottom: '1px solid #1a1a1a',
                      paddingBottom: '0.25rem',
                      transition: 'color 0.2s, border-color 0.2s'
                    }}
                  >
                    Explore {service.title} &rarr;
                  </Link>
                </div>
                
                <div style={{ direction: 'ltr', position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px' }}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Navigation / CTA */}
      <section style={{ padding: '4rem 2rem 0' }}>
        <div 
          style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            paddingTop: '4rem', 
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '1.5rem' }}>
            Ready to learn more?
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem', maxWidth: '600px' }}>
            Discover our extensive fleet or get in touch with our global team to discuss your maritime requirements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link 
              href="/our-fleet"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 500,
                borderRadius: '4px',
                transition: 'background-color 0.2s'
              }}
            >
              View Our Fleet
            </Link>
            <Link 
              href="/contact-us"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: '#1a1a1a',
                textDecoration: 'none',
                fontWeight: 500,
                borderRadius: '4px',
                border: '1px solid #1a1a1a',
                transition: 'background-color 0.2s, color 0.2s'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
