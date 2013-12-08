#include <stdio.h>

#include <iostream>

char** interleave(char** a, int lengthOfA, char** b, int lengthOfB) {
	int max;
    if (lengthOfA > lengthOfB) {
       max = lengthOfA;
    } else {
       max = lengthOfB;
    }
    
    int resultLength = lengthOfA + lengthOfB;
    char** result = (char**)malloc(resultLength);
    int resultIndex = 0;
    for (int i = 0; i < max; i++) {
        if (i < lengthOfA) {
        	result[resultIndex] = a[i];
        	resultIndex++;
        }
        if (i < lengthOfB) {
        	result[resultIndex] = b[i];
        	resultIndex++;
        }
    }
    return result;
}

int main () {
	int length1 = 2;
	char** array1 = [length1];
	array1[0] = "hi";
	array1[1] = "jk";

	int length2 = 2;
	char** array2 = [length2];
	array2[0] = "haley";
	array2[1] = "andrew";

	int resultLength = length2 + length1;
	char** resultArray = interleave(array1, array2, length1, length2);

	for (int i = 0; i < resultLength; i++) {
		printf("%s", resultArray[i]);
	}
}