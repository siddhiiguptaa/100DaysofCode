#include <stdio.h>
#include <string.h>

// function to convert string to sentence case
void StrToSentence(char * string)
{
	int length=0,i=0;

	length = strlen(string);

	for(i=0;i<length;i++)
	{
		if( (i==0) && (string[i]>='a' && string[i]<='z'))
		{
			string[i] = string[i] - 32;
		}
		else if(string[i]=='.')
		{
			if(string[i+1] == ' ')
			{
				if(string[i+2]>='a' && string[i+2]<='z')
				{
					string[i+2] = string[i+2] - 32;
				}
			}
			else
			{         
				if(string[i+1]>='a' && string[i+1]<='z')
				{
					string[i+1] = string[i+1] - 32;
				}
			}
		}
	}
}

// main function
int main()
{
	char string[50]={0};
	int length=0,i=0,j=0,k=0;

	printf("\nEnter the string : ");
	gets(string);

	// pass the string to the function
	StrToSentence(string);

	printf("Final string is : %s",string);
	return 0;
}
