const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replaceAll(
  `dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeX = offset.x;
                const swipeY = offset.y;
                const isRtl = language === 'ar';
                if (Math.abs(swipeY) > 80 || Math.abs(velocity.y) > 400) {`,
  `dragElastic={0.6}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeX = offset.x;
                const swipeY = offset.y;
                const isRtl = language === 'ar';
                if (Math.abs(swipeY) > 50 || Math.abs(velocity.y) > 200) {`
);

content = content.replaceAll(
  `} else if (swipeX > 80 || velocity.x > 400) {`,
  `} else if (swipeX > 50 || velocity.x > 200) {`
);

content = content.replaceAll(
  `} else if (swipeX < -80 || velocity.x < -400) {`,
  `} else if (swipeX < -50 || velocity.x < -200) {`
);

fs.writeFileSync('src/App.tsx', content);
