//C++ Program to Find Quotient and Remainder

#include<iostream>

using namespace std ;

int main (){
	int a,b,R;
	float Q;
	cout<<"enter the value of a and b\n";
	cin>>a>>b;
	Q= (float)a/b;
	R= a%b;
	cout<<"the quotient is:"<<Q<<endl<<"the remainder is:"<<R<<endl;
	
	
	
	return 0;
}