/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return Math.max(...sentences.map(sentence => {
        return sentence.split("").filter(e => e === " ").length;
    })) + 1;
};