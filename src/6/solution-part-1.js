const _ = require('../combinators')

const input = require('fs').readFileSync('src/6/input.txt').toString().split('\n')
const data = input.map(line => line.match(/\d+/g).map(x => parseInt(x, 10)))

const [x0, x1] = [_.min, _.max].map(f => f(data.map(_.first)))
const [y0, y1] = [_.min, _.max].map(f => f(data.map(_.last)))

const dist = (x, y) => (p, i) => [i, Math.abs(p[0] - x) + Math.abs(p[1] - y)]

const grid = _.range(y0, y1 + 1).map(y =>
                _.range(x0, x1 + 1).map(x => {
                    const [[id, a], [__, b]] = _.sortValue(data.map(dist(x, y)))
                    return (a !== b) ? id : -1
                }))

const es = new Set([_.first, _.last, _.keys, _.values].flatMap(f => f(grid)).map(_.toString))

console.log(_.pipe(_.flatten,
                   _.group,
                   _.toPairs,
                   _.reject(p => es.has(p[0])),
                   _.map(_.pipe(_.last, _.size)),
                   _.max)(grid)) // 3722
