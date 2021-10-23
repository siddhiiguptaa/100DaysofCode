#include<iostream>
using namespace std;

int main()
{
    int year;

    cout<< "Enter a year";
    cin>> year;

    if (year %4==0) {
        if (year %100=0)
        if (year %400=0)
        cout<< year << "is an leap year"; {

        else
        cout<< year << "is not an leap year"; {

        else
        cout<< year << "is a an leap year"; {

        else
        cout<< year << "is not an leap year";


     return 0;
    }
