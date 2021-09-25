// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Example:
// MultOf3And5(10) = 23
// MultOf3And5(50) = 543
// MultOf3And5(100) = 2318

function MultOf3And5(number){
   let sumNumbers = 0;
   if (number < 1) return 0;
    for (let i = 1; i < number; i++)
    {
      if (i % 3 == 0 || i % 5 == 0) { sumNumbers += i; }
    }
    return sumNumbers;
}
