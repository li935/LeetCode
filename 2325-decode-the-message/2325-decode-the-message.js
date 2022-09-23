/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const originKey = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let decodeKey = new Map();
    
    key.split("").filter(e => e !== " ").map((e, i) => {
        decodeKey.set(e, i);
    });
    
    decodeKey = Array.from(decodeKey).map(e => e[0]);
    
    return message.split("").map(e => {
        if (e === " ") {
            return " ";
        } else {
            return originKey[decodeKey.indexOf(e)];            
        }
    }).join("");
};