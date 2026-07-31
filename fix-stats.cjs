const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const statsReplacement = `const StatsSection = () => {
  const { t, language } = useLanguage();
  return (
    <SectionWrapper id="stats" className=" py-8 md:py-16 lack/5 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <ScrollReveal type="fade-down" distance={20}>
            <h2 className="text-3xl md:text-[40px] font-semibold text-white mb-6 md:mb-8 title-accent-center heading-gradient">
              {t("stats.title")}
            </h2>
          </ScrollReveal>
        </div>
        
        <ScrollReveal type="fade-up" delay={0.2} distance={30}>
          <div className="animated-border-container group">
            <div className="animated-border-gradient"></div>
            
            <div className="relative z-10 rounded-[22px] p-6 md:p-20 border lack/5 ">
              <div className="grid grid-cols-3 gap-4 md:gap-12">
                <ScrollReveal type="fade-left" delay={0.4} distance={20} className="flex flex-col items-center text-center">
                  <div className="text-3xl sm:text-4xl md:text-8xl font-black text-gradient mb-2 md:mb-4 drop-shadow-[0_0_20px_rgba(255,138,0,0.3)]">
                    <Counter value={348} />
                  </div>
                  <div className="text-[10px] md:text-lg text-black/70 dark:text-white/80 uppercase tracking-wider md:tracking-[0.3em] font-black leading-tight">{t("stats.events")}</div>
                </ScrollReveal>
                
                <ScrollReveal type="fade-up" delay={0.5} distance={20} className="flex flex-col items-center text-center border-x border-black/10 dark:border-white/10 px-2 md:px-0">
                  <div className="text-3xl sm:text-4xl md:text-8xl font-black text-gradient mb-2 md:mb-4 drop-shadow-[0_0_20px_rgba(255,138,0,0.3)]">
                    <Counter value={8} />
                  </div>
                  <div className="text-[10px] md:text-lg text-black/70 dark:text-white/80 uppercase tracking-wider md:tracking-[0.3em] font-black leading-tight">{t("stats.cities")}</div>
                </ScrollReveal>
                
                <ScrollReveal type="fade-right" delay={0.6} distance={20} className="flex flex-col items-center text-center">
                  <div className="text-3xl sm:text-4xl md:text-8xl font-black text-gradient mb-2 md:mb-4 drop-shadow-[0_0_20px_rgba(255,138,0,0.3)]">
                    <Counter value={100} />
                    <span className="text-xl sm:text-2xl md:text-5xl text-amber-500 absolute -top-1 sm:-top-2 md:-top-4 -right-2 sm:-right-4 md:-right-8">+</span>
                  </div>
                  <div className="text-[10px] md:text-lg text-black/70 dark:text-white/80 uppercase tracking-wider md:tracking-[0.3em] font-black leading-tight">{t("stats.clients")}</div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
};`;

content = content.replace(
  /const StatsSection = \(\) => \{[\s\S]*?<\/SectionWrapper>\s*\);\s*\};/m,
  statsReplacement
);

fs.writeFileSync('src/App.tsx', content);
