/**
 * There are 100 doors in a row that are all initially closed.
 * You make 100 passes by the doors.
 * The first time through, visit every door 
 * and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
 * The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. 
 * The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., 
 * until you only visit the 100th door.
 * 
 * Implement a function to determine the state of the doors after the last pass. 
 * Return the final result in an array, with only the door number included in the array if it is open.
 */

function getFinalOpenedDoors(numDoors) {
  let doors = [];
  let i = 1, ii = i*i;

  while (ii <= numDoors) {
    doors.push(ii);
    i++; ii = i*i;
  }

  return doors;
}

// code explanation 
/**
 * Each door is open if it is visited an odd number of times. 
 * Each door is visited once for each number that divides into it. 
 * Therefore, each open door has an odd number of divisors.

 * But divisors come in pairs: a / b === c 
 * means that a === b * c and b and c divide evenly into a .

 * So the only way to have an odd number of divisors is 
 * if for one of the pairs of divisors b === c , 
 * which means a === b * b is a perfect square.
 */