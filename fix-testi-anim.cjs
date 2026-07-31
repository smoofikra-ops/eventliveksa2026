const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<div className="relative w-full overflow-hidden flex bg-transparent py-4 group" dir="ltr">/m,
  `<ScrollReveal type="fade-right" distance={30} delay={0.4} className="relative w-full overflow-hidden flex bg-transparent py-4 group" dir="ltr">`
);

content = content.replace(
  /<\/div>\s*<\/div>\s*<\/SectionWrapper>/m,
  `</div>\n      </ScrollReveal>\n    </SectionWrapper>`
);

fs.writeFileSync('src/App.tsx', content);
