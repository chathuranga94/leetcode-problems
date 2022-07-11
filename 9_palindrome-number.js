/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    const cleaned = x.toString().split("");

    for (var i = 0; i < Math.floor(cleaned.length/2); i++) {
        if (cleaned[i] !== cleaned[cleaned.length - i - 1]) return false
    }
    return true
};

console.log(isPalindrome(10))
