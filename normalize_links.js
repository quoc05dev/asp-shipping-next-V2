const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components/layout/Header.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace exactly href="index.html" with href="/"
content = content.replace(/href="index\.html"/g, 'href="/"');

// Replace href="folder/index.html" with href="/folder"
// This uses a regex to match href="some-path/index.html" or href="some-path/index.html#hash"
content = content.replace(/href="([^"#]+)\/index\.html(#[^"]+)?"/g, (match, path, hash) => {
    return `href="/${path}${hash || ''}"`;
});

// Also replace href="fleet-list/download/pdf/index.html" style (already handled by above)

fs.writeFileSync(filePath, content);
console.log('Normalized hrefs in Header.tsx');
