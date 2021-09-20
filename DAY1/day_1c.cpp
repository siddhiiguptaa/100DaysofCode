#include <iostream>
using namespace std;

int main()
{
    int divisor, dividend, quotient, remainder;

    cout << "Enter dividend :: ";
    cin >> dividend;

    cout << "\nEnter divisor :: ";
    cin >> divisor;

    quotient = dividend / divisor;
    remainder = dividend % divisor;

    cout << "\nQuotient = " << quotient << endl;
    cout << "\nRemainder = " << remainder<<endl;

    return 0;
}
