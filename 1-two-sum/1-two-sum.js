/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const secondNum = target - nums[i];
        
        if (result.has(secondNum)) {
            return [result.get(secondNum), i];
        }
        
        result.set(nums[i], i);
    }
};