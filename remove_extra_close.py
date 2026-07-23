import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    app_code = f.read()

# Remove the outer close buttons in Services modal
old_services_outer = """            {/* Top-Right Floating Close Button on Overlay */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedServiceIndex(null); }}
              className="absolute top-3 right-3 sm:top-5 sm:right-6 z-[350] p-3 sm:p-3.5 bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/30 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 active:scale-95 group cursor-pointer flex items-center justify-center"
              title={language === 'ar' ? 'إغلاق' : 'Close'}
              aria-label="Close"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-90" />
            </button>"""
app_code = app_code.replace(old_services_outer, "")

# Remove the outer close button in Portfolio modal
old_portfolio_outer = """            {/* Top-Right Floating Close Button on Overlay */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              className="absolute top-3 right-3 sm:top-5 sm:right-6 z-[350] p-3 sm:p-3.5 bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/30 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 active:scale-95 group cursor-pointer flex items-center justify-center"
              title={language === 'ar' ? 'إغلاق' : 'Close'}
              aria-label="Close"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-90" />
            </button>"""
app_code = app_code.replace(old_portfolio_outer, "")

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("Removed outer close buttons.")
