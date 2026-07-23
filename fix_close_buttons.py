import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    app_code = f.read()

# Replace Services Close Button
old_services_close = """              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedServiceIndex(null); }} 
                className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-[400] flex items-center justify-center gap-1.5 px-5 py-2 bg-black/70 hover:bg-amber-500 hover:text-black text-white border border-white/20 rounded-full backdrop-blur-md transition-all duration-300 pointer-events-auto shadow-xl"
              >
                <X className="w-5 h-5" />
                <span className="text-sm font-bold">{language === 'ar' ? 'إغلاق' : 'Close'}</span>
              </button>"""

new_services_close = """              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedServiceIndex(null); }} 
                className="absolute top-6 left-1/2 -translate-x-1/2 z-[400] flex items-center justify-center gap-2 px-6 py-2.5 bg-black/30 hover:bg-black/80 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-full backdrop-blur-xl transition-all duration-300 pointer-events-auto shadow-2xl opacity-60 hover:opacity-100 active:opacity-100 active:scale-95 group"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-90" />
                <span className="text-sm md:text-base font-bold tracking-wide">{language === 'ar' ? 'إغلاق' : 'Close'}</span>
              </button>"""

app_code = app_code.replace(old_services_close, new_services_close)

# Replace Portfolio Close Button
old_portfolio_close = """              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }} 
                className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-[400] flex items-center justify-center gap-1.5 px-5 py-2 bg-black/70 hover:bg-amber-500 hover:text-black text-white border border-white/20 rounded-full backdrop-blur-md transition-all duration-300 pointer-events-auto shadow-xl"
              >
                <X className="w-5 h-5" />
                <span className="text-sm font-bold">{language === 'ar' ? 'إغلاق' : 'Close'}</span>
              </button>"""

new_portfolio_close = """              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }} 
                className="absolute top-6 left-1/2 -translate-x-1/2 z-[400] flex items-center justify-center gap-2 px-6 py-2.5 bg-black/30 hover:bg-black/80 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-full backdrop-blur-xl transition-all duration-300 pointer-events-auto shadow-2xl opacity-60 hover:opacity-100 active:opacity-100 active:scale-95 group"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-90" />
                <span className="text-sm md:text-base font-bold tracking-wide">{language === 'ar' ? 'إغلاق' : 'Close'}</span>
              </button>"""

app_code = app_code.replace(old_portfolio_close, new_portfolio_close)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("Applied close button updates.")
