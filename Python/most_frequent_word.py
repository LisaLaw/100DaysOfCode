text = open('Treasure_Island.txt') #opens the text

my_dict = dict()
word_list = []

for lines in text:
    lines = lines.rstrip() #splits the text into lines
    words = lines.split() #splits the lines into words
    for word in words:
        my_dict[word] = my_dict.get(word, 0) + 1 #adds a tuple to my_dict of each word with the count on how often it appears.
                                                 #if the word is not in the dict yet, a new tuple will be created with count 0

for key, value in my_dict.items():
    new_tuple = value, key #turns the tuple around so we can look for the highest number of appearances
    word_list.append(new_tuple) #adds all tuples to a list which we can sort etc.

word_list.sort(reverse=True) #sorts the list from highest to lowest

final_list = word_list[:30] #cuts the list down to the 30 most frequent words

print(final_list)

    