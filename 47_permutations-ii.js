/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length > 2) {
        let permutes = []
        for (let i = 0; i < nums.length; i++) {
            const arr = [...nums]
            arr.splice(i, 1)

            const arrPermute = permuteUniqueRecursive(arr)
            arrPermute.forEach(a => {
                const str = `${a},${nums[i]}`
                if (!permutes.includes(str)) {
                    permutes.push(str)
                }
            })
        }
        return permutes.map(s => {
            return s.split(",").map(ss => parseInt(ss))
        })
    } else if (nums.length === 2) {
        // add to map... memorize
        // had to add another recursive function cause this failes for 1,1 and 1,1,2
        if (nums[0] === nums[1]) return [[nums[0], nums[1]]]
        return [[nums[0], nums[1]], [nums[1], nums[0]]]
    } else if (nums.length === 1) {
        return [nums]
    }
};

var permuteUniqueRecursive = function(nums) {
    if (nums.length > 2) {
        let permutes = []
        for (let i = 0; i < nums.length; i++) {
            const arr = [...nums]
            arr.splice(i, 1)

            const arrPermute = permuteUnique(arr)
            arrPermute.forEach(a => {
                const str = `${a},${nums[i]}`
                if (!permutes.includes(str)) {
                    permutes.push(str)
                }
            })
        }
        return permutes.map(s => {
            return s.split(",").map(ss => parseInt(ss))
        })
    } else if (nums.length === 2) {
        // return [
        //     `${nums[0]},${nums[1]}`,
        //     `${nums[1]},${nums[0]}`,
        // ]
        return [[nums[0], nums[1]], [nums[1], nums[0]]]
    } else if (nums.length === 1) {
        return [nums]
    }
};

console.log(
    permuteUnique([1,1.2,2])
)
