import React from 'react';
import { cmsRepository } from '@/data/cms/repository';

export default async function LatestNews() {
  const news = await cmsRepository.getPageSection('home', 'home_news');
  const articles = await cmsRepository.getLatestNews();
  if (!news) return null;
  return (
    <>
					<div id="latest-news" className="container container-max">
	<div className="global-grid-latest-news">
		{/*  Left Column  */}
		<div className="layout-column layout-column-latest-post-list-lead u-mb-4 u-mb-lg-0">
			<div id="" className="layout layout-section-lead layout-page">
				<div className="layout-inner">
					<h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" data-cms-field="news_title">{news.content.title}</h2>
					<div className="section-lead-content u-h4">
						<div className="small">
							<p>{news.content.intro}</p>
						</div>
					</div>
					<div id="" className="layout layout-buttons layout-page">
						<div className="layout-inner button-group u-mt-9">
							<div><a href={news.content.ctaHref} title={news.content.ctaLabel} className="button button-outline"><span>{news.content.ctaLabel}</span></a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*  Right Column  */}
		<div className="layout-column layout-column-latest-post-list-first-post u-d-none u-d-lg-block">
			<article id="post-2136" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2136 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
				<header className="entry-header">
					<div className="post-categories row u-gy-2 u-gx-2">
						<div className="col-auto"><a href="/media/news/category/press-releases" className="button button-small button-secondary">Press Releases</a></div>
					</div>
					<a href="#" className="entry-permalink" title="ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers">
						<span className="ratio ratio-instrinsic">
							<span className="ratio-size" style={{paddingBottom: "50%", }}></span>
							<img width="1200" height="600" src="/wp-content/uploads/asp_images/news/fleet-expansion.jpg" className="entry-thumbnail ratio-item" alt="" />
						</span>
					</a>
				</header>
				<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
					<a href="#" className="entry-permalink" title="ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers">
						<time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2026-05-29T07:00:59+00:00">May 29, 2026</time>
						<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers</h3>
					</a>
				</div>
			</article>
		</div>
	</div>
	{/*  Additional Posts Row  */}
	<div className="layout-column layout-column-latest-post-list-posts" style={{marginTop: "40px", }}>

								<div className="row u-gy-4 row-posts row-latest-posts">
									<div className="col-12 u-d-block u-d-lg-none">
										<article id="post-2136" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2136 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="/media/news/category/press-releases" className="button button-small button-secondary">Press
															Releases</a></div>
												</div><a href="#" className="entry-permalink" title="ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/fleet-expansion.jpg" className="entry-thumbnail  ratio-item" alt="" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="#" className="entry-permalink" title="ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2026-05-29T07:00:59+00:00">May 29, 2026</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														ASP Successfully Takes Delivery of Vietnam’s First Two Methanol Dual-Fuel MR2 Oil/Chemical Tankers </h3>
												</a></div>
										</article>
									</div>
									<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
										<article id="post-2086" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2086 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="/media/news/category/press-releases" className="button button-small button-secondary">Press
															Releases</a></div>
												</div><a href="#" className="entry-permalink" title="ASP Expands The Fleet with Two New MR2 Tankers from K Shipbuilding"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/news/methanol-delivery.jpg" className="entry-thumbnail  ratio-item" alt="" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="#" className="entry-permalink" title="ASP Expands The Fleet with Two New MR2 Tankers from K Shipbuilding"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2025-09-09T13:30:01+00:00">September 9, 2025</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														ASP Expands The Fleet with Two New MR2 Tankers from K Shipbuilding </h3>
												</a></div>
										</article>
									</div>
									<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
										<article id="post-2051" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2051 post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="/media/news/category/press-releases" className="button button-small button-secondary">Press
															Releases</a></div>
												</div><a href="#" className="entry-permalink" title="5 Years of Turning Vision into Value"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp" className="entry-thumbnail  ratio-item" alt="" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="#" className="entry-permalink" title="5 Years of Turning Vision into Value"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2025-04-16T07:18:11+00:00">April 16, 2025</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														5 Years of Turning Vision into Value </h3>
												</a></div>
										</article>
									</div>
									<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
										<article id="post-2023" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2023 post type-post status-publish format-standard has-post-thumbnail hentry category-articles entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="/media/news/category/articles" className="button button-small button-secondary">Articles</a>
													</div>
												</div><a href="#" className="entry-permalink" title="ASP Luna Joins The Fleet"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/ships/ship-home-news-1.jpg" className="entry-thumbnail u-object-fit-cover u-object-pos-center u-w-100 u-h-100 ratio-item" alt="ASP Luna" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="#" className="entry-permalink" title="ASP Luna Joins The Fleet"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2024-10-09T02:39:25+00:00">October 9, 2024</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														ASP Luna Joins The Fleet </h3>
												</a></div>
										</article>
									</div>
									<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
										<article id="post-2004" className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post-2004 post type-post status-publish format-standard has-post-thumbnail hentry category-articles entity entity-post">
											<header className="entry-header">
												<div className="post-categories row u-gy-2 u-gx-2">
													<div className="col-auto"><a href="/media/news/category/articles" className="button button-small button-secondary">Articles</a>
													</div>
												</div><a href="#" className="entry-permalink" title="ASP Titan Joins The Fleet"><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src="/wp-content/uploads/asp_images/ships/ship-home-news-2.jpg" className="entry-thumbnail u-object-fit-cover u-object-pos-center u-w-100 u-h-100 ratio-item" alt="ASP Titan" /></span></a>
											</header>
											<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href="#" className="entry-permalink" title="ASP Titan Joins The Fleet"><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime="2024-06-19T03:37:15+00:00">June 19, 2024</time>
													<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">
														ASP Titan Joins The Fleet </h3>
												</a></div>
										</article>
									</div>
								</div>
							</div>
						</div>
    </>
  );
}
