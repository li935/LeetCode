/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let countMatches = 0;
    const ruleIdx = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
    
    items.forEach(item => item[ruleIdx] === ruleValue && countMatches++);
    
    return countMatches;
};