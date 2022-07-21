/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let subarr = []
    let subarrSum = 0

    let maxSum = 0

    for (var i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (subarr.includes(num)) {
            const lastIndex = subarr.lastIndexOf(num)

            subarr = subarr.slice(lastIndex + 1)
            subarr.push(num)
            subarrSum = subarr.reduce((sum, val) => sum + val,0);
        } else {
            subarr.push(num)
            subarrSum += num

            if (subarrSum > maxSum) maxSum = subarrSum
        }
    }
    return maxSum
};

console.log(
    maximumUniqueSubarray([4,2,4,5,6])
    // maximumUniqueSubarray([5,2,1,2,5,2,1,2,5])
)