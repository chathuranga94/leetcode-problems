/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // 2 1 1
    // 1 1 0        1,1 => 0,1   1,0   2,1   1,2 => (1+-1, 1+-1)
    // 0 1 1

    let rotten = []
    let fresh = []

    for(let i=0; i < grid.length; i++) {
        for (let j=0; j < grid[i].length; j++) {
            const orange = grid[i][j]
            if (orange === 2) {
                rotten.push(`${i}_${j}`)
            }
            if (orange === 1) {
                fresh.push(`${i}_${j}`)
            }
        }
    }
    // console.log(rotten)
    // console.log(fresh)
    // console.log(`while loop`)


    let time = 0
    while (rotten.length > 0 && fresh.length > 0) {
        let newRotten = []
        let newRottenIdx = []

        for(let i=0; i < rotten.length; i++) {
            if (i === 0) {
                newRotten = []
                newRottenIdx = []
            }

            const rotten_place = rotten[i].split("_")
            const x = parseInt(rotten_place[0])
            const y = parseInt(rotten_place[1])


            const adjacent_places = [`${x-1}_${y}`, `${x+1}_${y}`, `${x}_${y-1}`, `${x}_${y+1}`]
            // console.log(`adjacent for ${x}_${y} is ${JSON.stringify(adjacent_places)}`)

            fresh.map((a, idx) => {
                if (adjacent_places.includes(a)) {
                    newRottenIdx.push(idx) // remove from fresh
                    if ( !newRotten.includes(a)) { // if not in new rotten add to ir
                        newRotten.push(a)
                    }
                }
            })
        }

        rotten = [...newRotten] // all prev rotten processed hence make it empty and add new rottens
        fresh = fresh.filter((val, idx) => newRottenIdx.indexOf(idx) === -1)
        // console.log(`rotten now ${JSON.stringify(rotten)}`)
        // console.log(`fresh now ${JSON.stringify(fresh)}`)
        

        time++
        // console.log(`============================= time: ${time}`)
    }

    if (fresh.length > 0) {
        return -1
    }

    return time
};


console.log(
    // orangesRotting([[2,1,1],[1,1,0],[0,1,1]])
    // orangesRotting([0,2])
    orangesRotting([[2,1,1],[0,1,1],[1,0,1]])
)