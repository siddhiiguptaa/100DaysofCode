// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

//  Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0


var reverse = function(x) {
    let str = reverString(x, x < 0);
    let result = parseInt(str, 10);
    return (result < ((2 ** 31) - 1 ) ) && (result > (-1*(2 ** 31) )) ? result  : 0 ;    
};

var reverString = function(x, negative){
    let s = x.toString();    
    return (negative ? '-' : '') + s.split('').reverse().join('');
}
