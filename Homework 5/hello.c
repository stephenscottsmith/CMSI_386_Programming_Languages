#include <stdio.h>
#include <stdint.h>

int minHelper (int arr[], int arrLength, int min) {
	if (arrLength > 0) {
		int newArrLength = arrLength - 1;
		printf("NEW LENGTH: %d\n", newArrLength);
		// int newArr[newArrLength];
		for (int i = 1; i <= arrLength; i++) {
			printf("i: %d\n", arr[i]);
		}
		if (min > arr[0]) {
			
			return minHelper(arr+1, newArrLength, arr[0]);
		} else {
			return minHelper(arr+1, newArrLength, min);
		}
	} else {
		return min;
	}
}

int minValue (int arr[], int arrLength) {
	unsigned long long MAX = UINTMAX_MAX;
	return minHelper(arr, arrLength, MAX);
}

int main(void) {
	unsigned long long MAX = UINTMAX_MAX;
	int arr[5] = {100, 4, 3, 9, 23};
	int size = sizeof(arr)/sizeof(int);
	int small = minValue(arr, size);
	printf("%d\n", small);
	printf("%llu\n", MAX);
	return 0;
}

