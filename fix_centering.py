import re

# 1. Update App.tsx
with open('src/App.tsx', 'r', encoding='utf-8') as f:
    app_code = f.read()

# Replace the Hero container to center
old_hero = 'className="relative z-10 max-w-7xl mx-auto px-6 w-full py-10 md:py-20 flex-1 flex flex-col justify-center"'
new_hero = 'className="relative z-10 max-w-7xl mx-auto px-6 w-full py-10 md:py-20 flex-1 flex flex-col justify-center items-center text-center"'
app_code = app_code.replace(old_hero, new_hero)

old_hero_motion = 'className="max-w-4xl" >'
new_hero_motion = 'className="max-w-4xl flex flex-col items-center" >'
app_code = app_code.replace(old_hero_motion, new_hero_motion)

old_buttons = 'className="flex flex-wrap gap-4 md:gap-6 relative z-10 mt-6" >'
new_buttons = 'className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-10 mt-6" >'
app_code = app_code.replace(old_buttons, new_buttons)

# Add fontSize back to badge
old_badge = 'className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/20 text-amber-500 md:text-amber-400 font-black mb-8"'
new_badge = 'className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/20 text-amber-500 md:text-amber-400 font-black mb-8" style={{ fontSize: "10px" }}'
app_code = app_code.replace(old_badge, new_badge)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(app_code)


# 2. Update CustomHeroSequence.tsx
with open('src/CustomHeroSequence.tsx', 'r', encoding='utf-8') as f:
    hero_code = f.read()

old_h1 = 'className="text-[18px] sm:text-[28px] md:text-[44px] font-bold leading-[1.4] sm:leading-[1.2] mb-4 sm:mb-6 tracking-tight hero-heading-gradient min-h-[40px] sm:min-h-[80px] flex flex-wrap items-center gap-x-1 sm:gap-x-2"'
new_h1 = 'className="text-[18px] sm:text-[28px] md:text-[44px] font-bold leading-[1.4] sm:leading-[1.2] mb-4 sm:mb-6 tracking-tight hero-heading-gradient min-h-[40px] sm:min-h-[80px] flex flex-wrap justify-center items-center gap-x-1 sm:gap-x-2"'
hero_code = hero_code.replace(old_h1, new_h1)

old_p = 'className="text-[12px] sm:text-[16px] md:text-[20px] text-white/90 mb-4 sm:mb-8 leading-[1.6] sm:leading-[1.75] max-w-[70ch] font-normal min-h-[40px] sm:min-h-[80px]" >'
new_p = 'className="text-[12px] sm:text-[16px] md:text-[20px] text-white/90 mb-4 sm:mb-8 leading-[1.6] sm:leading-[1.75] max-w-[70ch] font-normal min-h-[40px] sm:min-h-[80px] text-center" >'
hero_code = hero_code.replace(old_p, new_p)

with open('src/CustomHeroSequence.tsx', 'w', encoding='utf-8') as f:
    f.write(hero_code)

print("Applied centering.")
