import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  serviceName: string;
  isOverlay?: boolean;
}

export default function ServiceBreadcrumb({ serviceName, isOverlay }: BreadcrumbProps) {
  const linkColor = isOverlay ? '#ffffff' : undefined;
  const separatorColor = isOverlay ? 'rgba(255,255,255,0.6)' : '#007236';

  const content = (
    <ol className="breadcrumb" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
      <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/" className="breadcrumb-link" style={{ textDecoration: 'none', color: linkColor }}>
          <span className="breadcrumb-label">Home</span>
        </Link>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <span className="breadcrumb-separator" style={{ margin: '0 0.35rem', color: separatorColor, fontSize: '0.6em' }}>■</span>
      </li>
      <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/what-we-do" className="breadcrumb-link" style={{ textDecoration: 'none', color: linkColor }}>
          <span className="breadcrumb-label">What We Do</span>
        </Link>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <span className="breadcrumb-separator" style={{ margin: '0 0.35rem', color: separatorColor, fontSize: '0.6em' }}>■</span>
      </li>
      <li className="breadcrumb-item active" aria-current="page" style={{ display: 'flex', alignItems: 'center' }}>
        <span className="breadcrumb-link breadcrumb-link-current" style={{ textDecoration: 'none', color: isOverlay ? 'rgba(255,255,255,0.8)' : undefined }}>{serviceName}</span>
      </li>
    </ol>
  );

  if (isOverlay) {
    return <div className="site-breadcrumb u-text-size-small u-mb-3">{content}</div>;
  }

  return (
    <div className="site-breadcrumb u-text-size-small" style={{ paddingTop: '0.4rem', paddingBottom: '0.4rem', backgroundColor: '#ffffff', borderBottom: '1px solid #eaeaea' }}>
      <div className="container container-w-outer container-max container-rfs">
        {content}
      </div>
    </div>
  );
}
