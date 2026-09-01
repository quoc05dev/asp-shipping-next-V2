const fs = require('fs');
const path = 'C:/Users/Administrator/Downloads/ASP_MIGRATION/asp-shipping-next/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add import statement at the top if not exists
if (!content.includes('import FooterAccordion from')) {
    content = content.replace(/import Image from "next\/image";/g, 'import Image from "next/image";\nimport FooterAccordion from "@/components/layout/FooterAccordion";');
}

// 2. Replace About Us
const aboutUsOriginal = `<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-97" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse menu-item-97"><a title="About Us" href="about-us/index.html" aria-haspopup="true" aria-expanded="false" className="collapse-toggle" id="menu-item-collapse-97"><span>About Us</span><span className="collapse-toggle-icon collapse-toggle-icon-close"><i className="icon icon-chevron-up ">
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
											</li>`;
const aboutUsNew = `<FooterAccordion id="menu-item-97" title="About Us" href="about-us/index.html">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99">
														<a title="History" href="about-us/history/index.html" className="collapse-link">History</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-100" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100">
														<a title="Leadership" href="about-us/leadership/index.html" className="collapse-link">Leadership</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-98" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-98">
														<a title="Vision, Mission, Values" href="about-us/vision-mission-values/index.html" className="collapse-link">Vision, Mission, Values</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
														<a title="Trades" href="about-us/trades/index.html" className="collapse-link">Trades</a></li>
												</FooterAccordion>`;

content = content.replace(aboutUsOriginal, aboutUsNew);

// 3. Replace Our Fleet
const ourFleetOriginal = `<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse menu-item-102"><a title="Our Fleet" href="our-fleet/index.html" aria-haspopup="true" aria-expanded="false" className="collapse-toggle" id="menu-item-collapse-102"><span>Our Fleet</span><span className="collapse-toggle-icon collapse-toggle-icon-close"><i className="icon icon-chevron-up ">
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
											</li>`;
const ourFleetNew = `<FooterAccordion id="menu-item-102" title="Our Fleet" href="our-fleet/index.html">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-103" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
														<a title="Ammonia Propulsion" href="our-fleet/ammonia-propulsion/index.html" className="collapse-link">Ammonia Propulsion</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
														<a title="LCO2 Shipping" href="our-fleet/lco2-shipping/index.html" className="collapse-link">LCO2 Shipping</a></li>
												</FooterAccordion>`;

content = content.replace(ourFleetOriginal, ourFleetNew);


// 4. Replace Sustainability
const sustainabilityOriginal = `<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-105" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse menu-item-105"><a title="Sustainability" href="sustainability/index.html" aria-haspopup="true" aria-expanded="false" className="collapse-toggle" id="menu-item-collapse-105"><span>Sustainability</span><span className="collapse-toggle-icon collapse-toggle-icon-close"><i className="icon icon-chevron-up ">
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
											</li>`;
const sustainabilityNew = `<FooterAccordion id="menu-item-105" title="Sustainability" href="sustainability/index.html">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1125" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1125">
														<a title="Social" href="sustainability/social/index.html" className="collapse-link">Social</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1113">
														<a title="Environment" href="sustainability/environment/index.html" className="collapse-link">Environment</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-1029" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1029">
														<a title="Governance" href="sustainability/governance/index.html" className="collapse-link">Governance</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-106" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
														<a title="Policies &amp; Guidelines" href="sustainability/policies-guidelines/index.html" className="collapse-link">Policies &amp; Guidelines</a></li>
												</FooterAccordion>`;

content = content.replace(sustainabilityOriginal, sustainabilityNew);

// 5. Replace Media
const mediaOriginal = `<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-110" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse menu-item-110"><a title="Media" href="media/index.html" aria-haspopup="true" aria-expanded="false" className="collapse-toggle" id="menu-item-collapse-110"><span>Media</span><span className="collapse-toggle-icon collapse-toggle-icon-close"><i className="icon icon-chevron-up ">
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
											</li>`;

const mediaNew = `<FooterAccordion id="menu-item-110" title="Media" href="media/index.html">
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-111" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-111">
														<a title="Latest News" href="media/latest-news/index.html" className="collapse-link">Latest News</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-112" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112">
														<a title="Gallery" href="media/gallery/index.html" className="collapse-link">Gallery</a></li>
													<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113">
														<a title="Glossary of Terms" href="media/glossary-of-terms/index.html" className="collapse-link">Glossary of Terms</a></li>
												</FooterAccordion>`;

content = content.replace(mediaOriginal, mediaNew);

fs.writeFileSync(path, content, 'utf8');
console.log('App/page.tsx updated with FooterAccordion.');
