class Solution {
public:
    int maxProfit(vector<int>& v) {
        int n = v.size();
        int res =0;
        int mins = v[0];
        for(int i=0;i<n;i++){
            if(v[i] < mins){ 
                mins = v[i];
        }
        res = max(res, v[i]-mins);
        }
        return res;
    }
};