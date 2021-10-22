/*
Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [0]
Output: [1]
Explanation: The array represents the integer 0.
Incrementing by one gives 0 + 1 = 1.
Thus, the result should be [1].
Example 4:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's. 
 */

namespace Peres
{
    public static class PlusOneArray
    {
        public static int[] PlusOne(int[] digits)
        {
            var numOfNine = GetNines(digits);

            if (numOfNine > 0)
            {
                
                if (digits.Length != numOfNine)
                {
                    digits[digits.Length - numOfNine - 1] += 1;
                }
                else
                {
                    digits[digits.Length - numOfNine] = 1;
                    var newDigits = new int[digits.Length + 1];
                    digits.CopyTo(newDigits, 0);
                    digits = newDigits;
                }

                int i = digits.Length - numOfNine;
                for (; i < digits.Length; i++)
                {
                    digits[i] = 0;
                }
            }
            else
            {
                digits[digits.Length - 1] = digits[digits.Length - 1] + 1;
            }

            return digits;
        }

        private static int GetNines(int[] digits)
        {
            int n = 0;
            for (int i = digits.Length - 1; i >= 0; i--)
            {
                if (digits[i] == 9)
                    n++;
                else
                    break;
            }
            return n;
        }
    }
}
