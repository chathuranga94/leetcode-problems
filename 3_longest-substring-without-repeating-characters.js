/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substring = ''
    let maxVal = 0

    for (var i = 0; i < s.length; i++) {
        const char = s.charAt(i)

        if (substring.includes(char)) {
            const lastIndex = substring.lastIndexOf(char)
            substring = substring.slice(lastIndex + 1)
            substring += char
        } else {
            substring += char
            if (substring.length > maxVal) maxVal = substring.length
            console.log(substring)
        }
    }
    return maxVal
};

console.log(
    // lengthOfLongestSubstring("pwwkew")
    // lengthOfLongestSubstring("abca")
    // lengthOfLongestSubstring("bcaa")
    lengthOfLongestSubstring("bcastva")
)