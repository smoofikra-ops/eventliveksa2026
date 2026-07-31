const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<div className="text-center mb-16 md:mb-20">\s*<ScrollReveal>\s*<h2 className="text-2xl sm:text-3xl md:text-\[40px\] font-semibold mb-6 md:mb-8 title-accent-center heading-gradient truncate w-full max-w-full block">\{t\("process\.title"\)\}<\/h2>\s*<p className="text-black\/70 dark:text-white\/80 max-w-\[70ch\] mx-auto text-lg md:text-xl font-medium">\{t\('process\.stepsDesc'\)\}<\/p>\s*<\/ScrollReveal>\s*<\/div>/m,
  `<div className="text-center mb-16 md:mb-20">
        <ScrollReveal type="fade-down" distance={20}>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-6 md:mb-8 title-accent-center heading-gradient truncate w-full max-w-full block">{t("process.title")}</h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.2} distance={20}>
          <p className="text-black/70 dark:text-white/80 max-w-[70ch] mx-auto text-lg md:text-xl font-medium">{t('process.stepsDesc')}</p>
        </ScrollReveal>
      </div>`
);

// We can alternate the steps in process section slightly via delay. They are already in a row.
// Let's change the delay to i * 0.15 and use diagonal-up or fade-up for each.
content = content.replace(
  /<ScrollReveal key=\{i\} delay=\{i \* 0\.3\} className="flex flex-col items-center text-center group">/g,
  `<ScrollReveal key={i} delay={i * 0.15} type="fade-up" distance={30} className="flex flex-col items-center text-center group">`
);

fs.writeFileSync('src/App.tsx', content);
