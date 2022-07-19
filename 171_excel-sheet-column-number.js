/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let sum = 0
    for (var i = columnTitle.length - 1; i >= 0; i--) {
        const char = columnTitle.charAt(i)
        const base = columnTitle.length - 1 - i
        const strInt = parseInt(char, 36) - 9

        const value = base > 0 ? Math.pow(26, base) * strInt : strInt
        sum += value
    }
    return sum
};

console.log(titleToNumber("ZZ"))
