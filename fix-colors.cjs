const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace heading-gradient with text-white in all section titles
content = content.replace(/<h2 className="([^"]*)heading-gradient([^"]*)"/g, '<h2 className="$1text-white$2"');

// Also fix AnimatedTitle if it has heading-gradient passed to it
content = content.replace(/<AnimatedTitle([^>]+)className="([^"]*)heading-gradient([^"]*)"/g, '<AnimatedTitle$1className="$2text-white$3"');

fs.writeFileSync('src/App.tsx', content);
