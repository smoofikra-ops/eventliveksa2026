const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');
// Remove the marquee-rtl and the html[dir="rtl"] override
css = css.replace(/@keyframes marquee-rtl {[\s\S]*?}/g, '');
css = css.replace(/html\[dir="rtl"\] \.animate-marquee-slower {[\s\S]*?}/g, '');
fs.writeFileSync('src/index.css', css);

let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(
  `<div className="flex w-max animate-marquee-slower group-hover:[animation-play-state:paused] py-2">`,
  `<div dir="ltr" className="flex w-max animate-marquee-slower group-hover:[animation-play-state:paused] py-2">`
);
fs.writeFileSync('src/App.tsx', app);
