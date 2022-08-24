/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const judgeRomanChar = (c, next) => {
        switch (c) {
            case "I":
                if (next === "V" || next === "X") {
                    return -1;
                } else {
                    return 1;
                }
            case "V":
                return 5;
            case "X":
                if (next === "L" || next === "C") {
                    return -10;
                } else {
                    return 10;
                }
            case "L":
                return 50;
            case "C":
                if (next === "D" || next === "M") {
                    return -100;
                } else {
                    return 100;
                }
            case "D":
                return 500;
            case "M":
                return 1000;
        }
    }
    
    let next = "";
    
    return s.split("").reduce((prev, curr, index, array) => {
        next = array[index + 1];
        
        return prev + judgeRomanChar(curr, array[index + 1]);
    }, 0);
};