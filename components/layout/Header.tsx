"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';

const whatWeDoServices = [
    {
        title: 'Commercial Management',
        desc: 'Employment strategy across time charter, spot voyage and pool partnerships.'
    },
    {
        title: 'Technical Management',
        desc: 'Planned maintenance, dry-docking, performance, safety and regulatory oversight.'
    },
    {
        title: 'Marine Consultancy',
        desc: 'Practical maritime advice for commercial planning and technical projects.'
    },
    {
        title: 'Crew Management',
        desc: 'Recruitment, deployment, training and welfare for qualified seafarers.'
    },
    {
        title: 'Sea Transportation',
        desc: 'Flexible sea transportation across dry bulk, petroleum products and other cargoes.'
    },
    {
        title: 'What We Do Overview',
        desc: 'End-to-end maritime solutions across a vessel\'s lifecycle.'
    }
];

export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === '/' || pathname === '/what-we-do';
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

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

    // Observe header height dynamically for MobileNav stacking invariant
    useEffect(() => {
        if (!headerRef.current) return;
        
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                const h = headerRef.current.getBoundingClientRect().height;
                document.documentElement.style.setProperty('--actual-mobile-header-height', `${h}px`);
            }
        };

        const observer = new ResizeObserver(() => updateHeaderHeight());
        observer.observe(headerRef.current);
        
        // Initial fallback to CSS variable, then real measurement
        document.documentElement.style.setProperty('--actual-mobile-header-height', 'var(--theme-header-height-rem)');
        updateHeaderHeight();

        return () => observer.disconnect();
    }, []);

    const handleMouseEnter = (id: string) => {
        setActiveMegaMenu(id);
    };

    const handleMouseLeave = () => {
        setActiveMegaMenu(null);
    };

    return (
        <>
            <header id="siteHeader"      data-cms-section="header" className={`site-header ${isHomePage ? "site-header-transparent" : ""} ${isScrolled || activeMegaMenu ? "active" : ""} ${isScrolled ? "is-stuck" : ""}`}>
		<div className="site-header-inner">
			<div id="siteNavbar" className="site-navbar">
				<div className="container container-w-outer container-max container-rfs">
					<div className="site-branding">
						<div className="site-branding-inner">
							<div className="site-logo site-logo-dark" style={{maxWidth: "11.06rem", maxHeight: "2.5rem", }}>
								<a href="/" title="Asia Pacific Shipping">
									<img width="267" height="60" src="/wp-content/uploads/2024/03/ASP-logo-dark.svg" className="img-fluid" alt="Asia Pacific Shipping - Independent Vietnamese Shipowner" /> </a>
							</div>
							<div className="site-logo site-logo-light" style={{maxWidth: "11.06rem", maxHeight: "2.5rem", }}>
								<a href="/" title="Asia Pacific Shipping">
									<img width="268" height="60" src="/wp-content/uploads/2024/03/ASP-logo-light.svg" className="img-fluid" alt="Asia Pacific Shipping - Independent Vietnamese Shipowner" /> </a>
							</div>
						</div>
					</div>

					<nav className="site-nav u-ml-auto u-d-none u-d-lg-flex u-ml-auto mega-nav"  >
						<ul id="menu-primary-menu" className="site-nav-items site-nav-items-primary">
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-what-we-do" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-what-we-do ${activeMegaMenu === "menu-item-what-we-do" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-what-we-do")} onMouseLeave={handleMouseLeave}><a href="/what-we-do" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-what-we-do">What We Do</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-what-we-do" role="menu" >
									<div className="mega-nav-content grid">
										<ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
											<li className="menu-item menu-item-heading" style={{ margin: 0, padding: 0, height: '36px', display: 'flex', alignItems: 'flex-start' }}><a href="/what-we-do" title="What We Do" target="" className="" style={{ padding: '0 0 0.5rem 0', width: '100%', borderBottom: '1px solid #e5e7eb' }}>What We Do</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-1" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-1" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Commercial Management" href="/commercial-management" style={{ width: '100%', padding: '0', display: 'block' }}>Commercial Management</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-2" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-2" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Technical Management" href="/technical-management" style={{ width: '100%', padding: '0', display: 'block' }}>Technical Management</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-3" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-3" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Marine Consultancy" href="/marine-consultancy" style={{ width: '100%', padding: '0', display: 'block' }}>Marine Consultancy</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-4" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-4" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Crew Management" href="/crew-management" style={{ width: '100%', padding: '0', display: 'block' }}>Crew Management</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-5" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-5" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Sea Transportation" href="/sea-transportation" style={{ width: '100%', padding: '0', display: 'block' }}>Sea Transportation</a></li>
										</ul>
										<div className="menu-item-contents u-pl-4">
                                            <div className="layout layout-menu-featured-cards layout-app_megamenu layout-root u-h-100">
                                                <div className="layout-inner layout-row row u-gx-4 u-m-0" style={{ alignContent: 'space-between', height: '100%' }}>
                                                    {whatWeDoServices.map((service, index) => (
                                                        <div key={index} className="col-12 col-md-4 u-d-flex u-flex-column u-px-2" style={{ height: 'auto' }}>
                                                            <div className="u-d-flex u-flex-column u-color-body u-justify-content-start">
                                                                <h4 className="u-h6 u-mb-1 u-color-primary" style={{ fontSize: "0.95rem" }}>{service.title}</h4>
                                                                <p className="u-font-size-sm u-color-gray-600 u-mb-0" style={{ 
                                                                    lineHeight: 1.3, 
                                                                    fontSize: "0.85rem",
                                                                    display: '-webkit-box',
                                                                    WebkitLineClamp: 2,
                                                                    WebkitBoxOrient: 'vertical',
                                                                    overflow: 'hidden'
                                                                }}>{service.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
										</div>
									</div>
								</div>
							</li>
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-53" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-53 ${activeMegaMenu === "menu-item-53" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-53")} onMouseLeave={handleMouseLeave}><a title="About Us" href="/about-us" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-53">About Us</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-53" role="menu" >
									<div className="mega-nav-content grid">
										<ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
											<li className="menu-item menu-item-heading" style={{ margin: 0, padding: 0, height: '36px', display: 'flex', alignItems: 'flex-start' }}><a href="/about-us" title="About Us" target="" className="" style={{ padding: '0 0 0.5rem 0', width: '100%', borderBottom: '1px solid #e5e7eb' }}>About Us</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-55" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="History" href="/about-us/history" style={{ width: '100%', padding: '0', display: 'block' }}>History</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-56" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Leadership" href="/about-us/leadership" style={{ width: '100%', padding: '0', display: 'block' }}>Leadership</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-54" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Vision, Mission, Values" href="/about-us/vision-mission-values" style={{ width: '100%', padding: '0', display: 'block' }}>Vision, Mission, Values</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-57" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Trades" href="/about-us/trades" style={{ width: '100%', padding: '0', display: 'block' }}>Trades</a></li>
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
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-68" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-68 ${activeMegaMenu === "menu-item-68" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-68")} onMouseLeave={handleMouseLeave}><a title="Sustainability" href="/sustainability" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-68">Sustainability</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-68" role="menu" >
									<div className="mega-nav-content grid">
										<ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
											<li className="menu-item menu-item-heading" style={{ margin: 0, padding: 0, height: '36px', display: 'flex', alignItems: 'flex-start' }}><a href="/sustainability" title="Sustainability" target="" className="" style={{ padding: '0 0 0.5rem 0', width: '100%', borderBottom: '1px solid #e5e7eb' }}>Sustainability</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1112" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1112" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Environment" href="/sustainability/environment" style={{ width: '100%', padding: '0', display: 'block' }}>Environment</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1126" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1126" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Social" href="/sustainability/social" style={{ width: '100%', padding: '0', display: 'block' }}>Social</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1028" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1028" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Governance" href="/sustainability/governance" style={{ width: '100%', padding: '0', display: 'block' }}>Governance</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Policies &amp; Guidelines" href="/sustainability/policies-guidelines" style={{ width: '100%', padding: '0', display: 'block' }}>Policies &amp; Guidelines</a></li>
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
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-61" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-61 ${activeMegaMenu === "menu-item-61" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-61")} onMouseLeave={handleMouseLeave}><a title="Media" href="/media" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-61">Media</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-61" role="menu" >
									<div className="mega-nav-content grid">
										<ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
											<li className="menu-item menu-item-heading" style={{ margin: 0, padding: 0, height: '36px', display: 'flex', alignItems: 'flex-start' }}><a href="/media" title="Media" target="" className="" style={{ padding: '0 0 0.5rem 0', width: '100%', borderBottom: '1px solid #e5e7eb' }}>Media</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-64" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Latest News" href="/media/latest-news" style={{ width: '100%', padding: '0', display: 'block' }}>Latest News</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-62" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Gallery" href="/media/gallery" style={{ width: '100%', padding: '0', display: 'block' }}>Gallery</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-63" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Glossary of Terms" href="/media/glossary-of-terms" style={{ width: '100%', padding: '0', display: 'block' }}>Glossary of Terms</a></li>
										</ul>
										<div className="menu-item-contents">
											<div data-index="0" data-uid="8fb3a8bba6e7c4e9f1a5f962d1602271" id="" className="layout layout-menu-post-list layout-app_megamenu layout-root">
												<div className="layout-inner ">
													<div className="row row-posts u-gy-4">
														<div className="col-12 col-sm-6">
															<article id="post-2136" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
																<header className="entry-header">
																	<div className="post-categories row u-gy-2 u-gx-2">
																		<div className="col-auto"><a href="#" className="button button-small button-secondary">Press
																				Releases</a></div>
																	</div><a href="#" className="entry-permalink" title="ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/fleet-expansion.jpg" className="entry-thumbnail  ratio-item" alt="ASP Fleet Expansion" /></span></a>
																</header>
																<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
																	<a href="#" className="entry-permalink" title="ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2026-05-29T07:00:59+00:00">May 29,
																			2026</time>
																		<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
																			ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers
																		</h3>
																	</a></div>
															</article>
														</div>
														<div className="col-12 col-sm-6">
															<article id="post-asp-1" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
																<header className="entry-header">
																	<div className="post-categories row u-gy-2 u-gx-2">
																		<div className="col-auto"><a href="#" className="button button-small button-secondary">Press
																				Releases</a></div>
																	</div><a href="#" className="entry-permalink" title="ASP Expands The Fleet with Two New MR2 Tankers from K Shipbuilding"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/methanol-delivery.jpg" className="entry-thumbnail  ratio-item" alt="ASP Methanol Delivery" /></span></a>
																</header>
																<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
																	<a href="#" className="entry-permalink" title="ASP Expands The Fleet with Two New MR2 Tankers from K Shipbuilding"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2025-09-09T13:30:01+00:00">September
																			9, 2025</time>
																		<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
																			ASP Expands The Fleet with Two New MR2 Tankers from K Shipbuilding
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
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-58" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-58 ${activeMegaMenu === "menu-item-58" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-58")} onMouseLeave={handleMouseLeave}><a title="Careers" href="/careers" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle" id="menu-item-mega-nav-58">Careers</a>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-58" role="menu" >
									<div className="mega-nav-content grid">
										<ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
											<li className="menu-item menu-item-heading" style={{ margin: 0, padding: 0, height: '36px', display: 'flex', alignItems: 'flex-start' }}><a href="/careers" title="Careers" target="" className="" style={{ padding: '0 0 0.5rem 0', width: '100%', borderBottom: '1px solid #e5e7eb' }}>Careers</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-79" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-79" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="The Asia Pacific Shipping Difference" href="/careers#the-bw-epic-kosan-difference" style={{ width: '100%', padding: '0', display: 'block' }}>The Asia Pacific Shipping Difference</a>
											</li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-80" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-80" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Talent Management" href="/careers#talent-management" style={{ width: '100%', padding: '0', display: 'block' }}>Talent Management</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-81" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-81" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Benefits of Working at Asia Pacific Shipping" href="/careers#benefits-of-working-at-bw-epic-kosan" style={{ width: '100%', padding: '0', display: 'block' }}>Benefits of Working at Asia Pacific Shipping</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-82" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-82" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Career Opportunities" href="/careers#careers-opportunities" style={{ width: '100%', padding: '0', display: 'block' }}>Career Opportunities</a></li>
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
																		<div><a href="/join-us-at-sea" title="View Openings" target="_blank" className="button-small button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>View
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
						</ul>
						<ul id="menu-callout-menu" className="site-nav-items site-nav-items-callout">
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-73" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-73 ${activeMegaMenu === "menu-item-73" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-73")} onMouseLeave={handleMouseLeave}><span className="menu-item-button-wrap"><a title="Our Fleet" href="/our-fleet" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle button" id="menu-item-mega-nav-73">Our
										Fleet</a></span>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-73" role="menu" >
									<div className="mega-nav-content grid">
										<ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
											<li className="menu-item menu-item-heading" style={{ margin: 0, padding: 0, height: '36px', display: 'flex', alignItems: 'flex-start' }}><a href="/our-fleet" title="Our Fleet" target="" className="" style={{ padding: '0 0 0.5rem 0', width: '100%', borderBottom: '1px solid #e5e7eb' }}>Our Fleet</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-75" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75" style={{ marginTop: 'auto', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Ammonia Propulsion" href="/our-fleet/ammonia-propulsion" style={{ width: '100%', padding: '0', display: 'block' }}>Ammonia Propulsion</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-74" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="LCO2 Shipping" href="/our-fleet/lco2-shipping" style={{ width: '100%', padding: '0', display: 'block' }}>LCO2 Shipping</a></li>
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
																		<div><a href="/fleet-list/download/pdf" title="Save as PDF" target="_blank" className="button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>Save as
																					PDF</span><i className="icon icon-download "><svg>
																						<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#download">
																						</use>
																					</svg></i></a></div>
																		<div><a href="/fleet-list/download/xlsx" title="Save as Excel" target="_blank" className="button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>Save as
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
							<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-76" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-76 ${activeMegaMenu === "menu-item-76" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-76")} onMouseLeave={handleMouseLeave}><span className="menu-item-button-wrap"><a title="Contact Us" href="/contact-us" aria-haspopup="true" aria-expanded="false" className="mega-nav-toggle button button-secondary" id="menu-item-mega-nav-76">Contact Us</a></span>
								<div  className="mega-nav-body container container-max container-rfs container-w-outer" aria-labelledby="menu-item-mega-nav-76" role="menu" >
									<div className="mega-nav-content grid">
										<ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
											<li className="menu-item menu-item-heading" style={{ margin: 0, padding: 0, height: '36px', display: 'flex', alignItems: 'flex-start' }}><a href="/contact-us" title="Contact Us" target="" className="" style={{ padding: '0 0 0.5rem 0', width: '100%', borderBottom: '1px solid #e5e7eb' }}>Contact Us</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-77" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-77" style={{ marginTop: 'auto', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Whistleblowing" href="/contact-us#the-bw-epic-kosan-difference" style={{ width: '100%', padding: '0', display: 'block' }}>Whistleblowing</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-78" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78" style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
												<a title="Leave Us a Message" href="/contact-us#have-a-question" style={{ width: '100%', padding: '0', display: 'block' }}>Leave Us a Message</a></li>
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
																			<p>Mu?n c?p nh?t th∩┐╜ng tin t? ASP? ∩┐╜ang k∩┐╜
																				nh?n b?n tin d? theo d∩┐╜i c∩┐╜c tin t?c,
																				d?ch v? v∩┐╜ co h?i t? ch∩┐╜ng t∩┐╜i.</p>
																		</div>
																	</div>
																	<div className="u-mt-1 callout-content-form">
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
						
						<div className="custom-nav-extras" style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", zIndex: "100", position: "relative", }}>
							<div className="language"  aria-label="Choose language" style={{display: "flex", alignItems: "center", fontWeight: "700", fontSize: "1rem", }}>
								<a href="#" className="custom-sync-color">EN</a>
								<span className="custom-sync-color" style={{margin: "0 4px", opacity: "0.5", pointerEvents: "none", }}>/</span>
								<a href="#" className="custom-sync-color">VI</a>
							</div>
							<button type="button" className="custom-sync-color search-button" aria-label="Search website" style={{background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: "0", }}>
								<svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>
							</button>
						</div>
					<MobileNav onMenuToggle={setIsMobileMenuOpen} />
				</div>
                {activeMegaMenu && <div className="mega-nav-backdrop active" style={{ display: 'block' }}></div>}
			</div>


		</div>
	</header>
        </>
    );
}
