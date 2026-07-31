import React, { useEffect, useRef } from 'react';
import { useActiveScene } from '../../hooks/useActiveScene';

type StorySectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export const StorySection: React.FC<StorySectionProps> = ({ id, children, className = '' }) => {
  const { setActiveSceneId, activeSceneId } = useActiveScene();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSceneId(id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.3, 0.5, 0.7],
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
      className={`relative w-full transition-opacity duration-700 ease-out ${
        activeSceneId === id ? 'opacity-100' : 'opacity-80'
      } ${className}`}
    >
      {children}
    </section>
  );
};
