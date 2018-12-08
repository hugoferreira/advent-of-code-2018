const _ = require('../combinators.js')

const data = _.toIntArray(require('fs').readFileSync('src/8/input.txt').toString().split(' '))

function readData(ix) {
    const childs = _.nth(ix)(data)
    const mdSize = _.nth(ix + 1)(data)

    const [newIx, cmd] = _.reduce(acc =>
        _.mapValue(_.cons(acc[1]))(readData(acc[0]))
    )([ix + 2, []])(_.range(0, childs))

    const md = _.takeAt(newIx, mdSize)(data)

    return [newIx + mdSize,
           (childs > 0) ? md.reduce((acc, e) => acc + ((e > childs) ? 0 : cmd[e - 1]), 0) : _.sum(md)]
}

console.log(readData(0)[1]) // 13935