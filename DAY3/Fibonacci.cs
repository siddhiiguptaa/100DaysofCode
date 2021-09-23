using System;

namespace day3
{
    public static class Fibonacci
    {
        public static void Fibo(int num)
        {
            int val1 = 0, val2 = 1, val3, i;            
            
            Console.WriteLine("\nFibonacci series:");
            Console.Write(val1 + " " + val2 + " ");
            for (i = 2; i < num; ++i)
            {
                val3 = val1 + val2;
                Console.Write(val3 + " ");
                val1 = val2;
                val2 = val3;
            }            
        }
    }
}
