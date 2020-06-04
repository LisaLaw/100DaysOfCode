#extracting chapter number and title from the book "Treasure Island"

import re

text = open('Treasure_Island.txt', 'r')
lines = text.readlines() #returns a list of all lines in the text

my_list = []

for item in lines:
    item.strip() #turns all lines into several strings
    my_list.append(item) #makes one list out of all strings

all_lines = ''.join(my_list) #joins all lines to one big str


chapters = re.findall(r'(\d+\n\n[A-Z]\w*\-*\ [\w*\-*\ ]*\n?)', all_lines)
#() => capturing group; d+ => one or more digi; \new lines; [A-Z] first word of chapter title starts with a capital letter;
#\w* any and all word-type characters (= [A-Za-z0-9_]);\- to account for hyphenated words; \ white space; this can all happen several ways;
#? zero-1 times, greedy, gives back as many as possible

for chapter in chapters:
    print(chapter) #extracts the information in a readable fashion
    


    
