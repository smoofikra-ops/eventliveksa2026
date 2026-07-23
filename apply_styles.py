import re
import json

app_tsx_path = "src/App.tsx"
custom_hero_path = "src/CustomHeroSequence.tsx"

with open(app_tsx_path, "r", encoding="utf-8") as f:
    app_code = f.read()

with open(custom_hero_path, "r", encoding="utf-8") as f:
    custom_code = f.read()

# Helper to merge dict into style string or create new style prop
def inject_style(content, element_pattern, style_dict):
    match = re.search(element_pattern, content, re.DOTALL)
    if not match:
        print(f"Failed to find element for pattern {element_pattern}")
        return content

    element_str = match.group(0)
    
    style_str_to_add = json.dumps(style_dict).replace('"', "'")
    
    # Check if style exists
    style_match = re.search(r'style=\{\{(.*?)\}\}', element_str, re.DOTALL)
    if style_match:
        existing_style_content = style_match.group(1).strip()
        # A simple hack: just add new properties
        new_style_str = "style={{" + existing_style_content + ", " + style_str_to_add[1:-1] + "}}"
        new_element_str = element_str.replace(style_match.group(0), new_style_str)
    else:
        # Inject before closing bracket of the opening tag
        # We need to find the end of the opening tag.
        # But some are self closing, some are not. Let's just insert before the final '>' of the tag we matched.
        # It's safer to use regex replacement on the exact element_str.
        # We assume the pattern matches just the opening tag!
        new_element_str = element_str[:-1] + f" style={{{style_str_to_add}}} " + element_str[-1]

    return content.replace(element_str, new_element_str)

# 1. max-w-4xl
css1 = {"height": "290.5px", "width": "325px", "paddingTop": "-3px", "paddingLeft": "0px", "marginLeft": "-3px", "marginRight": "2px", "marginTop": "213px"}
app_code = inject_style(app_code, r'<motion\.div\s*initial=\{\{\s*opacity:\s*0,\s*y:\s*50\s*\}\}\s*animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*transition=\{\{\s*duration:\s*1,\s*ease:\s*"easeOut"\s*\}\}\s*className="max-w-4xl"\s*>', css1)

# 7. badge (it has existing style!)
css7 = {"paddingBottom": "7px", "paddingTop": "7px", "paddingLeft": "23px", "paddingRight": "22px", "marginRight": "-3px", "marginLeft": "2px", "marginBottom": "-2px", "marginTop": "4px"}
app_code = inject_style(app_code, r'<motion\.div\s*initial=\{\{\s*opacity:\s*0,\s*scale:\s*0\.8\s*\}\}\s*animate=\{\{\s*opacity:\s*1,\s*scale:\s*1\s*\}\}\s*transition=\{\{\s*delay:\s*0\.2\s*\}\}\s*className="inline-flex items-center gap-3 px-5 py-2\.5 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/20 text-amber-500 md:text-amber-400 font-black mb-8"\s*style=\{\{ fontSize: \'10px\' \}\}\s*>', css7)

# 4. CTA wrapper
css4 = {"height": "101px", "width": "219px", "paddingBottom": "-2px", "paddingTop": "-3px", "paddingLeft": "-12px", "paddingRight": "30px", "marginLeft": "20px", "marginTop": "44px", "marginRight": "0px"}
app_code = inject_style(app_code, r'<div className="flex flex-wrap gap-4 md:gap-6 relative z-10 mt-6">', css4)

# 2. CTA button 1
css2 = {"marginRight": "-16px", "paddingBottom": "4px", "paddingRight": "62px", "paddingTop": "2px", "paddingLeft": "-4px", "lineHeight": "16px", "width": "235px", "textAlign": "right", "marginLeft": "-7px", "height": "36px", "marginBottom": "-47px", "marginTop": "-1px", "borderRadius": "20.67772px"}
app_code = inject_style(app_code, r'<motion\.button\s*whileHover=\{\{\s*scale:\s*1\.05,\s*boxShadow:\s*"0 0 30px rgba\(255,138,0,0\.5\)"\s*\}\}\s*whileTap=\{\{\s*scale:\s*0\.95\s*\}\}\s*onClick=\{onQuoteClick\}\s*className="btn-primary text-base md:text-lg px-8 py-4 md:px-10 md:py-5 relative w-full sm:w-auto"\s*>', css2)

# 3. CTA button 2
css3 = {"width": "228px", "height": "32px", "marginLeft": "-8px", "marginTop": "6px", "marginBottom": "3px", "marginRight": "-7px", "paddingBottom": "9px", "paddingTop": "3px"}
app_code = inject_style(app_code, r'<motion\.button\s*whileHover=\{\{\s*scale:\s*1\.05\s*\}\}\s*whileTap=\{\{\s*scale:\s*0\.95\s*\}\}\s*onClick=\{\(\) => document\.getElementById\(\'portfolio\'\)\?\.scrollIntoView\(\)\}\s*className="btn-glass text-base md:text-lg px-8 py-4 md:px-10 md:py-5 w-full sm:w-auto text-center"\s*>', css3)


# 6. CustomHeroSequence root
css6 = {"marginBottom": "2px", "marginRight": "-3px", "marginLeft": "-5px", "paddingRight": "-2px", "paddingLeft": "-2px", "marginTop": "13px", "height": "96px", "width": "330px", "paddingTop": "-2px", "paddingBottom": "-2px"}
custom_code = inject_style(custom_code, r'<motion\.div\s*initial=\{\{\s*opacity:\s*0\s*\}\}\s*animate=\{\{\s*opacity:\s*1\s*\}\}\s*transition=\{\{\s*duration:\s*1\.5,\s*ease:\s*"easeOut"\s*\}\}\s*className="relative"\s*>', css6)

# 5. CustomHeroSequence p
css5 = {"marginTop": "4px", "paddingTop": "-3px", "paddingLeft": "-3px", "paddingRight": "-2px", "paddingBottom": "-2px", "marginRight": "0px", "marginBottom": "16px", "height": "39px", "width": "328px", "lineHeight": "21.2px"}
custom_code = inject_style(custom_code, r'<p\s*className="text-\[12px\] sm:text-\[16px\] md:text-\[20px\] text-white/90 mb-4 sm:mb-8 leading-\[1\.6\] sm:leading-\[1\.75\] max-w-\[70ch\] font-normal min-h-\[40px\] sm:min-h-\[80px\]"\s*>', css5)

with open(app_tsx_path, "w", encoding="utf-8") as f:
    f.write(app_code)

with open(custom_hero_path, "w", encoding="utf-8") as f:
    f.write(custom_code)

print("Applied CSS.")
