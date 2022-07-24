/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    console.log(board)
    const zeros = []
    const nowZerosMap = {}

    const cantflip = []
    const nowCantFlipMap = {}

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const val = board[i][j]
            if (val === 'X') continue;

            zeros.push(`${i}_${j}`)
            nowZerosMap[`${i}_${j}`] = true

            if (i-1<0 || i+1>=board.length || j-1<0 || j+1>= board[i].length) {
                cantflip.push(`${i}_${j}`)
                nowCantFlipMap[`${i}_${j}`] = true
            }
        }
    }
    console.log(zeros)
    console.log(cantflip)
    console.log('=============================')

    if (Object.keys(nowCantFlipMap).length === Object.keys(nowZerosMap).length) return board


    while (Object.keys(nowCantFlipMap).length > 0 && Object.keys(nowZerosMap).length > 0) {
        Object.keys(nowCantFlipMap).forEach(currentCantFlip => {
            const [i, j] = currentCantFlip.split("_")
            const adjacents = [`${parseInt(i)-1}_${j}`, `${parseInt(i)+1}_${j}`, `${i}_${parseInt(j)-1}`, `${i}_${parseInt(j)+1}`]

            adjacents.forEach(adjacent => {
                if (nowZerosMap[adjacent] && !cantflip.includes(adjacent)) {
                    // console.log(`adjacent ${adjacent} for `)
                    cantflip.push(adjacent)
                    nowCantFlipMap[adjacent] = true
                    delete nowZerosMap[adjacent]
                }
            })

            delete nowCantFlipMap[currentCantFlip]
        })
    }

    // console.log(nowZerosMap)
    // console.log(nowCantFlipMap)
    // console.log(cantflip)
    // console.log(zeros)

    zeros.filter(zero => !cantflip.includes(zero)).map(zero => {
        const [i, j] = zero.split("_")
        board[parseInt(i)][parseInt(j)] = "X"

    })
    
    return board
};

console.log(
    solve(
        // [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
        // [["X"]]
        [["X","O","X"],["O","X","O"],["X","O","X"]]
        // [["X","X","X","X"],["X","X","O","X"],["X","O","X","X"],["X","O","X","X"]]
    )
)