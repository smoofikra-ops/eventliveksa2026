with open('src/App.tsx', 'r') as f:
    text = f.read()

text = text.replace("return url.includes('youtube.com') || url.includes('youtu.be');", "return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('drive.google.com');")

with open('src/App.tsx', 'w') as f:
    f.write(text)
