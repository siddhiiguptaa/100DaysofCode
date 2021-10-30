#include <iostream>
//#include <bits/stdc++.h>
#include <vector>
using namespace std;
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
    int main(){
        vector<int> v = { 2, 3, 4, 5 , 9 };
        int n = sizeof(v)/sizeof(v[0]);
        // profit if sell - buy
        cout << "profit earned is ";
        cout << maxProfit(v);
        

    }

