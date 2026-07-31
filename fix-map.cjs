const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<ScrollReveal>\s*<div className="text-center mb-12">\s*<ScrollReveal type="fade-down" distance=\{20\}>\s*<h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">حياكم<\/h2>\s*<\/ScrollReveal>\s*<ScrollReveal type="fade-up" delay=\{0\.2\} distance=\{20\}>\s*<p className="text-black\/80 dark:text-white\/90 max-w-2xl mx-auto text-lg">نسعد بزيارتكم لنا في مقرنا<\/p>\s*<\/ScrollReveal>\s*<\/div>\s*<\/ScrollReveal>/m,
  `<div className="text-center mb-12">
            <ScrollReveal type="fade-down" distance={20}>
              <h2 className="text-3xl md:text-5xl font-bold heading-gradient title-accent-center mb-6">حياكم</h2>
            </ScrollReveal>
            <ScrollReveal type="fade-up" delay={0.2} distance={20}>
              <p className="text-black/80 dark:text-white/90 max-w-2xl mx-auto text-lg">نسعد بزيارتكم لنا في مقرنا</p>
            </ScrollReveal>
          </div>`
);

content = content.replace(
  /<ScrollReveal className="delay-100">/m,
  `<ScrollReveal type="fade-up" delay={0.4} distance={30}>`
);

fs.writeFileSync('src/App.tsx', content);
