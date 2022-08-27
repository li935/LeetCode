/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    
    const shortestWord = strs[0].length;
    
    for (let i = 0; i < shortestWord; i++) {
        prefix += strs[0][i];
        
        for (let j = 1; j < strs.length; j++) {
            if (prefix[i] !== strs[j][i]) {
                return prefix.slice(0, -1);
            }
        }
    }
    
    return prefix;
};