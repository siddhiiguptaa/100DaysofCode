//basic operations of stack using array

#include<iostream>

using namespace std; 

#define n 20                //global definition of length of stack

class stack{
	int* arr;
	int top;
	
	public:
		stack()                 //constructor to define some values
		{
			arr=new int[n];
			top=-1;
		}
		
		void push(int x)        //inserting values in stack
		{
			if(top==n-1)
			{
				cout<<"Stack is overflowed."<<endl;
			}
			top++;
			arr[top]=x;
		}
		
		void pop()              //deleting values from stack
		{
			if(top==-1)
			{
				cout<<"Stack is underflowed."<<endl;
			}
			
			top--;
		}
		
		int topval()            //getting the last insertion from stack
		{
			if(top==-1)
			{
				cout<<"Stack is empty."<<endl;
			}
			return arr[top];
		}
		
		bool empty()            //checking if the stack is empty 
		{
			return top==-1;
		}
};

int main()
{
	stack s;                    //making an instance of our class stack
	int i;
	int temp;                   //for inserting values in stack 
	int len;                    //letting the user choose the length of stack
	cout<<"Enter the length of your stack (less than 20)";
	cin>>len;
	
	for(i=0;i<len;i++)          //inserting values in stack
	{
		cout<<"Enter the value ";
		cin>>temp;
		s.push(temp);
	}
	cout<<s.topval()<<endl;     //getting the last insertion
	
	for(i=-;i<len;i++)          //emptying the stack fully
	{
		s.pop();
	}
	cout<<s.empty();            //checking our empty stack value
	}
