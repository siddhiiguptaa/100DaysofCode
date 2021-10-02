class Solution {
    bool count(int n)
    {
        int c=0;
        while(n>0)
        {
            int r = n%10;
            if(r==0)
                return false;
            n/=10;
        }
        return true;
    }
public:
    vector<int> getNoZeroIntegers(int n) {
        vector<int> ret;
        for(int i=1; i<n; i++)
        {
            int a = i, b= n-i;
            if(count(a)&&count(b))
                return {a, b};
        }
        return ret;
    }
};