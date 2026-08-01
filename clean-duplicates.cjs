const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/text-white mb-6 md:mb-8 title-accent-center text-white/g, 'text-white mb-6 md:mb-8 title-accent-center');
content = content.replace(/text-white mb-4 truncate w-full max-w-full block text-white/g, 'text-white mb-4 truncate w-full max-w-full block');

fs.writeFileSync('src/App.tsx', content);
