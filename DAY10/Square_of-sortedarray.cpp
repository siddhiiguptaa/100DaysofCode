// Given an integer array nums sorted in non-decreasing order, 
//return an array of the squares of each number sorted in non-decreasing order.

 
class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int n = nums.size();
        for(int i=0;i<n;i++){
            nums[i] *= nums[i];
        }
        sort(nums.begin(), nums.end());
        return nums;
    }
};