/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {    
    let result = (BigInt(digits.join("")) + 1n).toString();
    
    return result.split("").map(e => e);
};