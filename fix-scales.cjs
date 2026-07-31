const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Services image
content = content.replace(
  /group-hover:scale-110 z-0 scale-105/g,
  'group-hover:scale-105 z-0 scale-100'
);

// Portfolio images
content = content.replace(
  /group-hover:scale-110/g,
  'group-hover:scale-105'
);

// Partners hover
content = content.replace(
  /hover:scale-110 hover:-translate-y-4/g,
  'hover:scale-105 hover:-translate-y-2'
);

fs.writeFileSync('src/App.tsx', content);
