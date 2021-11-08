/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

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
