numbers = input('Escribe una lista de números: ') #asks user for a list of numbers
nr = input('¿Qué número está buscando?') #asks user which number he's looking for

my_list = list(numbers) #turns the input 'numbers' from type str to type list

my_list.sort() #sorts the list from smallest to biggest nr

def search_function(ele_list, ele): #function takes as both inputs as arguments
    for item in my_list : #check each number in the list
        if item == nr : #if there is a match
            return True
        return False

print(search_function(numbers, nr))