import React from 'react';
import { cmsRepository } from '@/data/cms/repository';
import { requirePageSection } from '@/data/cms/requirePageSection';

export default async function LatestNews() {
  const news = await requirePageSection('home', 'home_latest_news');
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
			{articles[0] && (
				<article id={`post-${articles[0].id}`} className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
					<header className="entry-header">
						<div className="post-categories row u-gy-2 u-gx-2">
							<div className="col-auto"><a href="/media/news/category/press-releases" className="button button-small button-secondary">{articles[0].category}</a></div>
						</div>
						<a href={`/media/latest-news/${articles[0].slug}`} className="entry-permalink" title={articles[0].title}>
							<span className="ratio ratio-instrinsic">
								<span className="ratio-size" style={{paddingBottom: "50%", }}></span>
								<img width="1200" height="600" src={articles[0].image.url} className="entry-thumbnail ratio-item" alt={articles[0].image.alt} />
							</span>
						</a>
					</header>
					<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter">
						<a href={`/media/latest-news/${articles[0].slug}`} className="entry-permalink" title={articles[0].title}>
							<time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime={articles[0].date}>{new Date(articles[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
							<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">{articles[0].title}</h3>
						</a>
					</div>
				</article>
			)}
		</div>
	</div>
	{/*  Additional Posts Row  */}
	<div className="layout-column layout-column-latest-post-list-posts" style={{marginTop: "40px", }}>
		<div className="row u-gy-4 row-posts row-latest-posts">
			{articles[0] && (
				<div className="col-12 u-d-block u-d-lg-none">
					<article id={`post-${articles[0].id}`} className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
						<header className="entry-header">
							<div className="post-categories row u-gy-2 u-gx-2">
								<div className="col-auto"><a href="/media/news/category/press-releases" className="button button-small button-secondary">{articles[0].category}</a></div>
							</div><a href={`/media/latest-news/${articles[0].slug}`} className="entry-permalink" title={articles[0].title}><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src={articles[0].image.url} className="entry-thumbnail  ratio-item" alt={articles[0].image.alt} /></span></a>
						</header>
						<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href={`/media/latest-news/${articles[0].slug}`} className="entry-permalink" title={articles[0].title}><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime={articles[0].date}>{new Date(articles[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
								<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">{articles[0].title}</h3>
							</a></div>
					</article>
				</div>
			)}
			{articles.slice(1, 5).map((article) => (
				<div key={article.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
					<article id={`post-${article.id}`} className="content-excerpt card card-excerpt card-post u-border-radius u-overflow-hidden u-d-block post type-post status-publish format-standard has-post-thumbnail hentry category-press-releases entity entity-post">
						<header className="entry-header">
							<div className="post-categories row u-gy-2 u-gx-2">
								<div className="col-auto"><a href="/media/news/category/press-releases" className="button button-small button-secondary">{article.category}</a></div>
							</div><a href={`/media/latest-news/${article.slug}`} className="entry-permalink" title={article.title}><span className="ratio ratio-instrinsic "><span className="ratio-size" style={{paddingBottom: "50%", }}></span><img width="1200" height="600" src={article.image.url} className="entry-thumbnail  ratio-item" alt={article.image.alt} /></span></a>
						</header>
						<div className="entry-body card-body u-px-4 u-py-3 u-bg-lighter"><a href={`/media/latest-news/${article.slug}`} className="entry-permalink" title={article.title}><time className="entry-time entry-time-updated h6 u-mb-0 u-text-color-secondary" dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
								<h3 className="entry-title u-text-color-mute u-font-weight-normal u-h5 u-mb-0">{article.title}</h3>
							</a></div>
					</article>
				</div>
			))}
		</div>
	</div>
</div>
    </>
  );
}
