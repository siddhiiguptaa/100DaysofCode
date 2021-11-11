#include <iostream>
using namespace std;
int sum =0;
void func(int n){
    if(n==0){
        return;
    }
    
    int rem = n%10;
    sum = sum *10+rem;
    func(n/10);
    //cout << n << " ";
    
}
bool palin(int n){
    return n == func(n);
}
int main(){
 int  n = 456789;
 //func(n);
 cout << sum;
}