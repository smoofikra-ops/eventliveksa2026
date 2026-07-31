const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<div \s*key=\{work\.id\} \s*className="relative aspect-square cursor-pointer group rounded-xl overflow-hidden \/5 border border-white\/10 hover:border-amber-500\/50 transition-all"\s*onClick=\{\(\) => setSelectedIndex\(gridPage \* ITEMS_PER_PAGE \+ idx\)\}\s*>/g,
  `<motion.div 
                  key={work.id} 
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                  className="relative aspect-square cursor-pointer group rounded-xl overflow-hidden /5 border border-white/10 hover:border-amber-500/50 transition-all"
                  onClick={() => setSelectedIndex(gridPage * ITEMS_PER_PAGE + idx)}
                >`
);
content = content.replace(
  /<\/div>\s*\)\)\}\s*<\/motion.div>/m,
  `</motion.div>\n              ))}\n            </motion.div>`
);

fs.writeFileSync('src/App.tsx', content);
