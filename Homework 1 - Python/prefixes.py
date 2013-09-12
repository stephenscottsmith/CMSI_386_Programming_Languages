import sys

def createPrefixes (arg) :
    arg = str(arg)
    index = 0
    while (index <= len(arg)) :
        print arg[0:index]
        index = index + 1

createPrefixes(sys.argv[1])