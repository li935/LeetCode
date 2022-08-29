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
        return JSON.stringify(str1) === JSON.stringify(str2);
    }
    
    return test2(test(s), test(t));
};