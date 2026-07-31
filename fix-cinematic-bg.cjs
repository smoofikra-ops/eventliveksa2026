const fs = require('fs');
let content = fs.readFileSync('src/components/cinematic/CinematicBackground.tsx', 'utf8');

// Replace the gradient overlay
content = content.replace(
  /<div className="absolute inset-0 bg-gradient-to-b from-black\/60 via-black\/40 to-black\/80 z-10"><\/div>/,
  `<div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(180deg, rgba(5, 7, 8, 0.55), rgba(5, 7, 8, 0.72))' }}></div>`
);

// Add filter to the image
content = content.replace(
  /className="w-full h-full object-cover origin-center"/,
  `className="w-full h-full object-cover origin-center" style={{ filter: 'brightness(0.35) contrast(0.85) saturate(0.75) blur(2px)' }}`
);

fs.writeFileSync('src/components/cinematic/CinematicBackground.tsx', content);
