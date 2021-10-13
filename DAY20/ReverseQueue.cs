
class Solution{
    public Queue<int> rev(Queue<int> q){
        //Code here
         Queue<int> result = new Queue<int>();
		 var arr = q.ToArray();
		 for (int i = arr.Length - 1; i >= 0; i--)
		 {
		 	result.Enqueue(arr[i]);
		 }
		
		return result;	 
    }
}
