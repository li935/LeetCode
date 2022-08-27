/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    
    strs.sort((a, b) => a.length - b.length);
    
    const shortestWord = strs[0].length;
    let tempPrefix = "";
    
    for (let i = 0; i < shortestWord; i++) {
        tempPrefix += strs[0][i];
        
        for (let j = 1; j < strs.length; j++) {
            if (tempPrefix[i] !== strs[j][i]) {
                return tempPrefix.slice(0, -1);
            }
        }
    }
    
    return tempPrefix;
};