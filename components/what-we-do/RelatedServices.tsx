import React from 'react';
import Link from 'next/link';

interface RelatedServicesProps {
  currentServicePath: string;
}

const services = [
  {
    title: 'Commercial Management',
    href: '/commercial-management',
    description: 'Employment strategy across time charter, spot voyage and pool partnerships.'
  },
  {
    title: 'Technical Management',
    href: '/technical-management',
    description: 'Planned maintenance, performance, safety and regulatory oversight.'
  },
  {
    title: 'Marine Consultancy',
    href: '/marine-consultancy',
    description: 'Practical maritime advice for commercial planning and technical projects.'
  },
  {
    title: 'Crew Management',
    href: '/crew-management',
    description: 'Recruitment, deployment, training and welfare for qualified seafarers.'
  },
  {
    title: 'Sea Transportation',
    href: '/sea-transportation',
    description: 'Flexible sea transportation delivered with disciplined planning and cargo care.'
  }
];

export default function RelatedServices({ currentServicePath }: RelatedServicesProps) {
  const filteredServices = services.filter(s => s.href !== currentServicePath).slice(0, 3);
  
  return (
    <section className="layout layout-spacer layout-page layout-root" style={{ padding: '4rem 0', backgroundColor: '#f8f9fa', marginTop: '4rem' }}>
      <div className="container container-w-outer container-max">
        <h2 className="heading h4 u-mb-4" style={{ color: '#1a1a1a', borderBottom: '2px solid #007236', display: 'inline-block', paddingBottom: '0.5rem' }}>
          Related Services
        </h2>
        <div className="row mt-4">
          {filteredServices.map(service => (
            <div className="col-12 col-md-4 mb-4" key={service.href}>
              <div className="card h-100 u-border-radius" style={{ padding: '2rem', border: '1px solid #eaeaea', backgroundColor: '#ffffff' }}>
                <h3 className="heading h5 mb-3">{service.title}</h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {service.description}
                </p>
                <Link href={service.href} className="button button-outline" style={{ marginTop: 'auto', alignSelf: 'flex-start', color: '#007236', border: '1px solid #007236', padding: '0.5rem 1rem', textDecoration: 'none', borderRadius: '4px' }}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
