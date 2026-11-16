import Link from 'next/link';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { requirePageSection } from '@/data/cms/requirePageSection';

export default async function Page() {
  const leadershipHero = (await requirePageSection("about-us/leadership", "leadership_hero")).content;
  const leadershipSeniorManagement = (await requirePageSection("about-us/leadership", "leadership_senior_management")).content;
  const leadershipBoard = (await requirePageSection("about-us/leadership", "leadership_board")).content;
  const leadershipMore = (await requirePageSection("about-us/leadership", "leadership_more")).content;
  
  const { aboutNavigationCards } = await import('@/data/cms/repository');
  const moreCards = leadershipMore.cardIds.map(id => aboutNavigationCards[id]).filter(Boolean);

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
        <a href="/about-us/leadership" className="breadcrumb-link breadcrumb-link-current" style={{ textDecoration: 'none' }}>
          <span className="breadcrumb-label">Leadership</span>
        </a>
      </li>
    </ol>
  </div>
</div>
            <main id="siteMain" className="main container container-rfs container-w-outer">
			
	
	<article id="post-18" className="content-single content-page post-18 page type-page status-publish has-post-thumbnail hentry entity entity-page">
	<header className="entry-header">
					<div   id="" className="layout layout-page-header layout-page layout-full u-px-0 layout-root"><div className="layout-inner "><div className="banner banner-page
	banner-page-has-image"><div className="banner-inner u-pos-relative"><div className="banner-media"><span className="ratio"><span className="ratio-size"></span><img  width="3840" height="960" src={leadershipHero.desktopImage.url} className="banner-img banner-img-large " alt={leadershipHero.desktopImage.alt} /><img  width="992" height="744" src={leadershipHero.mobileImage.url} className="banner-img banner-img-small " alt={leadershipHero.mobileImage.alt} /><span className="banner-backdrop u-pos-absolute u-pos-x u-pos-y"></span></span></div><div className="banner-overlay u-pos-absolute u-pos-x u-pos-y u-d-flex u-flex-column u-justify-content-end u-h-100"><div className="container container-rfs container-w-outer"><div className="banner-content"><hr /><h1 className="heading h2 u-mb-3 entry-title u-font-weight-normal">
	{leadershipHero.title}</h1></div></div></div></div></div></div></div>			</header>

	<section className="entry-body">
		<div className="entry-content-layouts entry-content">
			<div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-large"></div></div></div><div   id="" className="layout layout-section-lead layout-page layout-root"><div className="layout-inner "><h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
	{leadershipSeniorManagement.heading}</h2><div className="section-lead-content u-h4"><div className="content-width"><p>{leadershipSeniorManagement.intro}</p></div></div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-small"></div></div></div><div   id="" className="layout layout-profile-list layout-page layout-root"><div className="layout-inner "><div className="row row-profile u-gy-4">{leadershipSeniorManagement.profiles.map((profile, index) => (<div key={profile.id} className="col-12 col-md-6 col-xl-4"><div className="card card-profile u-border-radius u-overflow-hidden"><span className="ratio ratio-instrinsic " ><span className="ratio-size" style={{"paddingBottom":"66.67%"}} ></span><img width="600" height="400" src={profile.image.url} className="img-fluid profile-thumbnail-img entry-thumbnail-img  ratio-item" alt={profile.name} /></span><div className="card-body u-px-4 u-py-3 u-bg-lighter u-d-flex u-flex-row u-flex-nowrap u-align-items-start"><div className="u-flex-grow-1 u-pr-2"><h3 className="h5 card-title entry-title profile-title u-mb-0 u-text-color-black">{profile.name}</h3><div className="profile-position card-content">{profile.role}</div></div><button type="button" className="button button-outline u-flex-shrink-0">Read More</button></div><div className="layout-profile-modal" id={`${profile.id}_Modal`}><div className="modal modal-profile"><div className="modal-backdrop"></div><div className="modal-inner modal-inner-centered"><div className="modal-content"><div className="modal-header u-d-flex u-flex-row u-flex-nowrap u-align-items-start"><div className="u-flex-grow-1 u-pr-2"><h3 className="h4 card-title entry-title profile-title u-mb-0 u-text-color-black">{profile.name}</h3><div className="profile-position card-content">{profile.role}</div></div><button type="button" className="button button-outline u-flex-shrink-0"><span>Close</span><i className="icon icon-times "><svg><use xlinkHref="../../wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#times"></use></svg></i></button></div><hr className="u-mx-4 u-my-0"/><div className="modal-body u-gx-4"><div className="layout-row row u-gx-4 u-gy-8"><div className="col-12 col-sm-5 col-lg-4 layout-column-profile-thumbnail"><span className="ratio ratio-instrinsic " ><span className="ratio-size" style={{"paddingBottom":"100%"}}></span><img width="400" height="400" src={profile.image.url} className="img-fluid profile-square-thumbnail-img entry-thumbnail-img u-border-radius  ratio-item" alt={profile.name} /></span></div><div className="col-12 col-sm-7 col-lg-6 offset-lg-2 layout-column-profile-content"><div className="content-width">{profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div></div></div></div></div></div></div></div></div></div>))}</div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-medium"></div></div></div><div   id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner "><hr className="u-my-0"/></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-paragraph"></div></div></div><div   id="" className="layout layout-section-lead layout-page layout-root"><div className="layout-inner "><h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
	{leadershipBoard.heading}</h2><div className="section-lead-content u-h4"><div className="content-width"><p>{leadershipBoard.intro}</p></div></div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-small"></div></div></div><div   id="" className="layout layout-profile-list layout-page layout-root"><div className="layout-inner "><div className="row row-profile u-gy-4">{leadershipBoard.profiles.map((profile, index) => (<div key={profile.id} className="col-12 col-md-6 col-xl-4"><div className="card card-profile u-border-radius u-overflow-hidden"><span className="ratio ratio-instrinsic " ><span className="ratio-size" style={{"paddingBottom":"66.67%"}} ></span><img width="600" height="400" src={profile.image.url} className="img-fluid profile-thumbnail-img entry-thumbnail-img  ratio-item" alt={profile.name} /></span><div className="card-body u-px-4 u-py-3 u-bg-lighter u-d-flex u-flex-row u-flex-nowrap u-align-items-start"><div className="u-flex-grow-1 u-pr-2"><h3 className="h5 card-title entry-title profile-title u-mb-0 u-text-color-black">{profile.name}</h3><div className="profile-position card-content">{profile.role}</div></div><button type="button" className="button button-outline u-flex-shrink-0">Read More</button></div><div className="layout-profile-modal" id={`${profile.id}_Modal`}><div className="modal modal-profile"><div className="modal-backdrop"></div><div className="modal-inner modal-inner-centered"><div className="modal-content"><div className="modal-header u-d-flex u-flex-row u-flex-nowrap u-align-items-start"><div className="u-flex-grow-1 u-pr-2"><h3 className="h4 card-title entry-title profile-title u-mb-0 u-text-color-black">{profile.name}</h3><div className="profile-position card-content">{profile.role}</div></div><button type="button" className="button button-outline u-flex-shrink-0"><span>Close</span><i className="icon icon-times "><svg><use xlinkHref="../../wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#times"></use></svg></i></button></div><hr className="u-mx-4 u-my-0"/><div className="modal-body u-gx-4"><div className="layout-row row u-gx-4 u-gy-8"><div className="col-12 col-sm-5 col-lg-4 layout-column-profile-thumbnail"><span className="ratio ratio-instrinsic " ><span className="ratio-size" style={{"paddingBottom":"100%"}}></span><img width="400" height="400" src={profile.image.url} className="img-fluid profile-square-thumbnail-img entry-thumbnail-img u-border-radius  ratio-item" alt={profile.name} /></span></div><div className="col-12 col-sm-7 col-lg-6 offset-lg-2 layout-column-profile-content"><div className="content-width">{profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div></div></div></div></div></div></div></div></div></div>))}</div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-medium"></div></div></div><div   id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner "><hr className="u-my-0"/></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-paragraph"></div></div></div><div   id="" className="layout layout-section-lead layout-page layout-root"><div className="layout-inner "><h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
	{leadershipMore.heading}</h2><div className="section-lead-content u-h4"><div className="content-width"><p>{leadershipMore.intro}</p></div></div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-small"></div></div></div><div   id="" className="layout layout-page-links layout-page layout-root layout-column-size-4"><div className="layout-inner layout-row row">{moreCards.map(card => (<div key={card.id} id="" className="layout layout-page-link layout-page layout-column-page-link"><a href={card.href} className="card card-page-link u-border-radius u-overflow-hidden u-h-100"><span className="ratio ratio-instrinsic " ><span className="ratio-size" style={{"paddingBottom":"50%"}}></span><img width="1200" height="600" src={card.image.url} className="img-fluid page-link-thumbnail-img entry-thumbnail-img  ratio-item" alt={card.image.alt} /></span><div className="card-body u-px-4 u-py-3 u-bg-lighter"><h3 className="h5 card-title entry-title u-mb-0 u-text-color-black">{card.title}</h3><div className="entry-excerpt content-width"><p>{card.description}</p></div></div></a></div>))}</div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-large"></div></div></div>
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
