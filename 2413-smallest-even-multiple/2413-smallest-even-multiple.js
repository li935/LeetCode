/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    while (true) {
        if (n % 2 === 0) {
            return n;
        } else {
            n *= 2;
        }
    }
};