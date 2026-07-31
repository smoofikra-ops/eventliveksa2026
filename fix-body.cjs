const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');

// Replace body colors to be dark mode by default since background is dark
content = content.replace(
  /@apply bg-gray-50 dark:bg-\[#050505\] text-\[#111\] dark:text-white\/90 antialiased overflow-x-hidden font-sans;/,
  `@apply bg-[#050505] text-[rgba(255,255,255,0.96)] antialiased overflow-x-hidden font-sans;`
);

// Add text variables
content += `\n
:root {
  --text-primary: rgba(255, 255, 255, 0.96);
  --text-secondary: rgba(255, 255, 255, 0.72);
  --text-muted: rgba(255, 255, 255, 0.56);
}
`;

fs.writeFileSync('src/index.css', content);
