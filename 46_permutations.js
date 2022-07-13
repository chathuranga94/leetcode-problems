/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // permutations for 1,2 is 1,2 and 2,1
    // for 3 it would be    1 + permute(2,3)       2 + permute(1,3)     3 + permute(1,2)

    if (nums.length > 2) {
        let permutes = []
        for (let i = 0; i < nums.length; i++) {
            const arr = nums.filter(n => n !== nums[i])
            const arrPermute = permute(arr)
            arrPermute.forEach(a => {
                a.push(nums[i])
            })
            permutes = permutes.concat(arrPermute)
        }
        return permutes
    } else if (nums.length === 2) {
        return [[nums[0], nums[1]], [nums[1], nums[0]]]
    } else if (nums.length === 1) {
        return [nums]
    }
};

console.log(
    permute([1,2,3,4])
)