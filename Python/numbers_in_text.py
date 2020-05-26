import re

handle = open("regex_sum_11344.txt")


#setting original sum to 0
count = 0

#going through all lines in the text
for line in handle:
	#extracting all numbers; must be greedy otherwise numbers get spliced
	allnumbers = re.findall("[0-9]+", line) # re.findall needs the attribute line to know where to look for the numbers; this function returns lists
	for numbers in allnumbers: #extracting all numbers from the lists we got previously
		count = count + float(numbers) #adding the numbers to our total
		 
print(count)