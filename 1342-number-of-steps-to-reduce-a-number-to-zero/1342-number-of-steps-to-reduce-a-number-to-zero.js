/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    
    const isEven = num => num / 2;
    const isOdd = num => num - 1;
    
    while (num > 0) {
        if (num % 2 === 0) {
            num = isEven(num);
        } else {
            num = isOdd(num);
        }
        
        steps++;
    }
    
    return steps;
};