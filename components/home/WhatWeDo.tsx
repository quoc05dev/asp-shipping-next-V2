import React from 'react';

export default function WhatWeDo() {
  return (
    <>
					{/*  NEW WHAT WE DO SECTION  */}
					<div id="what-we-do" className="layout layout-page layout-root" data-cms-section="what_we_do">
						<div className="layout-inner">
							<div className="row u-gy-4 u-gx-4">
								{/*  Left Column: Title and Text  */}
								<div className="col-12 col-lg-4">
									<div className="content-width left" style={{paddingRight: "2rem", height: "100%", }}>
										<h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">What We Do</h2>

										<div className="section-lead-content u-h4 u-mb-3" data-cms-field="title"><p>Maritime solutions</p></div>
										<p data-cms-field="description">Commercial judgment, technical discipline and operational care across every stage of a vessel's lifecycle. We provide end-to-end maritime services, ensuring optimal performance, stringent regulatory compliance, and sustainable operations worldwide. Our dedicated team of experts works closely with partners to navigate the complexities of global shipping and deliver exceptional, reliable value.</p>
									</div>
								</div>
								
								{/*  Right Column: Card 1 (Commercial)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }} data-cms-array="cards" data-cms-data-index="0">

											<div className="section-lead-content u-h4 u-mb-3"><p data-cms-field="title">Commercial management</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }} data-cms-field="description">Employment strategy across time charter, spot voyage and pool partnerships, matching every vessel to the trade where it can perform best.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span data-cms-field="button_text">Explore Commercial Operations</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Right Column: Card 2 (Technical)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="section-lead-content u-h4 u-mb-3"><p>Technical management</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Planned maintenance, dry-docking, performance, safety and regulatory oversight delivered through a disciplined, TMSA-aligned management system.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span>Explore Technical Management</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Left Column: Card 5 (Advisory/Marine consultancy)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="section-lead-content u-h4 u-mb-3"><p>Marine consultancy</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Practical maritime advice for commercial planning, technical projects, compliance and fleet development, grounded in operating experience.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span>Talk To Our Marine Team</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Right Column: Card 3 (Crew)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="section-lead-content u-h4 u-mb-3"><p>Crew management</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Recruitment, deployment, training and welfare for qualified seafarers, supporting safe operations and reliable performance on every voyage.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span>Explore Crew Management</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Right Column: Card 4 (Sea transportation)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border theme-hover-style" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="section-lead-content u-h4 u-mb-3"><p>Sea transportation</p></div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Flexible sea transportation across dry bulk, clean and dirty petroleum products, LPG and chemical cargoes, delivered with disciplined planning and cargo care.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="#" className="button button-outline"><span>Explore Sea Transportation</span></a>
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
