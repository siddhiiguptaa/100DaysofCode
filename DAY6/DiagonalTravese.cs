/*  
 * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
 *
 */

namespace LC
{
    public static class DiagonalTravese
    {
        public static int[] Solution(int[][] mat)
        {
            bool isUp = true;
            int col = 0;
            int line = 0;
            int len = mat.Length * mat[0].Length;
            int[] result = new int[len];

            for (int i = 0; i < len;)
            {
                if (isUp)
                {
                    for (; line >= 0 && col < mat[0].Length; line--, col++)
                    {
                        result[i] = mat[line][col];
                        i++;
                    }
                    if (line < 0 && col < mat[0].Length)
                    {
                        line = 0;
                    }
                    if (col.Equals(mat[0].Length))
                    {
                        line += 2;
                        col--;
                    }
                }
                else
                {
                    for (; line < mat.Length && col >= 0; line++, col--)
                    {
                        result[i] = mat[line][col];
                        i++;
                    }
                    if (col < 0 && line < mat.Length)
                    {
                        col = 0;
                    }
                    if (line.Equals(mat.Length))
                    {
                        col += 2;
                        line--;
                    }

                }
                isUp = !isUp;
            }
            return result;
        }
    }
}
