import React from 'react';
import { cmsRepository } from '@/data/cms/repository';
import { requirePageSection } from '@/data/cms/requirePageSection';
import ChairmanTypewriter from './ChairmanTypewriter';

export default async function ChairmanMessage() {
  const chairman = await requirePageSection('home', 'home_chairman');
  if (!chairman) return null;
  return (
    <>
{/*  Chairman Message Section  */}
<section id="chairman-message-section" style={{width: "100%", }} data-cms-section="chairman_message">
  <div className="container container-max">
    <div style={{maxWidth: "1000px", marginInline: "auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", }}>
      <div style={{fontSize: "0.75rem", letterSpacing: "2px", fontWeight: "700", color: "var(--theme-color-primary, #007236)", textTransform: "uppercase", marginBottom: "24px", }} data-cms-field="subtitle">
        {chairman.content.subtitle}
      </div>
      
      <div style={{color: "var(--theme-color-primary, #007236)", fontSize: "4rem", lineHeight: "1", fontFamily: "Georgia, serif", marginBottom: "8px", }}>
        “
      </div>
      
      <div style={{fontSize: "clamp(1.6rem, 2.5vw, 2.6rem)", fontWeight: "600", lineHeight: "1.35", color: "var(--asp-ink, #2d2d2d)", marginBottom: "24px", }} data-cms-field="quote">
        <ChairmanTypewriter quote={chairman.content.quote} />
      </div>
      
      <div style={{color: "var(--theme-color-primary, #007236)", fontSize: "4rem", lineHeight: "1", fontFamily: "Georgia, serif", marginBottom: "36px", }}>
        ”
      </div>
      
      <div>
        <div style={{fontSize: "1.125rem", fontWeight: "700", color: "var(--asp-ink, #2d2d2d)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", }} data-cms-field="name">{chairman.content.name}</div>
        <div style={{fontSize: "0.875rem", color: "#666", }} data-cms-field="title">{chairman.content.role}</div>
      </div>
    </div>
  </div>
</section>
{/*  /Chairman Message Section  */}

    </>
  );
}
