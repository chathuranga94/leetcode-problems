/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    const numMap = {}
    let val = null;
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (numMap[num]) {
            val = num
            break
        } else {
            numMap[num] = true   
        }
    }

    return val
};