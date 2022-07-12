/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const usedNums = {}

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const value = board[i][j]
            if (value === '.') continue

            const currentRowName = `row_${i}`
            const currentRow = usedNums[currentRowName]
            if (currentRow && currentRow.includes(value)) {
                return false
            } else {
                usedNums[currentRowName] = (currentRow || '') + value
            }

            const currentColumnName = `column_${j}`
            const currentColumn = usedNums[currentColumnName]
            if (currentColumn && currentColumn.includes(value)) {
                return false
            } else {
                usedNums[currentColumnName] = (currentColumn || '') + value
            }


            const currentSquareName = `square_${Math.ceil((i+1)/3)}_${Math.ceil((j+1)/3)}`
            const currentSquare = usedNums[currentSquareName]
            if (currentSquare && currentSquare.includes(value)) {
                return false
            } else {
                usedNums[currentSquareName] = (currentSquare || '') + value
            }        
        }
    }
    return true
};


console.log(isValidSudoku([
    ["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]))