#include <bits/stdc++.h>
using namespace std;
class Solution
{   
    public:
    //Function to return list of integers visited in snake pattern in matrix.
    vector<int> snakePattern(vector<vector<int> > arr)
    {   
        // code here
        int n = arr.size();
        vector<int> v;
        for(int i=0;i<n;i++){
            if(i %2 ==0){
                for(int j=0;j<n;j++){
                v.push_back(arr[i][j]);
            
            }
            }
            else{
            for(int j=n-1;j>=0;j--){
                v.push_back(arr[i][j]);
                
            }
            
        }
    }
    return v;
    }
};