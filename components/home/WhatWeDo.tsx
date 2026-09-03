import React from 'react';

export function ServiceIcon({ icon }: { icon: string }) {
  let artwork: React.ReactNode;

  switch (icon) {
    case "commercial":
      artwork = (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path className="icon-accent" d="M8 15l3-3 2 2 4-4" />
          <path className="icon-accent" d="M17 14v-4h-4" />
        </>
      );
      break;
    case "technical":
      artwork = (
        <>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 3v2M12 19v2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M3 12h2M19 12h2M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41" />
          <circle className="icon-accent" cx="12" cy="12" r="3" />
          <path className="icon-accent" d="M12 9v-2M12 17v-2M9 12H7M17 12h-2" />
        </>
      );
      break;
    case "marine":
      artwork = (
        <>
          <path d="M8 21h8" />
          <path d="M9 21V11h6v10" />
          <path d="M10 11L11 5h2l1 6" />
          <path d="M12 5V2" />
          <path d="M7 11h10" />
          <path className="icon-accent" d="M17 7h4M3 7h4M16 4l3-2M8 4L5 2M16 10l3 2M8 10l-3 2" />
        </>
      );
      break;
    case "crew":
      artwork = (
        <>
          <circle cx="12" cy="8" r="3" />
          <path d="M12 14c-4 0-7 2-7 6v1h14v-1c0-4-3-6-7-6z" />
          <circle className="icon-accent" cx="6" cy="10" r="2" />
          <path className="icon-accent" d="M2 21v-1c0-3 2-5 4-6" />
          <circle className="icon-accent" cx="18" cy="10" r="2" />
          <path className="icon-accent" d="M22 21v-1c0-3-2-5-4-6" />
        </>
      );
      break;
    case "sea":
      artwork = (
        <>
          <path d="M3 15l1.5 3h15l1.5-3H3z" />
          <path d="M17 15V8h3v7" />
          <path d="M16 11h5" />
          <rect className="icon-accent" x="6" y="11" width="4" height="4" />
          <rect className="icon-accent" x="11" y="11" width="4" height="4" />
          <path className="icon-accent" d="M2 20c2 0 3 1 5 1s3-1 5-1 3 1 5 1 3-1 5-1" />
        </>
      );
      break;
  }

  return (
    <svg
      className="home-service-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
