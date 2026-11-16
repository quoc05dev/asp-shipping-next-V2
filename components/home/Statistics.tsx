import React from 'react';
import { requirePageSection } from '@/data/cms/requirePageSection';

export default async function Statistics() {
  const statsData = await requirePageSection('home', 'home_statistics');
  const stats = [...statsData.content.stats].sort((a, b) => a.displayOrder - b.displayOrder);
  return (
    <>
					<div className="container container-max home-statistics">
	<div className="global-grid-stats">
		{stats.map((stat) => (
		<div key={stat.id} className="layout-statistic-box layout-page" tabIndex={0}>
			<div className="statistic theme-hover-style theme-style-primary u-d-flex u-flex-column u-h-100">
				<div className="statistic-content u-mb-auto">
					<div className="statistic-figure u-h2">{stat.prefix}{stat.value}</div>
					{stat.suffix && <div className="statistic-suffix u-h4">{stat.suffix}</div>}
				</div>
				<div className="statistic-caption u-mt-4">{stat.label}</div>
			</div>
		</div>
		))}
	</div>
</div>
    </>
  );
}
