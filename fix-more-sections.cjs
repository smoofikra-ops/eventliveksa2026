const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Portfolio
content = content.replace(
  /<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">\s*<div>\s*<h2 className="text-2xl sm:text-3xl md:text-\[40px\] font-semibold mb-6 title-accent heading-gradient truncate w-full max-w-full block">\{t\('portfolio\.title'\)\}<\/h2>\s*<p className="text-black\/70 dark:text-white\/80 max-w-\[60ch\] text-lg md:text-xl font-medium font-normal">\s*\{t\('portfolio\.subtitle'\)\}\s*<\/p>\s*<\/div>/m,
  `<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <ScrollReveal type="fade-right" distance={20}>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-6 title-accent heading-gradient truncate w-full max-w-full block">{t('portfolio.title')}</h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.2} distance={20}>
            <p className="text-black/70 dark:text-white/80 max-w-[60ch] text-lg md:text-xl font-medium font-normal">
              {t('portfolio.subtitle')}
            </p>
          </ScrollReveal>
        </div>`
);

// Process
content = content.replace(
  /<div className="text-center mb-10 md:mb-16">\s*<h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-4 md:mb-6">\{t\('process\.title'\)\}<\/h2>\s*<p className="text-black\/80 dark:text-white\/90 max-w-2xl mx-auto text-base md:text-lg px-4">\{t\('process\.subtitle'\)\}<\/p>\s*<\/div>/m,
  `<div className="text-center mb-10 md:mb-16">
          <ScrollReveal type="fade-down" distance={20}>
            <h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-4 md:mb-6">{t('process.title')}</h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.2} distance={20}>
            <p className="text-black/80 dark:text-white/90 max-w-2xl mx-auto text-base md:text-lg px-4">{t('process.subtitle')}</p>
          </ScrollReveal>
        </div>`
);

// FAQ
content = content.replace(
  /<div className="text-center mb-12 md:mb-16">\s*<h2 className="text-3xl md:text-[40px] font-semibold title-accent-center heading-gradient mb-4 md:mb-6 truncate w-full max-w-full block">\{t\('faq\.title'\)\}<\/h2>\s*<\/div>/m,
  `<div className="text-center mb-12 md:mb-16">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-3xl md:text-[40px] font-semibold title-accent-center heading-gradient mb-4 md:mb-6 truncate w-full max-w-full block">{t('faq.title')}</h2>
        </ScrollReveal>
      </div>`
);

// Testimonials
content = content.replace(
  /<div className="text-center mb-10 md:mb-16 px-4">\s*<h2 className="text-2xl sm:text-3xl md:text-\[40px\] font-semibold title-accent-center heading-gradient mb-4 md:mb-6">\{t\('testimonials\.title'\)\}<\/h2>\s*<p className="text-black\/80 dark:text-white\/90 max-w-2xl mx-auto text-sm md:text-lg px-4 leading-relaxed">\s*\{t\('testimonials\.subtitle'\)\}\s*<\/p>\s*<\/div>/m,
  `<div className="text-center mb-10 md:mb-16 px-4">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold title-accent-center heading-gradient mb-4 md:mb-6">{t('testimonials.title')}</h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.2} distance={20}>
          <p className="text-black/80 dark:text-white/90 max-w-2xl mx-auto text-sm md:text-lg px-4 leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </ScrollReveal>
      </div>`
);

// Contact
content = content.replace(
  /<div className="text-center mb-12 md:mb-16">\s*<h2 className="text-3xl md:text-\[40px\] font-semibold heading-gradient title-accent-center mb-6 truncate w-full max-w-full block">\{t\('contact\.title'\)\}<\/h2>\s*<p className="text-black\/80 dark:text-white\/90 max-w-2xl mx-auto text-lg">\{t\('contact\.subtitle'\)\}<\/p>\s*<\/div>/m,
  `<div className="text-center mb-12 md:mb-16">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-3xl md:text-[40px] font-semibold heading-gradient title-accent-center mb-6 truncate w-full max-w-full block">{t('contact.title')}</h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.2} distance={20}>
          <p className="text-black/80 dark:text-white/90 max-w-2xl mx-auto text-lg">{t('contact.subtitle')}</p>
        </ScrollReveal>
      </div>`
);

fs.writeFileSync('src/App.tsx', content);
