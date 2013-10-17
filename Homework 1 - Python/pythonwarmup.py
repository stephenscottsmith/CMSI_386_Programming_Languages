import sys;
from random import shuffle;


##### MAKE CHANGE #####
#Precondition: the coins parameter must be a positive, whole number
def change (coins) :
    quarters, coins = divmod(coins, 25)
    dimes, coins = divmod(coins, 10)
    nickels, coins = divmod(coins, 5)
    pennies, coins = divmod(coins, 1)
    return (quarters, dimes, nickels, pennies)


##### STRIP VOWELS #####
#Precondition: the s paramter must be a string
def strip_vowels (s) :
    s = s.translate(None, 'AaEeIiOoUu')
    return s


##### SCRAMBLE #####
#Precondition: the word parameter must be a string
#http://stackoverflow.com/questions/6181304/are-there-any-way-to-scramble-strings-in-python
def scramble (word) :
    word = list(word)
    shuffle(word)
    return ''.join(word)


##### POWERS OF 2 #####
#Precondition: the number parameter must be a positive real number
def powers_of_two (number) :
    result = 1
    while result <= number:
        yield result
        result *= 2

##### POWERS #####
#Precondition: the base and limit parameter must be positive real numbers
def powers (base, limit) :
    result = 1
    while result <= limit:
        yield result
        result *= base


##### INTERLEAVE #####
#Precondition: the list1 and list2 parameters must be of type lists
def interleave (list1, list2) :
    return [y for x in zip(list1, list2) for y in x] + list1[len(list2):] + list2[len(list1):]


##### STUTTER #####
#Precondition: the listArgs parameter must be of type list
def stutter (listArgs) :
    newList = []
    
    for x in listArgs :
        newList.append(x)
        newList.append(x)
    return newList


def mapIterate (f, l) :
    result = []

    for x in l :
        y = x
        for z in range(x) :
            y = f(y)

        result.append(y)
    return result

def mul(x) :
    return x*2

print mapIterate(mul, [1, 2, 3])




















