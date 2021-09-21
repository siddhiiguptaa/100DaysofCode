using System;

namespace FizzBuzzRecursive
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine();
            
            //for (int i = 0; i < 100; i++)
            //{
            //    FizzBuzz(i);
            //}

            // this will print from 1 to 50
            FizzBuzzRecursive(50, 1);
            Console.WriteLine("\nFinish from 1 to 50\n");
            // this will print from 1 to 20
            FizzBuzzRecursive(20, 1);
            Console.WriteLine("\nFinish from 1 to 20\n");
            
            // this will print nothing
            Console.WriteLine();
            FizzBuzzRecursive(0, 10);
        }

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
        static void FizzBuzzRecursive(int max, int num)
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