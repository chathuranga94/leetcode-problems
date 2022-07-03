/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let common = strs[0]

    for (let i = 1; i < strs.length; i++) {
        const current = strs[i]
        for (var j = 0; j < common.length; j++) {
            if (common[j] !== current[j]) {
                common = common.slice(0, j)
            }
        }
    }

    return common
};

console.log(longestCommonPrefix(["dog","racecar","car"]))