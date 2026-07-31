const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<ScrollReveal>\s*<h2 className="text-2xl sm:text-3xl md:text-\[40px\] font-semibold mb-6 md:mb-8 title-accent heading-gradient truncate w-full max-w-full block">\{t\("contact\.title"\)\}<\/h2>/m,
  `<ScrollReveal type="fade-right" distance={30}>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-6 md:mb-8 title-accent heading-gradient truncate w-full max-w-full block">{t("contact.title")}</h2>`
);

content = content.replace(
  /<ScrollReveal delay=\{0\.2\}>/m,
  `<ScrollReveal type="fade-left" delay={0.2} distance={30}>`
);

fs.writeFileSync('src/App.tsx', content);
