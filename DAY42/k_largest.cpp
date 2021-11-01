class Solution
{
    public:
    //Function to return k largest elements from an array.
    vector<int> kLargest(int arr[], int n, int k)
    {
        // code here
        int ans =0;
        vector <int> res;
        priority_queue <int> q(arr, arr+n);
        
        while(k--){
             res.push_back(q.top());
             q.pop();
        }
        
       return res;
    }
};
