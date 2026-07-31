const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/@keyframes kenburns \{[\s\S]*?\.animate-kenburns \{[\s\S]*?\}/g, '');
fs.writeFileSync('src/index.css', css);
