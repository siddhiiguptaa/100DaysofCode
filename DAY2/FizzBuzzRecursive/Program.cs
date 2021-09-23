using System;
using static Day2.FB;

namespace Day2
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

    }
}