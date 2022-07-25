/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (i, j) => {
        if (grid[i][j] === '1') {
            grid[i][j] = '0'
            if (i-1 >= 0) { dfs(i-1, j) }
            if (j-1 >= 0) { dfs(i, j-1) }
            if (i+1 < grid.length ) { dfs(i+1, j) }
            if (j+1 < grid[i].length ) { dfs(i, j+1) }
        }
    }

    const bfs = (i, j) => {
        const queue = [[i, j]]

        const appendQueue = (i, j) => {
            if (grid[i][j] === '1') {
                grid[i][j] = '0'
                if (i-1 >= 0 && grid[i-1][j] === '1')
                    queue.push([i-1, j])
                if (j-1 >= 0 && grid[i][j-1] === '1')
                    queue.push([i, j-1])
                if (i+1 < grid.length && grid[i+1][j] === '1')
                    queue.push([i+1, j])
                if (j+1 < grid[i].length && grid[i][j+1] === '1')
                    queue.push([i, j+1])
            }
        }

        while (queue.length > 0) {
            const val = queue.pop()
            appendQueue(val[0], val[1])
        }
    }

    let count = 0
    for (let i=0; i < grid.length; i++) {
        for (let j=0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++
                // dfs(i, j)
                bfs(i,j)
            }
        }
    }
    return count
};

// Time Complexity : O(n^2)
// Space Complexity: O(1)
console.log(
    numIslands([
        // ["1","1","1","1","0"],
        // ["1","1","0","1","0"],
        // ["1","1","0","0","0"],
        // ["0","0","0","0","0"]

        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ])
)