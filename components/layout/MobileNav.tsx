'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [navStack, setNavStack] = useState<string[]>(['root']);
    const prevOverflowRef = useRef<string>('');
    const offcanvasRef = useRef<HTMLDivElement>(null);

    // Escape listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closeMenu();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // Resize listener
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992 && isOpen) {
                closeMenu();
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

    const closeMenu = () => {
        setIsOpen(false);
        setTimeout(() => setNavStack(['root']), 300); // Wait for transition before resetting
    };

    const openSubmenu = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setNavStack(prev => [...prev, id]);
    };

    const closeSubmenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setNavStack(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
    };

    const isSubmenuActive = (id: string) => navStack[navStack.length - 1] === id;
    const hasActiveSubmenu = navStack.length > 1;

    // We add a wrapper to translate the entire nav content together
    const sliderInnerStyle: React.CSSProperties = {
        transition: 'transform 0.3s ease',
        transform: hasActiveSubmenu ? 'translateX(-100%)' : 'translateX(0)',
        position: 'relative',
        minHeight: '100%',
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
                            <svg>
                                <use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#hamburger"></use>
                            </svg>
                        </i>
                    </span>
                )}
                {isOpen && (
                    <span className="icon-times-wrapper">
                        <i className="icon icon-times site-nav-toggle-icon">
                            <svg>
                                <use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#times"></use>
                            </svg>
                        </i>
                    </span>
                )}
            </button>
            
            {isOpen && (
                <div className="offcanvas-backdrop fade show" onClick={closeMenu} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040 }}></div>
            )}

            <div id="siteNavOffcanvas" className={`offcanvas offcanvas-nav ${isOpen ? 'show' : ''}`} ref={offcanvasRef} style={{ zIndex: 1045, visibility: isOpen ? 'visible' : 'hidden', transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.3s ease, visibility 0.3s ease' }}>
                <div className="offcanvas-inner" style={{ height: '100%' }}>
                    <div className="offcanvas-body" style={{ overflowX: 'hidden', height: '100%', position: 'relative' }}>
                        <nav className="container container-w-outer container-fluid u-px-0 nav-slider">
                            <div style={sliderInnerStyle}>
                                <ul id="menu-primary-menu-1" className="site-nav-items site-nav-items-mobile">
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
                                                <li className="menu-item menu-item-view-parent"><Link href="/about-us" onClick={closeMenu}>About Us</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
                                                    <Link title="History" href="/about-us/history" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">History</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
                                                    <Link title="Leadership" href="/about-us/leadership" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Leadership</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54">
                                                    <Link title="Vision, Mission, Values" href="/about-us/vision-mission-values" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Vision, Mission, Values</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                                                    <Link title="Trades" href="/about-us/trades" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Trades</span></Link>
                                                </li>
                                            </ul>
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
                                                <li className="menu-item menu-item-view-parent"><Link href="/sustainability" onClick={closeMenu}>Sustainability</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1112">
                                                    <Link title="Environment" href="/sustainability/environment" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Environment</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1126">
                                                    <Link title="Social" href="/sustainability/social" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Social</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1028">
                                                    <Link title="Governance" href="/sustainability/governance" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Governance</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                                                    <Link title="Policies & Guidelines" href="/sustainability/policies-guidelines" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Policies &amp; Guidelines</span></Link>
                                                </li>
                                            </ul>
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
                                                <li className="menu-item menu-item-view-parent"><Link href="/media" onClick={closeMenu}>Media</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64">
                                                    <Link title="Latest News" href="/media/latest-news" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Latest News</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
                                                    <Link title="Gallery" href="/media/gallery" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Gallery</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63">
                                                    <Link title="Glossary of Terms" href="/media/glossary-of-terms" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Glossary of Terms</span></Link>
                                                </li>
                                            </ul>
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
                                                <li className="menu-item menu-item-view-parent"><Link href="/careers" onClick={closeMenu}>Careers</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-79">
                                                    <Link title="The Asia Pacific Shipping Difference" href="/careers#the-bw-epic-kosan-difference" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">The Asia Pacific Shipping Difference</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-80">
                                                    <Link title="Talent Management" href="/careers#talent-management" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Talent Management</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-81">
                                                    <Link title="Benefits of Working at Asia Pacific Shipping" href="/careers#benefits-of-working-at-bw-epic-kosan" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Benefits of Working at Asia Pacific Shipping</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-82">
                                                    <Link title="Career Opportunities" href="/careers#careers-opportunities" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Career Opportunities</span></Link>
                                                </li>
                                            </ul>
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
                                                <li className="menu-item menu-item-view-parent"><Link href="/suppliers" onClick={closeMenu}>Suppliers</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2015">
                                                    <Link title="Supplier Verification" href="/suppliers/supplier-verification" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Supplier Verification</span></Link>
                                                </li>
                                            </ul>
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
                                                <li className="menu-item menu-item-view-parent"><Link href="/our-fleet" onClick={closeMenu}>Our Fleet</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
                                                    <Link title="Ammonia Propulsion" href="/our-fleet/ammonia-propulsion" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Ammonia Propulsion</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
                                                    <Link title="LCO2 Shipping" href="/our-fleet/lco2-shipping" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">LCO2 Shipping</span></Link>
                                                </li>
                                            </ul>
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
                                                <li className="menu-item menu-item-view-parent"><Link href="/contact-us" onClick={closeMenu}>Contact Us</Link></li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-77">
                                                    <Link title="Whistleblowing" href="/contact-us#the-bw-epic-kosan-difference" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Whistleblowing</span></Link>
                                                </li>
                                                <li itemScope itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78">
                                                    <Link title="Leave Us a Message" href="/contact-us#have-a-question" className="nav-slider-link" onClick={closeMenu}><span className="menu-item-text">Leave Us a Message</span></Link>
                                                </li>
                                            </ul>
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
