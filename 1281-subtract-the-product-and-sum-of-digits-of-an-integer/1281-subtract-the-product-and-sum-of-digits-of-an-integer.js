/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arrayOfNumber = n.toString().split("");
    
    return arrayOfNumber.reduce((acc, cur) => {
        return acc * Number.parseInt(cur);
    }) - arrayOfNumber.reduce((acc, cur) => {
        return acc + Number.parseInt(cur);
    }, 0);
};