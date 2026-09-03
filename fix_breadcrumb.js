const fs = require('fs');
const path = require('path');

const routes = JSON.parse(fs.readFileSync('family_all.json', 'utf8'));

routes.forEach(route => {
  const filePath = route.nextPath;
  let content = fs.readFileSync(filePath, 'utf8');
  
  let relPath = filePath.replace('app/', '').replace('/page.tsx', '').replace('app\\', '').replace('\\page.tsx', '');
  relPath = relPath.replace(/\\/g, '/');
  if (relPath === 'page.tsx') relPath = '';
  
  const parts = relPath.split('/');
  
  let newBreadcrumb = `<div className="site-breadcrumb u-text-size-small" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', backgroundColor: '#f8f9fa' }}>\n` +
  `  <div className="container container-w-outer container-max container-rfs">\n` +
  `    <ol className="breadcrumb" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>\n`;
  
  let trail = [];
  trail.push({ name: 'Home', url: '/' });
  
  let currentUrl = '';
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i]) continue;
    currentUrl += '/' + parts[i];
    let name = parts[i].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    if (name === 'About Us') name = 'About Us';
    if (name === 'Contact Us') name = 'Contact Us';
    if (name === 'Lco2 Shipping') name = 'LCO2 Shipping';
    if (name === 'Policies Guidelines') name = 'Policies & Guidelines';
    if (name === 'Environmental Policy') name = 'Environmental Policy';
    if (name === 'Ship Recycling Policy') name = 'Ship Recycling Policy';
    if (name === 'Topics Of Materiality And Alignment') name = 'Topics of Materiality and Alignment';
    
    trail.push({ name: name, url: currentUrl });
  }

  trail.forEach((item, idx) => {
    const isLast = idx === trail.length - 1;
    newBreadcrumb += `      <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>\n`;
    newBreadcrumb += `        <a href="${item.url}" className="breadcrumb-link" style={{ color: '${isLast ? '#007236' : '#1a202c'}', fontWeight: '${isLast ? 'bold' : 'normal'}', textDecoration: 'none' }}>\n`;
    newBreadcrumb += `          <span className="breadcrumb-label">${item.name}</span>\n`;
    newBreadcrumb += `        </a>\n`;
    if (!isLast) {
      newBreadcrumb += `        <span className="breadcrumb-separator" style={{ margin: '0 0.75rem', color: '#007236', fontSize: '0.65em' }}>■</span>\n`;
    }
    newBreadcrumb += `      </li>\n`;
  });
  
  newBreadcrumb += `    </ol>\n  </div>\n</div>`;

  const regex = /<div className="site-breadcrumb[\s\S]*?<\/div>\s*<main id="siteMain"/;
  if (regex.test(content)) {
      content = content.replace(regex, newBreadcrumb + '\n            <main id="siteMain"');
      fs.writeFileSync(filePath, content);
      console.log('Fixed breadcrumb in', filePath);
  }
});
console.log("Done");
