import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

old_drag = """              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                const swipe = offset.x;
                const isRtl = language === 'ar';
                if (swipe < -50 && selectedIndex !== null) {
                  if (isRtl) setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : filteredWorks.length - 1);
                  else setSelectedIndex(selectedIndex < filteredWorks.length - 1 ? selectedIndex + 1 : 0);
                } else if (swipe > 50 && selectedIndex !== null) {
                  if (isRtl) setSelectedIndex(selectedIndex < filteredWorks.length - 1 ? selectedIndex + 1 : 0);
                  else setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : filteredWorks.length - 1);
                }
              }}"""

new_drag = """              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeX = offset.x;
                const swipeY = offset.y;
                const isRtl = language === 'ar';
                if (Math.abs(swipeY) > 100 || Math.abs(velocity.y) > 500) {
                  setSelectedIndex(null);
                } else if (swipeX < -50 && selectedIndex !== null) {
                  if (isRtl) setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : filteredWorks.length - 1);
                  else setSelectedIndex(selectedIndex < filteredWorks.length - 1 ? selectedIndex + 1 : 0);
                } else if (swipeX > 50 && selectedIndex !== null) {
                  if (isRtl) setSelectedIndex(selectedIndex < filteredWorks.length - 1 ? selectedIndex + 1 : 0);
                  else setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : filteredWorks.length - 1);
                }
              }}"""

code = code.replace(old_drag, new_drag)

old_div_class = """              className="relative w-full h-[90vh] md:h-auto max-w-5xl md:aspect-video bg-[#111] rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 touch-none cursor-grab active:cursor-grabbing flex flex-col items-center justify-center"
            >"""

new_div_class = """              className="relative w-full h-[90vh] md:h-auto max-w-5xl md:aspect-video bg-[#111] rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 touch-none cursor-grab active:cursor-grabbing flex flex-col items-center justify-center"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }} 
                className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-[400] flex items-center justify-center gap-1.5 px-5 py-2 bg-black/70 hover:bg-amber-500 hover:text-black text-white border border-white/20 rounded-full backdrop-blur-md transition-all duration-300 pointer-events-auto shadow-xl"
              >
                <X className="w-5 h-5" />
                <span className="text-sm font-bold">{language === 'ar' ? 'إغلاق' : 'Close'}</span>
              </button>"""
code = code.replace(old_div_class, new_div_class)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Fixed portfolio.")
