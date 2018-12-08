const _ = require('../combinators.js')

const data = _.toIntArray(require('fs').readFileSync('src/8/input.txt').toString().split(' '))

let metadata = []

function readData(ix) {
    const childs = _.nth(ix)(data)
    const mdSize = _.nth(ix + 1)(data)
    const newIx  = _.range(0, childs).reduce(readData, ix + 2)

    metadata = _.concat(metadata, _.takeAt(newIx, mdSize)(data))

    return newIx + mdSize
}

readData(0)

console.log(_.sum(metadata)) // 38722