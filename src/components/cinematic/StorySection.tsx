import React, { useEffect, useRef } from 'react';
import { useActiveScene } from '../../hooks/useActiveScene';

type StorySectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export const StorySection: React.FC<StorySectionProps> = ({ id, children, className = '' }) => {
  const { setActiveSceneId } = useActiveScene();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSceneId(id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-15% 0px -15% 0px',
        threshold: [0.15, 0.4],
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, setActiveSceneId]);

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className={`relative w-full ${className}`}
    >
      {children}
    </section>
  );
};
