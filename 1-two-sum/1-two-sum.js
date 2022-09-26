/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // iterate through all possible first numbers
    for (var i = 0; i < nums.length; i++) {
        // iterate through all possible second numbers
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j];
            }
        }
    }
};