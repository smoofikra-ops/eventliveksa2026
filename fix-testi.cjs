const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<div className="max-w-7xl mx-auto px-6 mb-16 text-center">\s*<ScrollReveal>\s*<h2 className="text-2xl sm:text-3xl md:text-\[40px\] font-semibold mb-6 title-accent-center heading-gradient truncate w-full max-w-full block">\{t\("nav\.testimonials"\)\}<\/h2>\s*<p className="text-black\/70 dark:text-white\/80 max-w-\[70ch\] mx-auto text-lg md:text-xl font-medium">\{t\('testimonials\.subtitle'\)\}<\/p>\s*<\/ScrollReveal>\s*<\/div>/m,
  `<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-6 title-accent-center heading-gradient truncate w-full max-w-full block">{t("nav.testimonials")}</h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.2} distance={20}>
          <p className="text-black/70 dark:text-white/80 max-w-[70ch] mx-auto text-lg md:text-xl font-medium">{t('testimonials.subtitle')}</p>
        </ScrollReveal>
      </div>`
);

fs.writeFileSync('src/App.tsx', content);
