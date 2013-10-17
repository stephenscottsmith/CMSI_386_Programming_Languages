package gowarmup 

import (
	"strings"
	"regexp"
	"math/rand"
	"time"
	"math"
)

const (
	QUARTER_VALUE, DIME_VALUE, NICKEL_VALUE, PENNY_VALUE = 25, 10, 5, 1
)

// Precondition: the amount parameter should be an int
func change (amount int) []int {
	result := make([]int, 0)
	quarters := amount / QUARTER_VALUE
	amount = amount % QUARTER_VALUE
	dimes := amount / DIME_VALUE
	amount = amount % DIME_VALUE
	nickels := amount / NICKEL_VALUE
	amount = amount % NICKEL_VALUE
	pennies := amount / PENNY_VALUE
	
	result = append(result, quarters, dimes, nickels, pennies)
	return result
}

// Precondition: the s parameter should be a string
func strip_vowels (s string) string {
	return regexp.MustCompile("[AEIOUaeiou]+").ReplaceAllString(s, "")
}

// Precondition: the s parameter should be a string
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

// Precondition: the a and b parameter's should be slices
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

// Precondition: the a parameter should be slices
func stutter (a []interface{}) []interface{} {
	return interleave(a, a)
}
