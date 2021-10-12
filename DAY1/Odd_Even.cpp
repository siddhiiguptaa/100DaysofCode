#include<iostream>

using namespace std;

int main()
{
	int n=0;
	cout<<"Enter a number to check whether it is odd or even. ";
	cin>>n;
	
	if(n%2==0)
	{
		cout<<n<<" is an even number.";
	}
	else
	{
		cout<<n<<" is an odd number.";
	}
}
