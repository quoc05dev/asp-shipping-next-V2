import Link from 'next/link';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { requirePageSection } from '@/data/cms/requirePageSection';

export default async function Page() {
  const historyHero = (await requirePageSection("about-us/history", "history_hero")).content;
  const historyIntro = (await requirePageSection("about-us/history", "history_intro")).content;
  const historyTimeline = (await requirePageSection("about-us/history", "history_timeline")).content;
  const historyMore = (await requirePageSection("about-us/history", "history_more")).content;
  
  const { aboutNavigationCards, historyTimelineItems } = await import('@/data/cms/repository');
  const moreCards = historyMore.cardIds.map(id => aboutNavigationCards[id]).filter(Boolean);
  const timelineItems = historyTimeline.itemIds.map(id => historyTimelineItems[id]).filter(Boolean);

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
        <Link href="/" className="breadcrumb-link" style={{ textDecoration: 'none' }}>
          <span className="breadcrumb-label">Home</span>
        </Link>
        <span className="breadcrumb-separator" style={{ margin: '0 0.35rem', color: '#007236', fontSize: '0.6em' }}>■</span>
      </li>
      <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/about-us" className="breadcrumb-link" style={{ textDecoration: 'none' }}>
          <span className="breadcrumb-label">About Us</span>
        </a>
        <span className="breadcrumb-separator" style={{ margin: '0 0.35rem', color: '#007236', fontSize: '0.6em' }}>■</span>
      </li>
      <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/about-us/history" className="breadcrumb-link breadcrumb-link-current" style={{ textDecoration: 'none' }}>
          <span className="breadcrumb-label">History</span>
        </a>
      </li>
    </ol>
  </div>
</div>
            <main id="siteMain" className="main container container-rfs container-w-outer">
			
	
	<article id="post-13" className="content-single content-page post-13 page type-page status-publish has-post-thumbnail hentry entity entity-page">
	<header className="entry-header">
					<div   id="" className="layout layout-page-header layout-page layout-full u-px-0 layout-root"><div className="layout-inner "><div className="banner banner-page
	banner-page-has-image"><div className="banner-inner u-pos-relative"><div className="banner-media"><span className="ratio"><span className="ratio-size"></span><img  width="3840" height="960" src={historyHero.desktopImage.url} className="banner-img banner-img-large " alt={historyHero.desktopImage.alt} /><img  width="992" height="744" src={historyHero.mobileImage.url} className="banner-img banner-img-small " alt={historyHero.mobileImage.alt} /><span className="banner-backdrop u-pos-absolute u-pos-x u-pos-y"></span></span></div><div className="banner-overlay u-pos-absolute u-pos-x u-pos-y u-d-flex u-flex-column u-justify-content-end u-h-100"><div className="container container-rfs container-w-outer"><div className="banner-content"><hr /><h1 className="heading h2 u-mb-3 entry-title u-font-weight-normal">\n\t{historyHero.title}</h1></div></div></div></div></div></div></div>			</header>

	<section className="entry-body">
		<div className="entry-content-layouts entry-content">
			<div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-large"></div></div></div><div   id="" className="layout layout-two-columns layout-page layout-root layout-columns layout-two-columns-6x4"><div className="layout-inner layout-row row"><div   id="" className="layout layout-column layout-page col-12 col-lg-6"><div   id="" className="layout layout-section-lead layout-page"><div className="layout-inner "><h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">\n\t{historyIntro.heading}</h2><div className="section-lead-content u-h4"><div className="content-width"><p>{historyIntro.paragraphs[0]}</p></div></div></div></div></div><div   id="" className="layout layout-column layout-page col-12 col-lg-6 col-xl-5 col-xxl-4 offset-xl-1 offset-xxl-2"><div   id="" className="layout layout-content layout-page"><div className="layout-inner "><div className="content-width left"><hr className="u-mt-0" /><p>{historyIntro.paragraphs[1]}</p></div></div></div></div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-large"></div></div></div><div   id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner "><hr className="u-my-0"/></div></div><div   id="" className="layout layout-timeline layout-page layout-root"><div className="layout-inner "><div className="timeline"><div className="spacer spacer-large"></div><div className="timeline-track"></div>
			<div className="timeline-posts">
        {timelineItems.map((item) => (
          <div key={item.id} className="timeline-post row u-gx-0">
            <div className="timeline-post-inner col-12 col-lg-6">
              <div className="timeline-post-heading h4 u-font-weight-normal u-pb-2 u-mb-0">
                {item.year || ''}
              </div>
              <div className="timeline-post-track">
                <i className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" fill="white"/><rect x="1" y="1" width="12" height="12" rx="6" stroke="black"/><rect x="4" y="4" width="6" height="6" rx="3" fill="currentColor"/></svg></i>
              </div>
              <div className="timeline-post-content content-width u-pt-2">
                {item.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {item.image && (
                <div className="timeline-thumbnail u-mt-8">
                  <span className="ratio ratio-instrinsic ">
                    <span className="ratio-size" style={{"paddingBottom":"50%"} as React.CSSProperties}></span>
                    <img width="1200" height="600" src={item.image.url} className="img-fluid timeline-thumbnail-img u-border-radius ratio-item" alt={item.image.alt} />
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div><div className="spacer spacer-large"></div></div></div></div><div   id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner "><hr className="u-my-0"/></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-large"></div></div></div><div   id="" className="layout layout-section-lead layout-page layout-root"><div className="layout-inner "><h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">\n\t{historyMore.heading}</h2><div className="section-lead-content u-h4"><div className="content-width"><p>{historyMore.intro}</p></div></div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-small"></div></div></div><div   id="" className="layout layout-page-links layout-page layout-root layout-column-size-4"><div className="layout-inner layout-row row">{moreCards.map(card => (<div key={card.id} id="" className="layout layout-page-link layout-page layout-column-page-link"><a href={card.href} className="card card-page-link u-border-radius u-overflow-hidden u-h-100"><span className="ratio ratio-instrinsic " ><span className="ratio-size" style={{"paddingBottom":"50%"} as React.CSSProperties}></span><img width="1200" height="600" src={card.image.url} className="img-fluid page-link-thumbnail-img entry-thumbnail-img  ratio-item" alt={card.image.alt} /></span><div className="card-body u-px-4 u-py-3 u-bg-lighter"><h3 className="h5 card-title entry-title u-mb-0 u-text-color-black">{card.title}</h3><div className="entry-excerpt content-width"><p>{card.description}</p></div></div></a></div>))}</div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-large"></div></div></div>
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
