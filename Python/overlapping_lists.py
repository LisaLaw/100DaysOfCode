list1 = input('Escribe primera lista: ')
list2 = input('Escribe segunda lista: ')

#turn both inputs from type str to type list
list1 = list(list1)
list2 = list(list2)

#define a function which takes both inputs as lists to be checked
def find_overlap(first_list, second_list):
    for item in first_list: #go through item in list1
        if item in second_list: #and check if any of the items are also in list2
            return True
        else:
            return False

print(find_overlap(list1,list2)) #print and call the function
