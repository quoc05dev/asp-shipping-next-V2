const fs = require('fs');
const path = 'C:/Users/Administrator/Downloads/ASP_MIGRATION/asp-shipping-next/app/globals.css';
let css = fs.readFileSync(path, 'utf8');

const oldCssStart = css.indexOf('/* Phase 10: Mobile Footer Accordion */');
if (oldCssStart !== -1) {
  css = css.substring(0, oldCssStart);
}

const newCss = `/* Phase 10: Mobile Footer Accordion */
.footer-accordion-group .footer-accordion-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer-accordion-group .footer-parent-link {
  flex-grow: 1;
  padding: 8px 0;
  display: block;
}

.footer-accordion-group .footer-accordion-toggle {
  background: none;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
}

.footer-accordion-group .footer-accordion-toggle svg,
.footer-accordion-group .footer-accordion-toggle span {
  pointer-events: none;
}

.footer-accordion-group .footer-accordion-chevron {
  transition: transform 180ms ease;
  display: inline-block;
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

.footer-accordion-group .footer-accordion-content {
  padding-bottom: 16px;
  list-style: none;
  margin: 0;
  padding-left: 0;
}

@media (min-width: 768px) {
  .footer-accordion-group .footer-accordion-toggle {
    display: none !important;
  }
  .footer-accordion-group .footer-submenu-wrapper {
    display: block !important;
    grid-template-rows: none !important;
  }
  .footer-accordion-group .footer-accordion-content {
    display: block !important;
  }
}
`;

fs.writeFileSync(path, css + '\n' + newCss, 'utf8');
console.log('CSS updated');
