using System.Linq;

namespace Etc
{
    public static class ExLinq
    {       
        public static string Average()
        {
            var numbers = new[] { 1, 2, 3, 4, 5 };

            var result = numbers.Average().ToString();

            return result;
        }


    }
}
