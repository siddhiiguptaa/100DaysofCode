using System;

namespace Day2
{
    public static class FB
    {
        
        /// <summary>
        /// This is the usual FizzBuzz
        /// </summary>
        /// <param name="num"></param>
        static void FizzBuzz(int num)
        {
            if (num % 3 == 0 && num % 5 == 0)
            {
                Console.Write("FizzBuzz ");
            }
            else if (num % 3 == 0)
            {
                Console.Write("Fizz ");
            }
            else if (num % 5 == 0)
            {
                Console.Write("Buzz ");
            }
            else
            {
                Console.Write($"{num} ");
            }
        }

        /// <summary>
        /// This one you set the max value to do the FizzBuzz
        /// </summary>
        /// <param name="max"></param>
        /// <param name="num"></param>
        public static void FizzBuzzRecursive(int max, int num)
        {
            if (max < num) return; // avoid infinite loop
            
            if (num > 0 && num <= max)
            {
                FizzBuzz(num);
                FizzBuzzRecursive(max, num + 1);
            }
        }
    }
}
