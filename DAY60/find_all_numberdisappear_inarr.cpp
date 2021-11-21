class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& vec) {
        vector<int> mis;
 
    // For every given element
    for (int i = 0; i < vec.size(); i++) {
 
        // Find its index
        int temp = abs(vec[i]) - 1;
 
        // Update the element at the found index
        vec[temp] = vec[temp] > 0 ? -vec[temp] : vec[temp];
    }
    for (int i = 0; i < vec.size(); i++)
 
        // Current element was not present
        // in the original vector
        if (vec[i] > 0)
            mis.push_back(i + 1);
 
    return mis;
    }
};