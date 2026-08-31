import fs from 'node:fs';
import path from 'node:path';

const pagePath = path.resolve('./app/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const headerStart = pageContent.indexOf('<header id="siteHeader"');

let currentIndex = headerStart;
let depth = 0;
let headerEnd = -1;

while (currentIndex < pageContent.length) {
    const nextOpen = pageContent.indexOf('<header', currentIndex);
    const nextClose = pageContent.indexOf('</header>', currentIndex);
    
    if (nextClose === -1) break; // Error

    if (nextOpen !== -1 && nextOpen < nextClose) {
        depth++;
        currentIndex = nextOpen + 7;
    } else {
        depth--;
        currentIndex = nextClose + 9;
        if (depth === 0) {
            headerEnd = currentIndex;
            break;
        }
    }
}

if (headerStart === -1 || headerEnd === -1) {
    console.error('Could not find header boundaries');
    process.exit(1);
}

const headerMarkup = pageContent.substring(headerStart, headerEnd);

const headerComponent = `"use client";
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Using 10px as threshold to prevent micro-bounces.
            // This replaces the obscured legacy Alpine scroll listener
            // while utilizing the exact legacy CSS class '.is-stuck'.
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (id: string) => {
        setActiveMegaMenu(id);
    };

    const handleMouseLeave = () => {
        setActiveMegaMenu(null);
    };

    return (
        <>
            ${headerMarkup
                .replace(/<header([^>]*)>/, '<header$1 className={`site-header site-header-transparent ${isScrolled ? "active is-stuck" : ""}`}>')
                .replace(/x-data="[^"]*"/g, '')
                .replace(/x-scroll-lock=""/g, '')
                .replace(/x-site-header="[^"]*"/g, '')
                .replace(/x-effect="[^"]*"/g, '')
                .replace(/@offcanvas-[a-z]+="[^"]*"/g, '')
                .replace(/@mouseenter="[^"]*"/g, '')
                .replace(/@mouseleave="[^"]*"/g, '')
                .replace(/x-mega-nav=""/g, '')
                .replace(/x-mega-nav:toggle=""/g, '')
                .replace(/x-mega-nav:body=""/g, '')
                .replace(/x-mega-nav:item=""/g, '')
                .replace(/x-mega-nav:backdrop=""/g, '')
                .replace(/x-mega-nav.nested=""/g, '')
                .replace(/x-mega-nav:back=""/g, '')
                .replace(/x-mega-nav:fragment="[^"]*"/g, '')
                .replace(/x-site-header:el=""/g, '')
                .replace(/x-offcanvas="[^"]*"/g, '')
                .replace(/x-offcanvas:toggle=""/g, '')
                .replace(/x-offcanvas:el=""/g, '')
                .replace(/x-offcanvas:inner="[^"]*"/g, '')
                .replace(/x-nav-slider=""/g, '')
                .replace(/x-nav-slider:list=""/g, '')
                .replace(/x-nav-slider:toggle=""/g, '')
                .replace(/x-init="[^"]*"/g, '')
                .replace(/x-teleport="[^"]*"/g, '')
                .replace(/x-cloak=""/g, '')
                .replace(/x-show="[^"]*"/g, '')
                .replace(/@hashchange\.window="[^"]*"/g, '')
                .replace(/@offcanvas-close="[^"]*"/g, '')
                .replace(/:class="[^"]*"/g, '')
                .replace(/:style="[^"]*"/g, '')
                .replace(/@click\.prevent="[^"]*"/g, '')
                .replace(/<template[^>]*>/g, '')
                .replace(/<\/template>/g, '')
                // Inject Mega Menu logic for specific items
                // 1. About Us (menu-item-53)
                .replace(/<li[^>]*id="menu-item-53"([^>]*)>/g, '<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-53" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-53 ${activeMegaMenu === "menu-item-53" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-53")} onMouseLeave={handleMouseLeave}>')
                // 2. Sustainability (menu-item-68)
                .replace(/<li[^>]*id="menu-item-68"([^>]*)>/g, '<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-68" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-68 ${activeMegaMenu === "menu-item-68" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-68")} onMouseLeave={handleMouseLeave}>')
                // 3. Media (menu-item-61)
                .replace(/<li[^>]*id="menu-item-61"([^>]*)>/g, '<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-61" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-61 ${activeMegaMenu === "menu-item-61" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-61")} onMouseLeave={handleMouseLeave}>')
                // 4. Careers (menu-item-58)
                .replace(/<li[^>]*id="menu-item-58"([^>]*)>/g, '<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-58" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-58 ${activeMegaMenu === "menu-item-58" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-58")} onMouseLeave={handleMouseLeave}>')
                // 5. Suppliers (menu-item-2014)
                .replace(/<li[^>]*id="menu-item-2014"([^>]*)>/g, '<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-2014" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-2014 ${activeMegaMenu === "menu-item-2014" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-2014")} onMouseLeave={handleMouseLeave}>')
                // 6. Our Fleet (menu-item-73)
                .replace(/<li[^>]*id="menu-item-73"([^>]*)>/g, '<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-73" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-73 ${activeMegaMenu === "menu-item-73" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-73")} onMouseLeave={handleMouseLeave}>')
                // 7. Contact Us (menu-item-76)
                .replace(/<li[^>]*id="menu-item-76"([^>]*)>/g, '<li itemScope={true} itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-76" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-nav-item menu-item-76 ${activeMegaMenu === "menu-item-76" ? "is-active" : ""}`} onMouseEnter={() => handleMouseEnter("menu-item-76")} onMouseLeave={handleMouseLeave}>')
                // Update Language Switcher inline styles to remove Alpine dependencies and keep it static DEFERRED
                .replace(/style=\{\{display: "flex", alignItems: "center", fontWeight: "700", fontSize: "1rem"\}\}/g, 'style={{display: "flex", alignItems: "center", fontWeight: "700", fontSize: "1rem"}}')
                // Fix generic class string in header if it exists
                .replace(/className="site-header site-header-transparent"/g, '') // Handled by first replacement
            }
            {activeMegaMenu && <div className="mega-nav-backdrop"></div>}
        </>
    );
}
`;

fs.mkdirSync(path.resolve('./components/layout'), { recursive: true });
fs.writeFileSync(path.resolve('./components/layout/Header.tsx'), headerComponent);

// Replace in page.tsx
pageContent = pageContent.substring(0, headerStart) + '<Header />' + pageContent.substring(headerEnd);

// Add import
if (!pageContent.includes('import Header')) {
    pageContent = pageContent.replace("import Head from 'next/head';", "import Head from 'next/head';\nimport Header from '@/components/layout/Header';");
}

fs.writeFileSync(pagePath, pageContent);

console.log('Extraction complete.');
