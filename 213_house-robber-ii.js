/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const size = nums.length
    if (size === 1) return nums[0];
    if (size === 2) return Math.max(nums[0], nums[1])

    // two paths... one with zero one without zero for each element...
    const memo = new Array(size) // memo2 will calculate from index 0
    const memo2 = new Array(size) // memo2 will calculate from index 1

    memo[0] = nums[0]
    memo2[0] = 0

    memo[1] = Math.max(nums[0], nums[1]);
    memo2[1] = nums[1]

    for (let i = 2; i < size - 1; i++) { // stop before last element
        memo[i] = Math.max(memo[i-1], memo[i-2]+ nums[i]);
        memo2[i] = Math.max(memo2[i-1], memo2[i-2]+ nums[i]);
    }

    return Math.max(memo[size-2], memo2[size-3] + nums[size-1])
};

console.log(
    rob([1,2,1,1])
)
