#Given a number, return the difference between the maximum and minimum numbers that can be formed when the digits are rearranged.
nr = (input('Enter a number:'))
#output is a string
my_list = []
my_list[:] = nr #slices the string from above and adds to list
my_list.sort(reverse=True) #sorts list in descending order to get max nr
max_nr = int("".join(my_list)) #puts items of list back together to a string
print('max', max_nr)

#like above but reverse for minimum number
my_list.sort()
min_nr = int("".join(my_list))
print('min', min_nr)

diff = max_nr - min_nr
print('difference', diff)    