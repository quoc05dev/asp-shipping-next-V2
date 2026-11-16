import Link from 'next/link';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { requirePageSection } from '@/data/cms/requirePageSection';

export default async function Page() {
  const vmvHero = (await requirePageSection("about-us/vision-mission-values", "vmv_hero")).content;
  const vmvVisionMission = (await requirePageSection("about-us/vision-mission-values", "vmv_vision_mission")).content;
  const vmvValues = (await requirePageSection("about-us/vision-mission-values", "vmv_values")).content;
  const vmvMore = (await requirePageSection("about-us/vision-mission-values", "vmv_more")).content;
  
  const { aboutNavigationCards } = await import('@/data/cms/repository');
  const moreCards = vmvMore.cardIds.map(id => aboutNavigationCards[id]).filter(Boolean);

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
        <a href="/about-us/vision-mission-values" className="breadcrumb-link breadcrumb-link-current" style={{ textDecoration: 'none' }}>
          <span className="breadcrumb-label">Vision Mission Values</span>
        </a>
      </li>
    </ol>
  </div>
</div>
            <main id="siteMain" className="main container container-rfs container-w-outer">
			
	
	<article id="post-20" className="content-single content-page post-20 page type-page status-publish has-post-thumbnail hentry entity entity-page">
	<header className="entry-header">
					<div   id="" className="layout layout-page-header layout-page layout-full u-px-0 layout-root"><div className="layout-inner "><div className="banner banner-page
	banner-page-has-image"><div className="banner-inner u-pos-relative"><div className="banner-media"><span className="ratio"><span className="ratio-size"></span><img  width="3840" height="960" src={vmvHero.desktopImage.url} className="banner-img banner-img-large " alt={vmvHero.desktopImage.alt} /><img  width="992" height="744" src={vmvHero.mobileImage.url} className="banner-img banner-img-small " alt={vmvHero.mobileImage.alt} /><span className="banner-backdrop u-pos-absolute u-pos-x u-pos-y"></span></span></div><div className="banner-overlay u-pos-absolute u-pos-x u-pos-y u-d-flex u-flex-column u-justify-content-end u-h-100"><div className="container container-rfs container-w-outer"><div className="banner-content"><hr /><h1 className="heading h2 u-mb-3 entry-title u-font-weight-normal">
	{vmvHero.title}</h1></div></div></div></div></div></div></div>			</header>

	<section className="entry-body">
		<div className="entry-content-layouts entry-content">
			<div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-large"></div></div></div><div   id="" className="layout layout-two-columns layout-page layout-root layout-columns layout-two-columns-6x6"><div className="layout-inner layout-row row"><div   id="" className="layout layout-column layout-page col-12 col-lg-6"><div   id="" className="layout layout-section-lead layout-page layout-section-lead-has-theme"><div className="layout-inner theme-style theme-style-tertiary"><h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
	{vmvVisionMission.visionHeading}</h2><div className="section-lead-content u-h4"><div className="content-width"><p dangerouslySetInnerHTML={{ __html: vmvVisionMission.visionParagraphs[0] }} /></div></div></div></div></div><div   id="" className="layout layout-column layout-page col-12 col-lg-6"><div   id="" className="layout layout-section-lead layout-page layout-section-lead-has-theme"><div className="layout-inner theme-style theme-style-mint"><h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
	{vmvVisionMission.missionHeading}</h2><div className="section-lead-content u-h4"><div className="content-width"><p dangerouslySetInnerHTML={{ __html: vmvVisionMission.missionParagraphs[0] }} /></div></div></div></div></div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-large"></div></div></div><div   id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner "><hr className="u-my-0"/></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-paragraph"></div></div></div><div   id="" className="layout layout-section-lead layout-page layout-root"><div className="layout-inner "><h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
	{vmvValues.heading}</h2><div className="section-lead-content u-h4"><div className="content-width"><p>{vmvValues.intro}</p></div></div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-small"></div></div></div><div   id="" className="layout layout-pointers layout-page layout-root layout-column-size-4"><ul className="layout-inner pointers layout-row row layout-page-our-direction-pointers">{vmvValues.values.map((value, i) => (<li key={i} id="" className="layout layout-pointer layout-page layout-column layout-column-pointer"><div className="pointer u-px-4 u-py-3 theme-style theme-style-lighter u-border-radius u-h-100"><div className="pointer-header u-mb-2 u-pb-2 u-border u-border-b-1"><h3 className="heading h5 u-mb-3 pointer-heading heading u-text-color-black u-mb-0">
	{value.title}</h3></div><div className="pointer-body"><div className="content-width"><ul>{value.items.map((item, j) => <li key={j}>{item}</li>)}</ul></div></div></div></li>))}</ul></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-medium"></div></div></div><div   id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner "><hr className="u-my-0"/></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-paragraph"></div></div></div><div   id="more-about-us" className="layout layout-section-lead layout-page layout-root"><div className="layout-inner "><h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
	{vmvMore.heading}</h2><div className="section-lead-content u-h4"><div className="content-width"><p>{vmvMore.intro}</p></div></div></div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-small"></div></div></div><div   id="" className="layout layout-page-links layout-page layout-root layout-column-size-4"><div className="layout-inner layout-row row">{moreCards.map(card => (<div key={card.id} id="" className="layout layout-page-link layout-page layout-column-page-link"><a href={card.href} className="card card-page-link u-border-radius u-overflow-hidden u-h-100"><span className="ratio ratio-instrinsic " ><span className="ratio-size" style={{"paddingBottom":"50%"}}></span><img width="1200" height="600" src={card.image.url} className="img-fluid page-link-thumbnail-img entry-thumbnail-img  ratio-item" alt={card.image.alt} /></span><div className="card-body u-px-4 u-py-3 u-bg-lighter"><h3 className="h5 card-title entry-title u-mb-0 u-text-color-black">{card.title}</h3><div className="entry-excerpt content-width"><p>{card.description}</p></div></div></a></div>))}</div></div><div   id="" className="layout layout-spacer layout-page layout-root"><div className="layout-inner "><div className="spacer spacer-large"></div></div></div>
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
