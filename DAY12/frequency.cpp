#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main(){
    map<int, int> mp;
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        int x;
        cin >>x;
        if(mp.find(x)==mp.end())
        mp.insert({x, 1});
        else{
          mp[x]++;
        }
        
    }
    for(auto it:mp){
        cout << it.first<<" " << it.second<< endl;
    }
}