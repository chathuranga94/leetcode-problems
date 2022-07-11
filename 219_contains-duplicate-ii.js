/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    const usedNums = {}
    for (let i = 0; i < nums.length; i++) {
        const prevIdx = usedNums[nums[i]]
        if (prevIdx && (i - Number(prevIdx)) <= k) return true
        
        usedNums[nums[i]] = i.toString()
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))