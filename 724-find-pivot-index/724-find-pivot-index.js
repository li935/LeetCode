/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivotIndex = 0;
    
    while (pivotIndex < nums.length) {
        let leftSum = 0, rightSum = 0;
        
        for (let i = 0; i < pivotIndex; i++) {
            leftSum += nums[i];
        }
        
        for (let i = pivotIndex + 1; i < nums.length; i++) {
            rightSum += nums[i];
        }
        
        if (leftSum === rightSum) {
            return pivotIndex;
        }
        
        pivotIndex++;
    }
    
    return -1;
};