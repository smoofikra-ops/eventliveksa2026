import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

portfolio_start = content.find("const Portfolio =")
portfolio_end = content.find("const FAQ =", portfolio_start)
portfolio_code = content[portfolio_start:portfolio_end]

# We will modify portfolio_code.
# 1. Add states:
new_states = """  const { t, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [gridPage, setGridPage] = useState(0);
  const ITEMS_PER_PAGE = window.innerWidth < 768 ? 9 : 12;
"""
portfolio_code = re.sub(r'const { t, language } = useLanguage\(\);\s*const \[selectedIndex, setSelectedIndex\] = useState<number \| null>\(null\);', new_states, portfolio_code)

# 2. Change the click on the album cover:
portfolio_code = portfolio_code.replace("setSelectedIndex(0);", "setIsGridOpen(true); setGridPage(0);")

# 3. Change cover image src to /portfolio_cover.jpg instead of works[0].img
# Find the Main Cover block:
# {works[0] && ( <img src={getOptimizedImageUrl(works[0].img)}
portfolio_code = re.sub(
    r'\{works\[0\] && \(\s*<img\s*src=\{getOptimizedImageUrl\(works\[0\]\.img\)\}',
    r'<img src="/portfolio_cover.jpg"',
    portfolio_code
)
# Remove the closing )} for works[0]
portfolio_code = re.sub(
    r'<img src="/portfolio_cover.jpg"(.*?)/>\s*\)',
    r'<img src="/portfolio_cover.jpg"\1/>',
    portfolio_code,
    flags=re.DOTALL
)

# 4. Add the Grid Modal before the Lightbox modal:
grid_modal = """
    <AnimatePresence>
      {isGridOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] bg-[#050505] flex flex-col p-4 md:p-8"
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className="flex justify-between items-center mb-6 z-[160]">
             <h3 className="text-2xl md:text-3xl font-black text-white">{language === 'ar' ? 'ألبوم الأعمال' : 'Our Portfolio'}</h3>
             <button
               onClick={() => setIsGridOpen(false)}
               className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-amber-500 text-white hover:text-black rounded-full transition-all"
             >
               <X className="w-5 h-5" />
               <span>{language === 'ar' ? 'إغلاق' : 'Close'}</span>
             </button>
          </div>
          
          <div className="flex-1 relative w-full h-full">
            <div className="text-center text-white/50 text-sm mb-4">
              <SwipeHint customText={language === 'ar' ? 'اسحب لليمين أو اليسار للتنقل بين صفحات الألبوم' : 'Swipe left or right to navigate pages'} />
            </div>
            
            <motion.div
              key={gridPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset }) => {
                 const swipeX = offset.x;
                 const isRtl = language === 'ar';
                 const maxPages = Math.ceil(filteredWorks.length / ITEMS_PER_PAGE);
                 if (swipeX < -50) {
                    if (isRtl) setGridPage(p => Math.max(0, p - 1));
                    else setGridPage(p => Math.min(maxPages - 1, p + 1));
                 } else if (swipeX > 50) {
                    if (isRtl) setGridPage(p => Math.min(maxPages - 1, p + 1));
                    else setGridPage(p => Math.max(0, p - 1));
                 }
              }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-max overflow-y-auto max-h-[70vh] pb-20"
            >
              {filteredWorks.slice(gridPage * ITEMS_PER_PAGE, (gridPage + 1) * ITEMS_PER_PAGE).map((work, idx) => (
                <div 
                  key={work.id} 
                  className="relative aspect-square cursor-pointer group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all"
                  onClick={() => setSelectedIndex(gridPage * ITEMS_PER_PAGE + idx)}
                >
                  <img src={getOptimizedImageUrl(work.img)} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="" loading="lazy" />
                  {work.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center pl-1 shadow-lg">
                        <Play className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/80 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
             <button 
               onClick={() => setGridPage(p => Math.max(0, p - 1))}
               disabled={gridPage === 0}
               className="p-2 text-white disabled:opacity-30 hover:text-amber-500 transition-colors"
             >
               <ChevronLeft className="w-6 h-6 ltr:rotate-0 rtl:rotate-180" />
             </button>
             <span className="text-white/80 font-mono text-sm font-bold">
               {gridPage + 1} / {Math.ceil(filteredWorks.length / ITEMS_PER_PAGE)}
             </span>
             <button 
               onClick={() => setGridPage(p => Math.min(Math.ceil(filteredWorks.length / ITEMS_PER_PAGE) - 1, p + 1))}
               disabled={gridPage >= Math.ceil(filteredWorks.length / ITEMS_PER_PAGE) - 1}
               className="p-2 text-white disabled:opacity-30 hover:text-amber-500 transition-colors"
             >
               <ChevronLeft className="w-6 h-6 ltr:rotate-180 rtl:rotate-0" />
             </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
"""

portfolio_code = portfolio_code.replace("<AnimatePresence>\n      {selectedWork && (", grid_modal + "\n    <AnimatePresence>\n      {selectedWork && (")

# Ensure the lightbox uses z-[200] so it goes above the grid modal which is z-[150]. The lightbox is already z-[200].
with open('src/App.tsx', 'w') as f:
    f.write(content[:portfolio_start] + portfolio_code + content[portfolio_end:])
