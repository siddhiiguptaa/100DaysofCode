#include <iostream>
using namespace std;
int search(int arr[], int r ,int l, int x ){
    if(r>= 1){
    int mid = l + (r-l) /2;
    if(arr[mid] == x)
    return mid;
    else if(arr[mid] > x)
       return search(arr, mid-1 , l, x );
       else
        return search(arr, mid+1 , r, x );
}
    }
    int main(){
        int arr[] = { 2, 6, 8, 1, 3, 2, 7};
        int x = 7;
        int n = sizeof(arr)/sizeof(arr[0]);
        search(arr, 0, n-1,x);
        cout << " the index of no is ";
    }