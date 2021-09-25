/**
 * Each new term in the Fibonacci sequence is generated 
 * by adding the previous two terms. By starting with 
 * 1 and 2, the first 10 terms will be:

    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

 * By considering the terms in the Fibonacci sequence 
 * whose values do not exceed n, 
 * find the sum of the even-valued terms.

 */

const fiboEvenSum = (number) => {
  if (number <= 1) {
    return 0;
  } else {
    let evenSum = 0,
      prevFibNum = 1,
      // According to problem description our Fibonacci series starts with 1, 2
      fibNum = 2; 
    for (let i = 2; fibNum <= number; i++) {
      if (fibNum % 2 == 0) {
        evenSum += fibNum;
      }
      [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    }
    return evenSum;
  }
};

console.log(fiboEvenSum(3));