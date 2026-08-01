const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldStr = `          <div className="animated-border-container group">
            <div className="animated-border-gradient"></div>
            
            <div className="relative z-10 rounded-[22px] p-6 md:p-20 border ">
              <div className="grid grid-cols-3 gap-4 md:gap-12">`;

const newStr = `          <div className="relative z-10 bg-gray-50 dark:bg-[#050505] rounded-[22px] p-6 md:p-20 border border-black/5 dark:border-white/5">
              <div className="grid grid-cols-3 gap-4 md:gap-12">`;

content = content.replace(oldStr, newStr);

const oldEnd = `                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>`;

const newEnd = `                </ScrollReveal>
              </div>
            </div>
        </ScrollReveal>`;

content = content.replace(oldEnd, newEnd);

fs.writeFileSync('src/App.tsx', content);
