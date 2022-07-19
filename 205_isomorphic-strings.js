/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const letterMap = {}
    const reverseLetterMap = {}
    let isomorphic = true

    for (var i = 0; i < s.length; i++) {
        const firstLetter = s.charAt(i)
        const secondLetter = t.charAt(i)
        console.log

        if (letterMap[firstLetter] && letterMap[firstLetter] !== secondLetter) {
            isomorphic = false
            break
        }

        if (reverseLetterMap[secondLetter] && reverseLetterMap[secondLetter] !== firstLetter) {
            isomorphic = false
            break
        }


        letterMap[firstLetter] = secondLetter
        reverseLetterMap[secondLetter] = firstLetter
    }

    if (!isomorphic) return false    
    return isomorphic
};

console.log(
    isIsomorphic("badc", "baba")
)