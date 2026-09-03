import React from 'react';
import ChairmanTypewriter from './ChairmanTypewriter';

export default function ChairmanMessage() {
  return (
    <>
{/*  Chairman Message Section  */}
<section id="chairman-message-section" style={{width: "100%", }} data-cms-section="chairman_message">
  <div className="container container-max">
    <div style={{maxWidth: "1000px", marginInline: "auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", }}>
      <div style={{fontSize: "0.75rem", letterSpacing: "2px", fontWeight: "700", color: "var(--theme-color-primary, #007236)", textTransform: "uppercase", marginBottom: "24px", }} data-cms-field="subtitle">
        A MESSAGE FROM OUR CHAIR
      </div>
      
      <div style={{color: "var(--theme-color-primary, #007236)", fontSize: "4rem", lineHeight: "1", fontFamily: "Georgia, serif", marginBottom: "8px", }}>
        “
      </div>
      
      <div style={{fontSize: "clamp(1.6rem, 2.5vw, 2.6rem)", fontWeight: "600", lineHeight: "1.35", color: "var(--asp-ink, #2d2d2d)", marginBottom: "24px", }} data-cms-field="quote">
        <ChairmanTypewriter quote="These vessels not only strengthen our fleet and let us serve clients more effectively — they reaffirm our dedication to advancing sustainable practices across the industry." />
      </div>
      
      <div style={{color: "var(--theme-color-primary, #007236)", fontSize: "4rem", lineHeight: "1", fontFamily: "Georgia, serif", marginBottom: "36px", }}>
        ”
      </div>
      
      <div>
        <div style={{fontSize: "1.125rem", fontWeight: "700", color: "var(--asp-ink, #2d2d2d)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", }} data-cms-field="name">NGUYEN QUYNH ANH</div>
        <div style={{fontSize: "0.875rem", color: "#666", }} data-cms-field="title">Chair, ASP</div>
      </div>
    </div>
  </div>
</section>
{/*  /Chairman Message Section  */}

    </>
  );
}
