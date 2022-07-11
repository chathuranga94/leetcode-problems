/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleaned = s.replace(/[^a-z0-9]/gi,'').toLowerCase();

    for (var i = 0; i < Math.floor(cleaned.length/2); i++) {
        if (cleaned.charAt(i) !== cleaned.charAt(cleaned.length - i - 1)) return false
    }
    return true
};



console.log(isPalindrome(" "))