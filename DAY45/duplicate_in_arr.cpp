#include <iostream>
#include <bits/stdc++.h>
using namespace std;
vector<int> duplicate(vector <int> arr){
    vector <int> v;
    int n = arr.size();
    unordered_map<int, int> m;
    for(int i=0;i<n;i++){
        m[arr[i]];
    }
    for(auto it:m){
        if(it.second > 1)
        v.push_back(it.first);
    }
    sort(v.begin(),v.end());

}
