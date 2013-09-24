// jsfiddle.net/szALA/


// CHANGE: OPTIMIZED BEFORE TESTING
// Precondition: amount must be a non-negative integer
function change (amount) {
    
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
};


// STRIP VOWELS: OPTIMIZED BEFORE TESTING
// Precondition: sentence must be evaluate to a string
function stripVowels (s) {
    var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    for (var vowel in vowels) {
        s = s.replace(vowels[vowel], '');
    }
    return s;                        
};


// SCRAMBLE
// Precondition: parameter s must evaluate to a string
// Citation: http://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
function scramble (s) {
    var stringArray = s.split(""),
        length = stringArray.length - 1;

    for (var index = length; index > 0; index--) {
        var j = Math.floor(Math.random() * (index + 1));
        var holder = stringArray[index];
        stringArray[index] = stringArray[j];
        stringArray[j] = holder;
    }
    return stringArray.join("");
};


// POWERS OF TWO // try for 3-4 lines
// Precondition: the limit parameter must be a positive real number
function powersOfTwo (limit, func) {
    result = 1;
    while (result < limit) {
        func(result);
        result *= 2;
    }
}


// POWERS
// Precondition: the base and limit parameter must be positive real numbers
function powers (limit, base, func) {
    result = 1;
    while (result < limit) {
        func(result);
        result *= base;
    }
}


// INTERLEAVE
// Working Interleave
// Precondition: the a and b parameters should be interleavable things
function interleave (a, b) {
    var newArray = [];
    var aLength = a.length;
    var bLength = b.length;
    var minLength = Math.min(aLength, bLength); 
    
    for (var i = 0; i < minLength; i++) {
        newArray.push(a[i]);   
        newArray.push(b[i]); 
    }
    
    return newArray.concat(a.slice(minLength, aLength), b.slice(minLength, bLength)); 
}


// STUTTER
// Precondition: the array parameter should be an array
function stutter (a) {
    return interleave(a, a);
}


// WORD COUNT
// Precondition: the parameter to the function should evaluate to a string
// Citation: http://stackoverflow.com/questions/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
function wordCount (s) {
    
    var wordArray = s.replace(/[^a-zA-Z\' ]/g, " ").toLowerCase().split(" ");
    wordArray = $.grep(wordArray, function (a) { return a !== "";});
    
    var wordObject = new Object();
    for (var elements in wordArray) {
        if (wordObject.hasOwnProperty(wordArray[elements])) {
            wordObject[wordArray[elements]] += 1;
            
        } else {
            wordObject[wordArray[elements]] = 1;
        }
        
    }
    
    return wordObject;
};

alert(JSON.stringify(wordCount("If you dog a dog, you'll\nbe DOG-TIRED.")));



// Prefixes
// Precondition: the s parameter should evaulate to a string
function prefix (s) {
    for (var x = 0; x <= s.length; x++) {
        //doc.createElement("div");
        alert(s.substring(0, x));
    }
};
prefix("hello");

// jsfiddle.net/tX9R3/

<script>
function createPrefixes () {
    $("li").remove();
    //$("").remove();
    
    var s = document.getElementById("prefixField").value;
    for (var i = 0; i <= s.length; i++) {    
        $("#list").append( '<li>' + s.substring(0,i) + '</li>' ); 
    }
};   
</script>
<input type="text" id="prefixField" onchange="createPrefixes()">
<ul id="list"></ul>



