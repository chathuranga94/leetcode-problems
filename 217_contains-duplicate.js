/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const usedNums = {}
    for (let i = 0; i < nums.length; i++) {
        if (usedNums[nums[i]]) return true
        
        usedNums[nums[i]] = true
    }
    return false
};

console.log(containsDuplicate([1,2,3]))