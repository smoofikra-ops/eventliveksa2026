const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// For Portfolio (line 1200)
content = content.replace(
  /        <\/div>\n      <\/ScrollReveal>\n    <\/SectionWrapper>\n        <AnimatePresence>/m,
  `        </div>\n      </div>\n    </SectionWrapper>\n        <AnimatePresence>`
);

// For Process (line 1540)
content = content.replace(
  /        <\/div>\n      <\/ScrollReveal>\n    <\/SectionWrapper>\n  \);\n};\n\n\nconst Partners/m,
  `        </div>\n      </div>\n    </SectionWrapper>\n  );\n};\n\n\nconst Partners`
);

// For Testimonials (line 1776)
content = content.replace(
  /          \}\)\}\n        <\/div>\n      <\/div>\n    <\/SectionWrapper>/m,
  `          })}\n        </div>\n      </ScrollReveal>\n    </SectionWrapper>`
);

fs.writeFileSync('src/App.tsx', content);
