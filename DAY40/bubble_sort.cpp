#include <iostream>
#include <bits/stdc++.h>
using namespace std;
void swap(int *a, int *b){
    int temp = 0;
    temp = *a;
    *a = *b;
    *b = temp;
    return;
}
void bubble_sort(int arr[], int n){
    int i, j;
    for(int i=0;i<n-1;i++){
        for(int j=0;j<n-i-1;j++){
            if(arr[j] > arr[j+1])
            swap(&arr[j], &arr[j+1]);
        }
    }
     
}
void print(int arr[], int n){
    for(int i=0;i<n;i++){
        cout << arr[i] << " ";
    }
}
int main(){
    int arr[] = {3, 7, 8, 9, 5, 4};
    int n = sizeof(arr)/sizeof(arr[0]);
    bubble_sort(arr, n);
    cout << " Bubble sort ";
    print(arr, n);
    return 0;

}
