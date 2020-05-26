import json
import urllib.request, urllib.parse, urllib.error


url = input("Enter:")

html = urllib.request.urlopen(url).read()

data = json.loads(html)

count = 0

for item in data["comments"]:
    count = item["count"] + count

print(count)