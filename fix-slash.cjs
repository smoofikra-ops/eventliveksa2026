const fs = require('fs');
let lines = fs.readFileSync('src/App.tsx', 'utf8').split('\n');

lines[460] = lines[460].replace('px-8 /60 /60 backdrop-blur-xl lack/10 dark:border-white/10', 'px-8 bg-black/60 backdrop-blur-xl border-b border-white/10');
lines[516] = lines[516].replace('px-4 /60 /60 backdrop-blur-xl lack/10 dark:border-white/10', 'px-4 bg-black/60 backdrop-blur-xl border-b border-white/10');
lines[674] = lines[674].replace('rounded-full /10 dark:/5 backdrop-blur-md border lack/10 dark:border-white/20', 'rounded-full bg-black/40 backdrop-blur-md border border-white/20');
lines[1191] = lines[1191].replace('rounded-full /20 backdrop-blur-md', 'rounded-full bg-black/40 backdrop-blur-md');
lines[1216] = lines[1216].replace('px-4 py-2 /10 hover:bg-amber-500', 'px-4 py-2 bg-black/40 hover:bg-amber-500');
lines[1255] = lines[1255].replace('overflow-hidden /5 border', 'overflow-hidden bg-black/40 border');
lines[1530] = lines[1530].replace('relative /90 backdrop-blur-sm', 'relative bg-black/40 backdrop-blur-sm');
lines[1984] = lines[1984].replace('bg-[#0a0c0d]/80 /80 backdrop-blur-3xl', 'bg-[#0a0c0d]/80 backdrop-blur-3xl');
lines[2623] = lines[2623].replace('w-2 h-2 /80 rounded-full', 'w-2 h-2 bg-white/80 rounded-full');
lines[2636] = lines[2636].replace('w-1 /20', 'w-1 bg-white/20');
lines[2637] = lines[2637].replace('w-1 /20', 'w-1 bg-white/20');
lines[2638] = lines[2638].replace('w-1 /20', 'w-1 bg-white/20');
lines[2645] = lines[2645].replace('rounded-sm /50', 'rounded-sm bg-white/50');

fs.writeFileSync('src/App.tsx', lines.join('\n'));
