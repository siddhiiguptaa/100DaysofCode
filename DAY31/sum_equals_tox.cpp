class Solution{
  public:
    // your task is to complete this function
    int countPairs(struct Node* head1, struct Node* head2, int x) {
        // Code here
        struct Node *p1, *p2;
        int count =0;
        for(p1 = head1;p1 != NULL;p1=p1->next)
        for(p2 = head2;p2 != NULL;p2=p2->next)
        if(p1->data + p2->data == x)
        count++;
        return count;
        
        
    }
};