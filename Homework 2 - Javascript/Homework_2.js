// JSFIDDLE: http://jsfiddle.net/stephenscottsmith/92bjr/

// Precondition: amount must be a non-negative integer
function change(amount) {
    var QUARTER_VALUE = 25,
        DIME_VALUE = 10,
        NICKEL_VALUE = 5,
        PENNY_VALUE = 1;

    var quarters = Math.floor(amount/QUARTER_VALUE);
    amount = amount - (QUARTER_VALUE * quarters);
    var dimes = Math.floor(amount/DIME_VALUE);
    amount = amount - (DIME_VALUE * dimes);
    var nickels = Math.floor(amount/NICKEL_VALUE);
    amount = amount - (NICKEL_VALUE * nickels);
    var pennies = Math.floor(amount/PENNY_VALUE);
    
    return [quarters, dimes, nickels, pennies];
}

// Precondition: sentence should evaluate to a string
function stripVowels(s) {
    return s.replace(/[aeiou]/gi, ''); 
}

// Precondition: parameter s should evaluate to a string
// Citation: http://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
function scramble(s) {
    var stringArray = s.split(""),
        length = stringArray.length - 1;

    for (var index = length; index > 0; index--) {
        var j = Math.floor(Math.random() * (index + 1));
        var holder = stringArray[index];
        stringArray[index] = stringArray[j];
        stringArray[j] = holder;
    }
    return stringArray.join("");
}

// Precondition: the limit parameter should be a non-negative number, the f
// parameter should be a function
function powersOfTwo(limit, f) {
    powers(2, limit, f);
}

// Precondition: the base and limit parameters should be non-negative numbers, the f
// parameter should be a function
function powers(base, limit, f) {
    var result = 1;
    while (result <= limit) {
        f(result);
        result *= base;
    }
}

// Precondition: the a and b parameters should be iterable and interleavable 
function interleave(a, b) {
    var newArray = [];
    var aLength = a.length;
    var bLength = b.length;
    var minLength = Math.min(aLength, bLength); 
    
    for (var i = 0; i < minLength; i++) {
        newArray.push(a[i]);   
        newArray.push(b[i]); 
    }
    
    return newArray.concat(a.slice(minLength), b.slice(minLength)); 
}

// Precondition: the array parameter should be iterable and interleavable
function stutter(a) {
    return interleave(a, a);
}

