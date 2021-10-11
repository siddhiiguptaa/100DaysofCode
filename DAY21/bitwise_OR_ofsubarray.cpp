class Solution {
public:
    int subarrayBitwiseORs(vector<int>& arr) {
        int n = arr.size();
        int count =0;
        unordered_set<int> ans , prev;
        
        for(int i=0;i<n;i++){
             unordered_set<int> ne;
            for(auto x:prev)
                ne.insert(arr[i]|x);
                ne.insert(arr[i]);
            
            for(auto x:ne)
                ans.insert(x);
            prev = ne;
                
                }
        return ans.size();
    }
};