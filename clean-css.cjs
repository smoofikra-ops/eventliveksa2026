const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');
content = content.replace(/\.animated-border-container \{[\s\S]*?\}/g, '');
content = content.replace(/\.animated-border-gradient \{[\s\S]*?\}/g, '');
fs.writeFileSync('src/index.css', content);
