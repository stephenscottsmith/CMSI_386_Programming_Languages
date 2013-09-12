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
    for eachLetter in ['A','a','E', 'e','I', 'i','O', 'o','U', 'u'] :
        s = s.replace(eachLetter, '')
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
    power = 0
    while pow(2, power) <= number :
        results = pow(2, power)
        yield results
        power = power + 1

##### POWERS #####
#Precondition: the base and limit parameter must be positive real numbers
def powers (base, limit) :
    power = 0
    while pow(base, power) <= limit :
        results = pow(base, power)
        yield results
        power = power + 1


##### INTERLEAVE #####
#Precondition: the list1 and list2 parameters must be of type lists
def interleave (list1, list2) :
    lists = [list1, list2]
    newList = [x for t in zip(*lists) for x in t]
    
    if len(list1) > len(list2) :
        for y in list1[len(list2):len(list1)] :
        	newList.append(y)
    
    if len(list2) > len(list1) :
        for z in list2[len(list1):len(list2)] :
            newList.append(z)

    return newList


##### STUTTER #####
#Precondition: the listArgs parameter must be of type list
def stutter (listArgs) :
    newList = []
    
    for x in listArgs :
        newList.append(x)
        newList.append(x)
    return newList

