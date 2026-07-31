const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Services
content = content.replace(
  /<div className="text-center mb-12 md:mb-20">\s*<h2 className="text-2xl sm:text-3xl md:text-\[40px\] font-semibold mb-6 md:mb-8 title-accent-center heading-gradient truncate w-full max-w-full block">\{t\("services\.title"\)\}<\/h2>\s*<p className="text-black\/70 dark:text-white\/80 max-w-\[70ch\] mx-auto text-lg md:text-xl font-medium font-normal px-4">\s*\{t\("services\.subtitle"\)\}\s*<\/p>\s*<\/div>/m,
  `<div className="text-center mb-12 md:mb-20">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-6 md:mb-8 title-accent-center heading-gradient truncate w-full max-w-full block">{t("services.title")}</h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.2} distance={20}>
          <p className="text-black/70 dark:text-white/80 max-w-[70ch] mx-auto text-lg md:text-xl font-medium font-normal px-4">
            {t("services.subtitle")}
          </p>
        </ScrollReveal>
      </div>`
);

// Portfolio
content = content.replace(
  /<div className="text-center mb-12">\s*<h2 className="text-3xl md:text-\[40px\] font-semibold title-accent-center heading-gradient mb-6 truncate w-full max-w-full block">\{t\('portfolio\.title'\)\}<\/h2>\s*<\/div>/m,
  `<div className="text-center mb-12">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-3xl md:text-[40px] font-semibold title-accent-center heading-gradient mb-6 truncate w-full max-w-full block">{t('portfolio.title')}</h2>
        </ScrollReveal>
      </div>`
);

// FAQ
content = content.replace(
  /<div className="text-center mb-16">\s*<h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">\{t\('faq\.title'\)\}<\/h2>\s*<\/div>/m,
  `<div className="text-center mb-16">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">{t('faq.title')}</h2>
        </ScrollReveal>
      </div>`
);

// Process
content = content.replace(
  /<div className="text-center mb-16">\s*<h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">\{t\('process\.title'\)\}<\/h2>\s*<p className="text-black\/80 dark:text-white\/90 max-w-2xl mx-auto text-lg">\{t\('process\.subtitle'\)\}<\/p>\s*<\/div>/m,
  `<div className="text-center mb-16">
          <ScrollReveal type="fade-down" distance={20}>
            <h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">{t('process.title')}</h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.2} distance={20}>
            <p className="text-black/80 dark:text-white/90 max-w-2xl mx-auto text-lg">{t('process.subtitle')}</p>
          </ScrollReveal>
        </div>`
);

// Testimonials
content = content.replace(
  /<div className="text-center mb-16">\s*<h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">\{t\('testimonials\.title'\)\}<\/h2>\s*<\/div>/m,
  `<div className="text-center mb-16">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">{t('testimonials.title')}</h2>
        </ScrollReveal>
      </div>`
);

// Contact
content = content.replace(
  /<div className="text-center mb-16">\s*<h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">\{t\('contact\.title'\)\}<\/h2>\s*<p className="text-black\/80 dark:text-white\/90 max-w-2xl mx-auto text-lg">\{t\('contact\.subtitle'\)\}<\/p>\s*<\/div>/m,
  `<div className="text-center mb-16">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">{t('contact.title')}</h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.2} distance={20}>
          <p className="text-black/80 dark:text-white/90 max-w-2xl mx-auto text-lg">{t('contact.subtitle')}</p>
        </ScrollReveal>
      </div>`
);

// MapSection
content = content.replace(
  /<div className="text-center mb-12">\s*<h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">حياكم<\/h2>\s*<p className="text-black\/80 dark:text-white\/90 max-w-2xl mx-auto text-lg">نسعد بزيارتكم لنا في مقرنا<\/p>\s*<\/div>/m,
  `<div className="text-center mb-12">
            <ScrollReveal type="fade-down" distance={20}>
              <h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">حياكم</h2>
            </ScrollReveal>
            <ScrollReveal type="fade-up" delay={0.2} distance={20}>
              <p className="text-black/80 dark:text-white/90 max-w-2xl mx-auto text-lg">نسعد بزيارتكم لنا في مقرنا</p>
            </ScrollReveal>
          </div>`
);

fs.writeFileSync('src/App.tsx', content);
