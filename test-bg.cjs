const fs = require('fs');
let code = `import React, { useEffect, useState } from 'react';
import { cinematicScenes } from '../../data/cinematicScenes';
import { useActiveScene } from '../../hooks/useActiveScene';
import { getCloudinaryImageUrl, getCloudinarySrcSet } from '../../utils/cloudinary';
import { motion, useSpring, useTransform } from 'framer-motion';

export const CinematicBackground: React.FC = () => {
  const { activeSceneId } = useActiveScene();

  // Create a spring value that oscillates between 0 and 1
  const progress = useSpring(0, {
    stiffness: 2,
    damping: 15,
    mass: 2
  });

  useEffect(() => {
    let expanded = true;
    progress.set(1);

    const interval = setInterval(() => {
      expanded = !expanded;
      progress.set(expanded ? 1 : 0);
    }, 12000);

    return () => clearInterval(interval);
  }, [progress]);

  const scale = useTransform(progress, [0, 1], [1, 1.08]);
  const x = useTransform(progress, [0, 1], ["0%", "-1.5%"]);
  const y = useTransform(progress, [0, 1], ["0%", "-1%"]);

  useEffect(() => {
    const currentIndex = cinematicScenes.findIndex(s => s.id === activeSceneId);
    if (currentIndex >= 0 && currentIndex < cinematicScenes.length - 1) {
      const nextImg = new Image();
      nextImg.src = getCloudinaryImageUrl(cinematicScenes[currentIndex + 1].url, 1920);
    }
  }, [activeSceneId]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505] pointer-events-none"
    >
      {cinematicScenes.map((scene, index) => {
        const isActive = scene.id === activeSceneId;
        
        return (
          <div
            key={scene.id}
            className={\`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] \${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }\`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
            
            <motion.div 
              className="w-full h-full"
              style={{ scale, x, y }}
            >
              <img
                src={getCloudinaryImageUrl(scene.url, 1920)}
                srcSet={getCloudinarySrcSet(scene.url)}
                sizes="100vw"
                alt=""
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover origin-center"
              />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};
`;
fs.writeFileSync('src/components/cinematic/CinematicBackground.tsx', code);
