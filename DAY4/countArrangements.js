/**
 * A Derangement is a permutation of n elements,
 * such that no element appears in its original position.
 * For example, a derangement of {0, 1, 2, 3} is {2, 3, 1, 0}.
 * Given a number 'num', find the total number of Derangements of a set of 'num' elements.
 * 
 * Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential. 
 * cdr() ==> countArrangements()

                    cdr(5)   
                 /         \     
             cdr(4)          cdr(3)   
           /      \         /     \
       cdr(3)     cdr(2)  cdr(2)   cdr(1)
 */

function countArrangements(input)
    {
        // Base cases
        if (input == 1) return 0
        if (input == 2) return 1
  
        return (input - 1) * (countArrangements(input - 1) + countArrangements(input - 2))
    }

console.log(countArrangements(3));