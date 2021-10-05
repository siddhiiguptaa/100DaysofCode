// IQ.Test("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// IQ.Test("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
  
  let numArray = numbers.split(' ').map((num)=>Number(num));
  
  let odd = numArray.filter(function(num){ if( num % 2 !== 0 ) return num;})
  let even = numArray.filter(function(num){ if( num % 2 === 0 ) return num;})  
  
  return (odd.length === 1) ? (numArray.indexOf(odd[0]) + 1) : (numArray.indexOf(even[0]) + 1);
  
}
