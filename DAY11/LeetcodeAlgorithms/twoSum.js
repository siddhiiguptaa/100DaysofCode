/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, 
    and you may not use the same element twice.

    You can return the answer in any order.
* Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2,2,2,7,7,7]

function twoSum(nums, target) {
  let comp = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
}

console.log(twoSum(nums, 9))

// let twoSum = function(nums, target) {
//     nums.reduce((preNum,currNum,index)=>{
//         if((preNum + currNum) === target){
//             return index;
//         }
//     })
//     return -1
// }
// let nums = [2,7,11,15], target = 9
// console.log(twoSum(nums,target))