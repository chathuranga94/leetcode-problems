/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const occurrenceMap = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (occurrenceMap[num]) {
            occurrenceMap[num] += 1
        } else {
            occurrenceMap[num] = 1
        }
    }
    
    const sortedOccurrences = Object.entries(occurrenceMap).sort((a, b) => {
        return b[1] - a[1];
    });

    const output = []
    for (let i = 0; i < k; i++) {
        output.push(sortedOccurrences[i][0])
    }
    return output
};

console.log(
    topKFrequent([1], 1)
)
