'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function HeroVideoBackground() {
  const [activeVideo, setActiveVideo] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setHasMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!hasMounted || prefersReducedMotion) return;

    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    const handleV1Ended = () => {
      v2.currentTime = 0;
      v2.play().catch(() => {});
      setActiveVideo(2);
    };

    const handleV2Ended = () => {
      v1.currentTime = 0;
      v1.play().catch(() => {});
      setActiveVideo(1);
    };

    v1.addEventListener('ended', handleV1Ended);
    v2.addEventListener('ended', handleV2Ended);

    // Auto-play the first video on mount
    v1.play().catch(() => {});

    return () => {
      v1.removeEventListener('ended', handleV1Ended);
      v2.removeEventListener('ended', handleV2Ended);
    };
  }, [hasMounted, prefersReducedMotion]);

  if (!hasMounted || prefersReducedMotion) {
    return null;
  }

  const commonStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 150ms ease',
    pointerEvents: 'none',
  };

  return (
    <>
      <video
        ref={video1Ref}
        src="/videos/home/asp-luna-1.mp4"
        muted
        playsInline
        style={{
          ...commonStyle,
          opacity: activeVideo === 1 ? 1 : 0,
        }}
      />
      <video
        ref={video2Ref}
        src="/videos/home/asp-luna-2.mp4"
        muted
        playsInline
        style={{
          ...commonStyle,
          opacity: activeVideo === 2 ? 1 : 0,
        }}
      />
    </>
  );
}
