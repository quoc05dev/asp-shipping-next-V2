import React from 'react';

export function ServiceIcon({ icon }: { icon: string }) {
  let artwork: React.ReactNode;

  switch (icon) {
    case "commercial":
      artwork = (
        <>
          <path d="M8 42h48l-7 10H18L8 42Z" />
          <rect x="17" y="31" width="10" height="11" />
          <rect x="27" y="31" width="10" height="11" />
          <rect x="37" y="31" width="10" height="11" />
          <path className="icon-accent" d="M13 24c10-12 28-14 39-3" />
          <path className="icon-accent" d="m46 17 6 4-5 5" />
        </>
      );
      break;
    case "technical":
      artwork = (
        <>
          <circle cx="32" cy="32" r="22" />
          <circle className="icon-accent icon-accent--fill" cx="32" cy="32" r="4" />
          <path d="M32 28c-5-6-4-13 1-17 6 5 6 12 2 18" />
          <path d="M36 32c6-5 13-4 17 1-5 6-12 6-18 2" />
          <path d="M32 36c5 6 4 13-1 17-6-5-6-12-2-18" />
          <path d="M28 32c-6 5-13 4-17-1 5-6 12-6 18-2" />
        </>
      );
      break;
    case "marine":
      artwork = (
        <>
          <path d="M10 13h44v32H31l-10 8v-8H10V13Z" />
          <path className="icon-accent" d="M17 36c7-12 15-14 29-13" />
          <circle cx="17" cy="36" r="2" />
          <circle cx="46" cy="23" r="2" />
          <path d="m31 20 5 9-9 5 4-14ZM31 17v3M31 34v3M23 27h3M36 27h3" />
        </>
      );
      break;
    case "crew":
      artwork = (
        <>
          <circle cx="32" cy="25" r="8" />
          <path className="icon-accent" d="M19 25c0-8 5-14 13-14s13 6 13 14" />
          <path d="M17 25h30M32 11v7" />
          <path d="M16 53c1-11 7-17 16-17s15 6 16 17M25 38l7 7 7-7" />
        </>
      );
      break;
    case "sea":
      artwork = (
        <>
          <path d="M7 42h50l-8 10H17L7 42Z" />
          <path d="M15 42a8 8 0 0 1 16 0M25 42a8 8 0 0 1 16 0M35 42a8 8 0 0 1 16 0" />
          <path d="M51 42V27h5" />
          <path className="icon-accent" d="M32 13v10M27.7 15.5l8.6 5M36.3 15.5l-8.6 5" />
        </>
      );
      break;
  }

  return (
    <svg
      className="home-service-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {artwork}
    </svg>
  );
}

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
									<div className="card u-h-100 u-border home-service-card" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }} data-cms-array="cards" data-cms-data-index="0">

											<div className="home-service-heading-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
												<ServiceIcon icon="commercial" />
												<div className="section-lead-content u-h4 u-mb-0"><p data-cms-field="title" style={{ margin: 0 }}>Commercial management</p></div>
											</div>
											<p className="u-mb-5" style={{flexGrow: "1", }} data-cms-field="description">Employment strategy across time charter, spot voyage and pool partnerships, matching every vessel to the trade where it can perform best.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="/commercial-management" className="button button-outline"><span data-cms-field="button_text">Explore Commercial Operations</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Right Column: Card 2 (Technical)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border home-service-card" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="home-service-heading-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
												<ServiceIcon icon="technical" />
												<div className="section-lead-content u-h4 u-mb-0"><p style={{ margin: 0 }}>Technical management</p></div>
											</div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Planned maintenance, dry-docking, performance, safety and regulatory oversight delivered through a disciplined, TMSA-aligned management system.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="/technical-management" className="button button-outline"><span>Explore Technical Management</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Left Column: Card 5 (Advisory/Marine consultancy)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border home-service-card" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="home-service-heading-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
												<ServiceIcon icon="marine" />
												<div className="section-lead-content u-h4 u-mb-0"><p style={{ margin: 0 }}>Marine consultancy</p></div>
											</div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Practical maritime advice for commercial planning, technical projects, compliance and fleet development, grounded in operating experience.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="/marine-consultancy" className="button button-outline"><span>Talk To Our Marine Team</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Right Column: Card 3 (Crew)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border home-service-card" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="home-service-heading-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
												<ServiceIcon icon="crew" />
												<div className="section-lead-content u-h4 u-mb-0"><p style={{ margin: 0 }}>Crew management</p></div>
											</div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Recruitment, deployment, training and welfare for qualified seafarers, supporting safe operations and reliable performance on every voyage.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="/crew-management" className="button button-outline"><span>Explore Crew Management</span></a>
											</div>
										</div>
									</div>
								</div>
								
								{/*  Right Column: Card 4 (Sea transportation)  */}
								<div className="col-12 col-md-6 col-lg-4">
									<div className="card u-h-100 u-border home-service-card" style={{border: "1px solid #e5e5e5", padding: "2.5rem 2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", }}>
										<div className="card-body p-0" style={{display: "flex", flexDirection: "column", height: "100%", }}>

											<div className="home-service-heading-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
												<ServiceIcon icon="sea" />
												<div className="section-lead-content u-h4 u-mb-0"><p style={{ margin: 0 }}>Sea transportation</p></div>
											</div>
											<p className="u-mb-5" style={{flexGrow: "1", }}>Flexible sea transportation across dry bulk, clean and dirty petroleum products, LPG and chemical cargoes, delivered with disciplined planning and cargo care.</p>
											<div style={{borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "flex", }}>
												<a href="/sea-transportation" className="button button-outline"><span>Explore Sea Transportation</span></a>
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
