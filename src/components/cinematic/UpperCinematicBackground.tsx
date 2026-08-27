import React, { useEffect, useRef, useState } from 'react';

const UPPER_VIDEO_URL = "https://nmolabs-cdn.b-cdn.net/eventlive/website/home/backgrounds/videos/background-vid-1.mp4";

export const UpperCinematicBackground: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // IntersectionObserver to observe if the upper storytelling section is in or near viewport
  useEffect(() => {
    const el = containerRef.current?.parentElement;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '300px 0px 300px 0px',
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play/pause management
  useEffect(() => {
    if (prefersReducedMotion) {
      videoRef.current?.pause();
      return;
    }

    if (isInViewport) {
      if (videoRef.current) {
        const p = videoRef.current.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
      }
    } else {
      videoRef.current?.pause();
    }
  }, [isInViewport, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Pinned Sticky Viewport Container across the Upper Storytelling Zone */}
      <div className="sticky top-0 left-0 w-full h-[100svh] min-h-screen overflow-hidden">
        {prefersReducedMotion ? (
          <div className="absolute inset-0 bg-[#07090b]" />
        ) : (
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              src={UPPER_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            />
          </div>
        )}

        {/* Cinematic Readability & Handoff Overlays */}
        {/* Base dark translucent layer tuned for high visibility and crystal clear footage */}
        <div className="absolute inset-0 bg-[#050505]/25 z-10" />

        {/* Top seamless blend transition from Hero (#050505) into Chapter 1 Video */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-transparent z-20" />

        {/* Center subtle radial vignette to emphasize foreground content & cards without hiding footage */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.05)_0%,rgba(5,5,5,0.45)_100%)] z-20" />

        {/* Bottom gradual exit transition dissolving into base dark theme before Portfolio */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-20" />
      </div>
    </div>
  );
};
