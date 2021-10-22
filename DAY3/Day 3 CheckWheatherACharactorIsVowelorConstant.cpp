#include<iostream>
using namespace std;

int main()
{
    char c;
    bool isLowercaseVowel, isUppercaseVowel;

    cout<<"Enter an Alphabat";
    cin>> c;

    if (!isalpha(c))
    printf ("Eroor! Non-alphabetic charactor.")

    else if (isLowercaseVowel || isUppercaseVowel)
    cout<< c << "is a constant";

    return 0;
}
