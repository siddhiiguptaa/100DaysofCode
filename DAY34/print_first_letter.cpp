class Solution{
public:	
	
	string firstAlphabet(string s)
	{
	    // Your code goes here
	    int n = s.size();
	    string v = "";
	    v = v+s[0];
	    for(int i=0;i<n-1;i++){
	        if(s[i] == ' ')
	        v=v+s[i+1];
	    }
	    return v;
	}
};
