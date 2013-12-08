#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void)
{
    char *s_one[] = { "Zorro", "Alex", "Celine" };
    char *s_two[] = { "Zorro1", "Alex1"};

    printf("%lu\n", sizeof(s_one));
    printf("%lu\n", sizeof(s_two));

    int numberOfEntries = (sizeof(s_one) + sizeof(s_two)) / sizeof(char*);
    char **p = (char **)malloc(numberOfEntries);

    printf("%d\n", numberOfEntries);

    memcpy(p, s_one, sizeof(s_one));
    memcpy(p + sizeof(s_one)/sizeof(char *), s_two, sizeof(s_two));

    //print out
    int count = 0;
    for (count = 0; count < numberOfEntries; count++)
        printf("arr[%d] = %s.\n", count, p[count]);
}

char** interleave(char**a, char**b, int lenA, int lenB) {
    
}