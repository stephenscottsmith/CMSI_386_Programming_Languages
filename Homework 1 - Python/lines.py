import sys, string

input_file = open(sys.argv[1]) 
linesWithText = 0

try:
    for line in input_file:
        line = string.strip(line)
        if line :
        	if (line[0] == '#') :
        		continue
        	else :
        		linesWithText = linesWithText + 1

finally:
    input_file.close()
print linesWithText