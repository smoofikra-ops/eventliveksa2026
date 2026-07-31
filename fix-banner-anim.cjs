const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/animate-\[spin_3s_linear_infinite\]/g, 'animate-pulse');
content = content.replace(/animate-\[bounce_2s_infinite\]/g, 'animate-pulse');
content = content.replace(/animate-\[spin_4s_linear_infinite\]/g, 'opacity-80');
content = content.replace(/animate-marquee-slow group-hover:\[animation-play-state:paused\]/g, 'animate-marquee group-hover:[animation-play-state:paused]'); // Just using normal marquee if exists

fs.writeFileSync('src/App.tsx', content);
