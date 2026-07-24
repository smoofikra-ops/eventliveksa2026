import urllib.request
import re

url = "https://drive.google.com/uc?export=download&id=1ndvNPiH-WplY1W_IUkJi4LDMUJ-Q7frJ"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        uuid_match = re.search(r'name="uuid" value="([^"]+)"', html)
        confirm_match = re.search(r'name="confirm" value="([^"]+)"', html)
        if uuid_match and confirm_match:
            uuid = uuid_match.group(1)
            confirm = confirm_match.group(1)
            final_url = f"https://drive.usercontent.google.com/download?id=1ndvNPiH-WplY1W_IUkJi4LDMUJ-Q7frJ&export=download&confirm={confirm}&uuid={uuid}"
            print("Final URL:", final_url)
            
            # Let's see if final_url works (should return a redirect or the video itself)
            req2 = urllib.request.Request(final_url, headers={'User-Agent': 'Mozilla/5.0'})
            try:
                with urllib.request.urlopen(req2) as res2:
                    print("Status:", res2.status)
                    print("Content-Type:", res2.getheader('Content-Type'))
                    print("Content-Length:", res2.getheader('Content-Length'))
            except urllib.error.HTTPError as e:
                print("Error Status:", e.code)
                print("Error Headers:", e.headers)
        else:
            print("Could not find tokens")
except Exception as e:
    print("Error:", e)
