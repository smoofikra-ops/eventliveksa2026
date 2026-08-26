import React, { useEffect, useRef, useState } from 'react';
import { useActiveScene } from '../../hooks/useActiveScene';

const VIDEO_1_URL = "https://nmolabs-cdn.b-cdn.net/eventlive/website/home/backgrounds/videos/eventlive-official.mp4";
const VIDEO_2_URL = "https://nmolabs-cdn.b-cdn.net/eventlive/website/home/backgrounds/videos/souq-addar-eventlive.mp4";

export const CinematicBackground: React.FC = () => {
  const { activeSceneId } = useActiveScene();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

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

  // IntersectionObserver to observe if the lower storytelling section is in or near viewport
  useEffect(() => {
    const el = containerRef.current?.parentElement;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '400px 0px 400px 0px',
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Determine active video index
  // Video 1 covers: portfolio, faq
  // Video 2 covers: process, testimonials, contact, map
  const isVideo2Active = ['process', 'testimonials', 'contact', 'map'].includes(activeSceneId);

  // Manage video play/pause safely based on visibility and motion preferences
  useEffect(() => {
    if (prefersReducedMotion) {
      video1Ref.current?.pause();
      video2Ref.current?.pause();
      return;
    }

    if (isInViewport) {
      if (video1Ref.current) {
        const p1 = video1Ref.current.play();
        if (p1 !== undefined) {
          p1.catch(() => {});
        }
      }
      if (video2Ref.current) {
        const p2 = video2Ref.current.play();
        if (p2 !== undefined) {
          p2.catch(() => {});
        }
      }
    } else {
      video1Ref.current?.pause();
      video2Ref.current?.pause();
    }
  }, [isInViewport, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Pinned Sticky Viewport Container across the Lower Section */}
      <div className="sticky top-0 left-0 w-full h-[100svh] min-h-screen overflow-hidden">
        {/* If user prefers reduced motion, render a subtle atmospheric static gradient */}
        {prefersReducedMotion ? (
          <div className="absolute inset-0 bg-[#07090b]" />
        ) : (
          <>
            {/* Video 1: Event Live Official (Portfolio -> FAQ) */}
            <div
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out will-change-[opacity] ${
                !isVideo2Active ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <video
                ref={video1Ref}
                src={VIDEO_1_URL}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Video 2: Souq Addar (Process -> Testimonials -> Contact -> Map) */}
            <div
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out will-change-[opacity] ${
                isVideo2Active ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <video
                ref={video2Ref}
                src={VIDEO_2_URL}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </>
        )}

        {/* Cinematic Readability Overlays */}
        {/* Base dark translucent layer for pristine text readability */}
        <div className="absolute inset-0 bg-[#050505]/70 z-20" />

        {/* Top blend transition from Featured Services (#050505) into Video 1 */}
        <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent z-20" />

        {/* Center vignette to focus attention on foreground content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.25)_0%,rgba(5,5,5,0.8)_100%)] z-20" />

        {/* Bottom blend transition into Footer */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-20" />
      </div>
    </div>
  );
};
