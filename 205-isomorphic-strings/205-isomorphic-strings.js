/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const getIsomorphic = (str) => {
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
    
    const compareIsomorphic = (s, t) => {
        return JSON.stringify(s) === JSON.stringify(t);
    }
    
    return compareIsomorphic(getIsomorphic(s), getIsomorphic(t));
};