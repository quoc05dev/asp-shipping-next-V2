import React from 'react';
import FleetSlider from '@/components/home/FleetSlider';

export default function OurFleetPreview() {
  return (
    <>
{/*  Unified Our Fleet Section  */}
<section id="our-fleet-section" style={{width: "100%", display: "flex", justifyContent: "center", }} data-cms-section="our_fleet">
	<div className="container container-max">
		<div className="global-grid-2col" style={{alignItems: "start", }}>
			{/*  Left Column: Slider  */}
			<div style={{width: "100%", }}>
				<FleetSlider />
			</div>

			{/*  Right Column: Content  */}
			<div style={{display: "flex", flexDirection: "column", height: "100%", }}>
				<div style={{marginBottom: "auto", }}>
					<h2 className="heading h5 u-text-color-primary" style={{margin: "0 0 12px 0", }}>Our
						Fleet</h2>
					<div style={{marginBottom: "16px", }}>
						<p style={{fontSize: "1.5rem", lineHeight: "1.4", margin: "0", color: "var(--theme-body-color)", }}>
							We own and manage a modern, diversified fleet serving customers across
							global trades, including bulk carriers, oil tankers, LPG carriers and
							chemical tankers.</p>
					</div>
					<div style={{marginBottom: "32px", }}>
						<p style={{fontSize: "1.05rem", lineHeight: "1.6", margin: "0", color: "var(--theme-body-color)", }}>
							Our commitment to safety, continuous improvement, and operational
							efficiency ensures that we meet the highest standards of maritime
							transport, delivering reliable capacity for critical international
							supply chains.</p>
					</div>

					<a href="/our-fleet" className="button button-outline" style={{marginBottom: "32px", }}><span>View Our Fleet List</span></a>
				</div>

				{/*  Statistics Grid (2x2)  */}
				<div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", }}>
					{/*  Stat 1  */}
					<div className="layout-statistic-box active">
						<div className="statistic custom-stat-box u-d-flex u-flex-column u-h-100" data-cms-array="stats" data-cms-data-index="0">
							<div className="statistic-content u-mb-auto">
								<div className="statistic-figure u-h2" style={{fontSize: "2.5rem", lineHeight: "1", }} data-cms-field="figure">41</div>
								<div className="statistic-suffix u-h4" style={{lineHeight: "1", }} data-cms-field="suffix">+</div>
							</div>
							<div className="statistic-caption u-mt-2" style={{fontSize: "0.95rem", fontWeight: "500", }} data-cms-field="caption">
								Total Vessels</div>
						</div>
					</div>
					{/*  Stat 2  */}
					<div className="layout-statistic-box">
						<div className="statistic custom-stat-box u-d-flex u-flex-column u-h-100" data-cms-array="stats" data-cms-data-index="1">
							<div className="statistic-content u-mb-auto">
								<div className="statistic-figure u-h2" style={{fontSize: "2.5rem", lineHeight: "1", }} data-cms-field="figure">10</div>
								<div className="statistic-suffix u-h4" style={{lineHeight: "1", }} data-cms-field="suffix">+</div>
							</div>
							<div className="statistic-caption u-mt-2" style={{fontSize: "0.95rem", fontWeight: "500", }} data-cms-field="caption">
								Tankers</div>
						</div>
					</div>
					{/*  Stat 3  */}
					<div className="layout-statistic-box">
						<div className="statistic custom-stat-box u-d-flex u-flex-column u-h-100" data-cms-array="stats" data-cms-data-index="2">
							<div className="statistic-content u-mb-auto">
								<div className="statistic-figure u-h2" style={{fontSize: "2.5rem", lineHeight: "1", }} data-cms-field="figure">8</div>
								<div className="statistic-suffix u-h4" style={{lineHeight: "1", }} data-cms-field="suffix">+</div>
							</div>
							<div className="statistic-caption u-mt-2" style={{fontSize: "0.95rem", fontWeight: "500", }} data-cms-field="caption">
								Bulk Carriers</div>
						</div>
					</div>
					{/*  Stat 4  */}
					<div className="layout-statistic-box">
						<div className="statistic custom-stat-box u-d-flex u-flex-column u-h-100" data-cms-array="stats" data-cms-data-index="3">
							<div className="statistic-content u-mb-auto">
								<div className="statistic-figure u-h2" style={{fontSize: "2.5rem", lineHeight: "1", }} data-cms-field="figure">5</div>
								<div className="statistic-suffix u-h4" style={{lineHeight: "1", }} data-cms-field="suffix">+</div>
							</div>
							<div className="statistic-caption u-mt-2" style={{fontSize: "0.95rem", fontWeight: "500", }} data-cms-field="caption">
								Chemical &amp; LPG Carriers</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		
	</div>
</section>
{/*  /Unified Our Fleet Section  */}
    </>
  );
}
