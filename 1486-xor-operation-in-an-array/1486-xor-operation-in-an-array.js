/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        const bin = start.toString(2);

        bin.split("").reverse().map((bit, i) => {
            if (arr[i] === undefined) {
                arr[i] = 0;
            }

            arr[i] += parseInt(bit);
        });

        start += 2;
    }

    return Number.parseInt(arr.map(bit => bit % 2 === 0 ? 0 : 1).reverse().join(""), 2);
};