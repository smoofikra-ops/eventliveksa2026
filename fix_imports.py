with open("src/App.tsx", "r") as f:
    text = f.read()

text = text.replace("import { Play, motion", "import { motion")
text = text.replace("import { Play, import { Play, useLanguage } from", "import { useLanguage } from")
text = text.replace("import { Play, import { Play, useLanguage }", "import { useLanguage }")
text = text.replace("import { Play, CustomHeroSequence } from", "import { CustomHeroSequence } from")
text = text.replace("import { Play, Camera,", "import { Camera, Play,")

import re
# Clean up any other "import { Play, " that are wrong
lines = text.split("\n")
for i, line in enumerate(lines):
    if line.startswith("import { Play,") and "lucide-react" not in line and "Camera" not in line:
        lines[i] = line.replace("import { Play, ", "import { ")
        lines[i] = lines[i].replace("import { Play,", "import {")

text = "\n".join(lines)

# Ensure Play is in lucide-react
if "Play," not in text or "lucide-react" not in text:
    text = text.replace("import { Camera,", "import { Camera, Play,")

with open("src/App.tsx", "w") as f:
    f.write(text)
