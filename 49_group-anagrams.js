/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramMap = {}
    strs.forEach(s => {
        /*
        const usedLetters = {}
        for (var i = 0; i < s.length; i++) {
            const ss = usedLetters[s.charAt(i)]
            if (ss) {
                usedLetters[s.charAt(i)] = ss + 1
            } else {
                usedLetters[s.charAt(i)] = 1
            }
        }
        */
        // const anagramKey = Object.entries(usedLetters).map(val => val[0] + val[1]).sort().join() // a1,b1,t1
        const anagramKey = s.split("").sort().join("")

        if (anagramMap[anagramKey]){
            anagramMap[anagramKey] = [...anagramMap[anagramKey], s]
        } else {
            anagramMap[anagramKey] = [s]
        }
    })

    return Object.entries(anagramMap).map(val => val[1])
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))