#include <iostream>
#include <vector>
using namespace std;
int maxsum(vector<int> arr){
    int curr_sum = 0;
    int max_sum = INT_MIN;
    for(const int x: arr){
    curr_sum += x;
    max_sum = max(max_sum, curr_sum);
    
    }
    return max_sum;
}
int main(){
    vector<int> arr = {2, 5, 6, 7, 0, -8};
    int n = arr.size();
    cout << maxsum(arr) << endl;
}
