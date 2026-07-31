const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldSkeleton = `<div className={\`absolute inset-0 bg-black/10 dark:bg-white/10 animate-pulse z-0 transition-opacity duration-500 \${isLoaded ? 'opacity-0' : 'opacity-100'}\`}></div>`;

const newSkeleton = `<div className={\`absolute inset-0 bg-white/5 z-0 transition-opacity duration-500 overflow-hidden \${isLoaded ? 'opacity-0' : 'opacity-100'}\`}>
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-white/20 animate-pulse" />
        </div>
      </div>`;

content = content.replace(oldSkeleton, newSkeleton);
fs.writeFileSync('src/App.tsx', content);
