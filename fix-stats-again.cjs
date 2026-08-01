const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');
if (!css.includes('subtle-pulse')) {
  css += `\n
@keyframes subtle-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(0.99); }
}
.animate-subtle-pulse {
  animation: subtle-pulse 4s ease-in-out infinite;
}
`;
  fs.writeFileSync('src/index.css', css);
}

let app = fs.readFileSync('src/App.tsx', 'utf8');

const oldCard = `          <div className="relative z-10 bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-black/5 dark:border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 hover:dark:bg-black/70 hover:shadow-[0_20px_40px_-10px_rgba(255,138,0,0.3)] mx-auto group">`;
const newCard = `          <div className="relative z-10 bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-black/5 dark:border-white/20 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:dark:bg-white/15 hover:shadow-[0_20px_40px_-10px_rgba(255,138,0,0.3)] mx-auto group animate-subtle-pulse hover:animate-none">`;

app = app.replace(oldCard, newCard);

const oldCounter = `const Counter = ({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        let start = 0;
        const end = value;
        const totalFrames = duration * 60;
        let frame = 0;
        
        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          setCount(Math.floor(end * progress));

          if (frame === totalFrames) clearInterval(timer);
        }, 1000 / 60);
      }}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  );
};`;

const newCounter = `const Counter = ({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        const end = value;
        const totalFrames = duration * 60;
        let frame = 0;
        
        const timer = setInterval(() => {
          frame++;
          // Ease-out expo for fast start, slow end
          const progress = frame === totalFrames ? 1 : 1 - Math.pow(2, -10 * frame / totalFrames);
          setCount(Math.floor(end * progress));

          if (frame === totalFrames) clearInterval(timer);
        }, 1000 / 60);
      }}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  );
};`;

app = app.replace(oldCounter, newCounter);

fs.writeFileSync('src/App.tsx', app);
