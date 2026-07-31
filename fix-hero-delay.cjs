const fs = require('fs');
let content = fs.readFileSync('src/CustomHeroSequence.tsx', 'utf8');

content = content.replace(
  /transition=\{\{ duration: 1\.5, ease: "easeOut" \}\}/,
  'transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}'
);

fs.writeFileSync('src/CustomHeroSequence.tsx', content);

let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace(
  /initial=\{\{ opacity: 0, y: 50 \}\}\s*animate=\{\{ opacity: 1, y: 0 \}\}\s*transition=\{\{ duration: 1, ease: "easeOut" \}\}\s*className="max-w-4xl flex flex-col items-center"/m,
  `initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl flex flex-col items-center"`
);
fs.writeFileSync('src/App.tsx', appContent);
