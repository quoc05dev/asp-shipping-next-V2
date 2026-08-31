const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlPath = path.join(__dirname, '../../legacy-approved/index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Pre-process: fix the missing assets in the raw HTML string
html = html.replace(/asp-luna-aerial-aft\.png/g, 'asp-luna-aerial-aft.webp');
html = html.replace(/p2\.png/g, 'p2.jpg');
html = html.replace(/asp-titan-sunset\.png/g, 'asp-titan-sunset.webp');

// Remove the Yoast SEO schema and other <script> tags from body if any
// But actually we just want the body content
const $ = cheerio.load(html);

// Remove scripts, noscripts, and style tags (styles were extracted in Phase 4)
$('script').remove();
$('noscript').remove();
$('style').remove();
const bodyContent = $('body');
// Remove the SVGO hidden sprite if we are keeping the external sprite, but let's keep it to be safe if it's there
// Actually, let's just keep everything except scripts

// Recursively traverse and fix attributes for JSX
function fixNodeForJSX(node) {
    if (node.type === 'tag') {
        // Fix attributes
        if (node.attribs) {
            const newAttribs = {};
            for (const [key, value] of Object.entries(node.attribs)) {
                // Remove Alpine invalid JSX attributes (start with @ or : or contain .)
                if (key.startsWith('@') || key.startsWith(':') || key.startsWith('x-bind:') || key.includes('.')) {
                    continue;
                }

                let newKey = key;
                // React specific renames. Note: cheerio might lowercase these later if not careful.
                if (key === 'class') newKey = 'className';
                else if (key === 'for') newKey = 'htmlFor';
                else if (key === 'tabindex') newKey = 'tabIndex';
                else if (key === 'maxlength') newKey = 'maxLength';
                else if (key === 'readonly') newKey = 'readOnly';
                else if (key === 'xlink:href') newKey = 'xlinkHref';
                else if (key === 'allowfullscreen') newKey = 'allowFullScreen';
                else if (key === 'srcset') newKey = 'srcSet';
                else if (key === 'autocomplete') newKey = 'autoComplete';
                else if (key === 'datetime') newKey = 'dateTime';
                else if (key === 'playsinline') newKey = 'playsInline';
                else if (key === 'autoplay') newKey = 'autoPlay';
                else if (key === 'crossorigin') newKey = 'crossOrigin';

                let newValue = value;
                
                // Fix relative wp-content paths
                if (newValue && typeof newValue === 'string') {
                    if (newValue.startsWith('wp-content/')) {
                        newValue = '/' + newValue;
                    }
                }

                // Inline styles are handled by regex later

                newAttribs[newKey] = newValue;
            }
            node.attribs = newAttribs;
        }

        // Recurse children
        if (node.children) {
            node.children.forEach(fixNodeForJSX);
        }
    }
}

function convertStyleToObjectString(styleStr) {
    // Basic conversion: "display: none; color: red;" -> "{{ display: 'none', color: 'red' }}"
    const rules = styleStr.split(';').filter(r => r.trim());
    let obj = {};
    rules.forEach(rule => {
        const parts = rule.split(':');
        if (parts.length >= 2) {
            let k = parts[0].trim();
            // camelCase
            k = k.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            const v = parts.slice(1).join(':').trim();
            obj[k] = v;
        }
    });
    return JSON.stringify(obj);
}

// Apply fixes to all children of body
bodyContent.children().each((i, el) => {
    fixNodeForJSX(el);
});

// Use xmlMode to ensure self-closing tags like <img />
let jsxHtml = $.html(bodyContent.children(), { xmlMode: true });

// Post-process the jsxHtml string
// Replace class="x" with className="x" because xmlMode might not respect the attribute rename if cheerio re-normalizes, 
// but we changed the attribs object so it should be fine.

// Replace data-jsx-style="{...}" with style={{...}}
jsxHtml = jsxHtml.replace(/<(img|br|hr|input|source|col)([^>]*?)\/?>/gi, '<$1$2 />');

jsxHtml = jsxHtml.replace(/\bstyle="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(r => r.trim());
    let styleStr = '{';
    rules.forEach(rule => {
        const parts = rule.split(':');
        if (parts.length >= 2) {
            let k = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            let v = parts.slice(1).join(':').trim().replace(/"/g, "'");
            styleStr += `${k}: "${v}", `;
        }
    });
    styleStr += '}';
    return `style={${styleStr}}`;
});

// React doesn't like HTML comments inside JSX without wrapper {/* */}
jsxHtml = jsxHtml.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Force react attribute names on the raw string just in case
jsxHtml = jsxHtml.replace(/\bclass="/g, 'className="');
jsxHtml = jsxHtml.replace(/\bfor="/g, 'htmlFor="');
jsxHtml = jsxHtml.replace(/\btabindex="/g, 'tabIndex="');
jsxHtml = jsxHtml.replace(/\bmaxlength="/g, 'maxLength="');
jsxHtml = jsxHtml.replace(/\breadonly="/g, 'readOnly="');
jsxHtml = jsxHtml.replace(/\bautocomplete="/g, 'autoComplete="');
jsxHtml = jsxHtml.replace(/\bdatetime="/g, 'dateTime="');
jsxHtml = jsxHtml.replace(/\bplaysinline="/g, 'playsInline="');
jsxHtml = jsxHtml.replace(/\bfetchpriority=/g, 'fetchPriority=');
jsxHtml = jsxHtml.replace(/\bautoplay"/g, 'autoPlay"');
jsxHtml = jsxHtml.replace(/\bcrossorigin"/g, 'crossOrigin"');
jsxHtml = jsxHtml.replace(/\bitemscope(="[^"]*")?/g, 'itemScope={true}');
jsxHtml = jsxHtml.replace(/\bitemtype="/g, 'itemType="');
jsxHtml = jsxHtml.replace(/\bitemprop="/g, 'itemProp="');
jsxHtml = jsxHtml.replace(/\bnovalidate(="[^"]*")?/gi, 'noValidate={true}');
jsxHtml = jsxHtml.replace(/\bindex="([^"]*)"/g, 'data-index="$1"');
jsxHtml = jsxHtml.replace(/\bmaxLength="(\d+)"/g, 'maxLength={$1}');
jsxHtml = jsxHtml.replace(/\bminLength="(\d+)"/g, 'minLength={$1}');
jsxHtml = jsxHtml.replace(/\btabIndex="(-?\d+)"/g, 'tabIndex={$1}');
jsxHtml = jsxHtml.replace(/\bsize="(\d+)"/g, 'size={$1}');
jsxHtml = jsxHtml.replace(/\brows="(\d+)"/g, 'rows={$1}');
jsxHtml = jsxHtml.replace(/\bcols="(\d+)"/g, 'cols={$1}');
jsxHtml = jsxHtml.replace(/<span([^>]*?)\bname="/gi, '<span$1data-name="');
jsxHtml = jsxHtml.replace(/<span([^>]*?)\bsize=\{/gi, '<span$1data-size=\{');
jsxHtml = jsxHtml.replace(/\buid="([^"]*)"/g, 'data-uid="$1"');
jsxHtml = jsxHtml.replace(/\bstatus="([^"]*)"/g, 'data-status="$1"');
jsxHtml = jsxHtml.replace(/xmlns:xlink/g, 'xmlnsXlink');
jsxHtml = jsxHtml.replace(/xlink:href/g, 'xlinkHref');
jsxHtml = jsxHtml.replace(/xml:space/g, 'xmlSpace');

// Remove attributes containing dots (Alpine modifiers) that slipped through
jsxHtml = jsxHtml.replace(/\s[a-zA-Z0-9_-]+\.[a-zA-Z0-9_.-]+(?:="[^"]*")?/g, '');
// Remove @ and : and x-bind: attributes (starting with them)
jsxHtml = jsxHtml.replace(/\s[@:][a-zA-Z0-9_.-]+(?:="[^"]*")?/g, '');
jsxHtml = jsxHtml.replace(/\sx-bind:[a-zA-Z0-9_.-]+(?:="[^"]*")?/g, '');
// Remove any remaining attributes that contain a colon in the middle (like x-collapse:body)
jsxHtml = jsxHtml.replace(/\s[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+(?:="[^"]*")?/g, '');

// Some tags like br, hr, img, input, source, path, rect might have been output as <img ...></img> in xmlMode if they were empty.
// xmlMode actually outputs self-closing <img /> so that's good.

const pageTsxContent = `import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      ${jsxHtml}
    </>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../app/page.tsx'), pageTsxContent, 'utf8');
console.log('Successfully generated app/page.tsx');
