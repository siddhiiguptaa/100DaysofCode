public class Solution {
    public int Search(int[] nums, int target) {        				
        int num = -1;
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] == target)
            {
                num = i;
                break;
            }
        }
        return num;
    }
}
