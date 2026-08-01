const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');
const oldTR = `<ScrollReveal type="fade-right" distance={30} delay={0.4} className="relative w-full overflow-hidden flex bg-transparent py-4 group">`;
const newTR = `<ScrollReveal type="fade-right" distance={30} delay={0.4} className="relative w-full overflow-hidden bg-transparent py-4 group">`;

app = app.replace(oldTR, newTR);
fs.writeFileSync('src/App.tsx', app);
