const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const legacyDir = path.join(__dirname, '../../legacy-approved');
const publicDir = path.join(__dirname, '../public');
const htmlPath = path.join(legacyDir, 'index.html');

const html = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(html);

const assetsToCopy = new Set();

// 1. Find all img src and srcset
$('img').each((i, el) => {
    const src = $(el).attr('src');
    if (src && !src.startsWith('http') && !src.startsWith('data:')) assetsToCopy.add(src);
    
    const dataSrc = $(el).attr('data-src');
    if (dataSrc && !dataSrc.startsWith('http') && !dataSrc.startsWith('data:')) assetsToCopy.add(dataSrc);

    const srcset = $(el).attr('srcset') || $(el).attr('data-srcset');
    if (srcset) {
        const parts = srcset.split(',');
        parts.forEach(part => {
            const url = part.trim().split(' ')[0];
            if (url && !url.startsWith('http') && !url.startsWith('data:')) assetsToCopy.add(url);
        });
    }
});

// 2. Find all video sources
$('video source').each((i, el) => {
    const src = $(el).attr('src');
    if (src && !src.startsWith('http') && !src.startsWith('data:')) assetsToCopy.add(src);
});
$('video').each((i, el) => {
    const poster = $(el).attr('poster');
    if (poster && !poster.startsWith('http') && !poster.startsWith('data:')) assetsToCopy.add(poster);
    const src = $(el).attr('src');
    if (src && !src.startsWith('http') && !src.startsWith('data:')) assetsToCopy.add(src);
});

// 3. SVG Sprite
$('use').each((i, el) => {
    let href = $(el).attr('href') || $(el).attr('xlink:href');
    if (href && href.includes('#')) {
        href = href.split('#')[0];
        if (href && !href.startsWith('http') && !href.startsWith('data:')) assetsToCopy.add(href);
    }
});

// 4. Background images in inline styles
const urlRegex = /url\(['"]?(.*?)['"]?\)/g;
let match;
while ((match = urlRegex.exec(html)) !== null) {
    const url = match[1];
    if (url && !url.startsWith('http') && !url.startsWith('data:') && !url.startsWith('#')) {
        assetsToCopy.add(url);
    }
}

// 5. CSS files referenced
$('link[rel="stylesheet"], link[as="style"]').each((i, el) => {
    const href = $(el).attr('href');
    if (href && !href.startsWith('http')) assetsToCopy.add(href);
});

// Also grab the logo from the <link rel="icon">
$('link[rel="icon"], link[rel="apple-touch-icon"]').each((i, el) => {
    const href = $(el).attr('href');
    if (href && !href.startsWith('http')) assetsToCopy.add(href);
});

// Add the sprite explicitly just in case
assetsToCopy.add('wp-content/themes/restless-theme/dist/spritec014.svg');

let copiedCount = 0;
let missingCount = 0;

console.log('--- STARTING ASSET COPY ---');
assetsToCopy.forEach(assetPath => {
    // Strip query strings if any
    const cleanPath = assetPath.split('?')[0];
    const sourcePath = path.join(legacyDir, cleanPath);
    const destPath = path.join(publicDir, cleanPath);

    if (fs.existsSync(sourcePath)) {
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.copyFileSync(sourcePath, destPath);
        copiedCount++;
    } else {
        console.log(`MISSING: ${cleanPath}`);
        missingCount++;
    }
});

console.log(`\nCopied: ${copiedCount} files`);
console.log(`Missing: ${missingCount} files`);
