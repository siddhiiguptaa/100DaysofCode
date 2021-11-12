#include <iostream>
#include <vector>
using namespace std;
int32_t main(){
    string s = "abcabcabc";
    int n = s.size();
    //cin >> s;
    vector <int> dict(256,-1);
    int maxl =0;int start =-1;
    for(int i=0;i<n;i++){
       if(dict[s[i]] > start)
       start = dict[s[i]];
       dict[s[i]] = i;
       maxl = max(maxl , i-start);
    }
    cout << maxl;
}