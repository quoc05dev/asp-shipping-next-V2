import React from 'react';
import FooterAccordion from '@/components/layout/FooterAccordion';

export default function Footer() {
  return (
    <>
	<footer id="siteFooter" className="site-footer u-py-8 u-text-size-small theme-style theme-style-tertiary" data-cms-section="footer">
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
											<input type="hidden" name="_wpcf7" defaultValue="93" />
											<input type="hidden" name="_wpcf7_version" defaultValue="6.0.2" />
											<input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
											<input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f93-o4" />
											<input type="hidden" name="_wpcf7_container_post" defaultValue="0" />
											<input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
										</div>
										<input type="hidden" name="mc4wp-subscribe" defaultValue="1" />
										<div className="newsletter">
											<div>
												<div className="row">
													<div className="newsletter-field col-12 col-sm-6">
														<span className="wpcf7-form-control-wrap" data-name="mc4wp-FNAME"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="First name" defaultValue="" type="text" name="mc4wp-FNAME" /></span>
													</div>
													<div className="newsletter-field col-12 col-sm-6">
														<span className="wpcf7-form-control-wrap" data-name="mc4wp-LNAME"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Last name" defaultValue="" type="text" name="mc4wp-LNAME" /></span>
													</div>
												</div>
												<div className="newsletter-fields">
													<div className="newsletter-field">
														<span className="wpcf7-form-control-wrap" data-name="mc4wp-EMAIL"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="Your email address" defaultValue="" type="email" name="mc4wp-EMAIL" /></span>
													</div>

													<div className="newsletter-submit">
														<button type="submit" className="button button-outline button-outline-secondary">Subscribe</button>
													</div>
												</div>
											</div>
											<div className="wpcf7-response-output" aria-hidden="true"></div>
										</div><input type="hidden" id="ct_checkjs_cf7_7eacb532570ff6858afd2723755ff790" name="ct_checkjs_cf7" defaultValue="0" />
										
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
												<a title="Home" href="index.html" style={{ color: 'var(--asp-signal)' }}>Home</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96">
												<a title="Contact Us" href="/contact-us">Contact Us</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-95" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95">
												<a title="Careers" href="/careers">Careers</a></li>
											<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-2013" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2013">
												<a title="Supplier Verification" href="/suppliers/supplier-verification">Supplier
													Verification</a></li>
										</ul>
									</div>
								</section>
							</div>

							<div className="col-12 col-md">
								<section className="widget nav_menu-wwd widget_nav_menu">
									<h3 className="u-visually-hidden widget-title">What We Do</h3>
									<div className="menu-footer-column-wwd-container">
										<ul id="menu-footer-column-wwd" className="menu">
											<FooterAccordion id="menu-item-wwd" title="What We Do" href="/what-we-do">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-1" className="menu-item menu-item-type-post_type menu-item-object-page">
														<a title="Commercial Management" href="/commercial-management" className="collapse-link">Commercial Management</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-2" className="menu-item menu-item-type-post_type menu-item-object-page">
														<a title="Technical Management" href="/technical-management" className="collapse-link">Technical Management</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-3" className="menu-item menu-item-type-post_type menu-item-object-page">
														<a title="Marine Consultancy" href="/marine-consultancy" className="collapse-link">Marine Consultancy</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-4" className="menu-item menu-item-type-post_type menu-item-object-page">
														<a title="Crew Management" href="/crew-management" className="collapse-link">Crew Management</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-wwd-5" className="menu-item menu-item-type-post_type menu-item-object-page">
														<a title="Sea Transportation" href="/sea-transportation" className="collapse-link">Sea Transportation</a></li>
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
											<FooterAccordion id="menu-item-97" title="About Us" href="/about-us">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99">
														<a title="History" href="/about-us/history" className="collapse-link">History</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-100" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100">
														<a title="Leadership" href="/about-us/leadership" className="collapse-link">Leadership</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-98" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-98">
														<a title="Vision, Mission, Values" href="/about-us/vision-mission-values" className="collapse-link">Vision, Mission, Values</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
														<a title="Trades" href="/about-us/trades" className="collapse-link">Trades</a></li>
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
											<FooterAccordion id="menu-item-102" title="Our Fleet" href="/our-fleet">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-103" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
														<a title="Ammonia Propulsion" href="/our-fleet/ammonia-propulsion" className="collapse-link">Ammonia Propulsion</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
														<a title="LCO2 Shipping" href="/our-fleet/lco2-shipping" className="collapse-link">LCO2 Shipping</a></li>
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
											<FooterAccordion id="menu-item-105" title="Sustainability" href="/sustainability">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1125" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1125">
														<a title="Social" href="/sustainability/social" className="collapse-link">Social</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1113">
														<a title="Environment" href="/sustainability/environment" className="collapse-link">Environment</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1029" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1029">
														<a title="Governance" href="/sustainability/governance" className="collapse-link">Governance</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-106" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
														<a title="Policies &amp; Guidelines" href="/sustainability/policies-guidelines" className="collapse-link">Policies &amp; Guidelines</a></li>
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
											<FooterAccordion id="menu-item-110" title="Media" href="/media">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-111" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-111">
														<a title="Latest News" href="/media/latest-news" className="collapse-link">Latest News</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-112" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112">
														<a title="Gallery" href="/media/gallery" className="collapse-link">Gallery</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113">
														<a title="Glossary of Terms" href="/media/glossary-of-terms" className="collapse-link">Glossary of Terms</a></li>
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
						<a href="/privacy-policy" title="Privacy Policy" target="" className="site-privacy-policy">Privacy Policy</a>
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
