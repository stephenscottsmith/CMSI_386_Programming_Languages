#include <stdio.h>
#include <stdint.h>


int minimumValue(int initial, int min, int* values, int lengthOfValues);
int minimumValue(int initial, int min, int* values, int lengthOfValues){
        if(initial == 1){
                minimumValue(0, values[0], values+1, lengthOfValues - 1);
        } else if(lengthOfValues > 0){
                if(min < values[0]){
                        minimumValue(0, min, values+1, lengthOfValues - 1);
                } else {
                        minimumValue(0, values[0], values+1, lengthOfValues - 1);
                }
        } else {
                return min;
        }
}

int main(void) {
        unsigned long long MAX = UINTMAX_MAX;
        int arr[5] = {100, 4, 3, 9, 23};
        int size = sizeof(arr)/sizeof(int);
        int small = minimumValue(1, 1, arr, size);
        printf("%d\n", small);
        return 0;
}