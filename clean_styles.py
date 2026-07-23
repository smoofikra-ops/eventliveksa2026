import re

def clean_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        code = f.read()
    
    # Remove all style attributes that have px or specific bad keys
    # But preserve legitimate ones like scaleX, animationDuration, etc.
    # To be safe, let's remove specific substrings based on what was added:
    bad_styles = [
        r"\s*style=\{\{'height':\s*'290\.5px',[^}]*\}\}",
        r"\s*style=\{\{fontSize:\s*'10px',\s*'paddingBottom':[^}]*\}\}",
        r"\s*style=\{\{'height':\s*'101px',[^}]*\}\}",
        r"\s*style=\{\{'marginRight':\s*'-1[69]px',[^}]*\}\}",
        r"\s*style=\{\{'width':\s*'228px',[^}]*\}\}",
        r"\s*style=\{\{'marginBottom':\s*'2px',\s*'marginRight':\s*'-3px',[^}]*\}\}",
        r"\s*style=\{\{'marginTop':\s*'4px',\s*'paddingTop':\s*'-3px',[^}]*\}\}"
    ]
    
    for pat in bad_styles:
        code = re.sub(pat, '', code)
    
    # Let's also make sure to restore the original fontSize: '10px' for the badge if it was removed
    # Wait, the badge had style={{ fontSize: '10px' }}.
    # Let's just restore it manually if needed, or leave it off.
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(code)

clean_file('src/App.tsx')
clean_file('src/CustomHeroSequence.tsx')
print("Cleaned bad styles.")
