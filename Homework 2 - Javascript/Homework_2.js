// CHANGE
// Precondition: coins must be a positive integer
var change = function (coins) {
    // Should I check for this? If so, is this the right way?
    if (coins >=0) {
        var coinArray = [];
        var quarters = Math.floor(coins/25);
        coins = coins - (25 * quarters);
        var dimes = Math.floor(coins/10);
        coins = coins - (10 * dimes);
        var nickels = Math.floor(coins/5);
        coins = coins - (5 * nickels);
        var pennies = Math.floor(coins/1);
        coinArray.push(quarters, dimes, nickels, pennies);
        return coinArray;
    } else {
        // How do I return string without apostrophes?
        return "I cannot compute a negative value of coins!";
    }
};
alert("HELLO");
alert(JSON.stringify(change(8)));
alert(JSON.stringify(change(29.6)));
alert(JSON.stringify(change(-9))); 


// STRIP VOWELS
// Precondition: sentence must be evaluate to a string
var stripVowels = function (s) {
    var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    for (var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
        s = s.replace(vowels[vowelIndex], '');
    }
    return s;                        
};
alert("HELLO");
alert(stripVowels("ea"));


// :LKSJF:LSDJKF:LSDJKF:LDFJK:LDFJKS:LSDFJK