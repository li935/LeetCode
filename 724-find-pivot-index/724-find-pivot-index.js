/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (nums.length === 1) return 0;
    
    let pivotIndex = 0;
    
    while (pivotIndex < nums.length) {
        let leftSum = 0, rightSum = 0;
        
        for (let i = 0; i < pivotIndex; i++) {
            leftSum += nums[i];
        }
        
        for (let i = pivotIndex + 1; i < nums.length; i++) {
            rightSum += nums[i];
        }
        
        console.log("Left:" + leftSum + ", Right:" + rightSum);
        
        if (leftSum === rightSum) {
            return pivotIndex;
        }
        
        
        pivotIndex++;
    }
    
    return -1;
};