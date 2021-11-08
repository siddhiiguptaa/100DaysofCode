// condition if left root value < root val < root right val
#include <iostream>
#include <vector>
using namespace std;
struct Node
{
    int data;
    Node* left;
    Node* right;
    Node(int val){
        data = val;
        right = left = NULL;
    }
};

void inorder(Node* root , vector <int> v){
     if(root == NULL){
         return;
     }
     inorder(root->left, v);
     v.push_back(root->data);
     inorder(root->right, v);

}
bool check_for_bst(Node* root){
    vector <int> v;
    inorder(root, v);
    for(int i =0;i<v.size()-1;i++){
       if(v[i] >= v[i+1]){
           return 0;
       }
    }
    return 1;
}
int main(){
    vector <int> v = {4, 8, 1, 2, 5 , 4 };
    int n = sizeof(v)/sizeof(v[0]);
    cout << check_for_bst << endl;
    cout << " its the ans";

}