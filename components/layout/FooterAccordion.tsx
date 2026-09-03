"use client";

import React, { useState } from 'react';

interface FooterAccordionProps {
  id: string;
  title: string;
  href: string;
  children: React.ReactNode;
}

export default function FooterAccordion({ id, title, href, children }: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      itemScope={true}
      itemType="https://www.schema.org/SiteNavigationElement"
      id={id}
      className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children footer-accordion-group ${id}`}
    >
      <div className="footer-accordion-heading">
        {/* Parent Navigation Link */}
        <a
          title={title}
          href={href}
          className="footer-parent-link"
          style={{ color: 'var(--asp-signal)' }}
        >
          <span>{title}</span>
        </a>

        {/* Mobile Accordion Toggle Button */}
        <button
          type="button"
          className="footer-accordion-toggle"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls={`${id}-submenu`}
          aria-label={`Toggle ${title} submenu`}
        >
          <span className="footer-accordion-chevron" data-open={isOpen}>
            <i className="icon icon-chevron-down">
              <svg>
                <use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-down"></use>
              </svg>
            </i>
          </span>
        </button>
      </div>

      {/* Submenu */}
      <div className="footer-submenu-wrapper" data-open={isOpen}>
        <div className="footer-submenu-inner">
          <ul
            className="footer-accordion-content"
            id={`${id}-submenu`}
          >
            {children}
          </ul>
        </div>
      </div>
    </li>
  );
}
