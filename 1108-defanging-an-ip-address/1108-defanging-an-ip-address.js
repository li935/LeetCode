/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split("").map(e => {
        if (e === ".") {
            return "[.]";
        } else {
            return e;
        }
    }).join("");
};