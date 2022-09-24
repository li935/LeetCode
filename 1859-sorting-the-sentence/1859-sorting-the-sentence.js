/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const sentences = s.split(" ");
    
    const sortSentences = sentences.map(s => {
        const index = s.split("").splice(-1, 1)[0];
        const sentence = s.slice(0, -1);
        
        return {index, sentence: sentence};
    });
    
    return sortSentences.sort((a, b) => a.index - b.index).map(s => {
        return s.sentence; 
    }).join(" ");
};