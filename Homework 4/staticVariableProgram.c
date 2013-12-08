#include <stdio.h>
#include <stdbool.h>


bool confirm (int n) {
	bool test;
	if (n == 11) {
		test = true;
	} else {
		test = false;	
	}
	return test;
}

int addOneToTen () {
	int ten = 10;
	ten = ten + 1;
	printf("%d\n", ten);
	return ten;
}

void printTenPlusOneEqualsEleven () {
	printf("10 + 1 = 11!\n");
}

int main (int argc, char *argv[]) {
	int test1 = addOneToTen();
	if(confirm(test1)) {
		printTenPlusOneEqualsEleven();
	}
	int test2 = addOneToTen();
	if (confirm(test2)) {
		printTenPlusOneEqualsEleven();
	}
}

// If the integer variable "ten" in the function 
// addOneToTen was a static variable, then the 
// second call in the main method would set the 
// integer variable test2 equal to 12. This would result
// in never calling the second printTenPlusOneEqualsEleven
// function call