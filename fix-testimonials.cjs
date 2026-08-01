const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');
if (!css.includes('animate-marquee-slower')) {
  css += `\n
.animate-marquee-slower {
  animation: marquee 60s linear infinite;
  display: flex;
}
`;
  fs.writeFileSync('src/index.css', css);
}

let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(
  `        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] py-2">
          {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (`,
  `        <div className="flex w-max animate-marquee-slower group-hover:[animation-play-state:paused] py-2">
          {[...testimonials, ...testimonials].map((t, index) => (`
);
fs.writeFileSync('src/App.tsx', app);
