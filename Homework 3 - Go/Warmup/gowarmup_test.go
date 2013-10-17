package gowarmup

import (
	"testing"
	"fmt"
	)


func slicesAreEqual (a, b []int) bool {
	if len(a) != len(b) {
		return false
	} else {
		for i := 0; i < len(a); i++ {
			if a[i] != b[i] {
				return false
			}
		}
	}
	return true
}

func interleavesAreEqual (a, b []interface{}) bool {
	if len(a) != len(b) {
		return false
	} else {
		for i := 0; i < len(a); i++ {
			if a[i] != b[i] {
				return false
			}
		}
	}
	return true
}

func TestChange(t *testing.T) {
	coins := change(97)
    result := []int{3, 2, 0, 2}
    if !slicesAreEqual(coins, result) {
        fmt.Println("Change for 97 should be [3, 2, 0, 2]")
    } else {
    	fmt.Println("PASS")
    }

    coins = change(8)
    result = []int{0, 0, 1, 3}
    if !slicesAreEqual(coins, result) {
        fmt.Println("Change for 8 should be [0, 0, 1, 3]")
    } else {
    	fmt.Println("PASS")
    }

    coins = change(0)
    result = []int{0, 0, 0, 0}
    if !slicesAreEqual(coins, result) {
        fmt.Println("Change for 0 should be [0, 0, 0, 0]")
    } else {
    	fmt.Println("PASS")
    }

    coins = change(4000000)
    result = []int{160000, 0, 0, 0}
    if !slicesAreEqual(coins, result)  {
        fmt.Println("Change for 4000000 should be [100000, 0, 0, 0]")
    } else {
    	fmt.Println("PASS")
    }
}

func TestStripVowels(t *testing.T) {
	newString := strip_vowels("Hello, world")
	expectedString := "Hll, wrld"
	if newString != expectedString {
		fmt.Println("Strip vowels did not return the desired result!")
	} else {
		fmt.Println("PASS")
	}

	newString = strip_vowels("")
	expectedString = ""
	if newString != expectedString {
		fmt.Println("Strip vowels did not return the desired result!")
	} else {
		fmt.Println("PASS")
	}

	newString = strip_vowels("Stephen*&^$, Smith!@#")
	expectedString = "Stphn*&^$, Smth!@#"
	if newString != expectedString {
		fmt.Println("Strip vowels did not return the desired result!")
	} else {
		fmt.Println("PASS")
	}

	newString = strip_vowels("stephen8- _gre9at")
	expectedString = "stphn8- _gr9t"
	if newString != expectedString {
		fmt.Println("Strip vowels did not return the desired result!")
	} else {
		fmt.Println("PASS")
	}

	newString = strip_vowels("EAT ting")
	expectedString = "T tng"
	if newString != expectedString {
		fmt.Println("Strip vowels did not return the desired result!")
	} else {
		fmt.Println("PASS")
	}

	newString = strip_vowels("EAea")
	expectedString = ""
	if newString != expectedString {
		fmt.Println("Strip vowels did not return the desired result!")
	} else {
		fmt.Println("PASS")
	}

	newString = strip_vowels("EA ou")
	expectedString = " "
	if newString != expectedString {
		fmt.Println("Strip vowels did not return the desired result!")
	} else {
		fmt.Println("PASS")
	}
}

func TestScramble(t *testing.T) {
	newString := scramble("")
	expectedString := ""
	if newString != expectedString {
		fmt.Println("Scramble did not return the desired result!")
	} else {
		fmt.Println("PASS")
	}

	newString = scramble("a")
	expectedString = "a"
	if newString != expectedString {
		fmt.Println("Scramble did not return the desired result!")
	} else {
		fmt.Println("PASS")
	}

	newString = scramble("go sucks")
	unexpectedString := "go sucks"
	if newString == unexpectedString {
		fmt.Println("This string should not scramble to itself (Chances highly unlikely)")
	} else {
		fmt.Println("PASS")
	}

	newString = scramble("^*&^*&^▱ÄÈËɡɳɷ")
	unexpectedString = "^*&^*&^▱ÄÈËɡɳɷ"
	if newString == unexpectedString {
		fmt.Println("This string should not scramble to itself (Chances highly unlikely)")
	} else {
		fmt.Println("PASS")
	}
}

func TestPowersOfTwo(t *testing.T) {
	resultNumbers := []int{}
	expectedNumbers := []int{1, 2, 4, 8}
	powersOfTwo(8, func (n int) {
		resultNumbers = append(resultNumbers, n)
		})
	if !slicesAreEqual(resultNumbers, expectedNumbers) {
		fmt.Println("Powers did not give back desired results!")
	} else {
		fmt.Println("PASS")
	}

	resultNumbers = []int{}
	expectedNumbers = []int{1, 2, 4, 8, 16, 32, 64}
	powersOfTwo(70, func (n int) {
		resultNumbers = append(resultNumbers, n)
		})
	if !slicesAreEqual(resultNumbers, expectedNumbers) {
		fmt.Println("Powers did not give back desired results!")
	} else {
		fmt.Println("PASS")
	}

	resultNumbers = []int{}
	expectedNumbers = []int{1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 
							8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152}
	powersOfTwo(4000000, func (n int) {
		resultNumbers = append(resultNumbers, n)
		})
	if !slicesAreEqual(resultNumbers, expectedNumbers) {
		fmt.Println("Powers did not give back desired results!")
	} else {
		fmt.Println("PASS")
	}

	resultNumbers = []int{}
	expectedNumbers = []int{}
	powersOfTwo(0, func (n int) {
		resultNumbers = append(resultNumbers, n)
		})
	if !slicesAreEqual(resultNumbers, expectedNumbers) {
		fmt.Println("Powers did not give back desired results!")
	} else {
		fmt.Println("PASS")
	}
}

