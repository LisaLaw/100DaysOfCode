import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl
import re

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
user_link = input('Enter link:')
user_depth = input('Enter depth:')
depth = 0
my_list = list()


while depth < int(user_depth): #while needs to be the outmost loop so that the loop can access itself

	link = 0
	html = urllib.request.urlopen(url, context=ctx).read() #reads through the next webpage
	soup = BeautifulSoup(html, 'html.parser')

	#Retrieve all of the anchor tags
	tags = soup('a')

	for tag in tags:
		link = link + 1 #at the beginning of the for loop for human counting
		if link == int(user_link): #we've reached the link the user wants
			url = tag.get("href") #retrieving the link the user wanted
			my_list.append(url)		
			depth = depth + 1 #going to the next webpage (see beginning of while loop)

	if depth == int(user_depth): #when we've reached the final destination, we need to extract the wanted data			
		name = re.findall('\_([A-Z].+)\.', url) #extract the data. 2nd argument to tell where to search for the data
		#regex gives back a list, hence we need to access via index
		print(name[0])	
