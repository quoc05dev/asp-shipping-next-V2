import React from 'react';
import { cmsRepository } from '@/data/cms/repository';
import HeroVideoBackground from './HeroVideoBackground';

export default async function Hero() {
  const hero = await cmsRepository.getPageSection('home', 'home_hero');
  if (!hero) return null;
  return (
    <>
					<div data-index="0" data-uid="05ea7833d6ae35664498b83289d51708" id="" className="layout layout-landing-banner layout-page layout-full u-px-0 layout-root">
						<div className="layout-inner ">
							<div className="banner banner-landing">
								<div className="banner-media">
                  <img src={hero.content.fallbackImage.url} className="banner-img banner-img-large " alt={hero.content.fallbackImage.alt} />
                  <HeroVideoBackground videos={hero.content.videos} />
                  <span className="banner-backdrop u-pos-absolute u-pos-x u-pos-y"></span>
                </div>
								<div className="banner-overlay u-pos-absolute u-pos-x u-pos-y u-d-flex u-flex-column u-justify-content-end u-h-100">
									<div className="container container-rfs container-w-outer u-mb-8">
										<div className="banner-content">
																						<div className="layout-row row u-gy-0" style={{ alignItems: 'flex-start' }}>
												<div className="layout-column col-12 col-lg-6">
													<hr className="hero-divider-left" style={{ margin: '0 0 12px 0', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.3)', width: '100%' }} />
													<div className="layout-landing-banner-lead u-h1 u-text-color-white content-width" data-cms-section="hero" data-cms-field="title" style={{ marginTop: 0 }}>
														<p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: hero.content.title }}></p>
													</div>
												</div>
												<div className="layout-column col-12 col-lg-6">
													<hr className="hero-divider-right" style={{ margin: '0 0 12px 0', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.3)', width: '100%' }} />
													<div className="layout-landing-banner-excerpt u-text-color-white content-width" data-cms-section="hero" data-cms-field="description" style={{ marginTop: 0 }}>
														<p style={{ margin: 0 }}>{hero.content.description}</p>
													</div>
												</div>
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
