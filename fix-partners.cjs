const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldCode = `<div 
        className="relative w-full overflow-hidden flex bg-transparent py-8" 
        dir="ltr"
        onMouseEnter={() => {
          setIsHovered(true);
          setJustLeft(false);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setJustLeft(true);
          setTimeout(() => setJustLeft(false), 500);
        }}
      >
        {/* Animated gradient fade at the edges for smoothness */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        
        <div className={\`transition-transform duration-500 ease-in-out \${justLeft ? 'translate-x-4' : 'translate-x-0'}\`}>`;

const newCode = `<div 
        className="relative w-full overflow-hidden flex bg-transparent py-8" 
        dir="ltr"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          setJustLeft(false);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setJustLeft(true);
          setTimeout(() => setJustLeft(false), 500);
        }}
      >
        
        <div className={\`transition-transform duration-500 ease-in-out \${justLeft ? 'translate-x-4' : 'translate-x-0'}\`}>`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/App.tsx', content);
