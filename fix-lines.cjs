const fs = require('fs');
let lines = fs.readFileSync('src/App.tsx', 'utf8').split('\n');

// The lines reported are 1200, 1540, 1776
lines[1199] = '      </div>';
lines[1539] = '      </div>';
lines[1775] = '      </ScrollReveal>';

fs.writeFileSync('src/App.tsx', lines.join('\n'));
