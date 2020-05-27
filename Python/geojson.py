import urllib.request, urllib.parse, urllib.error
import json
import ssl

api_key = False
serviceurl = 'http://py4e-data.dr-chuck.net/json?'

if api_key is False:
    api_key = 42
    serviceurl = 'http://py4e-data.dr-chuck.net/json?'
else :
    serviceurl = 'https://maps.googleapis.com/maps/api/geocode/json?'

while True:
    address = input('Enter location:')
    if len(address) < 1: break #to avoid empty input

    parms = dict()
    parms['address'] = address
    if api_key is not False: parms['key'] = api_key
    url = serviceurl + urllib.parse.urlencode(parms)
    #this concatenates the service url with the address. Address needs to get encoded for blank spaces etc.
    #end product will look something like .../json?address=Silver+Street...

    print('Retrieving', url)

    handle = urllib.request.urlopen(url)
    data = handle.read().decode() #gets Unicode
    print('Retrieved', len(data), 'characters')

    try:
        js = json.loads(data)
    except:
        js = None

    if not js or 'status' not in js or js['status'] != 'OK':
        print('====== Failure to Retrieve ======')
        print(data)
        continue

    print(json.dumps(js, indent=4)) #dumps is opposite of loads. indent to see data printed 'prettily'.

    place_id = js['results'][0]['place_id']

    print(place_id)