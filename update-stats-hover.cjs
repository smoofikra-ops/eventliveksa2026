const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');
if (!css.includes('digital-glow')) {
  css += `\n
@keyframes digital-glow {
  0% { filter: drop-shadow(0 0 2px rgba(255,138,0,0)); opacity: 0; transform: scale(0.9); }
  50% { filter: drop-shadow(0 0 25px rgba(255,138,0,0.8)); opacity: 1; transform: scale(1.05); }
  100% { filter: drop-shadow(0 0 10px rgba(255,138,0,0.4)); opacity: 1; transform: scale(1); }
}
.animate-digital-glow {
  animation: digital-glow 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
`;
  fs.writeFileSync('src/index.css', css);
}

let app = fs.readFileSync('src/App.tsx', 'utf8');

const oldCard = `          <div className="relative z-10 bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-black/5 dark:border-white/10 shadow-xl animate-card-pulse mx-auto">
              <div className="grid grid-cols-3 gap-2 md:gap-8 divide-x divide-black/10 dark:divide-white/10 rtl:divide-x-reverse">
                <ScrollReveal type="fade-left" delay={0.4} distance={20} className="flex flex-col items-center text-center px-2">
                  <div className="text-4xl md:text-6xl font-black text-gradient mb-2 drop-shadow-[0_0_15px_rgba(255,138,0,0.2)]">
                    <Counter value={348} />
                  </div>
                  <div className="text-[10px] md:text-sm text-black/70 dark:text-white/70 uppercase tracking-widest font-bold">{t("stats.events")}</div>
                </ScrollReveal>
                
                <ScrollReveal type="fade-up" delay={0.5} distance={20} className="flex flex-col items-center text-center px-2">
                  <div className="text-4xl md:text-6xl font-black text-gradient mb-2 drop-shadow-[0_0_15px_rgba(255,138,0,0.2)]">
                    <Counter value={8} />
                  </div>
                  <div className="text-[10px] md:text-sm text-black/70 dark:text-white/70 uppercase tracking-widest font-bold">{t("stats.cities")}</div>
                </ScrollReveal>
                
                <ScrollReveal type="fade-right" delay={0.6} distance={20} className="flex flex-col items-center text-center px-2">
                  <div className="text-4xl md:text-6xl font-black text-gradient mb-2 drop-shadow-[0_0_15px_rgba(255,138,0,0.2)] relative flex items-center justify-center">
                    <Counter value={100} />
                    <span className="text-xl md:text-3xl text-amber-500 absolute -top-1 md:-top-2 -right-3 md:-right-6">+</span>
                  </div>
                  <div className="text-[10px] md:text-sm text-black/70 dark:text-white/70 uppercase tracking-widest font-bold">{t("stats.clients")}</div>
                </ScrollReveal>
              </div>
            </div>`;

const newCard = `          <div className="relative z-10 bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-black/5 dark:border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 hover:dark:bg-black/70 hover:shadow-[0_20px_40px_-10px_rgba(255,138,0,0.3)] mx-auto group">
              <div className="grid grid-cols-3 gap-2 md:gap-8 divide-x divide-black/10 dark:divide-white/10 rtl:divide-x-reverse">
                <ScrollReveal type="fade-left" delay={0.4} distance={20} className="flex flex-col items-center text-center px-2">
                  <div className="text-4xl md:text-6xl font-black text-gradient mb-2 font-mono tabular-nums tracking-tighter animate-digital-glow group-hover:scale-105 transition-transform duration-300">
                    <Counter value={348} />
                  </div>
                  <div className="text-[10px] md:text-sm text-black/70 dark:text-white/70 uppercase tracking-widest font-bold">{t("stats.events")}</div>
                </ScrollReveal>
                
                <ScrollReveal type="fade-up" delay={0.5} distance={20} className="flex flex-col items-center text-center px-2">
                  <div className="text-4xl md:text-6xl font-black text-gradient mb-2 font-mono tabular-nums tracking-tighter animate-digital-glow group-hover:scale-105 transition-transform duration-300" style={{ animationDelay: '200ms' }}>
                    <Counter value={8} />
                  </div>
                  <div className="text-[10px] md:text-sm text-black/70 dark:text-white/70 uppercase tracking-widest font-bold">{t("stats.cities")}</div>
                </ScrollReveal>
                
                <ScrollReveal type="fade-right" delay={0.6} distance={20} className="flex flex-col items-center text-center px-2">
                  <div className="text-4xl md:text-6xl font-black text-gradient mb-2 relative flex items-center justify-center font-mono tabular-nums tracking-tighter animate-digital-glow group-hover:scale-105 transition-transform duration-300" style={{ animationDelay: '400ms' }}>
                    <Counter value={100} />
                    <span className="text-xl md:text-3xl text-amber-500 absolute -top-1 md:-top-2 -right-3 md:-right-6">+</span>
                  </div>
                  <div className="text-[10px] md:text-sm text-black/70 dark:text-white/70 uppercase tracking-widest font-bold">{t("stats.clients")}</div>
                </ScrollReveal>
              </div>
            </div>`;

app = app.replace(oldCard, newCard);
fs.writeFileSync('src/App.tsx', app);
