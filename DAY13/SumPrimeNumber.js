// Given a positive integer N, find the sum of all prime numbers between 1 and N(inclusive).
// Need to be fast

class Solution{
    prime_Sum(n){
        //code here
          let prime = new Array(n + 1);
       
    
        for(let i = 0; i < n + 1; i++)
            prime[i] = true;
       
           
       
        for (let p = 2; p * p <= n; p++)
        {
       
            // If prime[p] is not changed,
            // then it is a prime
            if (prime[p] == true)
            {
       
                // Update all multiples of p
                for (let i = p * 2; i <= n; i += p)
                    prime[i] = false;
            }
        }
       
        // Return sum of primes
        // generated  through Sieve.
        let sum = 0;
        for (let i = 2; i <= n; i++)
            if (prime[i])
                sum += i;
        return sum;
    }
}
