/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let targetIndex = -1;
    
    const findTarget = (nums, start, end, prev) => {
        const mid = Math.floor((end + start) / 2);
        
        if (mid === prev) {
            return;
        }
        
        if (nums[mid] > target) {
            findTarget(nums, start, mid, mid);
        } else if (nums[mid] < target) {
            findTarget(nums, mid, end, mid);
        } else {
            targetIndex = mid;
            
            return;
        }
    };
    
    findTarget(nums, 0, nums.length);
    
    return targetIndex;
};