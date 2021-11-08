// only works for list in ascending order

public class Solution {
  public static int BinarySearch(int[] nums, int target)
		{
			if (nums == null || nums.Length == 0)
				return -1;
			
			int left = 0, right = nums.Length - 1;
			
			while (left <= right)
			{
				int mid = left + (right - left) / 2;
				
				if (nums[mid] == target)
				{
					return mid;
				}
				else if (nums[mid] < target)
				{
					left = mid + 1;
				}
				else
				{
					right = mid + 1;
				}
			}
			return -1;
		}
}
