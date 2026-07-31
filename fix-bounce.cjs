const fs = require('fs');
let content = fs.readFileSync('src/CustomHeroSequence.tsx', 'utf8');

content = content.replace(
  /className="animate-bounce drop-shadow-\[0_0_8px_rgba\(255,138,0,0\.5\)\]"/g,
  `className="drop-shadow-[0_0_8px_rgba(255,138,0,0.5)] transition-transform duration-1000"`
);

// We can add a custom subtle vertical float instead of bounce, or just keep it static since it fades in.
// Actually, I can use motion for a smooth float.
content = content.replace(
  /<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2\.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-\[0_0_8px_rgba\(255,138,0,0\.5\)\] transition-transform duration-1000">/g,
  `<motion.svg 
                animate={{ y: [0, 8, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,138,0,0.5)]">`
);
content = content.replace(
  /<\/svg>/g,
  `</motion.svg>`
);

fs.writeFileSync('src/CustomHeroSequence.tsx', content);
