"use client";

import React, { useState, useEffect } from 'react';

interface FooterAccordionProps {
  id: string;
  title: string;
  href: string;
  children: React.ReactNode;
}

export default function FooterAccordion({ id, title, href, children }: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <li
      itemScope={true}
      itemType="https://www.schema.org/SiteNavigationElement"
      id={id}
      className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children collapse ${id}`}
    >
      {isMobile ? (
        <button
          type="button"
          className="collapse-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`${id}-submenu`}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            background: 'none',
            border: 'none',
            padding: 0,
            textAlign: 'left',
            cursor: 'pointer',
            color: 'inherit',
            font: 'inherit'
          }}
        >
          <span>{title}</span>
          <span
            className="footer-accordion-chevron"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 180ms ease'
            }}
          >
            <i className="icon icon-chevron-down ">
              <svg>
                <use xlinkHref="/wp-content/themes/restless-theme/dist/spritec014.svg?id=bb172546dccb03016c04220a1b27ff75#chevron-down">
                </use>
              </svg>
            </i>
          </span>
        </button>
      ) : (
        <a
          title={title}
          href={href}
          aria-haspopup="true"
          aria-expanded="false"
          className="collapse-toggle"
          id={`${id}-collapse`}
        >
          <span>{title}</span>
        </a>
      )}

      <div
        style={
          isMobile
            ? {
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 300ms ease'
              }
            : { display: 'block' }
        }
      >
        <div style={isMobile ? { overflow: 'hidden' } : {}}>
          <ul
            className="collapse-body"
            aria-labelledby={`${id}-collapse`}
            id={`${id}-submenu`}
            style={isMobile ? { paddingBottom: isOpen ? '16px' : '0' } : {}}
          >
            {children}
          </ul>
        </div>
      </div>
    </li>
  );
}
