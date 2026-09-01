import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import FleetSlider from '@/components/home/FleetSlider';

export default function Home() {
  return (
    <>
      <Header /><main id="siteMain" className="main container container-rfs container-w-outer">


		<article id="post-8" className="content-single content-page post-8 page type-page status-publish has-post-thumbnail hentry entity entity-page">
			<header className="entry-header">
			</header>

			<section className="entry-body">
				<div className="entry-content-layouts entry-content">
					<div data-index="0" data-uid="05ea7833d6ae35664498b83289d51708" id="" className="layout layout-landing-banner layout-page layout-full u-px-0 layout-root">
						<div className="layout-inner ">
							<div className="banner banner-landing">
								<div className="banner-media"><img src="/wp-content/uploads/asp_images/ships/hero-asp-rainbow-cinematic.png" className="banner-img banner-img-large " alt="Asia Pacific Shipping" /><span className="banner-backdrop u-pos-absolute u-pos-x u-pos-y"></span></div>
								<div className="banner-overlay u-pos-absolute u-pos-x u-pos-y u-d-flex u-flex-column u-justify-content-end u-h-100">
									<div className="container container-rfs container-w-outer u-mb-8">
										<div className="banner-content">
											<div className="layout-row row u-gy-0">
												<div className="layout-column col-12 col-lg-6">
													<hr />
													<div className="layout-landing-banner-lead u-h1 u-text-color-white content-width" data-cms-section="hero" data-cms-field="title">
														<p>Turning vision into <span style={{color: "var(--asp-signal) !important", }}>value</span>
														</p>
													</div>
												</div>
												<div className="layout-column col-12 col-lg-6">
													<hr />
													<div className="layout-landing-banner-excerpt u-text-color-white content-width" style={{paddingLeft: "4vw", }} data-cms-section="hero" data-cms-field="description">
														<p>Asia Pacific Shipping is a leading independent owner and
															operator of modern tankers and bulk carriers across the
															region. We are headquartered in Hanoi, delivering safe,
															reliable and efficient maritime logistics solutions to
															customers worldwide.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-large"></div></div></div>
					{/*  NEW WHAT WE DO SECTION  */}
					<div id="what-we-do" className="layout layout-page layout-root" data-cms-section="what_we_do">
						<div className="layout-inner">
							<div className="row u-gy-4 u-gx-4">
								{/*  Left Column: Title and Text  */}
								<div className="col-12 col-lg-4">
									<div className="content-width left" style={{paddingRight: "2rem", height: "100%", }}>
										<h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">What We Do</h2>

										<div className="section-lead-content u-h4 u-mb-3" data-cms-field="title"><p>Maritime solutions</p></div>
										<p data-cms-field="description">Commercial judgment, technical discipline and operational care across every stage of a vessel's lifecycle. We provide end-to-end maritime services, ensuring optimal performance, stringent regulatory compliance, and sustainable operations worldwide. Our dedicated team of experts works closely with partners to navigate the complexities of global shipping and deliver exceptional, reliable value.</p>
									</div>
								</div>
								
								{/*  Right Column: Card 1 (Commercial)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }} data-cms-array="cards" data-cms-data-index="0">

											<div className="section-lead-content u-h4 u-mb-3"><p data-cms-field="title">Commercial management</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }} data-cms-field="description">Employment strategy across time charter, spot voyage and pool partnerships, matching every vessel to the trade where it can perform best.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span data-cms-field="button_text">Explore Commercial Operations</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Right Column: Card 2 (Technical)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="section-lead-content u-h4 u-mb-3"><p>Technical management</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Planned maintenance, dry-docking, performance, safety and regulatory oversight delivered through a disciplined, TMSA-aligned management system.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span>Explore Technical Management</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Left Column: Card 5 (Advisory/Marine consultancy)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="section-lead-content u-h4 u-mb-3"><p>Marine consultancy</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Practical maritime advice for commercial planning, technical projects, compliance and fleet development, grounded in operating experience.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span>Talk To Our Marine Team</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Right Column: Card 3 (Crew)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="section-lead-content u-h4 u-mb-3"><p>Crew management</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Recruitment, deployment, training and welfare for qualified seafarers, supporting safe operations and reliable performance on every voyage.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span>Explore Crew Management</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Right Column: Card 4 (Sea transportation)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="section-lead-content u-h4 u-mb-3"><p>Sea transportation</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Flexible sea transportation across dry bulk, clean and dirty petroleum products, LPG and chemical cargoes, delivered with disciplined planning and cargo care.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span>Explore Sea Transportation</span></a>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-large"></div></div></div>
					<div id="about-us-contents" className="container container-max" data-cms-section="about_us">
  	<div className="global-grid-2col">
  		{/*  Left Column  */}
  		<div id="about-us" style={{width: "100%", }}>
  			<div className="layout layout-section-lead layout-page">
  				<div className="layout-inner">
  					<h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" data-cms-field="about_us_title">About Us</h2>
  					<div className="section-lead-content u-h4">
  						<p>ASP is an independent, wholly Vietnamese-owned shipowner and manager, founded by experienced captains, officers and maritime professionals, with strong backing from Vietnamese investors, banks and leasing partners.</p>
  					</div>
  					<div className="layout layout-buttons layout-page">
  						<div className="layout-inner button-group u-mt-9">
  							<div><a href="about-us/index.html" title="Learn About Asia Pacific Shipping" className="button button-outline"><span data-cms-field="button_text">Learn About Asia Pacific Shipping</span></a></div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  		{/*  Right Column  */}
  		<div style={{width: "100%", }}>
  			<div className="layout layout-content layout-page" style={{maxWidth: "100% !important", padding: "0 !important", margin: "0 !important", }}>
  				<div className="layout-inner" style={{maxWidth: "100% !important", padding: "0 !important", margin: "0 !important", }}>
  					<hr className="u-mt-0" />
  					<p style={{textAlign: "justify", maxWidth: "100% !important", marginRight: "0 !important", paddingRight: "0 !important", }} data-cms-field="title">We have the scale, fleet and operational resources to serve our customers on a truly global basis; with approximately 2,500 cargo operations annually, we transport more than 4.2 million tonnes between over 240 different ports worldwide, performing an average of five load operations every day.</p>
  					<p style={{textAlign: "justify", maxWidth: "100% !important", marginRight: "0 !important", paddingRight: "0 !important", }} data-cms-field="description">We offer customers the best solution for their transportation needs with our leading service and high operational standards.</p>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>

					<div data-index="3" data-uid="2fa4f5f87bfb493379470f53b8733001" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-medium-large"></div>
						</div>
					</div>
					<div className="container container-max">
	<div className="global-grid-stats">
		<div id="" className="layout-statistic-box layout-page active">
			<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
				<div className="statistic-content u-mb-auto">
					<div className="statistic-figure u-h2">41</div>
					<div className="statistic-suffix u-h4">+</div>
				</div>
				<div className="statistic-caption u-mt-4">Vessels in Fleet</div>
			</div>
		</div>
		<div id="" className="layout-statistic-box layout-page">
			<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
				<div className="statistic-content u-mb-auto">
					<div className="statistic-figure u-h2">3</div>
					<div className="statistic-suffix u-h4">M+</div>
				</div>
				<div className="statistic-caption u-mt-4">Total DWT</div>
			</div>
		</div>
		<div id="" className="layout-statistic-box layout-page">
			<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
				<div className="statistic-content u-mb-auto">
					<div className="statistic-figure u-h2">30</div>
					<div className="statistic-suffix u-h4">+</div>
				</div>
				<div className="statistic-caption u-mt-4">Global Partners</div>
			</div>
		</div>
		<div id="" className="layout-statistic-box layout-page">
			<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
				<div className="statistic-content u-mb-auto">
					<div className="statistic-figure u-h2">2021</div>
				</div>
				<div className="statistic-caption u-mt-4">Founded</div>
			</div>
		</div>
		<div id="" className="layout-statistic-box layout-page">
			<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
				<div className="statistic-content u-mb-auto">
					<div className="statistic-figure u-h2">21</div>
				</div>
				<div className="statistic-caption u-mt-4">Newbuilding Orders</div>
			</div>
		</div>
	</div>
</div>

					<div data-index="5" data-uid="853c662b036131ee36ac668006392d6d" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-small"></div>
						</div>
					</div>
					<div data-index="6" data-uid="5b0da79b7c5ab1320e44fdc57777569b" id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
						<div className="layout-inner container container-max">
							<hr className="u-my-0" />
						</div>
					</div>
					<div data-index="7" data-uid="0f6635d9f955adc0c2a6c30ff15c62ed" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-small"></div>
						</div>
					</div>
{/*  Unified Our Fleet Section  */}
<section id="our-fleet-section" style={{width: "100%", display: "flex", justifyContent: "center", }} data-cms-section="our_fleet">
	<div className="container container-max">
		<div className="global-grid-2col" style={{alignItems: "start", }}>
			{/*  Left Column: Slider  */}
			<div style={{width: "100%", }}>
				<FleetSlider />
			</div>

			{/*  Right Column: Content  */}
			<div style={{display: "flex", flexDirection: "column", height: "100%", }}>
				<div style={{marginBottom: "auto", }}>
					<h2 className="heading h5 u-text-color-primary" style={{margin: "0 0 12px 0", }}>Our
						Fleet</h2>
					<div style={{marginBottom: "16px", }}>
						<p style={{fontSize: "1.5rem", lineHeight: "1.4", margin: "0", color: "var(--theme-body-color)", }}>
							We own and manage a modern, diversified fleet serving customers across
							global trades, including bulk carriers, oil tankers, LPG carriers and
							chemical tankers.</p>
					</div>
					<div style={{marginBottom: "32px", }}>
						<p style={{fontSize: "1.05rem", lineHeight: "1.6", margin: "0", color: "var(--theme-body-color)", }}>
							Our commitment to safety, continuous improvement, and operational
							efficiency ensures that we meet the highest standards of maritime
							transport, delivering reliable capacity for critical international
							supply chains.</p>
					</div>

					<a href="our-fleet/index.html" className="button button-outline" style={{marginBottom: "32px", }}><span>View Our Fleet List</span></a>
				</div>

				{/*  Statistics Grid (2x2)  */}
				<div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", }}>
					{/*  Stat 1  */}
					<div className="layout-statistic-box active">
						<div className="statistic custom-stat-box u-d-flex u-flex-column u-h-100" data-cms-array="stats" data-cms-data-index="0">
							<div className="statistic-content u-mb-auto">
								<div className="statistic-figure u-h2" style={{fontSize: "2.5rem", lineHeight: "1", }} data-cms-field="figure">41</div>
								<div className="statistic-suffix u-h4" style={{lineHeight: "1", }} data-cms-field="suffix">+</div>
							</div>
							<div className="statistic-caption u-mt-2" style={{fontSize: "0.95rem", fontWeight: "500", }} data-cms-field="caption">
								Total Vessels</div>
						</div>
					</div>
					{/*  Stat 2  */}
					<div className="layout-statistic-box">
						<div className="statistic custom-stat-box u-d-flex u-flex-column u-h-100" data-cms-array="stats" data-cms-data-index="1">
							<div className="statistic-content u-mb-auto">
								<div className="statistic-figure u-h2" style={{fontSize: "2.5rem", lineHeight: "1", }} data-cms-field="figure">10</div>
								<div className="statistic-suffix u-h4" style={{lineHeight: "1", }} data-cms-field="suffix">+</div>
							</div>
							<div className="statistic-caption u-mt-2" style={{fontSize: "0.95rem", fontWeight: "500", }} data-cms-field="caption">
								Tankers</div>
						</div>
					</div>
					{/*  Stat 3  */}
					<div className="layout-statistic-box">
						<div className="statistic custom-stat-box u-d-flex u-flex-column u-h-100" data-cms-array="stats" data-cms-data-index="2">
							<div className="statistic-content u-mb-auto">
								<div className="statistic-figure u-h2" style={{fontSize: "2.5rem", lineHeight: "1", }} data-cms-field="figure">8</div>
								<div className="statistic-suffix u-h4" style={{lineHeight: "1", }} data-cms-field="suffix">+</div>
							</div>
							<div className="statistic-caption u-mt-2" style={{fontSize: "0.95rem", fontWeight: "500", }} data-cms-field="caption">
								Bulk Carriers</div>
						</div>
					</div>
					{/*  Stat 4  */}
					<div className="layout-statistic-box">
						<div className="statistic custom-stat-box u-d-flex u-flex-column u-h-100" data-cms-array="stats" data-cms-data-index="3">
							<div className="statistic-content u-mb-auto">
								<div className="statistic-figure u-h2" style={{fontSize: "2.5rem", lineHeight: "1", }} data-cms-field="figure">5</div>
								<div className="statistic-suffix u-h4" style={{lineHeight: "1", }} data-cms-field="suffix">+</div>
							</div>
							<div className="statistic-caption u-mt-2" style={{fontSize: "0.95rem", fontWeight: "500", }} data-cms-field="caption">
								Chemical &amp; LPG Carriers</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		
	</div>
</section>
{/*  /Unified Our Fleet Section  */}

<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-small"></div></div></div>
<div className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner container container-max"><hr className="u-my-0" /></div></div>
<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-small"></div></div></div>

{/*  Chairman Message Section  */}
<section id="chairman-message-section" style={{width: "100%", }} data-cms-section="chairman_message">
  <div className="container container-max">
    <div style={{maxWidth: "1000px", marginInline: "auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", }}>
      <div style={{fontSize: "0.75rem", letterSpacing: "2px", fontWeight: "700", color: "var(--theme-color-primary, #007236)", textTransform: "uppercase", marginBottom: "24px", }} data-cms-field="subtitle">
        A MESSAGE FROM OUR CHAIR
      </div>
      
      <div style={{color: "var(--theme-color-primary, #007236)", fontSize: "4rem", lineHeight: "1", fontFamily: "Georgia, serif", marginBottom: "8px", }}>
        “
      </div>
      
      <div style={{fontSize: "clamp(1.6rem, 2.5vw, 2.6rem)", fontWeight: "600", lineHeight: "1.35", color: "var(--asp-ink, #2d2d2d)", marginBottom: "24px", }} data-cms-field="quote">
        These vessels not only strengthen our fleet and let us serve clients more effectively — they reaffirm our dedication to advancing sustainable practices across the industry.
      </div>
      
      <div style={{color: "var(--theme-color-primary, #007236)", fontSize: "4rem", lineHeight: "1", fontFamily: "Georgia, serif", marginBottom: "36px", }}>
        ”
      </div>
      
      <div>
        <div style={{fontSize: "1.125rem", fontWeight: "700", color: "var(--asp-ink, #2d2d2d)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", }} data-cms-field="name">NGUYEN QUYNH ANH</div>
        <div style={{fontSize: "0.875rem", color: "#666", }} data-cms-field="title">Chair, ASP</div>
      </div>
    </div>
  </div>
</section>
{/*  /Chairman Message Section  */}





<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-small"></div></div></div>
<div className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner container container-max"><hr className="u-my-0" /></div></div>
<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-small"></div></div></div>

					<div id="latest-news" className="container container-max">
	<div className="global-grid-latest-news">
		{/*  Left Column  */}
		<div className="layout-column layout-column-latest-post-list-lead u-mb-4 u-mb-lg-0">
			<div id="" className="layout layout-section-lead layout-page">
				<div className="layout-inner">
					<h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" data-cms-field="news_title">Latest News</h2>
					<div className="section-lead-content u-h4">
						<div className="small">
							<p>Keep up to date with our business, people and activities.</p>
						</div>
					</div>
					<div id="" className="layout layout-buttons layout-page">
						<div className="layout-inner button-group u-mt-9">
							<div><a href="media/latest-news/index.html" title="View All News" className="button button-outline"><span>View All News</span></a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*  Right Column  */}
		<div className="layout-column layout-column-latest-post-list-first-post u-d-none u-d-lg-block">
			<article id="post-2136" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2136 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
				<header className="entry-header">
					<div className="post-categories row u-gy-2 u-gx-2">
						<div className="col-auto"><a href="media/news/category/press-releases/index.html" className="button button-small button-secondary">Press Releases</a></div>
					</div>
					<a href="media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance/index.html" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance">
						<span className="ratio ratio-instrinsic">
							<span className="ratio-size" style={{paddingBottom: "50%", }}></span>
							<img width="1200" height="600" src="/wp-content/uploads/asp_images/news/fleet-expansion.jpg" className="entry-thumbnail ratio-item" alt="" />
						</span>
					</a>
				</header>
				<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
					<a href="media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance/index.html" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance">
						<time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2026-05-29T07:00:59+00:00">May 29, 2026</time>
						<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance</h3>
					</a>
				</div>
			</article>
		</div>
	</div>
	{/*  Additional Posts Row  */}
	<div className="layout-column layout-column-latest-post-list-posts" style={{marginTop: "40px", }}>

								<div className="row u-gy-4 row-posts row-latest-posts">
									<div className="col-12 u-d-block u-d-lg-none">
										<article id="post-2136" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2136 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="media/news/category/press-releases/index.html" className="button button-small button-secondary">Press
															Releases</a></div>
												</div><a href="media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance/index.html" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/fleet-expansion.jpg" className="entry-thumbnail  ratio-item" alt="" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance/index.html" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2026-05-29T07:00:59+00:00">May 29, 2026</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														Asia Pacific Shipping expands use of GIT Coatings following 6%
														out-of-dock fuel savings and maintained hull performance </h3>
												</a></div>
										</article>
									</div>
									<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
										<article id="post-2086" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2086 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="media/news/category/press-releases/index.html" className="button button-small button-secondary">Press
															Releases</a></div>
												</div><a href="media/news/2025/09/09/bw-epic-kosan-partners-with-bound4blue-to-install-unique-non-explosion-proof-esail-on-lpg-carrier-helena-kosan/index.html" className="entry-permalink" title="Asia Pacific Shipping partners with bound4blue to install unique non-explosion proof eSAIL® on LPG carrier Helena Kosan"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/methanol-delivery.jpg" className="entry-thumbnail  ratio-item" alt="" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="media/news/2025/09/09/bw-epic-kosan-partners-with-bound4blue-to-install-unique-non-explosion-proof-esail-on-lpg-carrier-helena-kosan/index.html" className="entry-permalink" title="Asia Pacific Shipping partners with bound4blue to install unique non-explosion proof eSAIL® on LPG carrier Helena Kosan"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2025-09-09T13:30:01+00:00">September 9, 2025</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														Asia Pacific Shipping partners with bound4blue to install unique
														non-explosion proof eSAIL® on LPG carrier Helena Kosan </h3>
												</a></div>
										</article>
									</div>
									<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
										<article id="post-2051" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2051 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="media/news/category/press-releases/index.html" className="button button-small button-secondary">Press
															Releases</a></div>
												</div><a href="media/news/2025/04/16/bw-epic-kosan-new-leadership/index.html" className="entry-permalink" title="Jakob Bode announced as new CEO of Asia Pacific Shipping"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp" className="entry-thumbnail  ratio-item" alt="" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="media/news/2025/04/16/bw-epic-kosan-new-leadership/index.html" className="entry-permalink" title="Jakob Bode announced as new CEO of Asia Pacific Shipping"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2025-04-16T07:18:11+00:00">April 16, 2025</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														Jakob Bode announced as new CEO of Asia Pacific Shipping </h3>
												</a></div>
										</article>
									</div>
									<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
										<article id="post-2023" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2023 post type-post status-publish format-standard has-post-thumbnail hentry category-articles entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="media/news/category/articles/index.html" className="button button-small button-secondary">Articles</a>
													</div>
												</div><a href="media/news/2024/10/09/how-to-attract-a-new-generation-to-join-your-team/index.html" className="entry-permalink" title="How to Attract A New Generation To Join Your Team"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/partners/logo-client-vitol.png" className="entry-thumbnail  ratio-item" alt="" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="media/news/2024/10/09/how-to-attract-a-new-generation-to-join-your-team/index.html" className="entry-permalink" title="How to Attract A New Generation To Join Your Team"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2024-10-09T02:39:25+00:00">October 9, 2024</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														How to Attract A New Generation To Join Your Team </h3>
												</a></div>
										</article>
									</div>
									<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
										<article id="post-2004" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2004 post type-post status-publish format-standard has-post-thumbnail hentry category-articles entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="media/news/category/articles/index.html" className="button button-small button-secondary">Articles</a>
													</div>
												</div><a href="media/news/2024/06/19/cultivating-a-passion-for-shipping/index.html" className="entry-permalink" title="Cultivating A Passion for Shipping"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/partners/logo-client-lauritzen-bulkers.png" className="entry-thumbnail  ratio-item" alt="Cultivating A Passion for Shipping at Asia Pacific Shipping" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="media/news/2024/06/19/cultivating-a-passion-for-shipping/index.html" className="entry-permalink" title="Cultivating A Passion for Shipping"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2024-06-19T03:37:15+00:00">June 19, 2024</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														Cultivating A Passion for Shipping </h3>
												</a></div>
										</article>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div data-index="13" data-uid="cb8796752e53607fc5ca236470850c44" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-medium"></div>
						</div>
					</div>
					<div data-index="14" data-uid="ddfce7b3c8448023867041ed0483a9e8" id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
						<div className="layout-inner container container-max">
							<hr className="u-my-0" />
						</div>
					</div>
					<div data-index="15" data-uid="187f05501c66c01739519eb3c5efc3b1" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-paragraph"></div>
						</div>
					</div>
					<div data-index="16" data-uid="590722105e71d59c1e86b1b629d164b1" id="sustainability" className="layout layout-section-media layout-page layout-root layout-section-media-has-theme" data-cms-section="sustainability">
						<div className="layout-inner layout-row row">
							<div className="layout-column layout-column-section-media-thumbnail col-lg-6">
								<div className="section-media-thumbnail u-d-flex u-h-100 u-pos-relative"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/partners/logo-client-vitol.png" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center u-w-100 u-h-100  ratio-item" alt="" /></span></div>
							</div>
							<div className="layout-column layout-column-section-media-lead col-lg-6">
								<div data-index="0" data-uid="7ab86f810ee2de4c13fb4af87862c935" id="" className="layout layout-section-lead layout-page layout-section-lead-has-theme">
									<div className="layout-inner theme-style theme-style-mint">
										<h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" data-cms-field="sustainability_title">
											Sustainability</h2>
										<div className="section-lead-content u-h4">
											<div className="content-width">
												<p data-cms-field="sustainability_desc">Asia Pacific Shipping plays a vital role in supplying the world with
													LPG, an exceptional and essential energy, which is a clean burning
													and versatile fuel. We specialise in safely and efficiently
													delivering it over the last mile to our customers around the globe.
												</p>
											</div>
										</div>
										<div data-index="0" data-uid="3f89466ac3d6336f8175eedd8d953038" id="" className="layout layout-buttons layout-page">
											<div className="layout-inner button-group u-mt-9 content-width">
												<div><a href="sustainability/index.html" title="Our Role in Sustainability" target="" className="button button-outline button-outline-secondary"><span data-cms-field="sustainability_btn_1">Our
															Role in Sustainability</span></a></div>
												<div><a href="/wp-content/uploads/2025/04/BW-Epic-Kosan-Sustainability-Report-FY-2024.pdf" title="Download Sustainability Report 2024" target="_blank" className="button button-outline button-outline-secondary" rel="noreferrer noopenner"><span data-cms-field="sustainability_btn_2">Download Sustainability Report
															2024</span><i className="icon icon-download "><svg>
																<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#download">
																</use>
															</svg></i></a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div data-index="17" data-uid="fa1181f43c6fd1dc85aaa4cb1bed3546" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-medium"></div>
						</div>
					</div>
					<div data-index="18" data-uid="d7fe91f7d92af102bf0d459b0f3ff0f6" id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
						<div className="layout-inner container container-max">
							<hr className="u-my-0" />
						</div>
					</div>
					<div data-index="19" data-uid="b20974d1fd5c9de28c14d73f8ca31ff0" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-paragraph"></div>
						</div>
					</div>
					<div data-index="20" data-uid="3566d60edf5174d6bb1cffe5ff1308bc" id="" className="layout layout-callouts layout-page layout-root layout-column-size-3">
						<div className="layout-inner layout-row row">
							<div data-index="0" data-uid="3aff20fb313f55c4afa52a34d5d8a9ce" id="" className="layout layout-callout-form layout-page layout-column-callout">
								<div className="callout callout-form theme-style theme-style-lighter u-px-4 u-py-3 u-border-radius u-h-100">
									<h2 className="heading h5 u-mb-3 callout-heading u-mb-0">
										Subscribe to Our Newsletter</h2>
									<div className="callout-body">
										<div className="callout-content">
											<div className="content-width">
												<p>Sign up to receive alerts on press releases and updates on business
													activities.</p>
											</div>
										</div>
										<div className="u-mt-9 callout-content-form">
											<div className="wpcf7 no-js" id="wpcf7-f93-p8-o3" lang="en-US" dir="ltr" wpcf7-id="93">
												<div className="screen-reader-response">
													<p role="status" aria-live="polite" aria-atomic="true"></p>
													<ul></ul>
												</div>
												<form action="https://aspshipping.vn/#wpcf7-f93-p8-o3" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate={true} data-status="init">
													<div style={{display: "none", }}><input type="hidden" name="_wpcf7" value="93" /><input type="hidden" name="_wpcf7_version" value="6.0.2" /><input type="hidden" name="_wpcf7_locale" value="en_US" /><input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f93-p8-o3" /><input type="hidden" name="_wpcf7_container_post" value="8" /><input type="hidden" name="_wpcf7_posted_data_hash" value="" />
													</div><input type="hidden" name="mc4wp-subscribe" value="1" />
													<div className="newsletter">
														<div>
															<div className="row">
																<div className="newsletter-field col-12 col-sm-6"><span className="wpcf7-form-control-wrap" data-name="mc4wp-FNAME"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="First name" value="" type="text" name="mc4wp-FNAME" /></span>
																</div>
																<div className="newsletter-field col-12 col-sm-6"><span className="wpcf7-form-control-wrap" data-name="mc4wp-LNAME"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Last name" value="" type="text" name="mc4wp-LNAME" /></span></div>
															</div>
															<div className="newsletter-fields">
																<div className="newsletter-field"><span className="wpcf7-form-control-wrap" data-name="mc4wp-EMAIL"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="Your email address" value="" type="email" name="mc4wp-EMAIL" /></span>
																</div>
																<div className="newsletter-submit"><button type="submit" className="button button-outline button-outline-secondary">Subscribe</button>
																</div>
															</div>
														</div>
														<div className="wpcf7-response-output" aria-hidden="true"></div>
													</div><input type="hidden" id="ct_checkjs_cf7_f9b902fc3289af4dd08de5d1de54f68f" name="ct_checkjs_cf7" value="0" />
													
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div data-index="1" data-uid="1942751f52b05c0759b863ae081a16ab" id="" className="layout layout-callout layout-page layout-column-callout">
								<div className="callout theme-style theme-style-lighter u-px-4 u-py-3 u-border-radius u-h-100">
									<h2 className="heading h5 u-mb-3 callout-heading u-mb-0">
										Get in Touch</h2>
									<div className="callout-body">
										<div className="callout-content">
											<div className="content-width">
												<p>Want to learn more about Asia Pacific Shipping or explore how we can
													support your business? Reach out to us for more information today.
												</p>
											</div>
										</div>
										<div data-index="0" data-uid="3f1cfc038a29e62dcfc6e5f3178d2d92" id="" className="layout layout-buttons layout-page">
											<div className="layout-inner button-group u-mt-9 callout-buttons content-width">
												<div><a href="contact-us/index.html" title="Contact Us" target="" className="button button-outline button-outline-secondary"><span>Contact
															Us</span></a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div data-index="2" data-uid="1f3489ddf6b9742722b8fc7ca41089cd" id="" className="layout layout-callout layout-page layout-column-callout">
								<div className="callout theme-style theme-style-lighter u-px-4 u-py-3 u-border-radius u-h-100">
									<h2 className="heading h5 u-mb-3 callout-heading u-mb-0">
										Join Us Today</h2>
									<div className="callout-body">
										<div className="callout-content">
											<div className="content-width">
												<p>Asia Pacific Shipping offers exciting and rewarding career
													opportunities to people who have the skills and determination to
													succeed at sea and/or ashore.</p>
											</div>
										</div>
										<div data-index="0" data-uid="39ec83d80815927031362e45db742d93" id="" className="layout layout-buttons layout-page">
											<div className="layout-inner button-group u-mt-9 callout-buttons content-width">
												<div><a href="careers/index.html" title="Careers at Asia Pacific Shipping" target="" className="button button-outline button-outline-secondary"><span>Careers
															at Asia Pacific Shipping</span></a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div data-index="21" data-uid="a7bd34b552fa999ab8acdcfc3a0ed628" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-large"></div>
						</div>
					</div>
				
			</section>
		</article>

	</main><footer id="siteFooter" className="site-footer u-py-8 u-text-size-small theme-style theme-style-tertiary" data-cms-section="footer">
		<div className="site-footer-inner">
			<div className="container container-w-outer container-rfs">
				<div className="row">
					<div className="col-12 col-sm-auto col-lg-auto col-xl-4 col-footer-first-col">
						<section className="widget text-2 widget_text">
							<h3 className="widget-title" data-cms-field="newsletter_title">Subscribe to our Newsletter</h3>
							<div className="textwidget">
								<div className="wpcf7 no-js" id="wpcf7-f93-o4" lang="en-US" dir="ltr" wpcf7-id="93">
									<div className="screen-reader-response">
										<p role="status" aria-live="polite" aria-atomic="true"></p>
										<ul></ul>
									</div>
									<form action="https://aspshipping.vn/#wpcf7-f93-o4" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate={true} data-status="init">
										<div style={{display: "none", }}>
											<input type="hidden" name="_wpcf7" value="93" />
											<input type="hidden" name="_wpcf7_version" value="6.0.2" />
											<input type="hidden" name="_wpcf7_locale" value="en_US" />
											<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f93-o4" />
											<input type="hidden" name="_wpcf7_container_post" value="0" />
											<input type="hidden" name="_wpcf7_posted_data_hash" value="" />
										</div>
										<input type="hidden" name="mc4wp-subscribe" value="1" />
										<div className="newsletter">
											<div>
												<div className="row">
													<div className="newsletter-field col-12 col-sm-6">
														<span className="wpcf7-form-control-wrap" data-name="mc4wp-FNAME"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="First name" value="" type="text" name="mc4wp-FNAME" /></span>
													</div>
													<div className="newsletter-field col-12 col-sm-6">
														<span className="wpcf7-form-control-wrap" data-name="mc4wp-LNAME"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Last name" value="" type="text" name="mc4wp-LNAME" /></span>
													</div>
												</div>
												<div className="newsletter-fields">
													<div className="newsletter-field">
														<span className="wpcf7-form-control-wrap" data-name="mc4wp-EMAIL"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="Your email address" value="" type="email" name="mc4wp-EMAIL" /></span>
													</div>

													<div className="newsletter-submit">
														<button type="submit" className="button button-outline button-outline-secondary">Subscribe</button>
													</div>
												</div>
											</div>
											<div className="wpcf7-response-output" aria-hidden="true"></div>
										</div><input type="hidden" id="ct_checkjs_cf7_7eacb532570ff6858afd2723755ff790" name="ct_checkjs_cf7" value="0" />
										
									</form>
								</div>

							</div>
						</section>
					</div>

					<div className="col-12 col-xl">
						<div className="row u-my-8 u-gy-0">
							<div className="col-12 col-md">
								<section className="widget nav_menu-2 widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">Home</h3>
									<div className="menu-footer-column-1-container">
										<ul id="menu-footer-column-1" className="menu">
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-94" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item menu-active menu-item-94">
												<a title="Home" href="index.html">Home</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96">
												<a title="Contact Us" href="contact-us/index.html">Contact Us</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-95" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95">
												<a title="Careers" href="careers/index.html">Careers</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-2013" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2013">
												<a title="Supplier Verification" href="suppliers/supplier-verification/index.html">Supplier
													Verification</a></li>
										</ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-3 widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">About Us</h3>
									<div className="menu-footer-column-2-container">
										<ul id="menu-footer-column-2" className="menu">
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-97" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse menu-item-97"><a title="About Us" href="about-us/index.html" aria-haspopup="true" aria-expanded="false" className="collapse-toggle" id="menu-item-collapse-97"><span>About Us</span><span className="collapse-toggle-icon collapse-toggle-icon-close"><i className="icon icon-chevron-up ">
															<svg>
																<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-up">
																</use>
															</svg>
														</i>
													</span><span className="collapse-toggle-icon collapse-toggle-icon-open"><i className="icon icon-chevron-down ">
															<svg>
																<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-down">
																</use>
															</svg>
														</i>
													</span></a>
												<ul className="collapse-body" aria-labelledby="menu-item-collapse-97">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99">
														<a title="History" href="about-us/history/index.html" className="collapse-link">History</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-100" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100">
														<a title="Leadership" href="about-us/leadership/index.html" className="collapse-link">Leadership</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-98" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-98">
														<a title="Vision, Mission, Values" href="about-us/vision-mission-values/index.html" className="collapse-link">Vision, Mission, Values</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
														<a title="Trades" href="about-us/trades/index.html" className="collapse-link">Trades</a></li>
												</ul>
											</li>
										</ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-4 widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">Our Fleet</h3>
									<div className="menu-footer-column-3-container">
										<ul id="menu-footer-column-3" className="menu">
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse menu-item-102"><a title="Our Fleet" href="our-fleet/index.html" aria-haspopup="true" aria-expanded="false" className="collapse-toggle" id="menu-item-collapse-102"><span>Our Fleet</span><span className="collapse-toggle-icon collapse-toggle-icon-close"><i className="icon icon-chevron-up ">
															<svg>
																<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-up">
																</use>
															</svg>
														</i>
													</span><span className="collapse-toggle-icon collapse-toggle-icon-open"><i className="icon icon-chevron-down ">
															<svg>
																<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-down">
																</use>
															</svg>
														</i>
													</span></a>
												<ul className="collapse-body" aria-labelledby="menu-item-collapse-102">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-103" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
														<a title="Ammonia Propulsion" href="our-fleet/ammonia-propulsion/index.html" className="collapse-link">Ammonia Propulsion</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
														<a title="LCO2 Shipping" href="our-fleet/lco2-shipping/index.html" className="collapse-link">LCO2 Shipping</a></li>
												</ul>
											</li>
										</ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-5 widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">Sustainability</h3>
									<div className="menu-footer-column-4-container">
										<ul id="menu-footer-column-4" className="menu">
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-105" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse menu-item-105"><a title="Sustainability" href="sustainability/index.html" aria-haspopup="true" aria-expanded="false" className="collapse-toggle" id="menu-item-collapse-105"><span>Sustainability</span><span className="collapse-toggle-icon collapse-toggle-icon-close"><i className="icon icon-chevron-up ">
															<svg>
																<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-up">
																</use>
															</svg>
														</i>
													</span><span className="collapse-toggle-icon collapse-toggle-icon-open"><i className="icon icon-chevron-down ">
															<svg>
																<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-down">
																</use>
															</svg>
														</i>
													</span></a>
												<ul className="collapse-body" aria-labelledby="menu-item-collapse-105">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1125" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1125">
														<a title="Social" href="sustainability/social/index.html" className="collapse-link">Social</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1113">
														<a title="Environment" href="sustainability/environment/index.html" className="collapse-link">Environment</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1029" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1029">
														<a title="Governance" href="sustainability/governance/index.html" className="collapse-link">Governance</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-106" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
														<a title="Policies &amp; Guidelines" href="sustainability/policies-guidelines/index.html" className="collapse-link">Policies &amp; Guidelines</a></li>
												</ul>
											</li>
										</ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-6 widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">Media</h3>
									<div className="menu-footer-column-5-container">
										<ul id="menu-footer-column-5" className="menu">
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-110" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse menu-item-110"><a title="Media" href="media/index.html" aria-haspopup="true" aria-expanded="false" className="collapse-toggle" id="menu-item-collapse-110"><span>Media</span><span className="collapse-toggle-icon collapse-toggle-icon-close"><i className="icon icon-chevron-up ">
															<svg>
																<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-up">
																</use>
															</svg>
														</i>
													</span><span className="collapse-toggle-icon collapse-toggle-icon-open"><i className="icon icon-chevron-down ">
															<svg>
																<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-down">
																</use>
															</svg>
														</i>
													</span></a>
												<ul className="collapse-body" aria-labelledby="menu-item-collapse-110">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-111" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-111">
														<a title="Latest News" href="media/latest-news/index.html" className="collapse-link">Latest News</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-112" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112">
														<a title="Gallery" href="media/gallery/index.html" className="collapse-link">Gallery</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113">
														<a title="Glossary of Terms" href="media/glossary-of-terms/index.html" className="collapse-link">Glossary of Terms</a></li>
												</ul>
											</li>
										</ul>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>

				<hr className="u-mb-2 u-mt-12" />

				<div className="row">
					<div className="col-12 col-sm-auto col-footer-first-col">
						<div className="site-copyright">
							© 2026 Asia Pacific Shipping (ASP). All rights reserved. | Tel: +84 968 016 085 |
							contact@aspshipping.vn </div>
					</div>
				</div>

				<div className="row u-gy-4">
					<div className="col-12 col-sm-auto col-lg-auto col-xl-4 col-footer-first-col u-d-flex u-flex-row u-flex-wrap">
						<div className="site-tagline u-flex-shrink-0 u-mr-2">Turning vision into value</div>

					</div>

					<div className="col-12 col-lg-auto offset-lg-1 offset-xl-0">
						<a href="privacy-policy/index.html" title="Privacy Policy" target="" className="site-privacy-policy">Privacy Policy</a>
					</div>

					<div className="col-12 col-lg-auto u-ml-lg-auto">
						<ul className="social-networks">
							<li className="social-network"><a href="https://www.facebook.com/aspshipping.vn" title="Facebook" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">Facebook</span><i className="icon icon-facebook ">
										<svg>
											<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#facebook">
											</use>
										</svg>
									</i>
								</a></li>
							<li className="social-network"><a href="https://aspshipping.vn" title="Instagram" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">Instagram</span><i className="icon icon-instagram ">
										<svg>
											<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#instagram">
											</use>
										</svg>
									</i>
								</a></li>
							<li className="social-network"><a href="https://aspshipping.vn" title="LinkedIn" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">LinkedIn</span><i className="icon icon-linkedin-in ">
										<svg>
											<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#linkedin-in">
											</use>
										</svg>
									</i>
								</a></li>
							<li className="social-network"><a href="https://aspshipping.vn" title="Twitter X" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">Twitter X</span><i className="icon icon-twitter-x ">
										<svg>
											<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#twitter-x">
											</use>
										</svg>
									</i>
								</a></li>
							<li className="social-network"><a href="https://www.youtube.com/channel/UC9Hcg_n2W_6OHeoPnGNEp7A" title="YouTube" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">YouTube</span><i className="icon icon-youtube-play ">
										<svg>
											<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#youtube-play">
											</use>
										</svg>
									</i>
								</a></li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</footer>
    </>
  );
}
