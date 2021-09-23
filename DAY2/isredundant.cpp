//program to check if there are any redundant parenthesis

#include<iostream>
#include<stack>
#include<string>

using namespace std;

bool isredundant(string s)                //func defination to check 
{
	stack<char> st;                       //stack of char type declared 
	int i;                                 
	bool ans=false;                       //default value put as if the expression is not redundant 
	
	for(i=0;i<s.length();i++)             //loop to iterate through the expression 
	{
		if(s[i]=='+'||s[i]=='-'||s[i]=='/'||s[i]=='*')
			st.push(s[i]);
		else if(s[i]=='(')
			st.push(s[i]);
		else if (s[i]==')')                //main code where we check if the ')' char leads to any extra '('
		{
			if(st.top()=='(')              //expression defined reduntant incase there is '('character without any operators
			{
				ans=true;
				break;
			}
			while(s[i]=='+'||s[i]=='-'||s[i]=='/'||s[i]=='*')
			{
				st.pop();
			}
			st.pop();
		}
	}
	return ans;
}

int main()
{
	string s;
	cout<<"Enter your mathematical expression with paranthesis.";
	getline(cin,s);
	
	if(isredundant(s))
		cout<<"Redundant";
	else
		cout<<"Not redundant";
}
