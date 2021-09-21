using System;

namespace LargestNumberInArray
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = new int[] { 3, 6, 1, 0 };
            var result = LargestNumberInArray.DominantIndex(nums);
            Print(result);

            int[] nums2 = new int[] { 1, 2, 3, 4};
            result = LargestNumberInArray.DominantIndex(nums2);
            Print(result);
        }

        private static void Print(int result)
        {
            if (result >= 0)
            {
                Console.WriteLine($"Largest number is in the position {result}");
            }
            else
            {
                Console.WriteLine($"Since the result is in the position {result} cause it does not have a largest number");
            }
        }
    }
}
