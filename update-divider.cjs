const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldDivider = '<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>';
const newDivider = `
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent overflow-hidden">
        <motion.div 
          initial={{ x: '-100%' }}
          whileInView={{ x: '200%' }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
        />
      </div>`;

content = content.replace(oldDivider, newDivider);
fs.writeFileSync('src/App.tsx', content);
