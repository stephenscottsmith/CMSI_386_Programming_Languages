package gowarmup 

// Things to fix:
// 1. Go over tests w/ Haley
// 2. Shorten interleave so the longer array's last elements are more easily added\


import (
	"fmt"
	"strings"
	"regexp"
	"math/rand"
	"time"
	"math"
)

const (
	QUARTER_VALUE, DIME_VALUE, NICKEL_VALUE, PENNY_VALUE = 25, 10, 5, 1
)

// func main () {
// 	quarters, nickels, dimes, pennies := change(139)
// 	fmt.Printf("%d, %d, %d, %d\n", quarters, nickels, dimes, pennies)

// 	fmt.Println(strip_vowels("HELLOOooasdfeAA"))
// 	fmt.Println(strip_vowels("AEIOUaeiou"))

// 	fmt.Println("Scramble hello: " + scramble("Hello"))
// 	fmt.Println("Scramble empty string on the next line (next line should be empty): \n" + scramble(""))

// 	a := make([]interface{}, 0)
// 	b := make([]interface{}, 0)
// 	a = append(a, 1, true)
// 	b = append(b, "hi", 4, 7)

// 	fmt.Println(interleave(a, b))

// 	fmt.Println(stutter(a))
// 	fmt.Println(stutter(b ))
// }

func change (amount int) (int, int, int, int) {
	quarters := amount / QUARTER_VALUE
	amount = amount % QUARTER_VALUE
	dimes := amount / DIME_VALUE
	amount = amount % DIME_VALUE
	nickels := amount / NICKEL_VALUE
	amount = amount % NICKEL_VALUE
	pennies := amount / PENNY_VALUE


	return quarters, nickels, dimes, pennies
}


func strip_vowels (s string) string {
	return regexp.MustCompile("[AEIOUaeiou]+").ReplaceAllString(s, "")
}


func scramble (s string) string {
	stringArray := strings.Split(s, "")
	length := len(stringArray) - 1
	rand.Seed(time.Now().UTC().UnixNano())

	for index := length; index > 0; index-- {
		j := rand.Intn(index)
		holder := stringArray[index]
		stringArray[index] = stringArray[j]
		stringArray[j] = holder
	}

	return strings.Join(stringArray, "")
}

/// Precondition: the limit parameter should be a non-negative number, the f
// parameter should be a function 
func powersOfTwo (limit int, f func(final int)) {
	powers(2, limit, f)
}

// Precondition: the base and limit parameters should be non-negative numbers, the f
// parameter should be a function
func powers (base, limit int, f func(final int)) {
	result := 1;
	for result <= limit {
		f(result)
		result = result * base
	}
}

func interleave (a, b []interface{}) []interface{} {
	result := make([]interface{}, 0)
	aLength := len(a)
	bLength := len(b)
	minLength := int(math.Min(float64(aLength), float64(bLength)))

	for i := 0; i < minLength; i++ {
		result = append(result, a[i])
		result = append(result, b[i])
	}

	for i := minLength; i < len(a); i++ {
		result = append(result, a[i])
	}

	for i := minLength; i < len(b); i++ {
		result = append(result, b[i])
	}

	return result
}

func stutter (a []interface{}) []interface{} {
	return interleave(a, a)
}






func log () {
	fmt.Println()
}
// THINGS TO DO:
// 4. Tester
// 5. Prefixes.go
// 6. Lines.go



