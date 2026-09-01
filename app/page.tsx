import React from 'react';
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import AboutPreview from '@/components/home/AboutPreview';
import Statistics from '@/components/home/Statistics';
import OurFleetPreview from '@/components/home/OurFleetPreview';
import ChairmanMessage from '@/components/home/ChairmanMessage';
import LatestNews from '@/components/home/LatestNews';
import SustainabilityPreview from '@/components/home/SustainabilityPreview';
import Callouts from '@/components/home/Callouts';
import Footer from '@/components/layout/Footer';

import FooterAccordion from '@/components/layout/FooterAccordion';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import FleetSlider from '@/components/home/FleetSlider';

export default function Home() {
  return (
    <>
      <Header /><main id="siteMain" className="main container container-rfs container-w-outer">


		<article id="post-8" className="content-single content-page post-8 page type-page status-publish has-post-thumbnail hentry entity entity-page">
			<header className="entry-header">
			</header>

			<section className="entry-body">
				<div className="entry-content-layouts entry-content">
					<Hero />
					<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-large"></div></div></div>
					<WhatWeDo />
					<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-large"></div></div></div>
					<AboutPreview />

					<div data-index="3" data-uid="2fa4f5f87bfb493379470f53b8733001" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-medium-large"></div>
						</div>
					</div>
					<Statistics />

					<div data-index="5" data-uid="853c662b036131ee36ac668006392d6d" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-small"></div>
						</div>
					</div>
					<div data-index="6" data-uid="5b0da79b7c5ab1320e44fdc57777569b" id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
						<div className="layout-inner container container-max">
							<hr className="u-my-0" />
						</div>
					</div>
					<div data-index="7" data-uid="0f6635d9f955adc0c2a6c30ff15c62ed" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-small"></div>
						</div>
					</div>
					<OurFleetPreview />

<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-small"></div></div></div>
<div className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner container container-max"><hr className="u-my-0" /></div></div>
<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-small"></div></div></div>

					<ChairmanMessage />




<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-small"></div></div></div>
<div className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root"><div className="layout-inner container container-max"><hr className="u-my-0" /></div></div>
<div className="layout layout-spacer layout-page layout-root"><div className="layout-inner"><div className="spacer spacer-small"></div></div></div>

					<LatestNews />
					</div>
					<div data-index="13" data-uid="cb8796752e53607fc5ca236470850c44" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-medium"></div>
						</div>
					</div>
					<div data-index="14" data-uid="ddfce7b3c8448023867041ed0483a9e8" id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
						<div className="layout-inner container container-max">
							<hr className="u-my-0" />
						</div>
					</div>
					<div data-index="15" data-uid="187f05501c66c01739519eb3c5efc3b1" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-paragraph"></div>
						</div>
					</div>
					<SustainabilityPreview />
					<div data-index="17" data-uid="fa1181f43c6fd1dc85aaa4cb1bed3546" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-medium"></div>
						</div>
					</div>
					<div data-index="18" data-uid="d7fe91f7d92af102bf0d459b0f3ff0f6" id="" className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
						<div className="layout-inner container container-max">
							<hr className="u-my-0" />
						</div>
					</div>
					<div data-index="19" data-uid="b20974d1fd5c9de28c14d73f8ca31ff0" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-paragraph"></div>
						</div>
					</div>
					<Callouts />
					<div data-index="21" data-uid="a7bd34b552fa999ab8acdcfc3a0ed628" id="" className="layout layout-spacer layout-page layout-root">
						<div className="layout-inner ">
							<div className="spacer spacer-large"></div>
						</div>
					</div>
				
			</section>
		</article>

	</main>
	<Footer />
    </>
  );
}


