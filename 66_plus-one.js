/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let remainder = false
    for (let i = digits.length -1; i >= 0; i--) {
        let val = digits[i]
        if (i === digits.length - 1 || remainder) {
            val += 1
            if (val > 9) remainder = true
        }
        console.log(val)

        if (val < 10) {
            digits[i] = val
            return digits
        } else {
            if (i===0 && remainder) {
                return [1,0, ...digits.splice(1)]
            }
            digits[i] = 0
        }
    }
};

console.log(plusOne([9]))