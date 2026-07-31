const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<div className="text-center mb-16">\s*<h2 className="text-2xl sm:text-3xl md:text-\[40px\] font-semibold mb-6 title-accent-center heading-gradient truncate w-full max-w-full block">\{t\("nav\.faq"\)\}<\/h2>\s*<p className="text-black\/70 dark:text-white\/80 max-w-\[70ch\] mx-auto text-lg md:text-xl font-medium font-normal">\{t\('faq\.subtitle'\)\}<\/p>\s*<\/div>/m,
  `<div className="text-center mb-16">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-6 title-accent-center heading-gradient truncate w-full max-w-full block">{t("nav.faq")}</h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.2} distance={20}>
          <p className="text-black/70 dark:text-white/80 max-w-[70ch] mx-auto text-lg md:text-xl font-medium font-normal">{t('faq.subtitle')}</p>
        </ScrollReveal>
      </div>`
);

content = content.replace(
  /<ScrollReveal key=\{i\} delay=\{i \* 0\.1\}>/g,
  `<ScrollReveal key={i} delay={i * 0.1} type={i % 2 === 0 ? "fade-left" : "fade-right"} distance={20}>`
);

fs.writeFileSync('src/App.tsx', content);
