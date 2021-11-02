class Solution {
public:
vector<int> frequencySort(vector <int> nums) {

    unordered_map<int,int> m;
    for(auto i : nums)
        m[i]++;
    
    map<int, priority_queue<int>> p;
    for(auto i:m)
        p[i.second].push(i.first);
    
    vector<int> ans;
    for(auto i : p)
        while(!(i.second).empty()){
            for(int j=0;j<i.first;j++)
                ans.push_back( (i.second).top() );
            (i.second).pop();
        }
    
    return ans;
    
}
};