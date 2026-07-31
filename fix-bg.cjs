const fs = require('fs');
let content = fs.readFileSync('src/components/cinematic/CinematicBackground.tsx', 'utf8');

content = content.replace(
  /className=\{`w-full h-full object-cover origin-center transition-transform duration-\[20s\] ease-linear \$\{\n\s*isActive \? 'scale-\[1\.05\]' : 'scale-100'\n\s*\}`\}/g,
  `className={\`w-full h-full object-cover origin-center \${isActive ? 'animate-kenburns' : ''}\`}`
);

fs.writeFileSync('src/components/cinematic/CinematicBackground.tsx', content);
console.log('Background updated');
