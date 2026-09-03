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
                    <a href="/suppliers" className="breadcrumb-link" style={{ color: '#007236', fontWeight: 'bold', textDecoration: 'none' }}>
                      <span className="breadcrumb-label">Suppliers</span>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
            <main id="siteMain" className="main container container-rfs container-w-outer">
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
