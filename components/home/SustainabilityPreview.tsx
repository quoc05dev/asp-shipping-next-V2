import React from 'react';
import { cmsRepository } from '@/data/cms/repository';
import { requirePageSection } from '@/data/cms/requirePageSection';

export default async function SustainabilityPreview() {
  const sust = await requirePageSection('home', 'home_sustainability');
  if (!sust) return null;
  return (
    <>
					<div data-index="16" data-uid="590722105e71d59c1e86b1b629d164b1" id="sustainability" className="layout layout-section-media layout-page layout-root layout-section-media-has-theme" data-cms-section="sustainability">
						<div className="layout-inner layout-row row">
							<div className="layout-column layout-column-section-media-thumbnail col-lg-6">
								<div className="section-media-thumbnail u-d-flex u-h-100 u-pos-relative"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src={sust.content.image.url} className="img-fluid section-media-thumbnail-img u-border-radius u-object-fit-cover u-object-pos-center u-w-100 u-h-100  ratio-item" alt={sust.content.image.alt || sust.content.title} /></span></div>
							</div>
							<div className="layout-column layout-column-section-media-lead col-lg-6">
								<div data-index="0" data-uid="7ab86f810ee2de4c13fb4af87862c935" id="" className="layout layout-section-lead layout-page layout-section-lead-has-theme">
									<div className="layout-inner theme-style theme-style-mint">
										<h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" data-cms-field="sustainability_title">
											{sust.content.title}</h2>
										<div className="section-lead-content u-h4">
											<div className="content-width">
												<p data-cms-field="sustainability_desc">{sust.content.description}
												</p>
											</div>
										</div>
										<div data-index="0" data-uid="3f89466ac3d6336f8175eedd8d953038" id="" className="layout layout-buttons layout-page">
											<div className="layout-inner button-group u-mt-9 content-width">
												<div><a href={sust.content.ctaHref} title={sust.content.ctaLabel} target="" className="button button-outline button-outline-secondary"><span data-cms-field="sustainability_btn_1">{sust.content.ctaLabel}</span></a></div>
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
