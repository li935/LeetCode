/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let minNum = 9999;
    
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            const numB = num.toString().split("");
            const numA = numB[i] + numB[j];
            
            const a = Number.parseInt(numB.splice(i, 1) + numB.splice(j - 1, 1));
            const b = Number.parseInt(Array.from(numB).join(""));
            const c = Number.parseInt(Array.from(numA).reverse().join(""));
            const d = Number.parseInt(Array.from(numB).reverse().join(""));
            
            const target = Math.min(a + b, a + d, c + b, c + d);
            
            if (minNum > target) {
                minNum = target;
            }
        }
    }
    
    return minNum;
};