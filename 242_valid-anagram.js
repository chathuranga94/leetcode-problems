/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const usedLetters = {}
    for (var i = 0; i < s.length; i++) {
        const ss = usedLetters[s.charAt(i)]
        if (ss) {
            usedLetters[s.charAt(i)] = ss + 1
        } else {
            usedLetters[s.charAt(i)] = 1
        }
    }
    console.log(usedLetters)

    for (var i = 0; i < t.length; i++) {
        const tt = usedLetters[t.charAt(i)]
        if(tt) {
            usedLetters[t.charAt(i)] = tt - 1
        } else {
            // if not found or 0. if zero can't reduce. minus shouldn't come
            return false
        }
    }
    console.log(usedLetters)

    return true;

    // check if any key has more than one
    // return Object.values(usedLetters).filter(val => val !== 0).length === 0    
};

console.log(isAnagram("rat", "car"))