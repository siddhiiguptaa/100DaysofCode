#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main(){
    priority_queue <int> q;
    q.push(10);
    q.push(100);
    q.push(80);
    q.push(340);
    q.push(40);
    q.push(20);
   
        //cout << q.top() << endl;
        q.pop();
        cout << q.top() << endl;
    
    return 0;
}