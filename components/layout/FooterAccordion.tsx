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
      className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse footer-accordion-group ${id}`}
    >
      {/* Mobile Accordion Button */}
      <button
        type="button"
        className="collapse-toggle footer-mobile-button"
        onClick={() => setIsOpen(v => !v)}
        aria-expanded={isOpen}
        aria-controls={`${id}-submenu`}
      >
        <span>{title}</span>
        <span className="footer-accordion-chevron" data-open={isOpen}>
          <i className="icon icon-chevron-down ">
            <svg>
              <use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-down"></use>
            </svg>
          </i>
        </span>
      </button>

      {/* Desktop Navigation Link */}
      <a
        title={title}
        href={href}
        aria-haspopup="true"
        aria-expanded="false"
        className="collapse-toggle footer-desktop-link"
        id={`${id}-collapse`}
      >
        <span>{title}</span>
        <span className="collapse-toggle-icon collapse-toggle-icon-close">
          <i className="icon icon-chevron-up ">
            <svg>
              <use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-up"></use>
            </svg>
          </i>
        </span>
        <span className="collapse-toggle-icon collapse-toggle-icon-open">
          <i className="icon icon-chevron-down ">
            <svg>
              <use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-down"></use>
            </svg>
          </i>
        </span>
      </a>

      {/* Submenu */}
      <div className="footer-submenu-wrapper" data-open={isOpen}>
        <div className="footer-submenu-inner">
          <ul
            className="collapse-body"
            aria-labelledby={`${id}-collapse`}
            id={`${id}-submenu`}
          >
            {children}
          </ul>
        </div>
      </div>
    </li>
  );
}
