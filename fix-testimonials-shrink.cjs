const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(
  /className="mx-2 sm:mx-4 w-\[85vw\] sm:w-\[50vw\] md:w-\[40vw\] lg:w-\[35vw\]"/g,
  'className="mx-2 sm:mx-4 w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] flex-shrink-0"'
);
fs.writeFileSync('src/App.tsx', app);
