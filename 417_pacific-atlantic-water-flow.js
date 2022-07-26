/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const canReach = []
    const canReachMap = {}

    const rowLength = heights.length
    const columnLength = heights[0].length


    const checkBfsPath = (a, b) => {
        // we have to check originate cell and compare
        // if its just less than originator, we dont need to compare. cause can't navigate to origin
        const queue = [[a, b]]
        const reachedMap = {}

        let isPacificReached = false
        let isAtlanticReached = false

        while (queue.length > 0 && !(isPacificReached && isAtlanticReached)) {
            const [i, j] = queue.pop()
            reachedMap[`${i}_${j}`] = true
            // TODO check each 4 squares if its already in canReachMap

            if (i - 1 >= 0) { // checking top
                if (heights[i][j] >= heights[i-1][j] && !reachedMap[`${i-1}_${j}`]) {
                    queue.push([i-1, j])
                }
            } else {
                isPacificReached = true
            }

            if (j - 1 >= 0) { // checking left
                if (heights[i][j] >= heights[i][j-1] && !reachedMap[`${i}_${j-1}`]) {
                    queue.push([i, j-1])
                }
            } else {
                isPacificReached = true
            }

            // TODO: IF ATLANIC REACHED DO WE NEED TO CHECK!
            if (i + 1 < rowLength) { // checking down
                if (heights[i][j] >= heights[i+1][j] && !reachedMap[`${i+1}_${j}`]) {
                    queue.push([i+1, j])
                }
            } else {
                isAtlanticReached = true
            }

            if (j + 1 < columnLength) { //checking right
                if (heights[i][j] >= heights[i][j+1] && !reachedMap[`${i}_${j+1}`]) {
                    queue.push([i, j+1])
                }
            } else {
                isAtlanticReached = true
            }
        }

        return isPacificReached && isAtlanticReached
    }


    // const checkDfsPath = (i, j) => {
    //     let isPacificReached = false
    //     let isAtlanticReached = false 
    //     const dfs = (i, j) => {
    //     }
    //     return isPacificReached && isAtlanticReached
    // }

    for(let i=0; i < rowLength; i++) {
        for (let j=0; j < columnLength; j++) {
            const reachable = checkBfsPath(i, j)
            if (reachable) {
                canReach.push([i, j])
                canReachMap[`${i}_${j}`] // TODO Memorize and use already reachable cordinates
            }
        }
    }




    return canReach
};


console.log(
    pacificAtlantic(
        [
            [1,2,2,3,5],
            [3,2,3,4,4],
            [2,4,5,3,1],
            [6,7,1,4,5],
            [5,1,1,2,4]
        ]
    )
)
