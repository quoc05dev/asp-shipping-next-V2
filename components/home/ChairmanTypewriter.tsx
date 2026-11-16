'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ChairmanTypewriterProps {
  quote: string;
}

export default function ChairmanTypewriter({ quote }: ChairmanTypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [prefersReducedMotionState, setPrefersReducedMotionState] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Typewriter logic
  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time media query read on mount
    setPrefersReducedMotionState(prefersReducedMotion);
    
    if (!isVisible) {
      // Off-screen: Reset cleanly
      setDisplayedText('');
      setIsTyping(false);
      return;
    }
    
    if (prefersReducedMotion) {
      // Reduced motion: Show instantly
      setDisplayedText(quote);
      setIsTyping(false);
      return;
    }
    
    // Start typing loop
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = (currentText: string) => {
      setIsTyping(true);
      
      if (currentText.length < quote.length) {
        timeoutId = setTimeout(() => {
          const nextText = quote.slice(0, currentText.length + 1);
          setDisplayedText(nextText);
        }, 40); // 40ms typing speed
      } else {
        // Finished typing
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          // Wait 1800ms before looping
          setDisplayedText('');
        }, 1800);
      }
    };
    
    startTyping(displayedText);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible, displayedText, quote]);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* 1. Screen Reader Only text */}
      <span className="u-visually-hidden">{quote}</span>
      
      {/* 2. Invisible Geometry Preserver */}
      <div style={{ visibility: 'hidden' }} aria-hidden="true">
        {quote}
      </div>
      
      {/* 3. Animated Visible Text */}
      <div 
        aria-hidden="true" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%' 
        }}
      >
        {displayedText}
        {!prefersReducedMotionState && (
          <span style={{ position: 'relative' }}>
            <span 
              style={{ 
                position: 'absolute',
                left: '2px',
                bottom: '0',
                width: '1px',
                height: '0.85em',
                backgroundColor: 'var(--theme-color-primary, #007236)',
                animation: 'blink 800ms step-end infinite',
              }}
            />
          </span>
        )}
      </div>
      
      {/* Caret blink animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}} />
    </div>
  );
}
