/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let goodPairsCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                goodPairsCount++;
            }
        }
    }
    
    return goodPairsCount;
};