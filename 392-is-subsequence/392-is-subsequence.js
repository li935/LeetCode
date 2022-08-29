/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let lastIndex = 0;
    
    const isSubsequence = () => {
        for (let i = 0; i < s.length; i++) {
            const index = t.indexOf(s[i], lastIndex);

            if (index < 0) {
                return false;
            } else {
                lastIndex = index + 1;
            }
        }
        
        return true;
    }

    return isSubsequence();
};