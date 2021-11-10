#include <bits/stdc++.h>
using namespace std;
int func(int n){
    if(n<=1){
        return 1;
    }
   return n*func(n-1);
    //cout << n << " ";
}
int main(){
 int  n = 5;
 int ans = func(n);
 cout << ans << endl;
 return 0;
}