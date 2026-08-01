const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');
if (!css.includes('marquee-rtl')) {
  css += `\n
@keyframes marquee-rtl {
  0% { transform: translateX(0); }
  100% { transform: translateX(50%); }
}
html[dir="rtl"] .animate-marquee-slower {
  animation: marquee-rtl 60s linear infinite;
}
`;
  fs.writeFileSync('src/index.css', css);
}

let app = fs.readFileSync('src/App.tsx', 'utf8');
const oldTR = `<ScrollReveal type="fade-right" distance={30} delay={0.4} className="relative w-full overflow-hidden flex bg-transparent py-4 group" dir="ltr">`;
const newTR = `<ScrollReveal type="fade-right" distance={30} delay={0.4} className="relative w-full overflow-hidden flex bg-transparent py-4 group">`;

app = app.replace(oldTR, newTR);

// Also make sure we have enough duplicates for 50% translation.
// 5 testimonials * 4 duplicates = 20 total. 50% = 10 items.
// This is perfect.
fs.writeFileSync('src/App.tsx', app);
