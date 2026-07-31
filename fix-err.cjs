const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The issue in Portfolio is at line 1200:
//         </div>
//       </ScrollReveal>
//     </SectionWrapper>
// Let's replace </ScrollReveal> there with nothing.
content = content.replace(
  /<\/div>\s*<\/div>\s*<\/ScrollReveal>\s*<\/SectionWrapper>\s*<AnimatePresence>/g,
  `</div>\n        </div>\n    </SectionWrapper>\n    <AnimatePresence>`
);

// For testimonials:
//        </div>
//      </ScrollReveal>
//    </SectionWrapper>
// Wait, the error is:
// Unexpected closing "div" tag does not match opening "ScrollReveal" tag
// 1775|          </div>
// 1776|        </div>
// 1777|      </SectionWrapper>
// Ah! In fix-testi-anim.cjs I did:
// content.replace(
//  /<\/div>\s*<\/div>\s*<\/SectionWrapper>/m,
//  `</div>\n      </ScrollReveal>\n    </SectionWrapper>`
// );
// Wait, I replaced two divs with one div and a ScrollReveal. So there is one less closing div!
// Let's check Testimonials closing tags.
