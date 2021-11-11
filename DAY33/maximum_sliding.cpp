class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        int n = nums.size();
        int max;
        vector <int> res;
        for(int i=0;i<n;i++){
            max = nums[i];
            for(int j=i ;j<=i+k-1;j++){
                if(nums[i+j] > max)
                    max= nums[i+j];
                res.push_back(max);
            }
        }
        return res;
    }
};