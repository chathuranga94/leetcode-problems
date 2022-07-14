/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const arr = []
    for (let i = 0; i < numRows; i++) {
        const subArrLength = i+1
        const subArr = new Array(subArrLength)
        const previousRow = i > 1 ? arr[i-1] : []

        for (let j=0; j < (subArrLength/2); j++) {
            if (j === 0) {
                subArr[j] = 1
                subArr[subArrLength - 1] = 1
            } else {
                const val = previousRow[j-1] + previousRow[j]
                subArr[j] = val
                subArr[subArrLength - 1 -j] = val
            }
        }

        arr.push(subArr)
    }

    return arr
};

console.log(
    generate(5)
)