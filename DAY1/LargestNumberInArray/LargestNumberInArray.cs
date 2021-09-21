using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LargestNumberInArray
{
    /// <summary>
    /// You are given an integer array nums where the largest integer is unique.
    /// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.
    /// </summary>
    public static class LargestNumberInArray
    {        
        public static int DominantIndex(int[] nums)
        {
            int result = -1;

            if (nums.Length == 1) return 0;

            // Get largest number and respective index
            int max = nums.Max();
            int tempResult = Array.IndexOf(nums, max);

            Array.Sort(nums);

            // Sort array in desc order and get a new one skipping first number as we know it is the largest
            var arr = nums.Reverse().Select(x => x * 2).ToArray().Skip(1);

            int newMax = arr.Max();

            if (max >= newMax)
            {
                result = tempResult;
            }

            return result;
        }
    }
}