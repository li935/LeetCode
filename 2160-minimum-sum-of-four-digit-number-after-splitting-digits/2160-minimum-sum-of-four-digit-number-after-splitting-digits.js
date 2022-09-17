/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let minNum = 9999;
    
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            const copyNum = num.toString().split("");
            
            const numA = copyNum[i] + copyNum[j];
            
            const a = Number.parseInt(copyNum.splice(i, 1) + copyNum.splice(j - 1, 1));
            const b = Number.parseInt(Array.from(copyNum).join(""));
            const c = Number.parseInt(Array.from(numA).reverse().join(""));
            const d = Number.parseInt(Array.from(copyNum).reverse().join(""));
            
            console.log(a, b, c, d);
            
            const A = a + b;
            const B = a + d;
            const C = c + b;
            const D = c + d;
            
            const X = Math.min(a + b, a + d, c + b, c + d);
            
            if (minNum > X) {
                minNum = X;
            }
        }
    }
    
    return minNum;
};