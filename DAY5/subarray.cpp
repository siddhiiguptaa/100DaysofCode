#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main(){

    int n;
    cin >> n;
    int arr[n];
    cin >> arr[n];
    for (int i =0;i<n;i++){
        for(int j =0;j<n;j++){
            for(int k=i;k<=j;k++){
                cin >> k;
                if (arr[i]+arr[j] ==k){
                    cout << arr[i] << arr[j]<< endl;
                }
            }

        }
    }
return 0;
    
}