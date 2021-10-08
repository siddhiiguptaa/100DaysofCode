/**
 * Babbage problem
 * 
 * Charles Babbage, looking ahead to the sorts of problems his Analytical Engine 
 * would be able to solve, gave this example:
 * 
 * What is the smallest positive integer whose square ends in the digits 269,696?
 - Babbage, letter to Lord Bowden, 1837; see Hollingdale and Tootill, Electronic Computers, 
   second edition, 1970, p. 125.
 * 
 * He thought the answer might be 99,736, whose square is 9,947,269,696; 
 * but he couldn't be certain.
 * 
 * The task is to find out if Babbage had the right answer.
 * 
 * Implement a function to return the lowest integer that 
 * satisfies the Babbage problem. If Babbage was right, return Babbage's number.
 */

//    check if the number is the babbage number by checking the end if it matches with 
// the provided number. 269,696

function isBabbageNumber(testVal, endDigits) {
    const endStr = '' + endDigits
    const squareStr = ('' + Math.pow(testVal,2))
                        .slice(-endStr.length)
    return endStr === squareStr //if true then babbage 
}

function babbage(babbageNum, endDigits) {
    const start = Math.floor(Math.sqrt(endDigits))  
    for (let index = start; index <= babbageNum; index++) {
        if (isBabbageNumber(index, endDigits)) {
            return index 
        }
    }
}

console.log(babbage(99736, 269696)); 