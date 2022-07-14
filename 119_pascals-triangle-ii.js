/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let previousRow = []
    const numRows = rowIndex + 1

    for (let i = 0; i < numRows; i++) {
        const subArrLength = i+1
        const subArr = new Array(subArrLength)

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

        if (numRows - 1 === i) {
            return subArr
        } else {
            previousRow = subArr
        }
    }
};

console.log(
    getRow(4)
)