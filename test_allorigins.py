import urllib.request
import json
import re
url = "https://api.allorigins.win/get?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Ddownload%26id%3D1ndvNPiH-WplY1W_IUkJi4LDMUJ-Q7frJ"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as res:
        data = json.loads(res.read().decode('utf-8'))
        html = data.get('contents', '')
        uuid_match = re.search(r'name="uuid" value="([^"]+)"', html)
        confirm_match = re.search(r'name="confirm" value="([^"]+)"', html)
        if uuid_match and confirm_match:
            print("Found!", confirm_match.group(1), uuid_match.group(1))
        else:
            print("Not found")
except Exception as e:
    print(e)
