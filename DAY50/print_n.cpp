#include <iostream>
#include <bits/stdc++.h>
using namespace std;
void func(int n){
    if(n<=0){
        return;
    }
    cout << n << " ";
    func(n-1);
}
int main(){
 int  n = 10;
 func(n);
 return 0;
}