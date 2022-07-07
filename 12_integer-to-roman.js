/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // const values = {        
    //     'M': 1000,
    //     'D': 500,
    //     'C': 100,
    //     'L': 50,
    //     'X': 10,
    //     'V': 5,
    //     'I': 1,
    // }

    const romans = [
        { symbol: 'M', value: 1000},
        { symbol: 'D', value: 500},
        { symbol: 'C', value: 100},
        { symbol: 'L', value: 50},
        { symbol: 'X', value: 10},
        { symbol: 'V', value: 5},
        { symbol: 'I', value: 1},
    ]

    let str = '';
    let num2 = num;

    romans.forEach((roman, idx) => {
        const a = Math.floor(num2 / roman.value)
        const b = num2 % roman.value

        if (a) {
            num2 = num2 - a * roman.value
            if (a === 4) {
                if (str.slice(-1) === romans[idx-1].symbol) {
                    str = str.slice(0, -1) + romans[idx].symbol + romans[idx-2].symbol
                } else {
                    str = str + romans[idx].symbol + romans[idx-1].symbol
                }
            } else {
                str = str + roman.symbol.repeat(a)
            }
        }
    });
    console.log(str)
    return str    
};

intToRoman(1994) // 59