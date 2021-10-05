#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main(){
    int x = 121;
    long long rev=0;
        int y=x;
        while(x>0){
   
    rev = rev*10+x%10;
    x=x/10;
        }
        if(rev == y)
            cout << "its true";

        
        return false;
}