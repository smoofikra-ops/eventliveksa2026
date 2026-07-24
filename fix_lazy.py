with open("src/App.tsx", "r") as f:
    text = f.read()

# Replace any extra closing braces on loading="lazy" />}} -> loading="lazy" />}
text = text.replace('loading="lazy" />}}', 'loading="lazy" />}')
# In Portfolio cover it should NOT have } because it's not inside {} anymore.
# We changed {works[0] && ( <img ... )} to <img ... />
# Let's find the exact block
text = text.replace('<img src="/portfolio_cover.jpg"\n                 alt="Main Album"\n                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"\n               loading="lazy" />}', '<img src="/portfolio_cover.jpg"\n                 alt="Main Album"\n                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"\n               loading="lazy" />')

text = text.replace('<img src="/portfolio_cover.jpg"\n                 alt="Main Album"\n                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"\n               loading="lazy" />}}', '<img src="/portfolio_cover.jpg"\n                 alt="Main Album"\n                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"\n               loading="lazy" />')

text = text.replace('<img src="/portfolio_cover.jpg"\n                 alt="Main Album"\n                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"\n               loading="lazy" />}', '<img src="/portfolio_cover.jpg"\n                 alt="Main Album"\n                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"\n               loading="lazy" />')

# Let's use re to fix all loading="lazy" /> to make sure they are correct.
import re
# First, remove all } after loading="lazy" />
text = re.sub(r'loading="lazy"\s*/>\}*', 'loading="lazy" />', text)

# Now, we know there are cases where it NEEDS a }
# e.g., {works[2] && <img ... loading="lazy" />}
text = re.sub(r'(\{works\[\d+\] && <img.*?loading="lazy" />)', r'\1}', text)

# For the grid modal:
# <img src={getOptimizedImageUrl(work.img)} className="..." alt="" loading="lazy" />
# It doesn't need }

# For other places?
# {selectedWork.img && <img ... loading="lazy" />}
# Let's just fix it by ensuring {works[...] has }
with open("src/App.tsx", "w") as f:
    f.write(text)
