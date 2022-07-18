/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let max
    let min
    if (num1.length > num2.length) {
        max = num1
        min = num2
    } else {
        max = num2
        min = num1

    }
    const maxSize = max.length
    const minSize = min.length

    let sum = ''
    let remainder = false
    for (var i = 0; i < maxSize; i++) {
        // console.log(`max ${parseInt(max[maxSize - 1 - i])} min ${parseInt(min[minSize - 1 - i])}`)
        let tempSum = parseInt(max[maxSize - 1 - i])
        if (min[minSize - 1 - i])
            tempSum += parseInt(min[minSize - 1 - i])
        if (remainder)
            tempSum += 1


        if (tempSum/10 >= 1) {
            remainder = true
            tempSum -= 10
        } else {
            remainder = false
        }
        // console.log(`remainder: ${remainder} and tempSum ${tempSum}`)

        sum = tempSum.toString() + sum
    }
    if (remainder) {
        sum = '1' + sum
    }

    return sum
};

console.log(
    addStrings("999", "12")
)