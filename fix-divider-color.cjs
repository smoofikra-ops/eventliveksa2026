const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace('via-amber-500/50 to-transparent"', 'via-white/20 to-transparent"');
fs.writeFileSync('src/App.tsx', content);
