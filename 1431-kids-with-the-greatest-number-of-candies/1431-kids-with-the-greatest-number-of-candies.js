/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandie = Math.max(...candies);
    
    return candies.map(c => {
        return c + extraCandies >= maxCandie ? true : false;
    })
};