// Precondition: the parameter to the function should evaluate to a string
// Citation: http://stackoverflow.com/questions/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
function wordCount(s) {
    var wordArray = s.toLowerCase().split(/[^a-z']+/);
    
    var wordObject = new Object();
    for (var elements in wordArray) {
        wordObject.hasOwnProperty(wordArray[elements]) ? 
            wordObject[wordArray[elements]] += 1 : wordObject[wordArray[elements]] = 1;
    }  
    delete wordObject[''];
    return wordObject;
}

$(function () {

    var anagram = function (s, t) {
        if (s.length !== t.length) {
            return false;
        }
        var a = s.split(""), b = t.split("");
        return $(a).not(b).length === 0 && $(b).not(a).length === 0
    };

    test("Change Tests", function () {
        deepEqual(change(97), [3, 2, 0, 2], "Changing large whole number: 97");
        deepEqual(change(8), [0, 0, 1, 3], "Changing small whole number: 8"); 
        deepEqual(change(0), [0, 0, 0, 0], "Changing 0");
        deepEqual(change(12.75), [0, 1, 0, 2], "Changing small rational number: 12.75");
        deepEqual(change(10000000000000000000000), [400000000000000000000, 0, 0, 0], "Changing really large number that should obviously come out to having 4^20 quarters");
        throws(change(-8)); 
        
    });

    test("Strip Vowels Tests", function () {
        deepEqual(stripVowels("Hello, world"), "Hll, wrld", "Hello world test");
        deepEqual(stripVowels(""), "", "Empty string");

        deepEqual(stripVowels("Stephen*&^%$, Smith!@#"), "Stphn*&^%$, Smth!@#", "Random characters other than letters and numbers");
        
        deepEqual(stripVowels("stephen8- _gre9at"), "stphn8- _gr9t", "Numerical characters, underscore, and dash");
        
        deepEqual(stripVowels("EAT ting"), "T tng", "Capital letter vowels and small letter vowels");
            
        deepEqual(stripVowels("EAea"), "", "Only vowels should go to empty string with no spaces"); 
        
        deepEqual(stripVowels("EA ou"), " ", "Only vowels with one space should go to string with one space"); 
        
        deepEqual(stripVowels("This is part one " + "of a two part string"), "Ths s prt n " + "f  tw prt strng", "Calling function with two strings being added to one another");
    });

    test("Scramble Tests", function () {
        // I added the string with a space, a string with characters other than letters and numbers, 
        // a string with an underscore, an string with only capital letters, and 2 strings
        // with the same value to make sure that my function is truly random, so the chances of it 
        // randomly scrambling a string in the same way is very low 
        var data = ["", "a", "rat", "zzz", "^*&^*&^▱ÄÈËɡɳɷ",
                   " ", "Steve08##$","unit_test","BFDS", "Steve Jobs", "Steve Jobs"];
        data.forEach(function (s) {
            ok(anagram(s, scramble(s)));
        });
    });

    test("Powers of Two Tests", function () {
        
        // Small positive integer that is a power of 2
        var answers = [1, 2, 4, 8];
        var data = [];
        powersOfTwo(8, function (p) {data.push(p);});
        deepEqual(data, answers);
        
        // Small positive whole number
        var answers = [1, 2, 4, 8, 16, 32, 64]
        var data = [];
        powersOfTwo(70, function (p) {data.push(p);});
        deepEqual(data, answers);
        
        // Small positive floating point number
        var answers = [1, 2];
        var data = []
        powersOfTwo(2.5, function (p) {data.push(p);});
        deepEqual(data, answers);
        
        // Large positive whole number (2^64 + 1)
        var answers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072,
                262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864,
                134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967296, 8589934592,
                17179869184, 34359738368, 68719476736, 137438953472, 274877906944, 549755813888,
                1099511627776, 2199023255552, 4398046511104, 8796093022208, 17592186044416, 35184372088832, 
                70368744177664, 140737488355328, 281474976710656, 562949953421312, 1125899906842624, 2251799813685248, 
                4503599627370496, 9007199254740992, 18014398509481984, 36028797018963968, 72057594037927936, 
                144115188075855872, 288230376151711744, 576460752303423488, 1152921504606846976, 2305843009213693952, 
                4611686018427387904, 9223372036854775808, 18446744073709551616];
        var data = [];
        powersOfTwo(18446744073709551617, function (p) {data.push(p);});
        deepEqual(data, answers);
        
        // Large negative whole number (-(2^64) - 1)
        var answers = [];
        var data = [];
        powersOfTwo(-18446744073709551617, function (p) {data.push(p);});
        deepEqual(data, answers);
        
        // Small negative whole number
        var data = [];
        powersOfTwo(-10, function (p) {data.push(p);});
        deepEqual(data, answers);

        // Zero
        var data = [];
        powersOfTwo(0, function (p) {data.push(p);});
        deepEqual(data, answers);
        
        // Small, negative floating point number
        var data = []
        powersOfTwo(-2.5, function (p) {data.push(p);});
        deepEqual(data, answers);
        
        // Small, positive floating point less than one 
        var data = [];
        powersOfTwo(0.5, function (p) {data.push(p);});
        deepEqual(data, answers);

        // Small, negative floating point greater than negative one 
        var data = [];
        powersOfTwo(-0.5, function (p) {data.push(p);});
        deepEqual(data, answers);

    });

    test("Powers Tests", function () {
        
        // Positive whole base, positive whole limit bigger than base
        var answers = [1, 2, 4, 8];
        var data = [];
        powers(2, 8, function (p) {data.push(p);});
        deepEqual(data, answers);
        
        // Positive whole base, positive float limit
        var data = [];
        powers(2, 8.77, function (p) {data.push(p);});
        deepEqual(data, answers);

        // Positive float base, positive whole limit
        var answers = [1.0, 2.5, 6.25, 15.625];
        var data = [];
        powers(2.5, 20, function (p) {data.push(p);});
        deepEqual(data, answers);
 
        // Positive float base, negative float limit
        var answers = [];
        var data = [];
        powers(2.5, -20.5, function (p) {data.push(p);});
        deepEqual(data, answers);

        // Positive whole base, negative whole limit
        var data = [];
        powers(2, -20, function (p) {data.push(p);});
        deepEqual(data, answers);

        // Positive whole base, negative float limit        
        var data = [];
        powers(2, -8.5, function (p) {data.push(p);});
        deepEqual(data, answers);

        // Positive float base, negative whole limit
        var data = [];
        powers(2.5, -20, function (p) {data.push(p);});
        deepEqual(data, answers);

        // Positive float base, positive float limit
        var answers = [1.0, 2.5, 6.25, 15.625];
        var data = [];
        powers(2.5, 20.5, function (p) {data.push(p);});
        deepEqual(data, answers);

        // 0 base, 0 limit
        var answers = [];
        var data = [];
        powers(0, 0, function (p) {data.push(p);});
        deepEqual(data, answers);

        // Attempted 0 base, positive limit but it ran in infinite loop as expected
        // due to the limit constantly increasing by 1 but 0 to anything with a positive 
        // limit results in infinite loop

        // 0 base, negative whole limit
        var data = [];
        powers(0, -20, function (p) {data.push(p);});
        deepEqual(data, answers);

        // Positve whole base, Large positive whole number limit (2^64 + 1)
        var answers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072,
                262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864,
                134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967296, 8589934592,
                17179869184, 34359738368, 68719476736, 137438953472, 274877906944, 549755813888,
                1099511627776, 2199023255552, 4398046511104, 8796093022208, 17592186044416, 35184372088832, 
                70368744177664, 140737488355328, 281474976710656, 562949953421312, 1125899906842624, 2251799813685248, 
                4503599627370496, 9007199254740992, 18014398509481984, 36028797018963968, 72057594037927936, 
                144115188075855872, 288230376151711744, 576460752303423488, 1152921504606846976, 2305843009213693952, 
                4611686018427387904, 9223372036854775808, 18446744073709551616];
        var data = [];
        powers(2, 18446744073709551617, function (p) {data.push(p);});
        deepEqual(data, answers);
    
    });
    
    test("Interleave Tests", function () {
       
        // Array 1 length > Array 2 length
        var a = ["a", null, "b"];
        var b = [1, true];
        deepEqual(["a", 1, null, true, "b"], interleave(a, b), "here");
 
        // Array 1 empty
        var a = [];
        deepEqual([1, true], interleave(a, b));

        // Array 2 empty
        var a = ["a", null, "b"];
        var b = [];
        deepEqual(["a", null, "b"], interleave(a, b));

        // Array 1 length == Array 2 length
        var a = ["a", null];
        var b = [1, true];
        deepEqual(["a", 1, null, true], interleave(a, b));

        // Array 1 length < Array 2 length
        var a = [null];
        var b = [1, true];
        deepEqual([null, 1, true], interleave(a, b))

        // Array 1 == Array 2
        var a = [null, 1, "a", false];
        var b = [null, 1, "a", false];
        deepEqual([null, null, 1, 1, "a", "a", false, false], interleave(a, b));

    });
    
    test("Stutter Tests", function () {
        // Array has various data types
        var a = [1, "a", true, null];
        deepEqual([1, 1, "a", "a", true, true, null, null], stutter(a));
        
        // Array has same data types
        var a = [1, 2, 3, 4];
        deepEqual([1, 1, 2, 2, 3, 3, 4, 4], stutter(a));

        // Array list
        var a = [];
        deepEqual([], stutter(a));
    });
    
    test("Word Count Tests", function () {
        
        deepEqual(wordCount("If you dog a dog, you'll\nbe DOG-TIRED."), {"if":1, "you":1, "dog":3, "a":1, "you'll":1, "be":1, "tired":1}, "Given Sample Test");
        
        deepEqual(wordCount(".hello."), {"hello":1}, "A period at the end and at the beginning to make sure both periods were removed and the one word was counted.");
        
        deepEqual(wordCount("--------_(*&&^%$#"), {}, "All objects should be removed and return an empty object");
        
        deepEqual(wordCount("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'"), {"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'":1}, "Nothing should be removed from the string of every character that should not be removed.");
    
        deepEqual(wordCount("-a-a-a-a"), {"a":4}, "4 of the same word");
    
    });
    
});

// Prefixes
// Precondition: the s parameter should evaulate to a string
// JSFIDDLE: http://jsfiddle.net/stephenscottsmith/X6RYG/7/