import React from 'react';
import { cmsRepository } from '@/data/cms/repository';
import { requirePageSection } from '@/data/cms/requirePageSection';

export default async function AboutPreview() {
  const about = await requirePageSection('home', 'home_about');
  if (!about) return null;
  return (
    <>
					<div id="about-us-contents" className="container container-max" data-cms-section="about_us">
  	<div className="global-grid-2col">
  		{/*  Left Column  */}
  		<div id="about-us" style={{width: "100%", }}>
  			<div className="layout layout-section-lead layout-page">
  				<div className="layout-inner">
  					<h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" data-cms-field="about_us_title">{about.content.eyebrow}</h2>
  					<div className="section-lead-content u-h4">
  						<p>{about.content.description1}</p>
  					</div>
  					<div className="layout layout-buttons layout-page">
  						<div className="layout-inner button-group u-mt-9">
  							<div><a href={about.content.ctaHref} title={about.content.ctaLabel} className="button button-outline"><span data-cms-field="button_text">{about.content.ctaLabel}</span></a></div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  		{/*  Right Column  */}
  		<div style={{width: "100%", }}>
  			<div className="layout layout-content layout-page" style={{maxWidth: "100% !important", padding: "0 !important", margin: "0 !important", }}>
  				<div className="layout-inner" style={{maxWidth: "100% !important", padding: "0 !important", margin: "0 !important", }}>

  					<p style={{textAlign: "justify", maxWidth: "100% !important", marginRight: "0 !important", paddingRight: "0 !important", }} data-cms-field="title">{about.content.title}</p>
  					<p style={{textAlign: "justify", maxWidth: "100% !important", marginRight: "0 !important", paddingRight: "0 !important", }} data-cms-field="description">{about.content.description2}</p>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
    </>
  );
}