func TestPowers(t *testing.T) {
	resultNumbers := []int{}
	expectedNumbers := []int{1, 2, 4, 8}
	powers(2, 8, func (n int) {
		resultNumbers = append(resultNumbers, n)
		})
	if !slicesAreEqual(resultNumbers, expectedNumbers) {
		fmt.Println("Powers did not give back desired results!")
	} else {
		fmt.Println("PASS")
	}

	resultNumbers = []int{}
	expectedNumbers = []int{}
	powers(0, 0, func (n int) {
		resultNumbers = append(resultNumbers, n)
		})
	if !slicesAreEqual(resultNumbers, expectedNumbers) {
		fmt.Println("Powers did not give back desired results!")
	} else {
		fmt.Println("PASS")
	}

	resultNumbers = []int{}
	expectedNumbers = []int{1, 3, 9, 27}
	powers(3, 28, func (n int) {
		resultNumbers = append(resultNumbers, n)
		})
	if !slicesAreEqual(resultNumbers, expectedNumbers) {
		fmt.Println("Powers did not give back desired results!")
	} else {
		fmt.Println("PASS")
	}

	resultNumbers = []int{}
	expectedNumbers = []int{1, 1000000}
	powers(1000000, 1000001, func (n int) {
		resultNumbers = append(resultNumbers, n)
		})
	if !slicesAreEqual(resultNumbers, expectedNumbers) {
		fmt.Println("Powers did not give back desired results!")
	} else {
		fmt.Println("PASS")
	}
}

func TestInterleave(t *testing.T) {
	a := make([]interface{}, 0)
	b := make([]interface{}, 0)
	a = append(a, 1, true, "go")
	b = append(b, 2, false, "sucks")

	result := interleave(a, b)
	expected := make([]interface{}, 0)
	expected = append(expected, 1, 2, true, false, "go", "sucks")
	if !interleavesAreEqual(result, expected) {
		fmt.Println("The interleave function did not return the expected results!")
	} else {
		fmt.Println("PASS")
	}

	a = make([]interface{}, 0)
	b = make([]interface{}, 0)
	a = append(a, 1, 3, 5)
	b = append(b, 2, 4, 6)

	result = interleave(a, b)
	expected = make([]interface{}, 0)
	expected = append(expected, 1, 2, 3, 4, 5, 6)
	if !interleavesAreEqual(result, expected) {
		fmt.Println("The interleave function did not return the expected results!")
	} else {
		fmt.Println("PASS")
	}

	a = make([]interface{}, 0)
	b = make([]interface{}, 0)
	a = append(a, "I", "WANT", "WRITE")
	b = append(b, "NEVER", "TO", "GO")

	result = interleave(a, b)
	expected = make([]interface{}, 0)
	expected = append(expected, "I", "NEVER", "WANT", "TO", "WRITE", "GO")
	if !interleavesAreEqual(result, expected) {
		fmt.Println("The interleave function did not return the expected results!")
	} else {
		fmt.Println("PASS")
	}

	a = make([]interface{}, 0)
	b = make([]interface{}, 0)
	a = append(a, "I", "WANT", "WRITE", "AGAIN!")
	b = append(b, "NEVER", "TO", "GO")

	result = interleave(a, b)
	expected = make([]interface{}, 0)
	expected = append(expected, "I", "NEVER", "WANT", "TO", "WRITE", "GO", "AGAIN!")
	if !interleavesAreEqual(result, expected) {
		fmt.Println("The interleave function did not return the expected results!")
	} else {
		fmt.Println("PASS")
	}

	a = make([]interface{}, 0)
	b = make([]interface{}, 0)
	a = append(a, 1, "HI", 5)
	b = append(b, false)

	result = interleave(a, b)
	expected = make([]interface{}, 0)
	expected = append(expected, 1, false, "HI", 5)
	if !interleavesAreEqual(result, expected) {
		fmt.Println("The interleave function did not return the expected results!")
	} else {
		fmt.Println("PASS")
	}
}

func TestStutter(t *testing.T) {
	a := make([]interface{}, 0)
	a = append(a, 1, true, "go")

	result := stutter(a)
	expected := make([]interface{}, 0)
	expected = append(expected, 1, 1, true, true, "go", "go")
	if !interleavesAreEqual(result, expected) {
		fmt.Println("The stutter function did not return the expected results!")
	} else {
		fmt.Println("PASS")
	}

	a = make([]interface{}, 0)
	a = append(a, 1, 2, 3)

	result = stutter(a)
	expected = make([]interface{}, 0)
	expected = append(expected, 1, 1, 2, 2, 3, 3)
	if !interleavesAreEqual(result, expected) {
		fmt.Println("The stutter function did not return the expected results!")
	} else {
		fmt.Println("PASS")
	}

	a = make([]interface{}, 0)
	a = append(a, "GO", "AWAY", "GO")

	result = stutter(a)
	expected = make([]interface{}, 0)
	expected = append(expected, "GO", "GO", "AWAY", "AWAY", "GO", "GO")
	if !interleavesAreEqual(result, expected) {
		fmt.Println("The stutter function did not return the expected results!")
	} else {
		fmt.Println("PASS")
	}

	a = make([]interface{}, 0)

	result = stutter(a)
	expected = make([]interface{}, 0)
	if !interleavesAreEqual(result, expected) {
		fmt.Println("The stutter function did not return the expected results!")
	} else {
		fmt.Println("PASS")
	}
}






