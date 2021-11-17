#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t;
    while(t--){
        int n;
        int x;
        cin >> n;
        int count =0;
        int arr[n];
        for(int i=0;i<n;i++){
            cin >> arr[i];
            if((arr[i] +x) ^ (arr[i+1] +x) == 0){
                count++;
            }
            else
            cout << -1 << endl;
        }
        cout << count << endl;
    }
	// your code goes here
	return 0;
}
