const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 393, height: 852 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Wait until the footer accordion toggle button is fully rendered by React
  await page.waitForSelector('.footer-accordion-toggle', { timeout: 10000 });
  
  // Helper to get element info
  const getGroupInfo = async (id) => {
    return page.evaluate((id) => {
      const parent = document.getElementById(id);
      if (!parent) return null;
      const link = parent.querySelector('.footer-parent-link');
      const btn = parent.querySelector('.footer-accordion-toggle');
      const chevronInLink = link ? !!link.querySelector('.footer-accordion-chevron') : false;
      const chevronInBtn = btn ? !!btn.querySelector('.footer-accordion-chevron') : false;
      
      const submenu = document.getElementById(`${id}-submenu`);
      const submenuWrapper = submenu ? submenu.closest('.footer-submenu-wrapper') : null;
      const rect = submenuWrapper ? submenuWrapper.getBoundingClientRect() : { height: 0 };
      
      return {
        parentTag: link ? link.tagName : 'NONE',
        parentHref: link ? link.getAttribute('href') : 'NONE',
        toggleTag: btn ? btn.tagName : 'NONE',
        toggleExists: !!btn,
        chevronInsideLink: chevronInLink,
        chevronInsideBtn: chevronInBtn,
        ariaExpanded: btn ? btn.getAttribute('aria-expanded') : 'false',
        height: rect.height
      };
    }, id);
  };

  const aboutId = 'menu-item-97';
  const fleetId = 'menu-item-102';
  const susId = 'menu-item-105';
  const mediaId = 'menu-item-110';

  console.log('--- INITIAL STATE ---');
  let aboutInfo = await getGroupInfo(aboutId);
  console.log('ABOUT PARENT TAG: ' + aboutInfo.parentTag);
  console.log('ABOUT PARENT HREF: ' + aboutInfo.parentHref);
  console.log('ABOUT TOGGLE TAG: ' + aboutInfo.toggleTag);
  console.log('ABOUT TOGGLE EXISTS: ' + (aboutInfo.toggleExists ? 'YES' : 'NO'));
  console.log('CHEVRON INSIDE LINK: ' + (aboutInfo.chevronInsideLink ? 'YES' : 'NO'));
  console.log('CHEVRON INSIDE BUTTON: ' + (aboutInfo.chevronInsideBtn ? 'YES' : 'NO'));

  console.log('ABOUT CLOSED HEIGHT: ' + Math.round(aboutInfo.height));
  
  let fleetInfo = await getGroupInfo(fleetId);
  console.log('FLEET CLOSED HEIGHT: ' + Math.round(fleetInfo.height));
  
  let susInfo = await getGroupInfo(susId);
  console.log('SUSTAINABILITY CLOSED HEIGHT: ' + Math.round(susInfo.height));

  let mediaInfo = await getGroupInfo(mediaId);
  console.log('MEDIA CLOSED HEIGHT: ' + Math.round(mediaInfo.height));

  console.log('--- TEST CHEVRON TOGGLE ---');
  // Click About chevron
  await page.click(`#${aboutId} .footer-accordion-toggle`);
  await new Promise(r => setTimeout(r, 400));
  aboutInfo = await getGroupInfo(aboutId);
  console.log('ABOUT OPEN HEIGHT: ' + Math.round(aboutInfo.height));
  console.log('CHEVRON TOGGLES STATE: ' + (aboutInfo.ariaExpanded === 'true' ? 'YES' : 'NO'));
  console.log('ABOUT CHEVRON TOGGLE: ' + (aboutInfo.height > 0 ? 'PASS' : 'FAIL'));

  // Click Fleet chevron (multi open test)
  await page.click(`#${fleetId} .footer-accordion-toggle`);
  await new Promise(r => setTimeout(r, 400));
  fleetInfo = await getGroupInfo(fleetId);
  aboutInfo = await getGroupInfo(aboutId); // check if about still open
  console.log('FLEET OPEN HEIGHT: ' + Math.round(fleetInfo.height));
  console.log('MULTI OPEN: ' + (fleetInfo.height > 0 && aboutInfo.height > 0 ? 'PASS' : 'FAIL'));

  // Click Sus chevron
  await page.click(`#${susId} .footer-accordion-toggle`);
  await new Promise(r => setTimeout(r, 400));
  susInfo = await getGroupInfo(susId);
  console.log('SUSTAINABILITY OPEN HEIGHT: ' + Math.round(susInfo.height));

  // Click Media chevron
  await page.click(`#${mediaId} .footer-accordion-toggle`);
  await new Promise(r => setTimeout(r, 400));
  mediaInfo = await getGroupInfo(mediaId);
  console.log('MEDIA OPEN HEIGHT: ' + Math.round(mediaInfo.height));
  
  // Second tap close test
  await page.click(`#${aboutId} .footer-accordion-toggle`);
  await new Promise(r => setTimeout(r, 400));
  aboutInfo = await getGroupInfo(aboutId);
  console.log('SECOND CHEVRON TAP CLOSE: ' + (Math.round(aboutInfo.height) === 0 ? 'PASS' : 'FAIL'));

  console.log('--- URL TEST ---');
  console.log('URL BEFORE CHEVRON: ' + page.url());
  await page.click(`#${fleetId} .footer-accordion-toggle`);
  await new Promise(r => setTimeout(r, 100));
  console.log('URL AFTER CHEVRON: ' + page.url());

  // Test Link navigation
  await page.click(`#${aboutId} .footer-parent-link`);
  await new Promise(r => setTimeout(r, 500));
  console.log('TEXT NAVIGATES: ' + (page.url().includes('about-us') ? 'YES' : 'NO'));
  console.log('ABOUT TEXT NAVIGATION: ' + (page.url().includes('about-us') ? 'PASS' : 'FAIL'));

  await browser.close();
})();
