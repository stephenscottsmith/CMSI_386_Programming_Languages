from pythonwarmup import (change, strip_vowels, scramble, powers_of_two, powers,
    interleave, stutter)
import unittest

def anagram(s, t):
    return sorted(s) == sorted(t)

class TestGettingStartedFunctions(unittest.TestCase):

    def test_change(self):
        self.assertEqual((3, 2, 0, 2), change(97))
        self.assertEqual((0, 0, 1, 3), change(8))
        self.assertEqual((10, 0, 0, 0), change(250))
        
        # Fractions of cents should cause the change function to round down and then perform the calculation
        self.assertEqual((0, 1, 0, 2), change(12.75)) 
        
        # Check for 0
        self.assertEqual((0, 0, 0, 0), change(0))
        
        # Really big number that should obviously only come out to having 4^20 quarters
        self.assertEqual((400000000000000000000, 0, 0, 0), change(10000000000000000000000))

    def test_strip_vowels(self):
        self.assertEqual('Hll, wrld', strip_vowels("Hello, world"))
        
        # Random characters other than letters and numbers
        self.assertEqual('Stphn*&^%$, Smth!@#', strip_vowels('Stephen*&^%$, Smith!@#'))
        
        # Empty string to empty string
        self.assertEqual('', strip_vowels(''))
        
        # Numerical characters, underscore, and dash
        self.assertEqual('stphn8- _gr9t', strip_vowels('stephen8- _gre9at'))
        
        # Capital letters
        self.assertEqual('T', strip_vowels('EAT'))
        
        # String with characters to empty string
        self.assertEqual('', strip_vowels('EA'))

    def test_scramble(self):
        # I added the empty string, a string with characters other than letters and nubmers, 
        # a string with an underscore, and 2 strings
        # with the same value to make sure that my function is truly random, so the chances of it 
        # randomly scrambling a string in the same way is very low 
        data = ["a", "rat", "BSOD", "BDFL", "Python testing", 
                "", "Steve08##$","unit_test", "Steve Jobs", "Steve Jobs"]
        for s in data:
            self.assertTrue(anagram(s, scramble(s)))

    def test_powers_of_two(self) :
        # Small positive number that is a power of 2
        data = [1, 2, 4, 8]
        generator = []
        for x in powers_of_two(8) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Small positive whole number
        data = [1, 2, 4, 8, 16, 32, 64]
        generator = []
        for x in powers_of_two(70) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Small positive floating point number
        data, generator = [1, 2], []
        for x in powers_of_two(2.5) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Large positive whole number (2^64 + 1)
        data = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072,
                262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864,
                134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967296, 8589934592,
                17179869184, 34359738368, 68719476736, 137438953472, 274877906944, 549755813888,
                1099511627776, 2199023255552, 4398046511104, 8796093022208, 17592186044416, 35184372088832, 
                70368744177664, 140737488355328, 281474976710656, 562949953421312, 1125899906842624, 2251799813685248, 
                4503599627370496, 9007199254740992, 18014398509481984, 36028797018963968, 72057594037927936, 
                144115188075855872, 288230376151711744, 576460752303423488, 1152921504606846976, 2305843009213693952, 
                4611686018427387904, 9223372036854775808, 18446744073709551616]
        generator = []
        for x in powers_of_two(18446744073709551617) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Large negative whole number (-(2^64) - 1)
        data, generator = [], []
        for x in powers_of_two(-18446744073709551617) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Small negative whole number
        generator = []
        for x in powers_of_two(-10) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Zero
        generator = []
        for x in powers_of_two(0) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Small, negative floating point number
        generator = []
        for x in powers_of_two(-2.5) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Small, positive floating point less than one 
        generator = []
        for x in powers_of_two(0.5) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Small, negative floating point greater than negative one 
        generator = []
        for x in powers_of_two(-0.5) :
            generator.append(x)

        self.assertEqual(data, generator)

    def test_powers (self) :
        # Positive whole base, positive whole limit bigger than base
        data = [1, 2, 4, 8]
        generator = []
        for x in powers(2, 8) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Positive whole base, positive float limit
        generator = []
        for x in powers(2, 8.77) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Positive float base, positive whole limit
        data = [1.0, 2.5, 6.25, 15.625]
        generator = []
        for x in powers(2.5, 20) :
            generator.append(x)

        self.assertEqual(data, generator) 

        # Positive float base, negative float limit
        generator = []
        for x in powers(2.5, 20.77) :
            generator.append(x)

        self.assertEqual(data, generator) 

        # Positive whole base, negative whole limit
        data = []
        generator = []
        for x in powers(2, -8) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Positive whole base, negative float limit        
        generator = []
        for x in powers(2, -8.5) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Positive float base, negative whole limit
        generator = []
        for x in powers(2.5, -20) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Positive float base, positive float limit
        generator = []
        for x in powers(2.5, -20) :
            generator.append(x)

        self.assertEqual(data, generator)

        # 0 base, 0 limit
        generator = []
        for x in powers(0, 0) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Attempted 0 base, positive limit but it ran in infinite loop as expected
        # due to the limit constantly increasing by 1 but 0 to anything with a positive 
        # limit results in infinite loop

        # 0 base, negative limit
        generator = []
        for x in powers(0, -20) :
            generator.append(x)

        self.assertEqual(data, generator)

        # Positve whole base, Large positive whole number limit (2^64 + 1)
        data = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072,
                262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864,
                134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967296, 8589934592,
                17179869184, 34359738368, 68719476736, 137438953472, 274877906944, 549755813888,
                1099511627776, 2199023255552, 4398046511104, 8796093022208, 17592186044416, 35184372088832, 
                70368744177664, 140737488355328, 281474976710656, 562949953421312, 1125899906842624, 2251799813685248, 
                4503599627370496, 9007199254740992, 18014398509481984, 36028797018963968, 72057594037927936, 
                144115188075855872, 288230376151711744, 576460752303423488, 1152921504606846976, 2305843009213693952, 
                4611686018427387904, 9223372036854775808, 18446744073709551616]
        generator = []
        for x in powers(2, 18446744073709551617) :
            generator.append(x)

        self.assertEqual(data, generator)

    def test_interleave(self) :
        # List 1 length > List 2 length
        list1 = ["a", None, "b"]
        list2 = [1, True]
        self.assertEqual(["a", 1, None, True, "b"], interleave(list1, list2))

        # List 1 empty
        list1 = []
        self.assertEqual([1, True], interleave(list1, list2))

        # List 2 empty
        list1 = ["a", None, "b"]
        list2 = []
        self.assertEqual(["a", None, "b"], interleave(list1, list2))

        # List 1 length == List 2 length
        list1 = ["a", None]
        list2 = [1, True]
        self.assertEqual(["a", 1, None, True], interleave(list1, list2))

        # List 1 length < List 2 length
        list1 = [None]
        list2 = [1, True]
        self.assertEqual([None, 1, True], interleave(list1, list2))

        # List 1 == List 2
        list1 = [None, 1, "a", False]
        list2 = [None, 1, "a", False]
        self.assertEqual([None, None, 1, 1, "a", "a", False, False], interleave(list1, list2))

    def test_stutter (self) :
        # List has various data types
        listArgs = [1, "a", True, None]
        self.assertEqual([1, 1, "a", "a", True, True, None, None], stutter(listArgs))
        
        # List has same data types
        listArgs = [1, 2, 3, 4]
        self.assertEqual([1, 1, 2, 2, 3, 3, 4, 4], stutter(listArgs))

        # Empty list
        listArgs = []
        self.assertEqual([], stutter(listArgs))

if __name__ == '__main__':
    unittest.main()













