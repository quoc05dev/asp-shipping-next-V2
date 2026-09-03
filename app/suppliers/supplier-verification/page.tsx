import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <div className="legacy-inner-page page wp-theme-restless-theme">
        <div id="page" className="site">
          <div id="content" className="site-content">
            <div className="site-breadcrumb u-text-size-small" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', backgroundColor: '#f8f9fa' }}>
  <div className="container container-w-outer container-max container-rfs">
    <ol className="breadcrumb" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
      <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/" className="breadcrumb-link" style={{ color: '#1a202c', fontWeight: 'normal', textDecoration: 'none' }}>
          <span className="breadcrumb-label">Home</span>
        </a>
        <span className="breadcrumb-separator" style={{ margin: '0 0.75rem', color: '#007236', fontSize: '0.65em' }}>■</span>
      </li>
      <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/suppliers" className="breadcrumb-link" style={{ color: '#1a202c', fontWeight: 'normal', textDecoration: 'none' }}>
          <span className="breadcrumb-label">Suppliers</span>
        </a>
        <span className="breadcrumb-separator" style={{ margin: '0 0.75rem', color: '#007236', fontSize: '0.65em' }}>■</span>
      </li>
      <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/suppliers/supplier-verification" className="breadcrumb-link" style={{ color: '#007236', fontWeight: 'bold', textDecoration: 'none' }}>
          <span className="breadcrumb-label">Supplier Verification</span>
        </a>
      </li>
    </ol>
  </div>
</div>
            <main id="siteMain" className="main container container-rfs container-w-outer">
			
	
	<article id="post-2002" className="content-single content-page post-2002 page type-page status-publish hentry entity entity-page">
	<header className="entry-header">
			</header>

	<section className="entry-body">
		<div className="entry-content-layouts entry-content">
			<div   id="" className="layout layout-code-editor layout-page layout-root"><div className="layout-inner "><iframe src="https://ASP.diro.io/" allow="clipboard-read *; clipboard-write *" frameBorder="0" width="100%" style={{"minHeight":"75vh","margin":"0 -0.75rem"} as React.CSSProperties}></iframe></div></div>
		</div>
	</section>
</article>

			</main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
