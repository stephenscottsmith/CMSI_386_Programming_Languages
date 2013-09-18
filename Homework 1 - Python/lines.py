import sys

lines = 0
with open(sys.argv[1]) as f:
    for line in f:
        line = line.strip()
        if line and not line.startswith('#'):
            lines += 1
print lines