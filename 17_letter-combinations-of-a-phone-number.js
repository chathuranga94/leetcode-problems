/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    const phoneNumbers = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }

    let combinations = []
    const nums = digits.split("")

    nums.forEach((num, idx) => {
        const letters = phoneNumbers[num]
        if (idx === 0) {
            combinations = [...letters]
        } else {
            const current = [...combinations]
            letters.forEach((letter, idx2) => {
                if (idx2 === 0) {
                    combinations = [...current.map(a => a.concat(letter))]
                } else {
                    combinations = [...combinations, ...current.map(a => a.concat(letter))]
                }
            })
        }
    })

    return combinations
};

console.log(letterCombinations("237"))


