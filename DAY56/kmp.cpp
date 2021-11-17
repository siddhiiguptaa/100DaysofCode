#include <iostream> 
using namespace std;
int func (string s, string p , int n , int m){
    int count =0;
    for(int i=0;i<n;i++){
        int k =0;
        int l =0;
        for(int j=i;j<m+i-1;j++){
            if(s[i] != p[i]){
                l =1;
                break;
            }
            k++;
        }
        if(l==0){
            count++;
        }
    }
    return count;
}
int main(){
    string s = "abcabcabc";
    string p = "abc";
    int n = s.size();
    int m = p.size();
    cout << func(s, p, m, n) << endl;
}