def eliminate_dup(list1):
    count = 1
    while count < len(list1):
        for item in list1:
            if item in list1[count:] :
                list1.remove(item)
                count += 1
            else:
                count += 1
        
    return ''.join(list1)

my_list = input('Escribe una lista: ')
my_list = list(my_list)

print(eliminate_dup(my_list))