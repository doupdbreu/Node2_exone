const fs = require('fs')

const readFilePromise = path => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, result) => {
        if (err) reject(err)
        else resolve(result)
    })
})

const p = readFilePromise('./data/a')

p
.then(resultA => {
    return readFilePromise('./data/b')
        .then(resultB => {
            return resultA + resultB
        })
})
.then(resultAll => console.log(resultAll))
.catch(err => console.error(err))



Promise.all([
    readFilePromise('./data/a'),
    readFilePromise('./data/b')
])
.then(results => console.log(results))
.catch(err => console.error(err))
