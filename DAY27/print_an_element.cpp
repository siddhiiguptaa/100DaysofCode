class Solution{
    public:
    int findElementAtIndex(int a[], int n, int key) 
    {
        // Your code goes here
        int ans =0;
        for(int i=0;i<n;i++){
            if(i == key)
                ans =  a[i];
        }
            
        return ans;
    }
    
};
