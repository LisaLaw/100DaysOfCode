list1 = input('Escribe primera lista: ')
list2 = input('Escribe segunda lista: ')

list1 = list(list1)
list2 = list(list2)

def find_overlap(first_list, second_list):
    for item in first_list:
        if item in second_list:
            return True
        else:
            return False

print(find_overlap(list1,list2))
