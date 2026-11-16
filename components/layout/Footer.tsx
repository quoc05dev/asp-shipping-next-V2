import Link from 'next/link';
import React from 'react';
import { getCmsRepository } from '@/data/cms/getCmsRepository';
import FooterAccordion from '@/components/layout/FooterAccordion';
import NewsletterForm from '@/components/contact/NewsletterForm';

export default async function Footer() {
  const cmsRepository = await getCmsRepository();
  const siteSettings = await cmsRepository.getSiteSettings();
  const footerSection = await cmsRepository.getFooterSection();
  return (
    <>
	<footer id="siteFooter" className="site-footer u-py-8 u-text-size-small theme-style theme-style-tertiary" data-cms-section="footer">
		<div className="site-footer-inner">
			<div className="container container-w-outer container-rfs">
				<div className="row">
					<div className="col-12 col-sm-auto col-lg-auto col-xl-4 col-footer-first-col">
						<section className="widget text-2 widget_text">
							<h3 className="widget-title" data-cms-field="newsletter_title">{footerSection.newsletterTitle}</h3>
							<div className="textwidget">
								<NewsletterForm />

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
    <li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item menu-active">
      <Link title="Home" href="/" className="footer-parent-link">Home</Link>
    </li>
    <li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page">
      <a title="Contact Us" href="/contact-us">Contact Us</a>
    </li>
    <li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page">
      <a title="Careers" href="/careers">Careers</a>
    </li>
    <li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page">
      <a title="Supplier Verification" href="/suppliers/supplier-verification">Supplier Verification</a>
    </li>
  </ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-wwd widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">What We Do</h3>
									<div className="menu-footer-column-wwd-container">
										<ul id="menu-footer-column-wwd" className="menu">
    <FooterAccordion id="menu-item-wwd" title={footerSection.columns[0].title} href="/what-we-do">
      {footerSection.columns[0].links.map((link, idx) => (
        <li key={idx} itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page">
          <a title={link.label} href={link.href} className="collapse-link">{link.label}</a>
        </li>
      ))}
    </FooterAccordion>
  </ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-3 widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">About Us</h3>
									<div className="menu-footer-column-2-container">
										<ul id="menu-footer-column-2" className="menu">
    <FooterAccordion id="menu-item-97" title={footerSection.columns[1].title} href="/about-us">
      {footerSection.columns[1].links.map((link, idx) => (
        <li key={idx} itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page">
          <a title={link.label} href={link.href} className="collapse-link">{link.label}</a>
        </li>
      ))}
    </FooterAccordion>
  </ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-4 widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">Our Fleet</h3>
									<div className="menu-footer-column-3-container">
										<ul id="menu-footer-column-3" className="menu">
    <FooterAccordion id="menu-item-102" title={footerSection.columns[2].title} href="/our-fleet">
      {footerSection.columns[2].links.map((link, idx) => (
        <li key={idx} itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page">
          <a title={link.label} href={link.href} className="collapse-link">{link.label}</a>
        </li>
      ))}
    </FooterAccordion>
  </ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-5 widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">Sustainability</h3>
									<div className="menu-footer-column-4-container">
										<ul id="menu-footer-column-4" className="menu">
    <FooterAccordion id="menu-item-105" title={footerSection.columns[3].title} href="/sustainability">
      {footerSection.columns[3].links.map((link, idx) => (
        <li key={idx} itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page">
          <a title={link.label} href={link.href} className="collapse-link">{link.label}</a>
        </li>
      ))}
    </FooterAccordion>
  </ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-6 widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">Media</h3>
									<div className="menu-footer-column-5-container">
										<ul id="menu-footer-column-5" className="menu">
    <FooterAccordion id="menu-item-110" title={footerSection.columns[4].title} href="/media">
      {footerSection.columns[4].links.map((link, idx) => (
        <li key={idx} itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" className="menu-item menu-item-type-post_type menu-item-object-page">
          <a title={link.label} href={link.href} className="collapse-link">{link.label}</a>
        </li>
      ))}
    </FooterAccordion>
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
						<div className="site-copyright" dangerouslySetInnerHTML={{__html: footerSection.copyrightHtml || siteSettings.copyrightText}}></div>
					</div>
				</div>

				<div className="row u-gy-4">
					<div className="col-12 col-sm-auto col-lg-auto col-xl-auto col-footer-first-col u-d-flex u-flex-row u-flex-wrap">
						<div className="site-copyright u-flex-shrink-0 u-mr-2">
							| Tel: <a href={`tel:${siteSettings.phone.replace(/\s/g, '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>{siteSettings.phone}</a> | <a href={`mailto:${siteSettings.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>{siteSettings.email}</a> | <a href="/privacy-policy" title="Privacy Policy" target="" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</a>
						</div>
					</div>

					<div className="col-12 col-lg-auto u-ml-lg-auto">
						<ul className="social-networks">
							<li className="social-network"><a href={siteSettings.socialLinks?.facebook || "https://www.facebook.com/aspshipping.vn"} title="Facebook" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">Facebook</span><i className="icon icon-facebook ">
										<svg>
											<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#facebook">
											</use>
										</svg>
									</i>
								</a></li>
							<li className="social-network"><a href={siteSettings.socialLinks?.instagram || "#"} title="Instagram" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">Instagram</span><i className="icon icon-instagram ">
										<svg>
											<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#instagram">
											</use>
										</svg>
									</i>
								</a></li>
							<li className="social-network"><a href={siteSettings.socialLinks?.linkedin || "#"} title="LinkedIn" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">LinkedIn</span><i className="icon icon-linkedin-in ">
										<svg>
											<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#linkedin-in">
											</use>
										</svg>
									</i>
								</a></li>
							<li className="social-network"><a href={siteSettings.socialLinks?.twitter || "#"} title="Twitter X" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">Twitter X</span><i className="icon icon-twitter-x ">
										<svg>
											<use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#twitter-x">
											</use>
										</svg>
									</i>
								</a></li>
							<li className="social-network"><a href={siteSettings.socialLinks?.youtube || "#"} title="YouTube" target="_blank" className="" rel="noreferrer noopenner"><span className="u-visually-hidden">YouTube</span><i className="icon icon-youtube-play ">
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
  <style dangerouslySetInnerHTML={{__html: `
    /* Child link default state */
    footer.site-footer section.widget_nav_menu .menu a:not(.footer-parent-link) {
      position: relative;
      display: inline-block;
      transform-origin: left center;
      transition: transform 160ms ease !important;
      color: var(--asp-white) !important;
      text-decoration: none !important;
    }

    /* Child link hover state */
    footer.site-footer section.widget_nav_menu .menu a:not(.footer-parent-link):hover,
    footer.site-footer section.widget_nav_menu .menu a:not(.footer-parent-link):focus {
      transform: scale(1.03);
      color: var(--asp-white) !important;
    }

    /* Child link underline pseudo-element */
    footer.site-footer section.widget_nav_menu .menu a:not(.footer-parent-link)::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 0;
      height: 1px;
      background-color: var(--asp-signal);
      transition: width 200ms ease !important;
    }

    /* Child link underline animation on hover */
    footer.site-footer section.widget_nav_menu .menu a:not(.footer-parent-link):hover::after,
    footer.site-footer section.widget_nav_menu .menu a:not(.footer-parent-link):focus::after {
      width: 100%;
    }

    /* Main heading explicit rules to prevent inherited color changes and hover animations */
    footer.site-footer section.widget_nav_menu .menu a.footer-parent-link,
    footer.site-footer section.widget_nav_menu .menu a.footer-parent-link span {
      transition: none !important;
      color: var(--asp-signal) !important;
    }
    
    footer.site-footer section.widget_nav_menu .menu a.footer-parent-link:hover,
    footer.site-footer section.widget_nav_menu .menu a.footer-parent-link:focus,
    footer.site-footer section.widget_nav_menu .menu a.footer-parent-link:hover span,
    footer.site-footer section.widget_nav_menu .menu a.footer-parent-link:focus span {
      transform: none !important;
      color: var(--asp-signal) !important;
    }
    
    footer.site-footer section.widget_nav_menu .menu a.footer-parent-link::after {
      display: none !important;
    }
  `}} />
    </>
  );
}
