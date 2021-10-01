// Sample
// SpliStringToArrayPair.Solution("abc"); // should return ["ab", "c_"]
// SpliStringToArrayPair.Solution("abcdef"); // should return ["ab", "cd", "ef"]

public class SpliStringToArrayPair
{
  public static string[] Solution(string str)
  {
    string[] result = new string[(str.Length % 2 != 0 ? str.Length + 1 : str.Length)/2];

            int count = 0;
            for (int i = 0; i < result.Length; i++)
            {
                if (i == result.Length-1 && str.Length % 2 != 0)
                {
                    result[i] = str[count] + "_".ToString();
                }
                else
                {
                    result[i] = str[count] + str[count + 1].ToString();
                }

                count += 2;
            }

            return result;
  }
}
