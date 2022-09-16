/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const splitNums = nums.splice(0, n);
    const answer = [];
    
    for (let i = 0; i < nums.length; i++) {
        answer.push(splitNums[i], nums[i]);
    }
    
    return answer;
};