/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const preceeding = {
        'I': { 'V': 4, 'X': 9 },
        'X': { 'L': 40, 'C': 90 },
        'C': { 'D': 400, 'M': 900 }
    }
    
    let string = s
    let sum = 0

    while (string.length > 0) {
        const char = string.charAt(0);

        if (string.length > 1 && preceeding[char] && preceeding[char][string.charAt(1)]) {
            sum += preceeding[char][string.charAt(1)]
            string = string.slice(2)
            continue;
        }

        if (values[char]) {
            sum += values[char]
            string = string.slice(1)
        }
    }

    return sum
    
};


romanToInt('MMDCCCLXXXIV')

