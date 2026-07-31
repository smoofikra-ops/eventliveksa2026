const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');

content = content.replace(
  /\.glass-card \{[\s\S]*?box-shadow:[^\n]*;/m,
  `.glass-card {
  background: rgba(10, 12, 13, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.28);`
);

fs.writeFileSync('src/index.css', content);
