/*
Calculate SQRT without using builtin exponent function or operator

Example:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/

public class Solution {
    public int MySqrt(int x) {
        if (x == 0) return 0;
        if (x > 0 && x < 4) return 1;
          
        return CheckSqrt(0, x, x);

        
    }
    
    private static int CheckSqrt(long l, long h, long x)
    {
        if (l <= h)
        {
            long mid = (l + h) / 2;

            if ((mid * mid)<= x && ((mid + 1)*(mid + 1) > x))
            {
                return Convert.ToInt32(mid);
            }
            else if (mid * mid < x)
            {
                return CheckSqrt(mid + 1, h, x);
            }
            else
            {
                return CheckSqrt(l, mid - 1, x);
            }
        }
        return Convert.ToInt32(l);
    }
    
}
