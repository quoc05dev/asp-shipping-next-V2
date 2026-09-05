import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  serviceName: string;
}

export default function ServiceBreadcrumb({ serviceName }: BreadcrumbProps) {
  return (
    <div className="site-breadcrumb u-text-size-small" style={{ paddingTop: '0.4rem', paddingBottom: '0.4rem', backgroundColor: '#ffffff', borderBottom: '1px solid #eaeaea' }}>
      <div className="container container-w-outer container-max container-rfs">
        <ol className="breadcrumb" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" className="breadcrumb-link" style={{ textDecoration: 'none' }}>
              <span className="breadcrumb-label">Home</span>
            </Link>
            <span className="breadcrumb-separator" style={{ margin: '0 0.35rem', color: '#007236', fontSize: '0.6em' }}>■</span>
          </li>
          <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/what-we-do" className="breadcrumb-link" style={{ textDecoration: 'none' }}>
              <span className="breadcrumb-label">What We Do</span>
            </Link>
            <span className="breadcrumb-separator" style={{ margin: '0 0.35rem', color: '#007236', fontSize: '0.6em' }}>■</span>
          </li>
          <li className="breadcrumb-item active" aria-current="page" style={{ display: 'flex', alignItems: 'center' }}>
            <span className="breadcrumb-link breadcrumb-link-current" style={{ textDecoration: 'none' }}>{serviceName}</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
