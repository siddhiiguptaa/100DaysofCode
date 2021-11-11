public class Solution {
    public bool IsPalindrome(int x) {
        	
			var s = x.ToString();
			    
      char[] charArray = s.ToCharArray();
      Array.Reverse( charArray );
      var sresult = new string( charArray );
			
			return sresult == s;
    }
}
