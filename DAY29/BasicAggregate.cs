using System.Linq;

namespace Etc
{
    public static class ExLinq
    {
        public static string BasicAggregate()
        {
            var numbers = new[] { 1, 2, 3, 4, 5, 6 };

            var result = numbers.Aggregate((x, y) => x + y)
                .ToString();

            return result;
        }
    }
}
