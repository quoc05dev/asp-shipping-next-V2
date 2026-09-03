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
            

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
