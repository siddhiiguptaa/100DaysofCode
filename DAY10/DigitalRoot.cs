// Digital root is the recursive sum of all the digits in a number.

public class Number
{
  public int DigitalRoot(long n)
  {
    // Your awesome code here!
    long sum = 0;
    long r;
    long num = n;
    while (num != 0)
    {
      r = num % 10;
      num = num / 10;
      sum += r;      
    }
     if (sum > 10)
      {
          sum = DigitalRoot(sum);
      }
    return (int)sum;
  }
}
