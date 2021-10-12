#include<iostream>

using namespace std;

int main()
{
	int n=0;
	cout<<"Enter a number to check if its negative or positive ";
	cin>>n;
	
	if(n<0)
	{
		cout<<n<<" is a negative number.";
	}
	else
	{
		cout<<n<<" is a positive number.";
	}
}
