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
    icon: 'commercial',
    title: 'Commercial Management',
    description: 'Employment strategy across time charter, spot voyage and pool partnerships, matching every vessel to the trade where it can perform best.',
    href: '/commercial-management',
    image: '/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp',
  },
  {
    id: '02',
    icon: 'technical',
    title: 'Technical Management',
    description: 'Planned maintenance, dry-docking, performance, safety and regulatory oversight delivered through a disciplined, TMSA-aligned management system.',
    href: '/technical-management',
    image: '/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp',
  },
  {
    id: '03',
    icon: 'marine',
    title: 'Marine Consultancy',
    description: 'Practical maritime advice for commercial planning, technical projects, compliance and fleet development, grounded in operating experience.',
    href: '/marine-consultancy',
    image: '/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp',
  },
  {
    id: '04',
    icon: 'crew',
    title: 'Crew Management',
    description: 'Recruitment, deployment, training and welfare for qualified seafarers, supporting safe operations and reliable performance on every voyage.',
    href: '/crew-management',
    image: '/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg',
  },
  {
    id: '05',
    icon: 'sea',
    title: 'Sea Transportation',
    description: 'Flexible sea transportation across dry bulk, clean and dirty petroleum products, LPG and chemical cargoes, delivered with disciplined planning and cargo care.',
    href: '/sea-transportation',
    image: '/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png',
  },
];


function ServiceIcon({ type }: { type: string }) {
  let artwork;
  switch (type) {
    case 'commercial': artwork = <><path d="M8 42h48l-7 10H18L8 42Z" /><rect x="17" y="31" width="10" height="11" /><rect x="27" y="31" width="10" height="11" /><rect x="37" y="31" width="10" height="11" /><path style={{ stroke: "#059669" }} d="M13 24c10-12 28-14 39-3" /><path style={{ stroke: "#059669" }} d="m46 17 6 4-5 5" /></>; break;
    case 'technical': artwork = <><circle cx="32" cy="32" r="22" /><circle style={{ stroke: "#059669", fill: "#059669" }} cx="32" cy="32" r="4" /><path d="M32 28c-5-6-4-13 1-17 6 5 6 12 2 18" /><path d="M36 32c6-5 13-4 17 1-5 6-12 6-18 2" /><path d="M32 36c5 6 4 13-1 17-6-5-6-12-2-18" /><path d="M28 32c-6 5-13 4-17-1 5-6 12-6 18-2" /></>; break;
    case 'marine': artwork = <><path d="M10 13h44v32H31l-10 8v-8H10V13Z" /><path style={{ stroke: "#059669" }} d="M17 36c7-12 15-14 29-13" /><circle cx="17" cy="36" r="2" /><circle cx="46" cy="23" r="2" /><path d="m31 20 5 9-9 5 4-14ZM31 17v3M31 34v3M23 27h3M36 27h3" /></>; break;
    case 'crew': artwork = <><circle cx="32" cy="25" r="8" /><path style={{ stroke: "#059669" }} d="M19 25c0-8 5-14 13-14s13 6 13 14" /><path d="M17 25h30M32 11v7" /><path d="M16 53c1-11 7-17 16-17s15 6 16 17M25 38l7 7 7-7" /></>; break;
    case 'sea': artwork = <><path d="M7 42h50l-8 10H17L7 42Z" /><path d="M15 42a8 8 0 0 1 16 0M25 42a8 8 0 0 1 16 0M35 42a8 8 0 0 1 16 0" /><path d="M51 42V27h5" /><path style={{ stroke: "#059669" }} d="M32 13v10M27.7 15.5l8.6 5M36.3 15.5l-8.6 5" /></>; break;
    default: artwork = null;
  }
  
  if (!artwork) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={40}
      height={40}
      fill="none"
      stroke="#1a1a1a"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: '40px', height: '40px', flexShrink: 0, marginTop: '2px' }}
    >
      {artwork}
    </svg>
  );
}

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
                className="wwd-service-card" 
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
                  
                  <div className="service-heading-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '1.5rem' }}>
                    <ServiceIcon type={service.icon} />
                    <h2 
                      style={{ 
                        fontSize: '2rem', 
                        fontWeight: 600, 
                        color: '#1a1a1a', 
                        margin: 0,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {service.title}
                    </h2>
                  </div>

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
