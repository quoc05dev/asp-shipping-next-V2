import React from 'react';

export default function AboutPreview() {
  return (
    <>
					<div id="about-us-contents" className="container container-max" data-cms-section="about_us">
  	<div className="global-grid-2col">
  		{/*  Left Column  */}
  		<div id="about-us" style={{width: "100%", }}>
  			<div className="layout layout-section-lead layout-page">
  				<div className="layout-inner">
  					<h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0" data-cms-field="about_us_title">About Us</h2>
  					<div className="section-lead-content u-h4">
  						<p>ASP is an independent, wholly Vietnamese-owned shipowner and manager, founded by experienced captains, officers and maritime professionals, with strong backing from Vietnamese investors, banks and leasing partners.</p>
  					</div>
  					<div className="layout layout-buttons layout-page">
  						<div className="layout-inner button-group u-mt-9">
  							<div><a href="/about-us" title="Learn About Asia Pacific Shipping" className="button button-outline"><span data-cms-field="button_text">Learn About Asia Pacific Shipping</span></a></div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  		{/*  Right Column  */}
  		<div style={{width: "100%", }}>
  			<div className="layout layout-content layout-page" style={{maxWidth: "100% !important", padding: "0 !important", margin: "0 !important", }}>
  				<div className="layout-inner" style={{maxWidth: "100% !important", padding: "0 !important", margin: "0 !important", }}>

  					<p style={{textAlign: "justify", maxWidth: "100% !important", marginRight: "0 !important", paddingRight: "0 !important", }} data-cms-field="title">We have the scale, fleet and operational resources to serve our customers on a truly global basis, operating a young fleet of modern vessels.</p>
  					<p style={{textAlign: "justify", maxWidth: "100% !important", marginRight: "0 !important", paddingRight: "0 !important", }} data-cms-field="description">We maintain the highest standards of safety, quality, and environmental protection, offering customers the best solutions for their transportation needs with our leading service and operational excellence.</p>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
    </>
  );
}
