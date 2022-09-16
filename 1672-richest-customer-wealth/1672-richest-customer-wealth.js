/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(account => {
        return account.reduce((acc, cur) => {
            return acc + cur;
        }, 0);
    }));
};