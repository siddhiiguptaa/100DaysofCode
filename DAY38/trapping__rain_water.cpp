class Solution {
public:
    int trap(vector<int>& arr) {
        int n = arr.size();
        int l =0;
        int r =n-1;
        int maxl= INT_MIN;int maxr = INT_MIN;
        int ans =0;
            while(r >=l){
            maxl = max(maxl, arr[l]);
            maxr = max(maxr, arr[r]);
                if(arr[l] < arr[r])
                    ans += maxl - arr[l++];
                else
                    ans += maxr- arr[r--];
            }
            
        
        return ans;
    }
};