using System;
					
public class Program
{
	public static void Main()
	{
		var binary = Etc.AddBinary(10,20);
		Console.WriteLine("AddBinary method:" + binary);
	}
}

public static class Etc
{
  public static string AddBinary(int a, int b)
  {   
   var result = a+b;
   return Convert.ToString(result, 2);
  }
}
