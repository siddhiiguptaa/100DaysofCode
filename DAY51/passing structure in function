#include <stdio.h>

//Lets create a structure first
struct FirstStruct
{
	int Num1;
	int Num2;
}FirstStruct_IP;

//function declarations
struct FirstStruct TakeUserInput(void);
void DisplayOutput(struct FirstStruct Input);

//structure object declaration
struct FirstStruct inputStruct;

int main()
{
    //create a structure to get a return from TakeUserInput function
    //Now use the DisplayOutput to print the input
    DisplayOutput(TakeUserInput());
	
	return 0;
}

//This function returns a structure after storing the user input into it
struct FirstStruct TakeUserInput(void)
{

    printf("Enter a number: ");
    scanf("%d",&inputStruct.Num1);
    printf("Enter a number again: ");
    scanf("%d",&inputStruct.Num2);

    return inputStruct;
}
//Function taking Structure as argument
void DisplayOutput(struct FirstStruct Input)
{
    printf("%d\n",((Input.Num1)+(Input.Num2)));
}
