'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface MobileNavProps {
    onMenuToggle?: (isOpen: boolean) => void;
}

export default function MobileNav({ onMenuToggle }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [navStack, setNavStack] = useState<string[]>(['root']);
    const [sliderHeight, setSliderHeight] = useState<number | 'auto'>('auto');
    const prevOverflowRef = useRef<string>('');
    const offcanvasRef = useRef<HTMLDivElement>(null);
    const resizeObserverRef = useRef<ResizeObserver | null>(null);

    const hasActiveSubmenu = navStack.length > 1;

    // Sync isOpen with Header via callback
    useEffect(() => {
        onMenuToggle?.(isOpen);
    }, [isOpen, onMenuToggle]);

    // Cleanup resize observer
    useEffect(() => {
        return () => {
            if (resizeObserverRef.current) {
                resizeObserverRef.current.disconnect();
            }
        };
    }, []);

    // Dynamically measure active panel height to prevent nested scroll clipping
    useEffect(() => {
        if (!isOpen) {
            if (resizeObserverRef.current) {
                resizeObserverRef.current.disconnect();
            }
            setSliderHeight('auto');
            return;
        }

        const updateHeight = (element: Element) => {
            const h = element.getBoundingClientRect().height;
            setSliderHeight(h);
        };

        let targetSelector = '#menu-primary-menu-1'; // Root menu by default
        if (hasActiveSubmenu) {
            const activeId = navStack[navStack.length - 1];
            targetSelector = `.react-nav-submenu[aria-labelledby="${activeId}"]`;
        }

        // Wait a tick for the DOM/display to update before selecting
        setTimeout(() => {
            const targetEl = document.querySelector(targetSelector);
            if (targetEl) {
                if (resizeObserverRef.current) {
                    resizeObserverRef.current.disconnect();
                }
                
                resizeObserverRef.current = new ResizeObserver((entries) => {
                    for (let entry of entries) {
                        updateHeight(entry.target);
                    }
                });
                
                resizeObserverRef.current.observe(targetEl);
                updateHeight(targetEl); // Initial measure
            }
        }, 0);
        
    }, [isOpen, navStack, hasActiveSubmenu]);

    // Escape listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closeMenu('escape');
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // Resize listener
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992 && isOpen) {
                closeMenu('resize');
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            prevOverflowRef.current = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        } else {
            // Restore previous state safely
            if (prevOverflowRef.current !== '') {
                document.body.style.overflow = prevOverflowRef.current;
            } else {
                document.body.style.overflow = '';
            }
        }
        return () => {
            if (isOpen) {
                document.body.style.overflow = prevOverflowRef.current || '';
            }
        };
    }, [isOpen]);

    const toggleMenu = (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        setIsOpen(!isOpen);
        if (isOpen) {
            setTimeout(() => setNavStack(['root']), 300);
        }
    };

    const closeMenu = (source: string = 'unknown') => {
        setIsOpen(false);
        setTimeout(() => setNavStack(['root']), 300); // Wait for transition before resetting
    };

    const openSubmenu = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setNavStack(prev => [...prev, id]);
    };

    const closeSubmenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setNavStack(navStack.slice(0, -1));
    };

    const isSubmenuActive = (id: string) => {
        return navStack[navStack.length - 1] === id;
    };

    // We add a wrapper to translate the entire nav content together
    const sliderInnerStyle: React.CSSProperties = {
        transition: 'transform 0.3s ease',
        transform: hasActiveSubmenu ? 'translateX(-100%)' : 'translateX(0)',
        position: 'relative',
        minHeight: sliderHeight === 'auto' ? '100%' : `${sliderHeight}px`,
        width: '100%'
    };

    return (
        <nav className="site-nav site-nav-mobile u-d-lg-none">
            <button 
                type="button" 
                onClick={toggleMenu}
                className={`site-nav-toggle offcanvas-toggle ${isOpen ? 'active' : ''}`}
                aria-expanded={isOpen}
                aria-controls="siteNavOffcanvas"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
                {!isOpen && (
                    <span className="icon-hamburger-wrapper">
                        <i className="icon icon-hamburger site-nav-toggle-icon">
                            <svg style={{ pointerEvents: 'none' }}>
                                <use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#hamburger"></use>
                            </svg>
                        </i>
                    </span>
                )}
                {isOpen && (
                    <span className="icon-times-wrapper">
                        <i className="icon icon-times site-nav-toggle-icon">
                            <svg style={{ pointerEvents: 'none' }}>
                                <use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#times"></use>
                            </svg>
                        </i>
                    </span>
                )}
            </button>
            
            {isOpen && (
                <div className="offcanvas-backdrop fade show" onClick={() => closeMenu('backdrop')} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040 }}></div>
            )}

            <div id="siteNavOffcanvas" className={`offcanvas offcanvas-nav ${isOpen ? 'show' : ''}`} ref={offcanvasRef} style={{ zIndex: 1045, visibility: isOpen ? 'visible' : 'hidden', pointerEvents: isOpen ? 'auto' : 'none', transform: isOpen ? 'translateX(-100%)' : 'translateX(0)', transition: 'transform 0.3s ease, visibility 0.3s ease' }}>
                <div className="offcanvas-inner" style={{ height: '100%' }}>
                    <div className="offcanvas-body" style={{ overflowX: 'hidden', height: '100%', position: 'relative' }}>
                        <nav className="container container-w-outer container-fluid u-px-0 nav-slider">
                            <div style={sliderInnerStyle}>
                                <ul id="menu-primary-menu-1" className="site-nav-items site-nav-items-mobile">
                                      <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-what-we-do">
                                          <a title="What We Do" href="/what-we-do" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-what-we-do" onClick={(e) => openSubmenu(e, 'menu-item-nav-slider-what-we-do')}>
                                              <span className="menu-item-text">What We Do</span>
                                              <i className="icon icon-chevron-right menu-icon-right">
                                                  <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right"></use></svg>
                                              </i>
                                          </a>
                                          <div className={`nav-slider nav-slider-submenu react-nav-submenu ${isSubmenuActive('menu-item-nav-slider-what-we-do') ? 'is-active' : ''}`} aria-labelledby="menu-item-nav-slider-what-we-do">
                                              <ul>
                                                  <li className="menu-item menu-item-back">
                                                      <a className="nav-slider-toggle nav-slider-toggle-back" href="#back" onClick={closeSubmenu}>
                                                          <i className="icon icon-chevron-left menu-icon-left">
                                                              <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left"></use></svg>
                                                          </i>
                                                          <span className="menu-item-text">Back</span>
                                                      </a>
                                                  </li>
                                                  <li className="menu-item menu-item-view-parent"><Link href="/what-we-do" onClick={() => closeMenu('route')}>What We Do</Link></li>
                                                  <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-1">
                                                      <Link title="Commercial Management" href="/commercial-management" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Commercial Management</span></Link>
                                                  </li>
                                                  <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-2">
                                                      <Link title="Technical Management" href="/technical-management" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Technical Management</span></Link>
                                                  </li>
                                                  <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-3">
                                                      <Link title="Marine Consultancy" href="/marine-consultancy" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Marine Consultancy</span></Link>
                                                  </li>
                                                  <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-4">
                                                      <Link title="Crew Management" href="/crew-management" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Crew Management</span></Link>
                                                  </li>
                                                  <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-wwd-5">
                                                      <Link title="Sea Transportation" href="/sea-transportation" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Sea Transportation</span></Link>
                                                  </li>
                                              </ul>
                                          </div>
                                      </li>
                                    <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-53">
                                        <a title="About Us" href="/about-us" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-53" onClick={(e) => openSubmenu(e, 'menu-item-nav-slider-53')}>
                                            <span className="menu-item-text">About Us</span>
                                            <i className="icon icon-chevron-right menu-icon-right">
                                                <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right"></use></svg>
                                            </i>
                                        </a>
                                        <div className={`nav-slider nav-slider-submenu react-nav-submenu ${isSubmenuActive('menu-item-nav-slider-53') ? 'is-active' : ''}`} aria-labelledby="menu-item-nav-slider-53">
                                            <ul>
                                                <li className="menu-item menu-item-back">
                                                    <a className="nav-slider-toggle nav-slider-toggle-back" href="#back" onClick={closeSubmenu}>
                                                        <i className="icon icon-chevron-left menu-icon-left">
                                                            <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left"></use></svg>
                                                        </i>
                                                        <span className="menu-item-text">Back</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-view-parent"><Link href="/about-us" onClick={() => closeMenu('route')}>About Us</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
                                                    <Link title="History" href="/about-us/history" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">History</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
                                                    <Link title="Leadership" href="/about-us/leadership" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Leadership</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54">
                                                    <Link title="Vision, Mission, Values" href="/about-us/vision-mission-values" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Vision, Mission, Values</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                                                    <Link title="Trades" href="/about-us/trades" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Trades</span></Link>
                                                </li>
                                            </ul>
                                            <div className="menu-item-contents u-px-4 u-pb-8 u-mt-4">
                                                <div className="layout layout-menu-statistic-boxes layout-app_megamenu layout-statistic-boxes layout-root">
                                                    <div className="layout-inner layout-row row">
                                                        <div className="layout layout-menu-statistic-box layout-app_megamenu layout-statistic-box active col-12 col-sm-6 u-mb-4">
                                                            <div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100 u-p-4">
                                                                <div className="statistic-content u-mb-auto">
                                                                    <div className="statistic-figure u-h2">41</div>
                                                                    <div className="statistic-suffix u-h3">+</div>
                                                                </div>
                                                                <div className="statistic-caption u-mt-4">Vessels in Fleet<br />(P.A.)</div>
                                                            </div>
                                                        </div>
                                                        <div className="layout layout-menu-statistic-box layout-app_megamenu layout-statistic-box col-12 col-sm-6 u-mb-4">
                                                            <div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100 u-p-4">
                                                                <div className="statistic-content u-mb-auto">
                                                                    <div className="statistic-figure u-h2">3</div>
                                                                    <div className="statistic-suffix u-h3">M+</div>
                                                                </div>
                                                                <div className="statistic-caption u-mt-4">Total DWT<br />(P.A.)</div>
                                                            </div>
                                                        </div>
                                                        <div className="layout layout-menu-statistic-box layout-app_megamenu layout-statistic-box col-12 col-sm-6 u-mb-4">
                                                            <div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100 u-p-4">
                                                                <div className="statistic-content u-mb-auto">
                                                                    <div className="statistic-figure u-h2">30</div>
                                                                    <div className="statistic-suffix u-h3">+</div>
                                                                </div>
                                                                <div className="statistic-caption u-mt-4">Global Partners<br />(P.A.)</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-68">
                                        <a title="Sustainability" href="/sustainability" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-68" onClick={(e) => openSubmenu(e, 'menu-item-nav-slider-68')}>
                                            <span className="menu-item-text">Sustainability</span>
                                            <i className="icon icon-chevron-right menu-icon-right">
                                                <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right"></use></svg>
                                            </i>
                                        </a>
                                        <div className={`nav-slider nav-slider-submenu react-nav-submenu ${isSubmenuActive('menu-item-nav-slider-68') ? 'is-active' : ''}`} aria-labelledby="menu-item-nav-slider-68">
                                            <ul>
                                                <li className="menu-item menu-item-back">
                                                    <a className="nav-slider-toggle nav-slider-toggle-back" href="#back" onClick={closeSubmenu}>
                                                        <i className="icon icon-chevron-left menu-icon-left">
                                                            <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left"></use></svg>
                                                        </i>
                                                        <span className="menu-item-text">Back</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-view-parent"><Link href="/sustainability" onClick={() => closeMenu('route')}>Sustainability</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1112">
                                                    <Link title="Environment" href="/sustainability/environment" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Environment</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1126">
                                                    <Link title="Social" href="/sustainability/social" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Social</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1028">
                                                    <Link title="Governance" href="/sustainability/governance" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Governance</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                                                    <Link title="Policies & Guidelines" href="/sustainability/policies-guidelines" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Policies &amp; Guidelines</span></Link>
                                                </li>
                                            </ul>
                                            <div className="menu-item-contents u-px-4 u-pb-8 u-mt-4">
                                                <div className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
                                                    <div className="layout-inner layout-row row u-gx-0">
                                                        <div className="layout-column layout-column-section-media-thumbnail col-12 u-mb-4">
                                                            <div className="section-media-thumbnail u-d-flex u-h-100">
                                                                <span className="ratio ratio-instrinsic"><span className="ratio-size" style={{paddingBottom: '50%'}}></span><img fetchPriority="high" width="576" height="288" src="/wp-content/uploads/asp_images/news/five-years.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-contain u-object-pos-center ratio-item" alt="" /></span>
                                                            </div>
                                                        </div>
                                                        <div className="layout-column layout-column-section-media-lead col-12">
                                                            <div className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
                                                                <div className="layout-inner theme-style theme-style-mint u-p-4">
                                                                    <div className="section-lead-content u-h4">
                                                                        <div className="content-width">Sustainability<br />Report 2025</div>
                                                                    </div>
                                                                    <div className="layout layout-buttons layout-app_megamenu">
                                                                        <div className="layout-inner button-group u-mt-4 content-width">
                                                                            <div><a href="/wp-content/uploads/2026/06/BW-Epic-Kosan-Sustainability-Report-FY-2025.pdf" title="Download PDF" target="" className="button button-outline button-outline-secondary"><span>Download PDF</span><i className="icon icon-download"><svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#download"></use></svg></i></a></div>
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
                                    <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-61">
                                        <a title="Media" href="/media" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-61" onClick={(e) => openSubmenu(e, 'menu-item-nav-slider-61')}>
                                            <span className="menu-item-text">Media</span>
                                            <i className="icon icon-chevron-right menu-icon-right">
                                                <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right"></use></svg>
                                            </i>
                                        </a>
                                        <div className={`nav-slider nav-slider-submenu react-nav-submenu ${isSubmenuActive('menu-item-nav-slider-61') ? 'is-active' : ''}`} aria-labelledby="menu-item-nav-slider-61">
                                            <ul>
                                                <li className="menu-item menu-item-back">
                                                    <a className="nav-slider-toggle nav-slider-toggle-back" href="#back" onClick={closeSubmenu}>
                                                        <i className="icon icon-chevron-left menu-icon-left">
                                                            <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left"></use></svg>
                                                        </i>
                                                        <span className="menu-item-text">Back</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-view-parent"><Link href="/media" onClick={() => closeMenu('route')}>Media</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64">
                                                    <Link title="Latest News" href="/media/latest-news" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Latest News</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
                                                    <Link title="Gallery" href="/media/gallery" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Gallery</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63">
                                                    <Link title="Glossary of Terms" href="/media/glossary-of-terms" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Glossary of Terms</span></Link>
                                                </li>
                                            </ul>
                                            <div className="menu-item-contents u-px-4 u-pb-8 u-mt-4">
                                                <div className="layout layout-menu-post-list layout-app_megamenu layout-root">
                                                    <div className="layout-inner">
                                                        <div className="row row-posts u-gy-4">
                                                            <div className="col-12">
                                                                <article className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block">
                                                                    <header className="entry-header">
                                                                        <div className="post-categories row u-gy-2 u-gx-2">
                                                                            <div className="col-auto"><a href="/media/news/category/press-releases" className="button button-small button-secondary">Press Releases</a></div>
                                                                        </div>
                                                                        <a href="/media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance"><span className="ratio ratio-instrinsic"><span className="ratio-size" style={{paddingBottom: '50%'}}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/fleet-expansion.jpg" className="entry-thumbnail ratio-item u-object-fit-cover" alt="" /></span></a>
                                                                    </header>
                                                                    <div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
                                                                        <a href="/media/news/2026/05/29/bw-epic-kosan-expands-use-of-git-coatings-following-6-out-of-dock-fuel-savings-and-maintained-hull-performance" className="entry-permalink" title="Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance">
                                                                            <time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2026-05-29T07:00:59+00:00">May 29, 2026</time>
                                                                            <h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">Asia Pacific Shipping expands use of GIT Coatings following 6% out-of-dock fuel savings and maintained hull performance</h3>
                                                                        </a>
                                                                    </div>
                                                                </article>
                                                            </div>
                                                            <div className="col-12">
                                                                <article className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block">
                                                                    <header className="entry-header">
                                                                        <div className="post-categories row u-gy-2 u-gx-2">
                                                                            <div className="col-auto"><a href="/media/news/category/press-releases" className="button button-small button-secondary">Press Releases</a></div>
                                                                        </div>
                                                                        <a href="/media/news/2025/09/09/bw-epic-kosan-partners-with-bound4blue-to-install-unique-non-explosion-proof-esail-on-lpg-carrier-helena-kosan" className="entry-permalink" title="Asia Pacific Shipping partners with bound4blue to install unique non-explosion proof eSAIL® on LPG carrier Helena Kosan"><span className="ratio ratio-instrinsic"><span className="ratio-size" style={{paddingBottom: '50%'}}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/methanol-delivery.jpg" className="entry-thumbnail ratio-item u-object-fit-cover" alt="" /></span></a>
                                                                    </header>
                                                                    <div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
                                                                        <a href="/media/news/2025/09/09/bw-epic-kosan-partners-with-bound4blue-to-install-unique-non-explosion-proof-esail-on-lpg-carrier-helena-kosan" className="entry-permalink" title="Asia Pacific Shipping partners with bound4blue to install unique non-explosion proof eSAIL® on LPG carrier Helena Kosan">
                                                                            <time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2025-09-09T13:30:01+00:00">September 9, 2025</time>
                                                                            <h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">Asia Pacific Shipping partners with bound4blue to install unique non-explosion proof eSAIL® on LPG carrier Helena Kosan</h3>
                                                                        </a>
                                                                    </div>
                                                                </article>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-58">
                                        <a title="Careers" href="/careers" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-58" onClick={(e) => openSubmenu(e, 'menu-item-nav-slider-58')}>
                                            <span className="menu-item-text">Careers</span>
                                            <i className="icon icon-chevron-right menu-icon-right">
                                                <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right"></use></svg>
                                            </i>
                                        </a>
                                        <div className={`nav-slider nav-slider-submenu react-nav-submenu ${isSubmenuActive('menu-item-nav-slider-58') ? 'is-active' : ''}`} aria-labelledby="menu-item-nav-slider-58">
                                            <ul>
                                                <li className="menu-item menu-item-back">
                                                    <a className="nav-slider-toggle nav-slider-toggle-back" href="#back" onClick={closeSubmenu}>
                                                        <i className="icon icon-chevron-left menu-icon-left">
                                                            <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left"></use></svg>
                                                        </i>
                                                        <span className="menu-item-text">Back</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-view-parent"><Link href="/careers" onClick={() => closeMenu('route')}>Careers</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-79">
                                                    <Link title="The Asia Pacific Shipping Difference" href="/careers#the-bw-epic-kosan-difference" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">The Asia Pacific Shipping Difference</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-80">
                                                    <Link title="Talent Management" href="/careers#talent-management" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Talent Management</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-81">
                                                    <Link title="Benefits of Working at Asia Pacific Shipping" href="/careers#benefits-of-working-at-bw-epic-kosan" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Benefits of Working at Asia Pacific Shipping</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-82">
                                                    <Link title="Career Opportunities" href="/careers#careers-opportunities" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Career Opportunities</span></Link>
                                                </li>
                                            </ul>
                                            <div className="menu-item-contents u-px-4 u-pb-8 u-mt-4">
                                                <div className="layout layout-menu-featured-cards layout-app_megamenu layout-root">
                                                    <div className="layout-inner layout-row row u-gy-4">
                                                        <div className="layout-column col-12">
                                                            <div className="layout layout-menu-featured-card layout-app_megamenu layout-featured-card">
                                                                <div className="layout-inner">
                                                                    <div className="card theme-style theme-style-primary u-border-radius u-h-100 u-overflow-hidden">
                                                                        <span className="ratio ratio-instrinsic"><span className="ratio-size" style={{paddingBottom: '50%'}}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg" className="img-fluid card-thumbnail-img u-object-fit-cover u-object-pos-center ratio-item" alt="" /></span>
                                                                        <div className="card-header u-p-4 u-d-flex u-flex-row u-flex-nowrap u-align-items-center">
                                                                            <p className="heading h5 u-mb-3 featured-card-heading subheading u-mb-0 u-flex-grow-1 u-font-weight-normal">Join Us at Sea</p>
                                                                            <div><a href="/join-us-at-sea" title="View Openings" target="_blank" className="button-small button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>View Openings</span></a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="layout-column col-12">
                                                            <div className="layout layout-menu-featured-card layout-app_megamenu layout-featured-card">
                                                                <div className="layout-inner">
                                                                    <div className="card theme-style theme-style-mint u-border-radius u-h-100 u-overflow-hidden">
                                                                        <span className="ratio ratio-instrinsic"><span className="ratio-size" style={{paddingBottom: '50%'}}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/sustainability/social-seafarers.jpg" className="img-fluid card-thumbnail-img u-object-fit-cover u-object-pos-center ratio-item" alt="ASP Office megamenu" /></span>
                                                                        <div className="card-header u-p-4 u-d-flex u-flex-row u-flex-nowrap u-align-items-center">
                                                                            <p className="heading h5 u-mb-3 featured-card-heading subheading u-mb-0 u-flex-grow-1 u-font-weight-normal">Join Us Ashore</p>
                                                                            <div><a href="https://ASP.recruiterpal.com/career/jobs?category=mbl1y" title="View Openings" target="_blank" className="button-small button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>View Openings</span></a></div>
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
                                    <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-2014">
                                        <a title="Suppliers" href="/suppliers" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle" id="menu-item-nav-slider-2014" onClick={(e) => openSubmenu(e, 'menu-item-nav-slider-2014')}>
                                            <span className="menu-item-text">Suppliers</span>
                                            <i className="icon icon-chevron-right menu-icon-right">
                                                <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right"></use></svg>
                                            </i>
                                        </a>
                                        <div className={`nav-slider nav-slider-submenu react-nav-submenu ${isSubmenuActive('menu-item-nav-slider-2014') ? 'is-active' : ''}`} aria-labelledby="menu-item-nav-slider-2014">
                                            <ul>
                                                <li className="menu-item menu-item-back">
                                                    <a className="nav-slider-toggle nav-slider-toggle-back" href="#back" onClick={closeSubmenu}>
                                                        <i className="icon icon-chevron-left menu-icon-left">
                                                            <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left"></use></svg>
                                                        </i>
                                                        <span className="menu-item-text">Back</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-view-parent"><Link href="/suppliers" onClick={() => closeMenu('route')}>Suppliers</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2015">
                                                    <Link title="Supplier Verification" href="/suppliers/supplier-verification" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Supplier Verification</span></Link>
                                                </li>
                                            </ul>
                                            <div className="menu-item-contents u-px-4 u-pb-8 u-mt-4">
                                                <div className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
                                                    <div className="layout-inner layout-row row u-gx-0">
                                                        <div className="layout-column layout-column-section-media-thumbnail col-12 u-mb-4">
                                                            <div className="section-media-thumbnail u-d-flex u-h-100">
                                                                <span className="ratio ratio-instrinsic"><span className="ratio-size" style={{paddingBottom: '50%'}}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/sustainability/environment-methanol.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center ratio-item" alt="" /></span>
                                                            </div>
                                                        </div>
                                                        <div className="layout-column layout-column-section-media-lead col-12">
                                                            <div className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
                                                                <div className="layout-inner theme-style theme-style-primary u-p-4">
                                                                    <div className="section-lead-content u-h4">
                                                                        <div className="content-width">Supplier Verification</div>
                                                                    </div>
                                                                    <div className="layout layout-buttons layout-app_megamenu">
                                                                        <div className="layout-inner button-group u-mt-4 content-width">
                                                                            <div><a href="/suppliers/supplier-verification" title="View Supplier Verification" target="" className="button button-outline button-outline-secondary"><span>View Supplier Verification</span></a></div>
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
                                    <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-73">
                                        <span className="menu-item-button-wrap">
                                            <a title="Our Fleet" href="/our-fleet" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle button" id="menu-item-nav-slider-73" onClick={(e) => openSubmenu(e, 'menu-item-nav-slider-73')}>
                                                <span className="menu-item-text">Our Fleet</span>
                                                <i className="icon icon-chevron-right menu-icon-right">
                                                    <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right"></use></svg>
                                                </i>
                                            </a>
                                        </span>
                                        <div className={`nav-slider nav-slider-submenu react-nav-submenu ${isSubmenuActive('menu-item-nav-slider-73') ? 'is-active' : ''}`} aria-labelledby="menu-item-nav-slider-73">
                                            <ul>
                                                <li className="menu-item menu-item-back">
                                                    <a className="nav-slider-toggle nav-slider-toggle-back" href="#back" onClick={closeSubmenu}>
                                                        <i className="icon icon-chevron-left menu-icon-left">
                                                            <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left"></use></svg>
                                                        </i>
                                                        <span className="menu-item-text">Back</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-view-parent"><Link href="/our-fleet" onClick={() => closeMenu('route')}>Our Fleet</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
                                                    <Link title="Ammonia Propulsion" href="/our-fleet/ammonia-propulsion" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Ammonia Propulsion</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
                                                    <Link title="LCO2 Shipping" href="/our-fleet/lco2-shipping" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">LCO2 Shipping</span></Link>
                                                </li>
                                            </ul>
                                            <div className="menu-item-contents u-px-4 u-pb-8 u-mt-4">
                                                <div className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
                                                    <div className="layout-inner layout-row row u-gx-0">
                                                        <div className="layout-column layout-column-section-media-thumbnail col-12 u-mb-4">
                                                            <div className="section-media-thumbnail u-d-flex u-h-100">
                                                                <span className="ratio ratio-instrinsic"><span className="ratio-size" style={{paddingBottom: '50%'}}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/ships/asp-luna-aerial-aft.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center ratio-item" alt="" /></span>
                                                            </div>
                                                        </div>
                                                        <div className="layout-column layout-column-section-media-lead col-12">
                                                            <div className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
                                                                <div className="layout-inner theme-style theme-style-primary u-p-4">
                                                                    <div className="section-lead-content u-h4">
                                                                        <div className="content-width">Download<br />Full Fleet List</div>
                                                                    </div>
                                                                    <div className="layout layout-buttons layout-app_megamenu">
                                                                        <div className="layout-inner button-group u-mt-4 content-width">
                                                                            <div><a href="/fleet-list/download/pdf" title="Save as PDF" target="_blank" className="button button-outline button-outline-secondary" rel="noreferrer noopenner"><span>Save as PDF</span><i className="icon icon-download"><svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#download"></use></svg></i></a></div>
                                                                            <div><a href="/fleet-list/download/xlsx" title="Save as Excel" target="_blank" className="button button-outline button-outline-secondary u-mt-2" rel="noreferrer noopenner"><span>Save as Excel</span><i className="icon icon-download"><svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#download"></use></svg></i></a></div>
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
                                    <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-slider-item menu-item-76">
                                        <span className="menu-item-button-wrap">
                                            <a title="Contact Us" href="/contact-us" aria-haspopup="true" aria-expanded="false" className="nav-slider-toggle button button-secondary" id="menu-item-nav-slider-76" onClick={(e) => openSubmenu(e, 'menu-item-nav-slider-76')}>
                                                <span className="menu-item-text">Contact Us</span>
                                                <i className="icon icon-chevron-right menu-icon-right">
                                                    <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-right"></use></svg>
                                                </i>
                                            </a>
                                        </span>
                                        <div className={`nav-slider nav-slider-submenu react-nav-submenu ${isSubmenuActive('menu-item-nav-slider-76') ? 'is-active' : ''}`} aria-labelledby="menu-item-nav-slider-76">
                                            <ul>
                                                <li className="menu-item menu-item-back">
                                                    <a className="nav-slider-toggle nav-slider-toggle-back" href="#back" onClick={closeSubmenu}>
                                                        <i className="icon icon-chevron-left menu-icon-left">
                                                            <svg><use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-left"></use></svg>
                                                        </i>
                                                        <span className="menu-item-text">Back</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-view-parent"><Link href="/contact-us" onClick={() => closeMenu('route')}>Contact Us</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-77">
                                                    <Link title="Whistleblowing" href="/contact-us#the-bw-epic-kosan-difference" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Whistleblowing</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78">
                                                    <Link title="Leave Us a Message" href="/contact-us#have-a-question" className="nav-slider-link" onClick={() => closeMenu('route')}><span className="menu-item-text">Leave Us a Message</span></Link>
                                                </li>
                                            </ul>
                                            <div className="menu-item-contents u-px-4 u-pb-8 u-mt-4">
                                                <div className="layout layout-menu-section-media layout-app_megamenu layout-section-media layout-root layout-section-media-has-theme">
                                                    <div className="layout-inner layout-row row u-gx-0">
                                                        <div className="layout-column layout-column-section-media-thumbnail col-12 u-mb-4">
                                                            <div className="section-media-thumbnail u-d-flex u-h-100">
                                                                <span className="ratio ratio-instrinsic"><span className="ratio-size" style={{paddingBottom: '50%'}}></span><img width="576" height="288" src="/wp-content/uploads/asp_images/sustainability/environment-methanol.webp" className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center ratio-item" alt="" /></span>
                                                            </div>
                                                        </div>
                                                        <div className="layout-column layout-column-section-media-lead col-12">
                                                            <div className="layout layout-section-lead layout-app_megamenu layout-section-lead-has-theme">
                                                                <div className="layout-inner theme-style theme-style-lighter u-p-4">
                                                                    <div className="section-lead-content">
                                                                        <div className="content-width">
                                                                            <p className="heading h5 u-mb-3 callout-heading">Subscribe to Our Newsletter</p>
                                                                            <p className="u-mb-0">Muốn cập nhật thông tin từ ASP? Đăng ký nhận bản tin để theo dõi các tin tức, dịch vụ và cơ hội từ chúng tôi.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="layout layout-buttons layout-app_megamenu">
                                                                        <div className="layout-inner button-group u-mt-4 content-width">
                                                                            <div><a href="/contact-us" className="button button-outline button-outline-secondary"><span>Contact Us</span></a></div>
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
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    );
}
