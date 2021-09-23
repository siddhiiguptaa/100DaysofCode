//program to find if a string has balanced parenthesis 
//parenthesis used for this program - ()

#include<iostream>
#include<stack>                             
#include<string>

using namespace std; 
 
bool isbalanced(string s)                    //func returning 1/o based on inpur string             
{
    stack <char> st;                         //char stack declared  
    int i=0;
    bool ans=true;
    string temp;
    
    for(i=0;i<s.length();i++)                //loop to iterate over the string 
    {
        if(s[i]=='(')                         
        {
            st.push(s[i]);
        }
        else if (s[i]==')')
        {
                if(!st.empty()&& st.top()=='(')
                    st.pop();    
                else
                {   
				 	ans=false;
                    break;
				}    
        }
    }

    if(!st.empty())                           //important to address one of the corner cases, when string is left with only opening brackets
        return false;
                
    return ans;
}

int main()
{
    string s;
    cout<<"Enter the parenthesis string here. ";
    getline(cin,s);                           //input the parenthesis string
    
    if(isbalanced(s))
        cout<<"Balanced string";
    else
        cout<<"Unbalanced string";
}
