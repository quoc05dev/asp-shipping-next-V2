const fs = require('fs');
const path = require('path');

const routes = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

for (const route of routes) {
  console.log(`Processing ${route.legacyPath} -> ${route.nextPath}`);
  let html = fs.readFileSync(route.legacyPath, 'utf8');

  const breadcrumbMatch = html.match(/<div class="site-breadcrumb[\s\S]*?<\/nav>\s*<\/div>/);
  const breadcrumbHtml = breadcrumbMatch ? breadcrumbMatch[0] : '';

  const mainMatch = html.match(/<main id="siteMain"[\s\S]*?<\/main>/);
  let mainHtml = mainMatch ? mainMatch[0] : '';

  let combined = breadcrumbHtml + '\n' + mainHtml;
  let jsx = combined;

  // STRIP ALL SCRIPT TAGS
  jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/<hr([^>]*)>/g, (m, p) => p.endsWith('/') ? m : `<hr${p}/>`);
  jsx = jsx.replace(/<img([^>]*)>/g, (m, p) => p.endsWith('/') ? m : `<img${p}/>`);
  jsx = jsx.replace(/<br([^>]*)>/g, (m, p) => p.endsWith('/') ? m : `<br${p}/>`);
  jsx = jsx.replace(/<input([^>]*)>/g, (m, p) => p.endsWith('/') ? m : `<input${p}/>`);
  jsx = jsx.replace(/<meta([^>]*)>/g, (m, p) => p.endsWith('/') ? m : `<meta${p}/>`);
  jsx = jsx.replace(/<link([^>]*)>/g, (m, p) => p.endsWith('/') ? m : `<link${p}/>`);
  jsx = jsx.replace(/<source([^>]*)>/g, (m, p) => p.endsWith('/') ? m : `<source${p}/>`);

  jsx = jsx.replace(/itemscope="itemscope"/gi, 'itemScope');
  jsx = jsx.replace(/itemscope([^a-zA-Z=])/gi, 'itemScope$1');
  jsx = jsx.replace(/itemtype/gi, 'itemType');
  jsx = jsx.replace(/itemprop/gi, 'itemProp');
  jsx = jsx.replace(/xmlns:xlink="[^"]*"/gi, '');
  jsx = jsx.replace(/xlink:href/gi, 'xlinkHref');
  jsx = jsx.replace(/xml:lang="[^"]*"/gi, '');
  jsx = jsx.replace(/contrast="[^"]*"/gi, '');
  jsx = jsx.replace(/ccp-para(?:="[^"]*")?/gi, '');
  jsx = jsx.replace(/ccp-props="[^"]*"/gi, '');
  jsx = jsx.replace(/datetime=/gi, 'dateTime=');
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
  jsx = jsx.replace(/uid="[^"]*"/g, '');
  jsx = jsx.replace(/index="[^"]*"/g, '');

  // Strip Alpine/Vue attributes
  jsx = jsx.replace(/\s+x-[a-zA-Z0-9:-]+="[^"]*"/g, '');
  jsx = jsx.replace(/\s+x-[a-zA-Z0-9:-]+/g, '');
  jsx = jsx.replace(/\s+@[a-zA-Z0-9:.-]+="[^"]*"/g, '');
  jsx = jsx.replace(/\s+:[a-zA-Z0-9:-]+="[^"]*"/g, '');
  
  jsx = jsx.replace(/<noscript>[\s\S]*?<\/noscript>/gi, '');
  jsx = jsx.replace(/<template[\s\S]*?>/gi, ''); 
  jsx = jsx.replace(/<\/template>/gi, ''); 

  jsx = jsx.replace(/worlds/g, 'world&apos;s');
  jsx = jsx.replace(/customers/g, 'customers&apos;');
  jsx = jsx.replace(/Small  a/g, 'Small - a');
  jsx = jsx.replace(/5  6%/g, '5 - 6%');
  jsx = jsx.replace(/last mile/g, '&apos;last mile&apos;');
  jsx = jsx.replace(/spectrum  from/g, 'spectrum - from');
  jsx = jsx.replace(/2005  2012/g, '2005 - 2012');

  // SMART STYLE PARSER
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
    if (styles.includes('lang ===') || styles.includes('border:0; allowfullscreen=')) return '';

    const styleObj = {};
    styles.split(';').forEach(style => {
      if (!style.trim()) return;
      const parts = style.split(':');
      if (parts.length >= 2) {
        let key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        if (parts[0].trim().startsWith('--')) {
            key = parts[0].trim();
        }
        let value = parts.slice(1).join(':').trim();
        styleObj[key] = value;
      }
    });
    return `style={${JSON.stringify(styleObj)} as React.CSSProperties}`;
  });

  jsx = jsx.replace(/href="[^"]*\/wp-content\//g, 'href="/wp-content/');
  jsx = jsx.replace(/src="[^"]*\/wp-content\//g, 'src="/wp-content/');

  jsx = jsx.replace(/href="[^"]*\/about-us\/history\/index\.html"/g, 'href="/about-us/history"');
  jsx = jsx.replace(/href="[^"]*\/about-us\/leadership\/index\.html"/g, 'href="/about-us/leadership"');
  jsx = jsx.replace(/href="[^"]*\/about-us\/vision-mission-values\/index\.html"/g, 'href="/about-us/vision-mission-values"');
  jsx = jsx.replace(/href="[^"]*\/about-us\/trades\/index\.html"/g, 'href="/about-us/trades"');
  jsx = jsx.replace(/href="[^"]*\/about-us\/index\.html"/g, 'href="/about-us"');
  
  jsx = jsx.replace(/href="([^"]+)\/index\.html"/g, (m, p) => {
    let clean = p;
    while(clean.startsWith('../')) clean = clean.substring(3);
    if (!clean.startsWith('/')) clean = '/' + clean;
    return `href="${clean}"`;
  });
  
  jsx = jsx.replace(/aria-hidden="true"/gi, 'aria-hidden="true"');
  jsx = jsx.replace(/playsinline="[^"]*"/gi, 'playsInline');
  jsx = jsx.replace(/\splaysinline\b/gi, ' playsInline');
  jsx = jsx.replace(/controls="controls"/g, 'controls');
  jsx = jsx.replace(/autoplay="autoplay"/g, 'autoPlay');
  jsx = jsx.replace(/muted="muted"/g, 'muted');
  jsx = jsx.replace(/loop="loop"/g, 'loop');
  jsx = jsx.replace(/frameborder=/gi, 'frameBorder=');
  jsx = jsx.replace(/allowfullscreen(?:="[^"]*")?/gi, 'allowFullScreen={true}');
  jsx = jsx.replace(/referrerpolicy=/gi, 'referrerPolicy=');

  jsx = jsx.replace(/novalidate(?:="[^"]*")?/gi, 'noValidate');
  jsx = jsx.replace(/maxlength="([0-9]+)"/gi, 'maxLength={$1}');
  jsx = jsx.replace(/tabindex="([0-9]+)"/gi, 'tabIndex={$1}');
  jsx = jsx.replace(/<span([^>]*)name="[^"]*"([^>]*)>/gi, '<span$1$2>');
  jsx = jsx.replace(/size="([0-9]+)"/gi, 'size={$1}');
  jsx = jsx.replace(/aria-required="[^"]*"/gi, 'aria-required="true"');
  jsx = jsx.replace(/aria-invalid="[^"]*"/gi, 'aria-invalid="false"');
  jsx = jsx.replace(/\svalue="/gi, ' defaultValue="');
  jsx = jsx.replace(/\sstatus="[^"]*"/gi, '');
  jsx = jsx.replace(/autocomplete="[^"]*"/gi, 'autoComplete="off"');
  
  jsx = jsx.replace(/\sclass(?=>|\s)/gi, ''); 
  jsx = jsx.replace(/cols="([0-9]+)"/gi, 'cols={$1}');
  jsx = jsx.replace(/rows="([0-9]+)"/gi, 'rows={$1}');
  jsx = jsx.replace(/required(?:="[^"]*")?/gi, 'required={true}');
  jsx = jsx.replace(/disabled(?:="[^"]*")?/gi, 'disabled={true}');
  jsx = jsx.replace(/readonly(?:="[^"]*")?/gi, 'readOnly={true}');

  const page = `import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <div className="legacy-inner-page page wp-theme-restless-theme">
        <div id="page" className="site">
          <div id="content" className="site-content">
            ${jsx}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
`;

  fs.mkdirSync(path.dirname(route.nextPath), { recursive: true });
  fs.writeFileSync(route.nextPath, page);
}
console.log("Done");
