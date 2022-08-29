/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const test = (str) => {
        const strIdx = [];
        const isomorphic = [];
        
        str.split("").map(c => {
            const idx = strIdx.indexOf(c);
            
            if (idx < 0) {
                strIdx.push(c);
                isomorphic.push(strIdx.indexOf(c));
            } else {
                isomorphic.push(idx);
            }
        })
        
        return isomorphic;
    };
    
    const test2 = (str1, str2) => {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                return false;
            }
        }
        
        return true;
    }
    
    return test2(test(s), test(t));
};