const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

const oldHero = `<StorySection id="hero" className="relative min-h-[100svh] flex flex-col md:flex-row md:items-center pt-20 overflow-hidden dark flex-grow">
      <CameraFrameOverlay />
      
      {/* Cinematic gradient to ensure text readability */}
      

      

      {/* Content */}`;

const newHero = `<StorySection id="hero" className="relative min-h-[100svh] flex flex-col md:flex-row md:items-center pt-20 overflow-hidden dark flex-grow">
      <CameraFrameOverlay />
      
      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/ozd726ro/video/upload/v1785598675/%D9%81%D9%8A%D8%AF%D9%8A%D9%88_%D8%A7%D9%84%D9%87%D9%8A%D8%B1%D9%88_%D8%A7%D9%8A%D9%81%D9%86%D8%AA_%D9%84%D8%A7%D9%8A%D9%81_1_cic52q.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]"></div>
      </div>

      {/* Content */}`;

app = app.replace(oldHero, newHero);
fs.writeFileSync('src/App.tsx', app);
