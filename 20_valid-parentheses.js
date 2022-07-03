/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const arr = []

    const combination = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    for (var i = 0; i < s.length; i++) {
        const val = s.charAt(i)
        if (['(', '{', '['].includes(val)) {
            arr.push(val)
        }

        if ([')', '}', ']'].includes(val)) {
            const ar = arr.pop()
            if (combination[ar] !== val) {
                return false
            }
        }
    }

    return arr.length === 0
};

console.log(isValid('()[]{}'))