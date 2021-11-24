#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main(){
vector<vector<int>> matrix;
     int n = matrix.size();
     int m = matrix[0].size();
     for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin >> matrix[i][j];
            cout << matrix[i][j];
        }
     }
     return 0;
}
