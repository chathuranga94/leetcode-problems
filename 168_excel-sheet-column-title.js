/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let str = ''
    let remainder = columnNumber
    while (remainder > 26) {
        const leftover = remainder % 26

        if (leftover === 0) {
            str = (26 + 9).toString(36).toUpperCase() + str
            remainder = Math.floor((remainder-1)/26)
        } else {
            str = (leftover + 9).toString(36).toUpperCase() + str
            remainder = Math.floor(remainder/26)
        }
    }
    if (remainder < 27) {
        str = (remainder + 9).toString(36).toUpperCase() + str
    }
    return str
};


console.log(
    convertToTitle(701)
)
