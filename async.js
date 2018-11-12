const fs = require('fs')


const results = []

const addResult = (index, result) => {
    results[index] = result
    if (results.length === 2) {
        console.log(results[0] + results[1])
    }
}

fs.readFile('./data/a', 'utf8', (error, resultA) => {
    if (error) {
        // TODO
    } else {
        addResult(0, resultA)
    }
})
fs.readFile('./data/b', 'utf8', (error, resultB) => {
    if (error) {
        // TODO
    } else {
        addResult(1, resultB)
    }
})

