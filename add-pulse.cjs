const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');
if (!css.includes('card-pulse')) {
  css += `\n
@keyframes card-pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 20px -2px rgba(255, 138, 0, 0.1); }
  50% { transform: scale(1.02); box-shadow: 0 8px 30px 0px rgba(255, 138, 0, 0.3); }
}
.animate-card-pulse {
  animation: card-pulse 3s ease-in-out infinite;
}
`;
  fs.writeFileSync('src/index.css', css);
}
