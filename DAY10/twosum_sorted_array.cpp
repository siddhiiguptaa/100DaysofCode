// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
//find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] 
//and numbers[index2] where 1 <= first < second <= numbers.length.

//Return the indices of the two numbers, index1 and index2, as an integer array [index1, index2] of length 2.

//The tests are generated such that there is exactly one solution. You may not use the same element twice.

 
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        if (numbers == null || numbers.length == 0)
		return null;
 
	int i = 0;
	int j = numbers.length - 1;
 
	while (i < j) {
		int x = numbers[i] + numbers[j];
		if (x < target) {
			++i;
		} else if (x > target) {
			j--;
		} else {
			return new int[] { i + 1, j + 1 };
		}
	}
 
	return null;
        }
        
    }
