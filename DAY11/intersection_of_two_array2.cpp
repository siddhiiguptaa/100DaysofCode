class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size();
        int m = nums2.size();
        if(m <n)
            return intersect(nums2, nums1);
        vector<int>ans;
        unordered_map<int,int> count;
        for(int i: nums1)
            count[i]++;
        for(int i: nums2)
            if(count[i]-- > 0)
                ans.push_back(i);
        return ans;
    }
};