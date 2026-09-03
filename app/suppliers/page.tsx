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
            <div className="site-breadcrumb u-text-size-small" style={{ paddingTop: '0.4rem', paddingBottom: '0.4rem', backgroundColor: '#ffffff', borderBottom: '1px solid #eaeaea' }}>
              <div className="container container-w-outer container-max container-rfs">
                <ol className="breadcrumb" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="/" className="breadcrumb-link" style={{ textDecoration: 'none' }}>
                      <span className="breadcrumb-label">Home</span>
                    </a>
                    <span className="breadcrumb-separator" style={{ margin: '0 0.35rem', color: '#007236', fontSize: '0.6em' }}>■</span>
                  </li>
                  <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="/suppliers" className="breadcrumb-link breadcrumb-link-current" style={{ textDecoration: 'none' }}>
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
