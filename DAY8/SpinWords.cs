/*
*
* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed 
*
*
*/

using System;
					
public class Program
{
	public static void Main()
	{
var result = Challenge.SpinWords("Hey fellow warriors");
		
		Console.WriteLine(result);	}
}


public class Challenge
{
   public static string SpinWords(string sentence)
        {
            var str = sentence.Split(' ');
          
            for (int i = 0; i < str.Length ; i++)
            {
                if (str[i].Length >= 5)
                {
                    str[i] = ReverseWords(str[i]);

                }
            }
            return string.Join(" ", str);
        }

        private static string ReverseWords(string sentence)
        {
            var chars = sentence.ToCharArray();
            Array.Reverse(chars);
            return new string(chars);
        }
}
