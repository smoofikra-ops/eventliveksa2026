const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(
  `{[...testimonials, ...testimonials].map((t, index) => (`,
  `{[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, index) => (`
);
fs.writeFileSync('src/App.tsx', app);
