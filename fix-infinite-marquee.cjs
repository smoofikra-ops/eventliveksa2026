const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Add new infinite marquee styles
if (!css.includes('marquee-infinite')) {
  css += `\n
@keyframes marquee-infinite {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
.animate-marquee-infinite {
  animation: marquee-infinite 60s linear infinite;
}
`;
  fs.writeFileSync('src/index.css', css);
}

let app = fs.readFileSync('src/App.tsx', 'utf8');

const oldMarquee = `<ScrollReveal type="fade-right" distance={30} delay={0.4} className="relative w-full overflow-hidden bg-transparent py-4 group">
        <div dir="ltr" className="flex w-max animate-marquee-slower group-hover:[animation-play-state:paused] py-2">
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, index) => (
            <div key={index} className="mx-2 sm:mx-4 w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </ScrollReveal>`;

const newMarquee = `<ScrollReveal type="fade-right" distance={30} delay={0.4} className="relative w-full overflow-hidden bg-transparent py-4 group" dir="ltr">
        <div className="flex flex-nowrap">
          <div className="flex flex-shrink-0 animate-marquee-infinite group-hover:[animation-play-state:paused] py-2">
            {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
              <div key={\`set1-\${index}\`} className="mx-2 sm:mx-4 w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
          <div className="flex flex-shrink-0 animate-marquee-infinite group-hover:[animation-play-state:paused] py-2">
            {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
              <div key={\`set2-\${index}\`} className="mx-2 sm:mx-4 w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>`;

app = app.replace(oldMarquee, newMarquee);
fs.writeFileSync('src/App.tsx', app);
