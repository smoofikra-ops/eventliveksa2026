const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The end of Testimonials
content = content.replace(
  /        <\/div>\n      <\/div>\n    <\/SectionWrapper>/m,
  `        </div>\n      </ScrollReveal>\n    </SectionWrapper>`
);

fs.writeFileSync('src/App.tsx', content);
