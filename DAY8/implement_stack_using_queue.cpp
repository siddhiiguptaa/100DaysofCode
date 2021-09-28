#include <iostream>
#include <bits/stdc++.h>
using namespace std;
class MyQueue {
public:
    stack<int> main_stack;
    stack<int> helper_stack;
    
    MyQueue() {
        
    }
    
    void push(int x) {
        if(main_stack.empty()){
            main_stack.push(x);
            return;
        }
        while(!main_stack.empty()){
            helper_stack.push(main_stack.top());
            main_stack.pop();
        }
        helper_stack.push(x);
        while(!helper_stack.empty()){
            main_stack.push( helper_stack.top());
             helper_stack.pop();
        }
    }
    
    int pop() {
        int i= main_stack.top();
        main_stack.pop();
        return i;
    }
    
    int peek() {
       return main_stack.top();
    }
    
    bool empty() {
        return main_stack.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */