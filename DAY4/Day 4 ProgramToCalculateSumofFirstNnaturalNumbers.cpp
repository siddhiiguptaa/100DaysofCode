#include<iostream>
using namespace std;

int main()
{
    int n, sum=0;
    cout<< "Enter a positive intiger;"

    cin>> n;

    for(int i=1; i<=n; ++){
        sum += i;
    }
    cout<< "sum =" << sum;
    return 0;
}
