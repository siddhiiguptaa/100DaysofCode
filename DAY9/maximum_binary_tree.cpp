class Solution {
public:
    
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        int left =0;int right = nums.size();
        return construct(nums,left, right);
        
    }
     TreeNode* construct(vector<int>& nums,int left, int right) {
        if(left ==right){
            return nullptr;
        } 
         TreeNode* root = new TreeNode(*max_element(nums.begin()+left,nums.begin()+right));
        root->left = construct(nums,left,max_element(nums.begin()+left,nums.begin()+right)-nums.begin()); 
        root->right = construct(nums,max_element(nums.begin()+left,nums.begin()+right)-nums.begin()+1,right);
        return root;
     }
};