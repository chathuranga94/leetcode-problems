/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const zeros = []
    let sum = 1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (num === 0) {
            zeros.push(i)
        } else {
            sum = sum * num
        }
    }


    for (let i = 0; i < nums.length; i++) {
        if (zeros.length >= 2) {
            nums[i] = 0
        } else if (zeros.length === 1) {
            if (zeros[0] === i) {
                nums[i] = sum
            } else {
                nums[i] = 0
            }
        } else {
            nums[i] = sum / nums[i]
        }
    }
    return nums
};


console.log(
    // productExceptSelf([1,2,3,4])
    // productExceptSelf([-1,1,0,-3,3])
    productExceptSelf([0,1,0,-3,3])
)