const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const htmlPath = path.join(__dirname, '../../legacy-approved/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const $ = cheerio.load(html);

// 1. Extract critical CSS
let criticalCss = '';
const criticalStyle = $('#rstl\\/css\\/critical-inline-css');
if (criticalStyle.length > 0) {
    criticalCss = criticalStyle.html();
    fs.writeFileSync(path.join(__dirname, '../styles/legacy-critical.css'), criticalCss.trim(), 'utf8');
    console.log('Extracted legacy-critical.css');
} else {
    console.log('CRITICAL CSS NOT FOUND');
}

// 2. Extract custom CSS (all other <style> tags)
let customCss = '';
$('style').each((i, el) => {
    const id = $(el).attr('id');
    // Skip the critical CSS and some known wordpress/classic-theme ones if needed, 
    // but the instruction says "Tìm tất cả <style> và các custom CSS... Extract sang legacy-custom.css"
    if (id !== 'rstl/css/critical-inline-css') {
        customCss += `/* Extracted inline style ${id ? '#' + id : i} */\n`;
        customCss += $(el).html().trim() + '\n\n';
    }
});

if (customCss) {
    fs.writeFileSync(path.join(__dirname, '../styles/legacy-custom.css'), customCss.trim(), 'utf8');
    console.log('Extracted legacy-custom.css');
}
