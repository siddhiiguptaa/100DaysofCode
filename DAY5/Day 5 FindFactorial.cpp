#include<iostream>
using namespace std;

int main()
{
    int n;
    long double factorial = 1.0;

    cout<< "Enter a positive intiger";
    cin>> n;

    if (n<0)
    cout<< "Eroor! Factoreal of a negative numberdoesn't exist";
     
     else {
         for(int i=1; i<=n; ++i) {
             factoreal = i;
         }
         cout<< "factoreal of " "<<n << "=" << factoreal;
     }
     return 0;
}
