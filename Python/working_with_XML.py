import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')

html = urllib.request.urlopen(url, context=ctx).read() #turns the html code into readable stuff

tree = ET.fromstring(html) #turns the XML code into readable stuff

my_list = tree.findall('.//count') #finds all count elements. .// is to make it child elements of higher levels
#findall does not work with .text

count = 0

for element in my_list:
	count = count + int(element.text) #retrieves the text within the elements in str format

print(count)
