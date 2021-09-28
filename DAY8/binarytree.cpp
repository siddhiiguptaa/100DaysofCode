#include <iostream>
using namespace std;
struct binarytree
{
    int data;
    struct binarytree* left;
    struct binarytree* right;

    binarytree(int val){
        data = val;
        left = NULL;
        right = NULL;
    }
    /* data */
};
int main(){
    struct binarytree* root = new binarytree(2);
    root->left = new binarytree(3);
    root->right = new binarytree(4);
    root->left->left = new binarytree(5);
    return 0;
}
 
