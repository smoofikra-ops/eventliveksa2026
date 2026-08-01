const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

const oldCard = `          <div className="relative z-10 bg-gray-50 dark:bg-[#050505] rounded-[22px] p-6 md:p-20 border border-black/5 dark:border-white/5">
              <div className="grid grid-cols-3 gap-4 md:gap-12">
                <ScrollReveal type="fade-left" delay={0.4} distance={20} className="flex flex-col items-center text-center">
                  <div className="text-3xl sm:text-4xl md:text-8xl font-black text-gradient mb-2 md:mb-4 drop-shadow-[0_0_20px_rgba(255,138,0,0.3)]">
                    <Counter value={348} />
                  </div>
                  <div className="text-[10px] md:text-lg text-white/80 uppercase tracking-wider md:tracking-[0.3em] font-black leading-tight">{t("stats.events")}</div>
                </ScrollReveal>
                
                <ScrollReveal type="fade-up" delay={0.5} distance={20} className="flex flex-col items-center text-center border-x border-white/10 px-2 md:px-0">
                  <div className="text-3xl sm:text-4xl md:text-8xl font-black text-gradient mb-2 md:mb-4 drop-shadow-[0_0_20px_rgba(255,138,0,0.3)]">
                    <Counter value={8} />
                  </div>
                  <div className="text-[10px] md:text-lg text-white/80 uppercase tracking-wider md:tracking-[0.3em] font-black leading-tight">{t("stats.cities")}</div>
                </ScrollReveal>
                
                <ScrollReveal type="fade-right" delay={0.6} distance={20} className="flex flex-col items-center text-center">
                  <div className="text-3xl sm:text-4xl md:text-8xl font-black text-gradient mb-2 md:mb-4 drop-shadow-[0_0_20px_rgba(255,138,0,0.3)]">
                    <Counter value={100} />
                    <span className="text-xl sm:text-2xl md:text-5xl text-amber-500 absolute -top-1 sm:-top-2 md:-top-4 -right-2 sm:-right-4 md:-right-8">+</span>
                  </div>
                  <div className="text-[10px] md:text-lg text-white/80 uppercase tracking-wider md:tracking-[0.3em] font-black leading-tight">{t("stats.clients")}</div>
                </ScrollReveal>
              </div>
            </div>`;

const newCard = `          <div className="relative z-10 bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-black/5 dark:border-white/10 shadow-xl animate-card-pulse mx-auto">
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

app = app.replace(oldCard, newCard);
fs.writeFileSync('src/App.tsx', app);
