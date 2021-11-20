#include <stdio.h>
#include <stdlib.h>

int main(void) {int a,b;
	printf("enter 2 nos");
	scanf("%d%d",&a,&b);
	if(a>b)
		printf("%d greaater than %d",a,b);
	else
		printf("%d greaater than %d",b,a);
return EXIT_SUCCESS;
}
