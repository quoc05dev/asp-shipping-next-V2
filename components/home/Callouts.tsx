import React from 'react';
import { requirePageSection } from '@/data/cms/requirePageSection';
import NewsletterForm from '@/components/contact/NewsletterForm';

export default async function Callouts() {
  const callouts = await requirePageSection('home', 'home_callouts');
  if (!callouts) return null;
  return (
    <>
					<div data-index="20" data-uid="3566d60edf5174d6bb1cffe5ff1308bc" id="" className="layout layout-callouts layout-page layout-root layout-column-size-3">
						<div className="layout-inner layout-row row">
							<div data-index="0" data-uid="3aff20fb313f55c4afa52a34d5d8a9ce" id="" className="layout layout-callout-form layout-page layout-column-callout">
								<div className="callout callout-form theme-style theme-style-lighter u-px-4 u-py-3 u-border-radius u-h-100">
									<h2 className="heading h5 u-mb-3 callout-heading u-mb-0">
										{callouts.content.title}</h2>
									<div className="callout-body">
										<div className="callout-content">
											<div className="content-width">
												<p>Sign up to receive alerts on press releases and updates on business
													activities.</p>
											</div>
										</div>
										<div className="u-mt-9 callout-content-form">
											<NewsletterForm />
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
												<div><a href="/contact-us" title="Contact Us" target="" className="button button-outline button-outline-secondary"><span>Contact
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
												<div><a href="/careers" title="Careers at Asia Pacific Shipping" target="" className="button button-outline button-outline-secondary"><span>Careers
															at Asia Pacific Shipping</span></a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
    </>
  );
}
