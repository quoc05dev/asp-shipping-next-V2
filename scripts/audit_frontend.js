/**
 * ASP Shipping - Permanent Frontend Regression Guard
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
let routesToTest = [];

try {
  const manifestPath = path.join(__dirname, '..', '.next', 'server', 'app-paths-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  routesToTest = Object.keys(manifest)
    .filter(k => k.endsWith('/page'))
    .map(k => k.replace(/\/page$/, '') || '/');
} catch (e) {
  console.error("Could not load app-paths-manifest.json. Is the app built?");
  process.exit(1);
}

function fetchPage(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ status: res.statusCode, body, headers: res.headers }));
    }).on('error', e => resolve({ error: e.message }));
  });
}

function checkBindings(html) {
  const issues = [];
  const text = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ');

  if (text.includes('undefined')) issues.push('Visible undefined');
  if (text.includes('null')) issues.push('Visible null');
  if (text.includes('[object Object]')) issues.push('Visible [object Object]');
  
  const literalMatches = text.match(/\{[a-zA-Z0-9_.]+\.content\.[a-zA-Z0-9_.]+\}/g) || [];
  if (literalMatches.length > 0) {
    issues.push(`Literal binding: ${literalMatches[0]}`);
  }

  return issues;
}

function validateHeader(html) {
  const issues = [];
  if (!html.includes('site-header')) issues.push('Missing Header component');
  
  const expectedNav = ['What We Do', 'About Us', 'Sustainability', 'Media', 'Careers', 'Our Fleet', 'Contact Us', 'EN / VI', 'Search'];
  for (const item of expectedNav) {
    if (!html.includes(item)) issues.push(`Missing header item: ${item}`);
  }
  
  const mainIndex = Math.max(html.indexOf('<main'), html.indexOf('id="siteMain"'), html.indexOf('site-main'));
  if (mainIndex > 0) {
    const headerHtml = html.substring(0, mainIndex);
    const navMatches = headerHtml.match(/<nav[^>]*>[\s\S]*?<\/nav>/gi) || [];
    const navContent = navMatches.join(' ');
    if (navContent.includes('Suppliers')) issues.push('Suppliers found in Header');
  }
  return issues;
}

function validateFooter(html) {
  const issues = [];
  if (!html.includes('site-footer')) issues.push('Missing Footer component');
  if (!html.includes('ASP-logo')) issues.push('Missing Footer Logo');
  if (!html.includes('Subscribe to our Newsletter')) issues.push('Missing Newsletter');
  if (!html.includes('Copyright')) issues.push('Missing Copyright');
  return issues;
}

async function runAudit() {
  console.log('Starting Permanent Frontend Regression Guard...\n');
  const isAdminRoute = route => route === '/admin' || route.startsWith('/admin/');
  const publicRoutes = routesToTest.filter(route => !isAdminRoute(route)
    && !route.includes('_not-found') && !route.includes('_global-error'));
  // Keep admin discovery and protection checks separate from public presentation.
  // Required routes remain checked even if accidentally removed from the manifest.
  const adminRoutes = [...new Set(['/admin', '/admin/login', ...routesToTest.filter(isAdminRoute)])];
  const results = {
    total: publicRoutes.length,
    tested: 0,
    passed: 0,
    failed: 0,
    criticalRegressions: 0,
    failures: []
  };

  for (const route of publicRoutes) {
    results.tested++;
    const url = BASE_URL + route;
    const { status, body, error } = await fetchPage(url);
    
    if (error) {
      results.failed++;
      results.criticalRegressions++;
      results.failures.push({ route, errors: [`Connection Error: ${error}`] });
      continue;
    }

    const routeErrors = [];
    if (status !== 200) routeErrors.push(`HTTP ${status}`);
    
    const bindingErrors = checkBindings(body);
    routeErrors.push(...bindingErrors);
    routeErrors.push(...validateHeader(body));
    routeErrors.push(...validateFooter(body));
    
    // Route specific checks
    if (route === '/') {
      if (!body.includes('banner-media')) routeErrors.push('Home missing Hero media');
      if (!body.includes('what-we-do')) routeErrors.push('Home missing WhatWeDo');
      if (!body.includes('home-statistics')) routeErrors.push('Home missing Statistics');
      if (!body.includes('chairman-message-section')) routeErrors.push('Home missing ChairmanMessage');
      
      // Latest News Strict Contract
      if (!body.includes('row-latest-posts')) routeErrors.push('Home missing Latest News section');
      
      const latestNewsBlock = body.substring(body.indexOf('layout-column-latest-post-list-first-post'));
      const articleCount = (latestNewsBlock.match(/<article[^>]*>/g) || []).filter(a => a.includes('card-post')).length;
      // 1 featured (duplicated for mobile) + 4 secondary = 6 article tags in DOM, but baseline has 5 unique articles.
      if (articleCount !== 6) routeErrors.push(`Home Latest News article DOM count mismatch. Expected 6, got ${articleCount}`);
      
      const imagesInNews = (latestNewsBlock.match(/<img[^>]*>/g) || []).filter(img => img.includes('entry-thumbnail'));
      // 1 featured image in Right Column (before row-latest-posts? Wait, Right Column is BEFORE row-latest-posts).
      // Let's just match the whole news section
      const newsSectionStart = body.indexOf('layout-column-latest-post-list-first-post');
      if (newsSectionStart !== -1) {
        const newsSectionHTML = body.substring(newsSectionStart, body.indexOf('</section>', newsSectionStart));
        const newsImages = (newsSectionHTML.match(/<img[^>]*entry-thumbnail[^>]*>/g) || []).length;
        if (newsImages !== 6) routeErrors.push(`Home Latest News image count mismatch. Expected 6, got ${newsImages}`);
        
        const newsTitles = (newsSectionHTML.match(/<h3[^>]*entry-title[^>]*>/g) || []).length;
        if (newsTitles !== 6) routeErrors.push(`Home Latest News title count mismatch. Expected 6, got ${newsTitles}`);
      }
    }
    
    if (route === '/what-we-do') {
      if (!body.includes('banner-media')) routeErrors.push('WhatWeDo missing Hero');
      if (!body.includes('service-checker-row')) routeErrors.push('WhatWeDo missing Service Grid');
      if (!body.includes('trusted-marquee-track')) routeErrors.push('WhatWeDo missing Trusted Relationships');
      
      const exploreIndex = body.indexOf('class="explore-card"');
      if (exploreIndex === -1) {
        routeErrors.push('WhatWeDo missing Explore ASP cards');
      } else {
        const exploreCards = (body.match(/class="explore-card"/g) || []).length;
        if (exploreCards !== 6) routeErrors.push(`WhatWeDo Explore ASP card count mismatch. Expected 6, got ${exploreCards}`);
        
        // Find the start of the section to restrict matching
        const sectionStart = body.lastIndexOf('<section', exploreIndex);
        if (sectionStart !== -1) {
          const sectionEnd = body.indexOf('</section>', sectionStart);
          const sectionHtml = body.substring(sectionStart, sectionEnd);
          
          const ctas = (sectionHtml.match(/class="asp-btn-outline"/g) || []).length;
          if (ctas !== 6) routeErrors.push(`WhatWeDo Explore ASP CTA count mismatch. Expected 6, got ${ctas}`);
          
          const images = (sectionHtml.match(/<img[^>]*>/g) || []).length;
          if (images !== 0) routeErrors.push(`WhatWeDo Explore ASP image count mismatch. Expected 0 (baseline had 0), got ${images}`);
        }
      }
    }

    if (route.match(/^\/(commercial-management|technical-management|marine-consultancy|crew-management|sea-transportation)$/)) {
      if (!body.includes('banner-media')) routeErrors.push(`${route} missing Hero`);
      if (!body.includes('intro-img-wrap')) routeErrors.push(`${route} missing Primary Intro`);
      
      const hwwStart = body.indexOf('how-we-work-grid');
      if (hwwStart === -1) {
        routeErrors.push(`${route} missing How We Work`);
      } else {
        const hwwEnd = body.indexOf('</section>', hwwStart);
        const hwwHtml = body.substring(hwwStart, hwwEnd !== -1 ? hwwEnd : undefined);
        const h3Count = (hwwHtml.match(/<h3/g) || []).length;
        if (h3Count !== 4) routeErrors.push(`${route} How We Work process items expected 4, got ${h3Count}`);

        const imgMatches = hwwHtml.match(/<img[^>]*src="([^"]+)"/g) || [];
        if (imgMatches.length === 0) routeErrors.push(`${route} How We Work missing image tag`);
        else {
          const srcMatch = imgMatches[0].match(/src="([^"]+)"/);
          if (srcMatch && srcMatch[1]) {
            let imgUrl = srcMatch[1];
            if (imgUrl.includes('_next/image?url=')) {
               const parsedUrl = new URL(imgUrl, 'http://localhost');
               imgUrl = decodeURIComponent(parsedUrl.searchParams.get('url'));
            }
            const publicPath = require('path').join(process.cwd(), 'public', imgUrl.split('?')[0]);
            if (!require('fs').existsSync(publicPath)) {
              routeErrors.push(`${route} How We Work image file missing on disk: ${imgUrl}`);
            }
          }
        }
      }

      if (!body.includes('Our Services') && !body.includes('Advisory Services') && !body.includes('Voyage Operations') && !body.includes('Commercial Activity') && !body.includes('Technical Disciplines') && !body.includes('Roles that drive performance')) {
        routeErrors.push(`${route} missing capabilities/bespoke blocks`);
      }

      const faqItems = (body.match(/class="faq-details"/g) || body.match(/<details/g) || []).length;
      if (faqItems !== 6) routeErrors.push(`${route} FAQ items expected 6, got ${faqItems}`);

      const relatedStart = body.indexOf('Explore more');
      if (relatedStart !== -1) {
        const relatedHtml = body.substring(relatedStart, body.indexOf('</section>', relatedStart));
        const cards = (relatedHtml.match(/class="[^"]*card-page-link/g) || []).length;
        if (cards !== 3) routeErrors.push(`${route} Related Services cards expected 3, got ${cards}`);
      } else {
        routeErrors.push(`${route} missing Related Services section`);
      }
    }

    if (routeErrors.length > 0) {
      results.failed++;
      results.criticalRegressions += routeErrors.length;
      results.failures.push({ route, errors: routeErrors });
      console.log(`❌ FAIL: ${route}`);
      routeErrors.forEach(e => console.log(`   - ${e}`));
    } else {
      results.passed++;
      console.log(`✅ PASS: ${route}`);
    }
  }
  
  results.admin = { tested: 0, passed: 0, failed: 0, failures: [] };
  for (const route of adminRoutes) {
    results.admin.tested++;
    const issues = [];
    if (!routesToTest.includes(route)) issues.push('Route absent from build manifest');
    // Anonymous GET only: never submit credentials or mutate authentication state.
    const { status, body = '', headers = {}, error } = await fetchPage(BASE_URL + route);
    if (error) issues.push(`Connection Error: ${error}`);
    else if (route === '/admin/login') {
      if (status !== 200) issues.push(`Login HTTP ${status}, expected 200`);
      if (!headers['content-type']?.includes('text/html')) issues.push('Login did not render HTML');
      if (!body.includes('ASP Admin') || !body.includes('<form')
        || !/\btype="email"/.test(body) || !/\btype="password"/.test(body)) {
        issues.push('Login form did not render');
      }
      issues.push(...checkBindings(body));
    } else {
      if (![302, 303, 307, 308].includes(status)) {
        issues.push(`Anonymous admin HTTP ${status}, expected login redirect`);
      }
      try {
        if (!headers.location) throw new Error('Missing Location');
        const target = new URL(headers.location, BASE_URL);
        if (target.origin !== new URL(BASE_URL).origin || target.pathname !== '/admin/login'
          || target.searchParams.get('redirectTo') !== route) {
          issues.push('Admin redirect must target same-origin login and preserve redirectTo');
        }
      } catch {
        issues.push('Missing or invalid admin login redirect');
      }
    }
    if (issues.length) {
      results.admin.failed++;
      results.admin.failures.push({ route, errors: issues });
      console.log(`FAIL (admin): ${route}`);
      issues.forEach(issue => console.log(`   - ${issue}`));
    } else {
      results.admin.passed++;
      console.log(`PASS (admin): ${route}`);
    }
  }

  const artifactsDir = path.join(__dirname, '..', 'artifacts', 'frontend-regression');
  if (!fs.existsSync(artifactsDir)) fs.mkdirSync(artifactsDir, { recursive: true });
  fs.writeFileSync(path.join(artifactsDir, 'report.json'), JSON.stringify(results, null, 2));
  
  console.log('\n=== AUDIT COMPLETE ===');
  console.log(`Tested: ${results.tested}`);
  console.log(`Passed: ${results.passed}`);
  console.log(`Failed: ${results.failed}`);
  console.log(`Admin: ${results.admin.passed} / ${results.admin.tested} passed; ${results.admin.failed} failed`);
  
  if (results.criticalRegressions > 0 || results.admin.failed > 0) {
    process.exit(1);
  }
}

runAudit().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
