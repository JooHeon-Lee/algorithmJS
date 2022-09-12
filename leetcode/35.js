/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Example 1:

    Input: nums = [1,3,5,6], target = 5
    Output: 2
    Example 2:

    Input: nums = [1,3,5,6], target = 2
    Output: 1
 */
 var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let middle = Math.floor((left + right) / 2)

    while (nums[middle] !== target && left <= right) {
        if (target < nums[middle]) { // target이 작으면 right를 줄인다.
          right = middle - 1;
        } else { // target이 더크면 left를 늘린다. 
          left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
      }
      // 같아서 while문이 끝난거면 middle, 달라서 마지막에 끝난거면 left의 값을 return한다.
      return nums[middle] === target ? middle : left;



};