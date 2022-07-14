/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numbersMap = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (numbersMap[num]) {
            delete numbersMap[num]
        } else {
            numbersMap[num] = true
        }
    }
    return parseInt(Object.keys(numbersMap)[0])
};

console.log(
    singleNumber([4,1,2,1,2])
)
