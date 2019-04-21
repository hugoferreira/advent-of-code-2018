const _ = require('../combinators.js')

const input = 9798

const power = (x, y) => Math.floor((((x + 10) * y + input) * (x + 10) / 100) % 10) - 5
const cells = _.range(0, 300).map(y => _.range(0, 300).map(x => power(x, y)))

const powrs = _.flatten(_.range(0, 297).map(y => _.range(0, 297).map(x =>
    cells[y + 0][x + 0] + cells[y + 0][x + 1] + cells[y + 0][x + 2] +
    cells[y + 1][x + 0] + cells[y + 1][x + 1] + cells[y + 1][x + 2] +
    cells[y + 2][x + 0] + cells[y + 2][x + 1] + cells[y + 2][x + 2])))

const all = _.flatten(powrs)
const max = _.max(all)
const ix = _.findIndex(_.eq(max))(all) //?

console.log(`${ix % 297},${Math.floor(ix / 297)}`)
