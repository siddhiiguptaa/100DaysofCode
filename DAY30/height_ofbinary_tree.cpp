int height(struct Node* node)
{
    //code here
    if(node == NULL){
        return 0;
    }
    int ls = 1+height(node->left);
    int rs = 1+height(node->right);
    if(ls >= rs){
        return ls;
    }
    else
    return rs;
}