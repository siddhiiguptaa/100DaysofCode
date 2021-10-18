using System;
namespace Factorial
{

	public class Program
	{
		public static void Main()
		{
			long number = Factorial(5);
			Console.WriteLine("\nFactorial is:  " + number);
		}

		public static long Factorial(int n)
        {
			if (n == 0) return 1;            
          
			return n * Factorial(n - 1);						           
        }
	}
}
