class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int ans =0;
        int n = nums.size();
        map <int, int> v;
        v[0]++;
        int sum =0;
        for(int i=0;i<n;i++){
                sum += nums[i];
                if(v.count(sum-k))
                    ans += v[sum-k];
            v[sum]++;
                    
            
        }
    return ans;
    }
};