/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var binarySearch = function(nums, target) {
//     console.log(`nums: ${nums} target: ${target}`)
//     let mid = Math.floor(nums.length / 2);
//     if (nums.length === 1 && nums[0] != target) {
//         return false;
//     } else if (target === nums[mid]) {
//         return true;
//     }

//     if (target < nums[mid]) {
//         return search(nums.slice(0, mid), target);
//     } else if (target > nums[mid]) {
//         return search(nums.slice(mid), target);
//     }
// };

var binarySearch = function(nums, target, idx) {
    let mid = Math.floor(nums.length / 2);
    console.log(`nums:${nums} mid = index:${mid} value:${nums[mid]} idx: ${idx}`)
    if (nums.length === 1 && nums[0] != target) {
        return -1;
    } else if (target === nums[mid]) {
        return mid + idx;
    } else if (target === nums[0]) {
        return 0 + idx;
    } else if (target === nums[nums.length -1]) {
        return nums.length - 1 + idx;
    }

    const first = nums[0]
    const last = nums[nums.length -1]
    const middle = nums[mid]

    const isLeftAscending = middle > first // deciding that only one side is ascending
    const isInAscending = isLeftAscending ? 
        (target <= middle && first <= target) : (target <= last && middle <= target)

    const shouldCheckFirstHalf = (isLeftAscending && isInAscending) || (!isLeftAscending && !isInAscending)
    if (shouldCheckFirstHalf) {
        return binarySearch(nums.slice(0, mid), target, idx + 0);
    } else {
        return binarySearch(nums.slice(mid), target, idx + mid);
    }

    /*
    const isFirstHalfAscending = first <= middle;
    const isInFirstHalf =
        (isFirstHalfAscending && first <= target && target <= middle) ||
        (!isFirstHalfAscending && first >= target && target <= middle)

    const isSecondHalfAscending = middle <= last;
    const isInSecondHalf =
            (isSecondHalfAscending && middle <= target && target <= last) ||
            (!isSecondHalfAscending && middle >= target && target <= last)

    if (isInFirstHalf) {
        return binarySearch(nums.slice(0, mid), target, idx + 0);
    } else if (isInSecondHalf) {
        console.log(mid)
        return binarySearch(nums.slice(mid), target, idx + mid);
    } else {
        return -1
    }
    */
}

var search = function(nums, target) {
    return binarySearch(nums, target, 0)
};

console.log(search([2,3,4,5,6,7,8,9,1], 9))
