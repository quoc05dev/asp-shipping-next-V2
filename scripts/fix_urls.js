const fs = require('fs');
const path = require('path');

const stylesDir = path.join(__dirname, '../styles');
const files = fs.readdirSync(stylesDir).filter(f => f.endsWith('.css'));

let fixedCount = 0;

files.forEach(file => {
    const filePath = path.join(stylesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace url(wp-content/...) and url('wp-content/...') with url(/wp-content/...)
    // Also handle url("wp-content/...")
    const urlRegex = /url\(['"]?(wp-content\/.*?)['"]?\)/g;
    
    if (urlRegex.test(content)) {
        content = content.replace(urlRegex, 'url(/$1)');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed URLs in ${file}`);
        fixedCount++;
    }
});

console.log(`Fixed URLs in ${fixedCount} files`);
