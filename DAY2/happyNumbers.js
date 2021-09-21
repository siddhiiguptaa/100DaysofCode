/*
Happy Number as a number defined by the following process:
 Starting with any positive integer, replace the number by
the sum of the squares of its digits, and repeat the process
until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1.
*/

function happyNumberChk(num){
    num = num.toString().split("")
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i] * num[i]
    }
    if (sum === 1) {
        return true
    }
    return false
}

console.log(happyNumberChk(1)) //should return true sum of numbers is 1
console.log(happyNumberChk(101)) //should return false sum of numbers square is not 1

