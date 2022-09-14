/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const roman = [];
    
    while (num > 0) {
        if (num >= 1000) {
            num -= 1000;
            roman.push("M");
        } else if (num >= 900) {
            num -= 900;
            roman.push("C", "M");
        } else if (num >= 500) {
            num -= 500;
            roman.push("D");
        } else if (num >= 400) {
            num -= 400;
            roman.push("C", "D");
        } else if (num >= 100) {
            num -= 100;
            roman.push("C");
        } else if (num >= 90) {
            num -= 90;
            roman.push("X", "C");
        } else if (num >= 50) {
            num -= 50;
            roman.push("L");
        } else if (num >= 40) {
            num -= 40;
            roman.push("X", "L");
        } else if (num >= 10) {
            num -= 10;
            roman.push("X");
        } else if (num >= 9) {
            num -= 9;
            roman.push("I", "X");
        } else if (num >= 5) {
            num -= 5;
            roman.push("V");
        } else if (num >= 4) {
            num -= 4;
            roman.push("I", "V");
        } else {
            num -= 1;
            roman.push("I");
        }
    }
    
    return roman.join("");
};