/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    return binarySearch(nums, target, 0)
};

 var binarySearch = function(nums, target, idx) {
    console.log(`nums: ${nums} target:${target} idx:${idx}`)
    let mid = Math.floor(nums.length / 2);
    if (nums.length === 1 && nums[0] != target) {
        if (target < nums[0]) return idx
        return idx + 1;
    } else if (target === nums[mid]) {
        return idx + mid;
    }

    if (target < nums[mid]) {
        return binarySearch(nums.slice(0, mid), target, idx);
    } else if (target > nums[mid]) {
        return binarySearch(nums.slice(mid), target, idx + mid);
    }
};

// var binarySearch = function(nums, target, idx) {
//     let mid = Math.floor(nums.length / 2);
//     console.log(`nums:${nums} mid = index:${mid} value:${nums[mid]} idx: ${idx}`)
//     if (nums.length === 1 && nums[0] != target) {
//         return -1;
//     } else if (target === nums[mid]) {
//         return mid + idx;
//     } else if (target === nums[0]) {
//         return 0 + idx;
//     } else if (target === nums[nums.length -1]) {
//         return nums.length - 1 + idx;
//     }

//     const first = nums[0]
//     const last = nums[nums.length -1]
//     const middle = nums[mid]

//     const isLeftAscending = middle > first // deciding that only one side is ascending
//     const isInAscending = isLeftAscending ? 
//         (target <= middle && first <= target) : (target <= last && middle <= target)

//     const shouldCheckFirstHalf = (isLeftAscending && isInAscending) || (!isLeftAscending && !isInAscending)
//     if (shouldCheckFirstHalf) {
//         return binarySearch(nums.slice(0, mid), target, idx + 0);
//     } else {
//         return binarySearch(nums.slice(mid), target, idx + mid);
//     }
// }

console.log(searchInsert([1,3,5], 5))
