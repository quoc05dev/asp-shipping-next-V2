"use client";
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Using 10px as threshold to prevent micro-bounces.
            // This replaces the obscured legacy Alpine scroll listener
            // while utilizing the exact legacy CSS class '.is-stuck'.
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (id: string) => {
        setActiveMegaMenu(id);
    };

    const handleMouseLeave = () => {
        setActiveMegaMenu(null);
    };

    return (
        <>
            <header id="siteHeader"      data-cms-section="header" className={`site-header site-header-transparent ${isScrolled || activeMegaMenu ? "active" : ""} ${isScrolled ? "is-stuck" : ""}`}>
		<div className="site-header-inner">
			<div id="siteNavbar" className="site-navbar">
				<div className="container container-w-outer container-max container-rfs">
					<div className="site-branding">
						<div className="site-branding-inner">
							<div className="site-logo site-logo-dark" style={{maxWidth: "11.06rem", maxHeight: "2.5rem", }}>
								<a href="index.html" title="Asia Pacific Shipping">
									<img width="267" height="60" src="/wp-content/uploads/2024/03/ASP-logo-dark.svg" className="img-fluid" alt="Asia Pacific Shipping - Independent Vietnamese Shipowner" /> </a>
							</div>
							<div className="site-logo site-logo-light" style={{maxWidth: "11.06rem", maxHeight: "2.5rem", }}>
								<a href="index.html" title="Asia Pacific Shipping">
									<img width="268" height="60" src="/wp-content/uploads/2024/03/ASP-logo-light.svg" className="img-fluid" alt="Asia Pacific Shipping - Independent Vietnamese Shipowner" /> </a>
							</div>
						</div>
					</div>

					<nav className="site-nav u-ml-auto u-d-none u-d-lg-flex u-ml-auto mega-nav"  >
						<ul id="menu-primary-menu" className="site-nav-items site-nav-items-primary">
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-53" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-53 ${activeMegaMenu === "menu-item-53" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-53")} onMouseLeave={handleMouseLeave}><a title="About Us" href="about-us/index.html" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-53">About Us</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-53" role="menu">
									<div className="mega-nav-content grid">
										<ul>
											<li className="menu-item menu-item-heading"><a href="about-us/index.html" title="About Us" target="" className="">About Us</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-55" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
												<a title="History" href="about-us/history/index.html">History</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-56" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
												<a title="Leadership" href="about-us/leadership/index.html">Leadership</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-54" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54">
												<a title="Vision, Mission, Values" href="about-us/vision-mission-values/index.html">Vision, Mission,
													Values</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-57" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
												<a title="Trades" href="about-us/trades/index.html">Trades</a></li>
										</ul>
										<div className="menu-item-contents">
											<div data-index="0" data-uid="dba68197a6b45db2454af0fd84b9da6a" id="" className="layout layout-menu-statistic-boxes layout-app_megamenu layout-statistic-boxes layout-root">
												<div className="layout-inner layout-row row">
													<div data-index="0" data-uid="72931676b71283b5fd2c13aa15411e4a" id="" className="layout layout-menu-statistic-box layout-app_megamenu layout-statistic-box active layout-column-4">
														<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
															<div className="statistic-content u-mb-auto">
																<div className="statistic-figure u-h2">41</div>
																<div className="statistic-suffix u-h3">+</div>
															</div>
															<div className="statistic-caption u-mt-4">Vessels in Fleet<br />
																(P.A.)</div>
														</div>
													</div>
													<div data-index="1" data-uid="bca5573c02746cc1e149b78f4c8c6db4" id="" className="layout layout-menu-statistic-box layout-app_megamenu layout-statistic-box layout-column-4" >
														<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
															<div className="statistic-content u-mb-auto">
																<div className="statistic-figure u-h2">3</div>
																<div className="statistic-suffix u-h3">M+</div>
															</div>
															<div className="statistic-caption u-mt-4">Total DWT<br />
																(P.A.)</div>
														</div>
													</div>
													<div data-index="2" data-uid="2c74af2a0fcfe719c279b3ad1676b96e" id="" className="layout layout-menu-statistic-box layout-app_megamenu layout-statistic-box layout-column-4" >
														<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
															<div className="statistic-content u-mb-auto">
																<div className="statistic-figure u-h2">30</div>
																<div className="statistic-suffix u-h3">+</div>
															</div>
															<div className="statistic-caption u-mt-4">Global Partners<br />
																(P.A.)</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-68" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-68 ${activeMegaMenu === "menu-item-68" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-68")} onMouseLeave={handleMouseLeave}><a title="Sustainability" href="sustainability/index.html" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-68">Sustainability</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-68" role="menu">
									<div className="mega-nav-content grid">
										<ul>
											<li className="menu-item menu-item-heading"><a href="sustainability/index.html" title="Sustainability" target="" className="">Sustainability</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1112" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1112">
												<a title="Environment" href="sustainability/environment/index.html">Environment</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1126" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1126">
												<a title="Social" href="sustainability/social/index.html">Social</a>
											</li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1028" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1028">
												<a title="Governance" href="sustainability/governance/index.html">Governance</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
												<a title="Policies &amp; Guidelines" href="sustainability/policies-guidelines/index.html">Policies &amp;
													Guidelines</a></li>
										</ul>
										<div className="menu-item-contents">
											<div data-index="0" data-uid="a9890d9c20e611ec958b677f7274d40d" id="" className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
												<div className="layout-inner layout-row row u-gx-0">
													<div className="layout-column layout-column-section-media-thumbnail col-sm-6">
														<div className="section-media-thumbnail u-d-flex u-h-100"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img fetchPriority="high" width="576" height="288" src="/wp-content/uploads/asp_images/news/five-years.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span></div>
													</div>
													<div className="layout-column layout-column-section-media-lead col-sm-6">
														<div data-index="0" data-uid="0140ef722f567f7e3004407fbb76e207" id="" className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
															<div className="layout-inner theme-style theme-style-mint">
																<div className="section-lead-content u-h4">
																	<div className="content-width">
																		Sustainability<br />
																		Report 2025 </div>
																</div>
																<div data-index="0" data-uid="bf24fcd3493b2575eec6214c6e900e81" id="" className="layout layout-buttons layout-app_megamenu">
																	<div className="layout-inner button-group u-mt-9 content-width">
																		<div><a href="/wp-content/uploads/2026/06/BW-Epic-Kosan-Sustainability-Report-FY-2025.pdf" title="Download PDF" target="" className="button button-outline button-outline-secondary"><span>Download
																					PDF</span><i className="icon icon-download "><svg>
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
										</div>
									</div>
								</div>
							</li>
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-61" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-61 ${activeMegaMenu === "menu-item-61" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-61")} onMouseLeave={handleMouseLeave}><a title="Media" href="media/index.html" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-61">Media</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-61" role="menu">
									<div className="mega-nav-content grid">
										<ul>
											<li className="menu-item menu-item-heading"><a href="media/index.html" title="Media" target="" className="">Media</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-64" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64">
												<a title="Latest News" href="media/latest-news/index.html">Latest
													News</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-62" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
												<a title="Gallery" href="media/gallery/index.html">Gallery</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-63" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63">
												<a title="Glossary of Terms" href="media/glossary-of-terms/index.html">Glossary of Terms</a></li>
										</ul>
										<div className="menu-item-contents">
											<div data-index="0" data-uid="8fb3a8bba6e7c4e9f1a5f962d1602271" id="" className="layout layout-menu-post-list layout-app_megamenu layout-root">
												<div className="layout-inner ">
													<div className="row row-posts u-gy-4">
														<div className="col-12 col-sm-6">
															<article id="post-2136" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2136 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
																<header className="entry-header">
																	<div className="post-categories row u-gy-2 u-gx-2">
																		<div className="col-auto"><a href="media/news/category/press-releases/index.html" className="button button-small button-secondary">Press
																				Releases</a></div>
																	</div><a href="media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance/index.html" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/fleet-expansion.jpg" className="entry-thumbnail  ratio-item" alt="" /></span></a>
																</header>
																<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
																	<a href="media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance/index.html" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2026-05-29T07:00:59+00:00">May 29,
																			2026</time>
																		<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
																			Asia Pacific Shipping expands use of GIT
																			Coatings following 6% out-of-dock fuel
																			savings and maintained hull performance
																		</h3>
																	</a></div>
															</article>
														</div>
														<div className="col-12 col-sm-6">
															<article id="post-2086" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2086 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
																<header className="entry-header">
																	<div className="post-categories row u-gy-2 u-gx-2">
																		<div className="col-auto"><a href="media/news/category/press-releases/index.html" className="button button-small button-secondary">Press
																				Releases</a></div>
																	</div><a href="media/news/2025/09/09/bw-epic-kosan-partners-with-bound4blue-to-install-unique-non-explosion-proof-esail-on-lpg-carrier-helena-kosan/index.html" className="entry-permalink" title="Asia Pacific Shipping partners with bound4blue to install unique non-explosion proof eSAIL® on LPG carrier Helena Kosan"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/methanol-delivery.jpg" className="entry-thumbnail  ratio-item" alt="" /></span></a>
																</header>
																<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
																	<a href="media/news/2025/09/09/bw-epic-kosan-partners-with-bound4blue-to-install-unique-non-explosion-proof-esail-on-lpg-carrier-helena-kosan/index.html" className="entry-permalink" title="Asia Pacific Shipping partners with bound4blue to install unique non-explosion proof eSAIL® on LPG carrier Helena Kosan"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2025-09-09T13:30:01+00:00">September
																			9, 2025</time>
																		<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
																			Asia Pacific Shipping partners with
																			bound4blue to install unique non-explosion
																			proof eSAIL® on LPG carrier Helena Kosan
																		</h3>
																	</a></div>
															</article>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-58" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-58 ${activeMegaMenu === "menu-item-58" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-58")} onMouseLeave={handleMouseLeave}><a title="Careers" href="careers/index.html" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-58">Careers</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-58" role="menu">
									<div className="mega-nav-content grid">
										<ul>
											<li className="menu-item menu-item-heading"><a href="careers/index.html" title="Careers" target="" className="">Careers</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-79" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-79">
												<a title="The Asia Pacific Shipping Difference" href="careers/index.html#the-bw-epic-kosan-difference">The Asia Pacific Shipping Difference</a>
											</li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-80" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-80">
												<a title="Talent Management" href="careers/index.html#talent-management">Talent Management</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-81" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-81">
												<a title="Benefits of Working at Asia Pacific Shipping" href="careers/index.html#benefits-of-working-at-bw-epic-kosan">Benefits of Working at Asia Pacific
													Shipping</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-82" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-82">
												<a title="Career Opportunities" href="careers/index.html#careers-opportunities">Career Opportunities</a></li>
										</ul>
										<div className="menu-item-contents">
											<div data-index="0" data-uid="965f6192b1b0dd5cd3464d76903929e9" id="" className="layout layout-menu-featured-cards layout-app_megamenu layout-root">
												<div className="layout-inner layout-row row u-gy-4">
													<div className="layout-column col-12 col-sm-6">
														<div data-index="0" data-uid="f81fec76795ad428eb11ca3c263358ec" id="" className="layout layout-menu-featured-card layout-app_megamenu layout-featured-card">
															<div className="layout-inner ">
																<div className="card theme-style theme-style-primary u-border-radius u-h-100 u-overflow-hidden">
																	<span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg" className="img-fluid card-thumbnail-img u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span>
																	<div className="card-header u-p-4 u-d-flex u-flex-row u-flex-nowrap u-align-items-center">
																		<p className="heading h5 u-mb-3 featured-card-heading subheading u-mb-0 u-flex-grow-1 u-font-weight-normal">
																			Join Us at Sea</p>
																		<div><a href="join-us-at-sea/index.html" title="View Openings" target="_blank" className="button-small button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>View
																					Openings</span></a></div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="layout-column col-12 col-sm-6">
														<div data-index="1" data-uid="9033f51275d2da7a95cd1fa78bcc1423" id="" className="layout layout-menu-featured-card layout-app_megamenu layout-featured-card">
															<div className="layout-inner ">
																<div className="card theme-style theme-style-mint u-border-radius u-h-100 u-overflow-hidden">
																	<span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg" className="img-fluid card-thumbnail-img u-object-fit-cover u-object-pos-center  ratio-item" alt="ASP Office megamenu" /></span>
																	<div className="card-header u-p-4 u-d-flex u-flex-row u-flex-nowrap u-align-items-center">
																		<p className="heading h5 u-mb-3 featured-card-heading subheading u-mb-0 u-flex-grow-1 u-font-weight-normal">
																			Join Us Ashore</p>
																		<div><a href="https://ASP.recruiterpal.com/career/jobs?category=mbl1y" title="View Openings" target="_blank" className="button-small button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>View
																					Openings</span></a></div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-2014" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-2014 ${activeMegaMenu === "menu-item-2014" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-2014")} onMouseLeave={handleMouseLeave}><a title="Suppliers" href="suppliers/index.html" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-2014">Suppliers</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-2014" role="menu">
									<div className="mega-nav-content grid">
										<ul>
											<li className="menu-item menu-item-heading"><a href="suppliers/index.html" title="Suppliers" target="" className="">Suppliers</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-2015" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2015">
												<a title="Supplier Verification" href="suppliers/supplier-verification/index.html">Supplier
													Verification</a></li>
										</ul>
										<div className="menu-item-contents">
											<div data-index="0" data-uid="67fa7fee6a64ffdd34d3956fc47ec227" id="" className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
												<div className="layout-inner layout-row row u-gx-0">
													<div className="layout-column layout-column-section-media-thumbnail col-sm-6">
														<div className="section-media-thumbnail u-d-flex u-h-100"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/sustainability/environment-methanol.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span></div>
													</div>
													<div className="layout-column layout-column-section-media-lead col-sm-6">
														<div data-index="0" data-uid="6b1d741271d5abe0958d2b7eabb91ddd" id="" className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
															<div className="layout-inner theme-style theme-style-primary">
																<div className="section-lead-content u-h4">
																	<div className="content-width">
																		Supplier Verification </div>
																</div>
																<div data-index="0" data-uid="9801d5ee4dc0c8a1add009712a6baf00" id="" className="layout layout-buttons layout-app_megamenu">
																	<div className="layout-inner button-group u-mt-9 content-width">
																		<div><a href="suppliers/supplier-verification/index.html" title="View Supplier Verification" target="" className="button button-outline button-outline-secondary"><span>View
																					Supplier Verification</span></a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
						<ul id="menu-callout-menu" className="site-nav-items site-nav-items-callout">
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-73" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-73 ${activeMegaMenu === "menu-item-73" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-73")} onMouseLeave={handleMouseLeave}><span className="menu-item-button-wrap"><a title="Our Fleet" href="our-fleet/index.html" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle button" id="menu-item-mega-nav-73">Our
										Fleet</a></span>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-73" role="menu">
									<div className="mega-nav-content grid">
										<ul>
											<li className="menu-item menu-item-heading"><a href="our-fleet/index.html" title="Our Fleet" target="" className="">Our Fleet</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-75" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
												<a title="Ammonia Propulsion" href="our-fleet/ammonia-propulsion/index.html">Ammonia
													Propulsion</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-74" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
												<a title="LCO2 Shipping" href="our-fleet/lco2-shipping/index.html">LCO2
													Shipping</a></li>
										</ul>
										<div className="menu-item-contents">
											<div data-index="0" data-uid="3ddf3d04a45b70a9ea0ac3740185c203" id="" className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
												<div className="layout-inner layout-row row u-gx-0">
													<div className="layout-column layout-column-section-media-thumbnail col-sm-6">
														<div className="section-media-thumbnail u-d-flex u-h-100"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span></div>
													</div>
													<div className="layout-column layout-column-section-media-lead col-sm-6">
														<div data-index="0" data-uid="4d44f7d1529bce9f84e59496aab642bd" id="" className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
															<div className="layout-inner theme-style theme-style-primary">
																<div className="section-lead-content u-h4">
																	<div className="content-width">
																		Download<br />
																		Full Fleet List </div>
																</div>
																<div data-index="0" data-uid="d2080d133f8e81529528a39016980f0c" id="" className="layout layout-buttons layout-app_megamenu">
																	<div className="layout-inner button-group u-mt-9 content-width">
																		<div><a href="fleet-list/download/pdf/index.html" title="Save as PDF" target="_blank" className="button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>Save as
																					PDF</span><i className="icon icon-download "><svg>
																						<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#download">
																						</use>
																					</svg></i></a></div>
																		<div><a href="fleet-list/download/xlsx/index.html" title="Save as Excel" target="_blank" className="button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>Save as
																					Excel</span><i className="icon icon-download "><svg>
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
										</div>
									</div>
								</div>
							</li>
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-76" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-76 ${activeMegaMenu === "menu-item-76" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-76")} onMouseLeave={handleMouseLeave}><span className="menu-item-button-wrap"><a title="Contact Us" href="contact-us/index.html" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle button button-secondary" id="menu-item-mega-nav-76">Contact Us</a></span>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-76" role="menu">
									<div className="mega-nav-content grid">
										<ul>
											<li className="menu-item menu-item-heading"><a href="contact-us/index.html" title="Contact Us" target="" className="">Contact Us</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-77" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-77">
												<a title="Whistleblowing" href="contact-us/index.html#the-bw-epic-kosan-difference">Whistleblowing</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-78" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78">
												<a title="Leave Us a Message" href="contact-us/index.html#have-a-question">Leave Us a Message</a></li>
										</ul>
										<div className="menu-item-contents">
											<div data-index="0" data-uid="e0a044c2c829270ac86904a13a445d9e" id="" className="layout layout-menu-section-media-callout layout-app_megamenu layout-section-media layout-root">
												<div className="layout-inner layout-row row u-gx-0">
													<div className="layout-column layout-column-section-media-thumbnail col-sm-6">
														<div className="section-media-thumbnail u-d-flex u-h-100"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/sustainability/environment-methanol.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span></div>
													</div>
													<div className="layout-column layout-column-section-media-lead col-sm-6">
														<div data-index="0" data-uid="d5a1ae3056d01a4c63c7724362de1df3" id="" className="layout layout-callout-form layout-app_megamenu layout-column-callout">
															<div className="callout callout-form theme-style theme-style-lighter u-px-4 u-py-3 u-border-radius u-h-100">
																<p className="heading h5 u-mb-3 callout-heading u-mb-0">
																	Subscribe to Our Newsletter</p>
																<div className="callout-body">
																	<div className="callout-content">
																		<div className="content-width">
																			<p>Mu?n c?p nh?t th�ng tin t? ASP? �ang k�
																				nh?n b?n tin d? theo d�i c�c tin t?c,
																				d?ch v? v� co h?i t? ch�ng t�i.</p>
																		</div>
																	</div>
																	<div className="u-mt-9 callout-content-form">
																		<div className="wpcf7 no-js" id="wpcf7-f93-o1" lang="en-US" dir="ltr" wpcf7-id="93">
																			<div className="screen-reader-response">
																				<p role="status" aria-live="polite" aria-atomic="true"></p>
																				<ul></ul>
																			</div>
																			<form action="https://aspshipping.vn/#wpcf7-f93-o1" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate={true} data-status="init">
																				<div style={{display: "none", }}><input type="hidden" name="_wpcf7" value="93" /><input type="hidden" name="_wpcf7_version" value="6.0.2" /><input type="hidden" name="_wpcf7_locale" value="en_US" /><input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f93-o1" /><input type="hidden" name="_wpcf7_container_post" value="0" /><input type="hidden" name="_wpcf7_posted_data_hash" value="" /></div><input type="hidden" name="mc4wp-subscribe" value="1" />
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
																				</div><input type="hidden" id="ct_checkjs_cf7_0f840be9b8db4d3fbd5ba2ce59211f55" name="ct_checkjs_cf7" value="0" />
																				
																				<input className="apbct_special_field apbct_email_id__wp_contact_form_7" name="apbct__email_id__wp_contact_form_7" aria-label="apbct__label_id__wp_contact_form_7" type="text" size={30} maxLength={200} autoComplete="off" value="" />
																			</form>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
						
							<div className="mega-nav-backdrop"></div>
						
					</nav>
						
						<div className="custom-nav-extras" style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", zIndex: "100", }}>
							<div className="language"  aria-label="Choose language" style={{display: "flex", alignItems: "center", fontWeight: "700", fontSize: "1rem", }}>
								<a href="#" className="custom-sync-color">EN</a>
								<span className="custom-sync-color" style={{margin: "0 4px", opacity: "0.5", pointerEvents: "none", }}>/</span>
								<a href="#" className="custom-sync-color">VI</a>
							</div>
							<button type="button" className="custom-sync-color search-button" aria-label="Search website" style={{background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: "0", }}>
								<svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>
							</button>
						</div>

					<nav className="site-nav site-nav-mobile u-d-lg-none"  >
						<a href="#siteNavOffcanvas" className="site-nav-toggle offcanvas-toggle">
							<span  ><i className="icon icon-hamburger site-nav-toggle-icon">
									<svg>
										<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#hamburger">
										</use>
									</svg>
								</i>
							</span>

							<span  ><i className="icon icon-times site-nav-toggle-icon">
									<svg>
										<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#times">
										</use>
									</svg>
								</i>
							</span>
						</a>
						
							<div id="siteNavOffcanvas" className="offcanvas offcanvas-nav">
								<div className="offcanvas-inner">
									<div className="offcanvas-body">
										<nav className="container container-w-outer container-fluid u-px-0 nav-slider"   >
											<ul id="menu-primary-menu-1" className="site-nav-items site-nav-items-mobile">
												<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-53"><a title="About Us" href="about-us/index.html" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-53"><span className="menu-item-text">About
															Us</span><i className="icon icon-chevron-right menu-icon-right">
															<svg>
																<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right">
																</use>
															</svg>
														</i>
													</a>
													<div  className="nav-slider nav-slider-submenu" aria-labelledby="menu-item-nav-slider-53">
														<ul>
															<li className="menu-item menu-item-back"><a className="nav-slider-toggle nav-slider-toggle-back" href="#back"><i className="icon icon-chevron-left menu-icon-left">
																		<svg>
																			<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left">
																			</use>
																		</svg>
																	</i>
																	<span className="menu-item-text">Back</span></a></li>
															<li className="menu-item menu-item-view-parent"><a href="about-us/index.html">About Us</a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
																<a title="History" href="about-us/history/index.html" className="nav-slider-link"><span className="menu-item-text">History</span></a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
																<a title="Leadership" href="about-us/leadership/index.html" className="nav-slider-link"><span className="menu-item-text">Leadership</span></a>
															</li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54">
																<a title="Vision, Mission, Values" href="about-us/vision-mission-values/index.html" className="nav-slider-link"><span className="menu-item-text">Vision, Mission,
																		Values</span></a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
																<a title="Trades" href="about-us/trades/index.html" className="nav-slider-link"><span className="menu-item-text">Trades</span></a></li>
														</ul>
														<div className="menu-item-contents">
															<div data-index="0" data-uid="f931d8a56e7e9cbe65912f779279e015" id="" className="layout layout-menu-statistic-boxes layout-app_megamenu layout-statistic-boxes layout-root">
																<div className="layout-inner layout-row row">
																	<div data-index="0" data-uid="9b523395637499e4adeff662246e902e" id="" className="layout layout-menu-statistic-box layout-app_megamenu layout-statistic-box active layout-column-4">
																		<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
																			<div className="statistic-content u-mb-auto">
																				<div className="statistic-figure u-h2">41
																				</div>
																				<div className="statistic-suffix u-h3">+
																				</div>
																			</div>
																			<div className="statistic-caption u-mt-4">
																				Vessels in Fleet<br />
																				(P.A.)</div>
																		</div>
																	</div>
																	<div data-index="1" data-uid="25a3d6f376c33679f5a858cf866416cf" id="" className="layout layout-menu-statistic-box layout-app_megamenu layout-statistic-box layout-column-4" >
																		<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
																			<div className="statistic-content u-mb-auto">
																				<div className="statistic-figure u-h2">3
																				</div>
																				<div className="statistic-suffix u-h3">M+
																				</div>
																			</div>
																			<div className="statistic-caption u-mt-4">Total
																				DWT<br />
																				(P.A.)</div>
																		</div>
																	</div>
																	<div data-index="2" data-uid="5161b3daf1a4dd9975b0c74945506b5f" id="" className="layout layout-menu-statistic-box layout-app_megamenu layout-statistic-box layout-column-4" >
																		<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
																			<div className="statistic-content u-mb-auto">
																				<div className="statistic-figure u-h2">30
																				</div>
																				<div className="statistic-suffix u-h3">+
																				</div>
																			</div>
																			<div className="statistic-caption u-mt-4">Global
																				Partners<br />
																				(P.A.)</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</li>
												<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-68"><a title="Sustainability" href="sustainability/index.html" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-68"><span className="menu-item-text">Sustainability</span><i className="icon icon-chevron-right menu-icon-right">
															<svg>
																<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right">
																</use>
															</svg>
														</i>
													</a>
													<div  className="nav-slider nav-slider-submenu" aria-labelledby="menu-item-nav-slider-68">
														<ul>
															<li className="menu-item menu-item-back"><a className="nav-slider-toggle nav-slider-toggle-back" href="#back"><i className="icon icon-chevron-left menu-icon-left">
																		<svg>
																			<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left">
																			</use>
																		</svg>
																	</i>
																	<span className="menu-item-text">Back</span></a></li>
															<li className="menu-item menu-item-view-parent"><a href="sustainability/index.html">Sustainability</a>
															</li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1112">
																<a title="Environment" href="sustainability/environment/index.html" className="nav-slider-link"><span className="menu-item-text">Environment</span></a>
															</li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1126">
																<a title="Social" href="sustainability/social/index.html" className="nav-slider-link"><span className="menu-item-text">Social</span></a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1028">
																<a title="Governance" href="sustainability/governance/index.html" className="nav-slider-link"><span className="menu-item-text">Governance</span></a>
															</li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
																<a title="Policies &amp; Guidelines" href="sustainability/policies-guidelines/index.html" className="nav-slider-link"><span className="menu-item-text">Policies &amp;
																		Guidelines</span></a></li>
														</ul>
														<div className="menu-item-contents">
															<div data-index="0" data-uid="021aff07673e55982f8df82300160613" id="" className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
																<div className="layout-inner layout-row row u-gx-0">
																	<div className="layout-column layout-column-section-media-thumbnail col-sm-6">
																		<div className="section-media-thumbnail u-d-flex u-h-100">
																			<span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="wp-content/uploads/asp_images/news/five-years.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span></div>
																	</div>
																	<div className="layout-column layout-column-section-media-lead col-sm-6">
																		<div data-index="0" data-uid="8f4e3ec586eb6cf6ae0123eea86875ab" id="" className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
																			<div className="layout-inner theme-style theme-style-mint">
																				<div className="section-lead-content u-h4">
																					<div className="content-width">
																						Sustainability<br />
																						Report 2025 </div>
																				</div>
																				<div data-index="0" data-uid="d2c3f369e4640b8cb60f20626ff807cd" id="" className="layout layout-buttons layout-app_megamenu">
																					<div className="layout-inner button-group u-mt-9 content-width">
																						<div><a href="wp-content/uploads/2026/06/BW-Epic-Kosan-Sustainability-Report-FY-2025.pdf" title="Download PDF" target="" className="button button-outline button-outline-secondary"><span>Download
																									PDF</span><i className="icon icon-download "><svg>
																										<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#download">
																										</use>
																									</svg></i></a></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</li>
												<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-61"><a title="Media" href="media/index.html" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-61"><span className="menu-item-text">Media</span><i className="icon icon-chevron-right menu-icon-right">
															<svg>
																<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right">
																</use>
															</svg>
														</i>
													</a>
													<div  className="nav-slider nav-slider-submenu" aria-labelledby="menu-item-nav-slider-61">
														<ul>
															<li className="menu-item menu-item-back"><a className="nav-slider-toggle nav-slider-toggle-back" href="#back"><i className="icon icon-chevron-left menu-icon-left">
																		<svg>
																			<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left">
																			</use>
																		</svg>
																	</i>
																	<span className="menu-item-text">Back</span></a></li>
															<li className="menu-item menu-item-view-parent"><a href="media/index.html">Media</a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64">
																<a title="Latest News" href="media/latest-news/index.html" className="nav-slider-link"><span className="menu-item-text">Latest News</span></a>
															</li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
																<a title="Gallery" href="media/gallery/index.html" className="nav-slider-link"><span className="menu-item-text">Gallery</span></a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63">
																<a title="Glossary of Terms" href="media/glossary-of-terms/index.html" className="nav-slider-link"><span className="menu-item-text">Glossary of
																		Terms</span></a></li>
														</ul>
														<div className="menu-item-contents">
															<div data-index="0" data-uid="416e1a458b917335fca7067b26f0774b" id="" className="layout layout-menu-post-list layout-app_megamenu layout-root">
																<div className="layout-inner ">
																	<div className="row row-posts u-gy-4">
																		<div className="col-12 col-sm-6">
																			<article id="post-2136" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2136 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
																				<header className="entry-header">
																					<div className="post-categories row u-gy-2 u-gx-2">
																						<div className="col-auto"><a href="media/news/category/press-releases/index.html" className="button button-small button-secondary">Press
																								Releases</a></div>
																					</div><a href="media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance/index.html" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="wp-content/uploads/asp_images/news/fleet-expansion.jpg" className="entry-thumbnail  ratio-item" alt="" /></span></a>
																				</header>
																				<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
																					<a href="media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance/index.html" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2026-05-29T07:00:59+00:00">May
																							29, 2026</time>
																						<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
																							Asia Pacific Shipping
																							expands use of GIT Coatings
																							following 6% out-of-dock
																							fuel savings and maintained
																							hull performance </h3>
																					</a></div>
																			</article>
																		</div>
																		<div className="col-12 col-sm-6">
																			<article id="post-2086" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2086 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
																				<header className="entry-header">
																					<div className="post-categories row u-gy-2 u-gx-2">
																						<div className="col-auto"><a href="media/news/category/press-releases/index.html" className="button button-small button-secondary">Press
																								Releases</a></div>
																					</div><a href="media/news/2025/09/09/bw-epic-kosan-partners-with-bound4blue-to-install-unique-non-explosion-proof-esail-on-lpg-carrier-helena-kosan/index.html" className="entry-permalink" title="Asia Pacific Shipping partners with bound4blue to install unique non-explosion proof eSAIL® on LPG carrier Helena Kosan"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="wp-content/uploads/asp_images/news/methanol-delivery.jpg" className="entry-thumbnail  ratio-item" alt="" /></span></a>
																				</header>
																				<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
																					<a href="media/news/2025/09/09/bw-epic-kosan-partners-with-bound4blue-to-install-unique-non-explosion-proof-esail-on-lpg-carrier-helena-kosan/index.html" className="entry-permalink" title="Asia Pacific Shipping partners with bound4blue to install unique non-explosion proof eSAIL® on LPG carrier Helena Kosan"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2025-09-09T13:30:01+00:00">September
																							9, 2025</time>
																						<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
																							Asia Pacific Shipping
																							partners with bound4blue to
																							install unique non-explosion
																							proof eSAIL® on LPG carrier
																							Helena Kosan </h3>
																					</a></div>
																			</article>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</li>
												<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-58"><a title="Careers" href="careers/index.html" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-58"><span className="menu-item-text">Careers</span><i className="icon icon-chevron-right menu-icon-right">
															<svg>
																<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right">
																</use>
															</svg>
														</i>
													</a>
													<div  className="nav-slider nav-slider-submenu" aria-labelledby="menu-item-nav-slider-58">
														<ul>
															<li className="menu-item menu-item-back"><a className="nav-slider-toggle nav-slider-toggle-back" href="#back"><i className="icon icon-chevron-left menu-icon-left">
																		<svg>
																			<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left">
																			</use>
																		</svg>
																	</i>
																	<span className="menu-item-text">Back</span></a></li>
															<li className="menu-item menu-item-view-parent"><a href="careers/index.html">Careers</a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-79">
																<a title="The Asia Pacific Shipping Difference" href="careers/index.html#the-bw-epic-kosan-difference" className="nav-slider-link"><span className="menu-item-text">The Asia Pacific Shipping
																		Difference</span></a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-80">
																<a title="Talent Management" href="careers/index.html#talent-management" className="nav-slider-link"><span className="menu-item-text">Talent
																		Management</span></a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-81">
																<a title="Benefits of Working at Asia Pacific Shipping" href="careers/index.html#benefits-of-working-at-bw-epic-kosan" className="nav-slider-link"><span className="menu-item-text">Benefits of Working at
																		Asia Pacific Shipping</span></a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-82">
																<a title="Career Opportunities" href="careers/index.html#careers-opportunities" className="nav-slider-link"><span className="menu-item-text">Career
																		Opportunities</span></a></li>
														</ul>
														<div className="menu-item-contents">
															<div data-index="0" data-uid="6ce1697505951181f525a229a02f49e0" id="" className="layout layout-menu-featured-cards layout-app_megamenu layout-root">
																<div className="layout-inner layout-row row u-gy-4">
																	<div className="layout-column col-12 col-sm-6">
																		<div data-index="0" data-uid="2dc3b11f1dd17c03214079fd7f1c3fbb" id="" className="layout layout-menu-featured-card layout-app_megamenu layout-featured-card">
																			<div className="layout-inner ">
																				<div className="card theme-style theme-style-primary u-border-radius u-h-100 u-overflow-hidden">
																					<span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="wp-content/uploads/asp_images/sustainability/social-seafarers.jpg" className="img-fluid card-thumbnail-img u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span>
																					<div className="card-header u-p-4 u-d-flex u-flex-row u-flex-nowrap u-align-items-center">
																						<p className="heading h5 u-mb-3 featured-card-heading subheading u-mb-0 u-flex-grow-1 u-font-weight-normal">
																							Join Us at Sea</p>
																						<div><a href="join-us-at-sea/index.html" title="View Openings" target="_blank" className="button-small button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>View
																									Openings</span></a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="layout-column col-12 col-sm-6">
																		<div data-index="1" data-uid="c729d055dfcc695614f12e621bd289ed" id="" className="layout layout-menu-featured-card layout-app_megamenu layout-featured-card">
																			<div className="layout-inner ">
																				<div className="card theme-style theme-style-mint u-border-radius u-h-100 u-overflow-hidden">
																					<span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="wp-content/uploads/asp_images/news/fleet-expansion.jpg" className="img-fluid card-thumbnail-img u-object-fit-cover u-object-pos-center  ratio-item" alt="ASP Office megamenu" /></span>
																					<div className="card-header u-p-4 u-d-flex u-flex-row u-flex-nowrap u-align-items-center">
																						<p className="heading h5 u-mb-3 featured-card-heading subheading u-mb-0 u-flex-grow-1 u-font-weight-normal">
																							Join Us Ashore</p>
																						<div><a href="https://ASP.recruiterpal.com/career/jobs?category=mbl1y" title="View Openings" target="_blank" className="button-small button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>View
																									Openings</span></a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</li>
												<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-2014"><a title="Suppliers" href="suppliers/index.html" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-2014"><span className="menu-item-text">Suppliers</span><i className="icon icon-chevron-right menu-icon-right">
															<svg>
																<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right">
																</use>
															</svg>
														</i>
													</a>
													<div  className="nav-slider nav-slider-submenu" aria-labelledby="menu-item-nav-slider-2014">
														<ul>
															<li className="menu-item menu-item-back"><a className="nav-slider-toggle nav-slider-toggle-back" href="#back"><i className="icon icon-chevron-left menu-icon-left">
																		<svg>
																			<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left">
																			</use>
																		</svg>
																	</i>
																	<span className="menu-item-text">Back</span></a></li>
															<li className="menu-item menu-item-view-parent"><a href="suppliers/index.html">Suppliers</a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2015">
																<a title="Supplier Verification" href="suppliers/supplier-verification/index.html" className="nav-slider-link"><span className="menu-item-text">Supplier
																		Verification</span></a></li>
														</ul>
														<div className="menu-item-contents">
															<div data-index="0" data-uid="be606e8d1ab4c1915a055daa2b462c8f" id="" className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
																<div className="layout-inner layout-row row u-gx-0">
																	<div className="layout-column layout-column-section-media-thumbnail col-sm-6">
																		<div className="section-media-thumbnail u-d-flex u-h-100">
																			<span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="wp-content/uploads/asp_images/news/p2.jpg" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span>
																		</div>
																	</div>
																	<div className="layout-column layout-column-section-media-lead col-sm-6">
																		<div data-index="0" data-uid="2ffa896f7adf68d0099bea1798216c99" id="" className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
																			<div className="layout-inner theme-style theme-style-primary">
																				<div className="section-lead-content u-h4">
																					<div className="content-width">
																						Supplier Verification </div>
																				</div>
																				<div data-index="0" data-uid="0f5b77a1cbb1b92200bc6878b39a933e" id="" className="layout layout-buttons layout-app_megamenu">
																					<div className="layout-inner button-group u-mt-9 content-width">
																						<div><a href="suppliers/supplier-verification/index.html" title="View Supplier Verification" target="" className="button button-outline button-outline-secondary"><span>View
																									Supplier
																									Verification</span></a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</li>
											</ul>
											<ul id="menu-callout-menu-1" className="site-nav-items site-nav-items-mobile">
												<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-73"><span className="menu-item-button-wrap"><a title="Our Fleet" href="our-fleet/index.html" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle button" id="menu-item-nav-slider-73"><span className="menu-item-text">Our Fleet</span><i className="icon icon-chevron-right menu-icon-right">
																<svg>
																	<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right">
																	</use>
																</svg>
															</i>
														</a></span>
													<div  className="nav-slider nav-slider-submenu" aria-labelledby="menu-item-nav-slider-73">
														<ul>
															<li className="menu-item menu-item-back"><a className="nav-slider-toggle nav-slider-toggle-back" href="#back"><i className="icon icon-chevron-left menu-icon-left">
																		<svg>
																			<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left">
																			</use>
																		</svg>
																	</i>
																	<span className="menu-item-text">Back</span></a></li>
															<li className="menu-item menu-item-view-parent"><a href="our-fleet/index.html">Our Fleet</a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
																<a title="Ammonia Propulsion" href="our-fleet/ammonia-propulsion/index.html" className="nav-slider-link"><span className="menu-item-text">Ammonia
																		Propulsion</span></a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
																<a title="LCO2 Shipping" href="our-fleet/lco2-shipping/index.html" className="nav-slider-link"><span className="menu-item-text">LCO2 Shipping</span></a>
															</li>
														</ul>
														<div className="menu-item-contents">
															<div data-index="0" data-uid="fc51937a8b17f0a8aacb231325f85c72" id="" className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
																<div className="layout-inner layout-row row u-gx-0">
																	<div className="layout-column layout-column-section-media-thumbnail col-sm-6">
																		<div className="section-media-thumbnail u-d-flex u-h-100">
																			<span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span></div>
																	</div>
																	<div className="layout-column layout-column-section-media-lead col-sm-6">
																		<div data-index="0" data-uid="721dcdc3d231e2a26a44175487597673" id="" className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
																			<div className="layout-inner theme-style theme-style-primary">
																				<div className="section-lead-content u-h4">
																					<div className="content-width">
																						Download<br />
																						Full Fleet List </div>
																				</div>
																				<div data-index="0" data-uid="4a421abdc8f82e3ea73fbbcff13c73ea" id="" className="layout layout-buttons layout-app_megamenu">
																					<div className="layout-inner button-group u-mt-9 content-width">
																						<div><a href="fleet-list/download/pdf/index.html" title="Save as PDF" target="_blank" className="button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>Save
																									as PDF</span><i className="icon icon-download "><svg>
																										<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#download">
																										</use>
																									</svg></i></a></div>
																						<div><a href="fleet-list/download/xlsx/index.html" title="Save as Excel" target="_blank" className="button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>Save
																									as Excel</span><i className="icon icon-download "><svg>
																										<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#download">
																										</use>
																									</svg></i></a></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</li>
												<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-76"><span className="menu-item-button-wrap"><a title="Contact Us" href="contact-us/index.html" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle button button-secondary" id="menu-item-nav-slider-76"><span className="menu-item-text">Contact Us</span><i className="icon icon-chevron-right menu-icon-right">
																<svg>
																	<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right">
																	</use>
																</svg>
															</i>
														</a></span>
													<div  className="nav-slider nav-slider-submenu" aria-labelledby="menu-item-nav-slider-76">
														<ul>
															<li className="menu-item menu-item-back"><a className="nav-slider-toggle nav-slider-toggle-back" href="#back"><i className="icon icon-chevron-left menu-icon-left">
																		<svg>
																			<use xlinkHref="wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left">
																			</use>
																		</svg>
																	</i>
																	<span className="menu-item-text">Back</span></a></li>
															<li className="menu-item menu-item-view-parent"><a href="contact-us/index.html">Contact Us</a></li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-77">
																<a title="Whistleblowing" href="contact-us/index.html#the-bw-epic-kosan-difference" className="nav-slider-link"><span className="menu-item-text">Whistleblowing</span></a>
															</li>
															<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78">
																<a title="Leave Us a Message" href="contact-us/index.html#have-a-question" className="nav-slider-link"><span className="menu-item-text">Leave Us a
																		Message</span></a></li>
														</ul>
														<div className="menu-item-contents">
															<div data-index="0" data-uid="70456acbfb69220b81d0b3e9cb924cd6" id="" className="layout layout-menu-section-media-callout layout-app_megamenu layout-section-media layout-root">
																<div className="layout-inner layout-row row u-gx-0">
																	<div className="layout-column layout-column-section-media-thumbnail col-sm-6">
																		<div className="section-media-thumbnail u-d-flex u-h-100">
																			<span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="576" height="288" src="wp-content/uploads/asp_images/sustainability/environment-methanol.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center  ratio-item" alt="" /></span></div>
																	</div>
																	<div className="layout-column layout-column-section-media-lead col-sm-6">
																		<div data-index="0" data-uid="cc65c3f24b990d14abffe0e28ab320ac" id="" className="layout layout-callout-form layout-app_megamenu layout-column-callout">
																			<div className="callout callout-form theme-style theme-style-lighter u-px-4 u-py-3 u-border-radius u-h-100">
																				<p className="heading h5 u-mb-3 callout-heading u-mb-0">
																					Subscribe to Our Newsletter</p>
																				<div className="callout-body">
																					<div className="callout-content">
																						<div className="content-width">
																							<p>Mu?n c?p nh?t th�ng tin
																								t? ASP? �ang k� nh?n b?n
																								tin d? theo d�i c�c tin
																								t?c, d?ch v? v� co h?i
																								t? ch�ng t�i.</p>
																						</div>
																					</div>
																					<div className="u-mt-9 callout-content-form">
																						<div className="wpcf7 no-js" id="wpcf7-f93-o2" lang="en-US" dir="ltr" wpcf7-id="93">
																							<div className="screen-reader-response">
																								<p role="status" aria-live="polite" aria-atomic="true">
																								</p>
																								<ul></ul>
																							</div>
																							<form action="https://aspshipping.vn/#wpcf7-f93-o2" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate={true} data-status="init">
																								<div style={{display: "none", }}>
																									<input type="hidden" name="_wpcf7" value="93" /><input type="hidden" name="_wpcf7_version" value="6.0.2" /><input type="hidden" name="_wpcf7_locale" value="en_US" /><input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f93-o2" /><input type="hidden" name="_wpcf7_container_post" value="0" /><input type="hidden" name="_wpcf7_posted_data_hash" value="" />
																								</div><input type="hidden" name="mc4wp-subscribe" value="1" />
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
																									<div className="wpcf7-response-output" aria-hidden="true">
																									</div>
																								</div><input type="hidden" id="ct_checkjs_cf7_b706835de79a2b4e80506f582af3676a" name="ct_checkjs_cf7" value="0" />
																								
																								<input className="apbct_special_field apbct_email_id__wp_contact_form_7" name="apbct__email_id__wp_contact_form_7" aria-label="apbct__label_id__wp_contact_form_7" type="text" size={30} maxLength={200} autoComplete="off" value="" />
																							</form>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						
					</nav>
				</div>
                {activeMegaMenu && <div className="mega-nav-backdrop active" style={{ display: 'block' }}></div>}
			</div>


		</div>
	</header>
        </>
    );
}
