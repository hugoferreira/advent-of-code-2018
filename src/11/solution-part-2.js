const _ = require('../combinators.js')

const input = 9798

const power = (x, y) => Math.floor((((x + 10) * y + input) * (x + 10) / 100) % 10) - 5
const cells = _.range(0, 300).map(y => _.range(0, 300).map(x => power(x, y)))

const powrs = (s) => _.flatten(_.range(0, 300 - s).map(y => _.range(0, 300 - s).map(x =>
                     _.sum(_.flatten(_.range(y, y+s).map(a => cells[a].slice(x, x + s)))))))

const test = _.range(0, 20).map(s => {
    const all = _.flatten(powrs(s))
    const max = _.max(all)
    const ix = _.findIndex(_.eq(max))(all)

    return [max, `${ix % (300-s)},${Math.floor(ix / (300-s))},${s}`]
})

console.log(_.maxBy(_.first)(test))