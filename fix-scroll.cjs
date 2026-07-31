const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacement = `type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'diagonal-left' | 'diagonal-right' | 'fade';

const getAnimationVariants = (type: AnimationType = 'fade-up', distance: number = 30) => {
  switch (type) {
    case 'fade-up': return { initial: { opacity: 0, y: distance }, whileInView: { opacity: 1, y: 0 } };
    case 'fade-down': return { initial: { opacity: 0, y: -distance }, whileInView: { opacity: 1, y: 0 } };
    case 'fade-left': return { initial: { opacity: 0, x: distance }, whileInView: { opacity: 1, x: 0 } };
    case 'fade-right': return { initial: { opacity: 0, x: -distance }, whileInView: { opacity: 1, x: 0 } };
    case 'diagonal-left': return { initial: { opacity: 0, x: distance, y: distance }, whileInView: { opacity: 1, x: 0, y: 0 } };
    case 'diagonal-right': return { initial: { opacity: 0, x: -distance, y: distance }, whileInView: { opacity: 1, x: 0, y: 0 } };
    case 'fade': return { initial: { opacity: 0 }, whileInView: { opacity: 1 } };
    default: return { initial: { opacity: 0, y: distance }, whileInView: { opacity: 1, y: 0 } };
  }
}

const ScrollReveal = ({ children, delay = 0, className = "", type = "fade-up", distance = 30, once = true }: { children: React.ReactNode, delay?: number, key?: React.Key, className?: string, type?: AnimationType, distance?: number, once?: boolean }) => {
  const variants = getAnimationVariants(type, distance);
  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.whileInView}
      viewport={{ once, margin: "-10%" }}
      transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};`;

content = content.replace(
  /const ScrollReveal = \(\{\s*children,\s*delay = 0,\s*className = ""\s*\}\s*:\s*\{[^}]+\}\)\s*=>\s*\{\s*return\s*\(\s*<motion\.div[^>]+>\s*\{children\}\s*<\/motion\.div>\s*\);\s*\};/m,
  replacement
);

fs.writeFileSync('src/App.tsx', content);
