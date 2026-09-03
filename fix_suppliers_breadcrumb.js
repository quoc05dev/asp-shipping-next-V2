const fs = require('fs');
let content = fs.readFileSync('app/suppliers/page.tsx', 'utf8');

let newBreadcrumb = `<div className="site-breadcrumb u-text-size-small" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', backgroundColor: '#f8f9fa' }}>\n` +
`  <div className="container container-w-outer container-max container-rfs">\n` +
`    <ol className="breadcrumb" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>\n`;

let trail = [
  { name: 'Home', url: '/' },
  { name: 'Suppliers', url: '/suppliers' }
];

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

content = content.replace(/<div className="site-breadcrumb[\s\S]*?<\/div>\s*<\/div>/, newBreadcrumb + '\n</div>');
fs.writeFileSync('app/suppliers/page.tsx', content);
