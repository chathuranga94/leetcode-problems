/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp
    for (let i = 0; i < s.length/2; i++) {
        console.log(`${s[i]} and ${s[s.length - 1 - i]}`)
        temp = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = temp
    }
    return s
};

console.log(
    reverseString(["1","2","3","4","5"])
)
