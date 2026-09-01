const fs = require('fs');
const path = 'C:/Users/Administrator/Downloads/ASP_MIGRATION/asp-shipping-next/app/globals.css';
let css = fs.readFileSync(path, 'utf8');

const cssToAdd = `
/* Phase 10: Mobile Footer Accordion */
.footer-accordion-group .footer-mobile-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  cursor: pointer;
  color: inherit;
  font: inherit;
}

.footer-accordion-group .footer-desktop-link {
  display: none;
}

.footer-accordion-group .footer-accordion-chevron {
  transition: transform 180ms ease;
}

.footer-accordion-group .footer-accordion-chevron[data-open="true"] {
  transform: rotate(180deg);
}

.footer-accordion-group .footer-submenu-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms ease;
}

.footer-accordion-group .footer-submenu-wrapper[data-open="true"] {
  grid-template-rows: 1fr;
}

.footer-accordion-group .footer-submenu-inner {
  overflow: hidden;
}

/* OVERRIDE LEGACY CSS CONFLICTS */
.site-footer .footer-accordion-group:not(.active) .collapse-body {
  display: block !important;
  height: auto !important;
}

@media (min-width: 768px) {
  .footer-accordion-group .footer-mobile-button {
    display: none !important;
  }
  .footer-accordion-group .footer-desktop-link {
    display: flex !important;
  }
  .footer-accordion-group .footer-submenu-wrapper {
    display: block !important;
    grid-template-rows: none !important;
  }
}
`;

if (!css.includes('.footer-accordion-group')) {
  fs.writeFileSync(path, css + '\n' + cssToAdd, 'utf8');
  console.log('CSS added');
} else {
  console.log('CSS already exists');
}
