#include <iostream>
using namespace std;
int main(){
    int  n;
    cin >> n ;
    int reverse =0;
    while(n>0){
        int a = n%10;
        reverse = reverse*10 + a;
        return reverse;
        cout << reverse <<endl;
    }

}

