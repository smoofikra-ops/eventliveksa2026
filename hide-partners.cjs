const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');
const oldMain = `<main role="main" className="relative">
        <Hero videoUrl={data.heroVideoUrl} onQuoteClick={() => setIsQuoteOpen(true)} />
        <Partners partners={data.partners} />
        <StatsSection />
        <Services services={data.services} />
        <Portfolio works={data.works} />
        <FAQ />
        <Process />
        <Testimonials />
        <Contact />
        <MapSection />
      </main>`;
const newMain = `<main role="main" className="relative">
        <Hero videoUrl={data.heroVideoUrl} onQuoteClick={() => setIsQuoteOpen(true)} />
        <StatsSection />
        <Services services={data.services} />
        <Portfolio works={data.works} />
        <FAQ />
        <Process />
        <Testimonials />
        <Contact />
        <MapSection />
        {/* <Partners partners={data.partners} /> */}
      </main>`;
app = app.replace(oldMain, newMain);
fs.writeFileSync('src/App.tsx', app);
