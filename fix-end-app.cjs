const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /      <FloatingActionButtons \/>\n    <\/div>\n  \);\n\}/,
  `      <FloatingActionButtons />\n    </div>\n    </ActiveSceneProvider>\n  );\n}`
);

fs.writeFileSync('src/App.tsx', content);
