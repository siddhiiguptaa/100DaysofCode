#include <iostream>
#include <bits/stdc++.h>
using namespace std;
	void matchPairs(char nuts[], char bolts[], int n) {
	    // code here
	    sort(nuts, nuts+n);
	    sort(bolts, bolts+n);
	}
    int main(){
        char nuts[] = {'#' , '^' , '%', '$' , '&'};
        char bolts[] = {'^', '&' , '#', '%' , '$'};
        int n;
        matchPairs(nuts, bolts,n);
    }
