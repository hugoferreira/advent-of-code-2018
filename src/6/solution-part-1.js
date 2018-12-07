const _ = require('lodash/fp')

const input = require('fs').readFileSync('src/6/input.txt').toString().split('\n')
const data = input.map(line => line.match(/\d+/g).map(x => parseInt(x, 10)))

const bb = { x0: _.min(data.map(_.first)), y0: _.min(data.map(_.last)),
             x1: _.max(data.map(_.first)), y1: _.max(data.map(_.last)) }

const dist = (x, y) => (p, i) => [i, Math.abs(p[0] - x) + Math.abs(p[1] - y)]

const grid = _.range(bb.y0, bb.y1 + 1).map(y =>
                _.range(bb.x0, bb.x1 + 1).map(x => {
                    const ds = _.sortBy(_.last)(data.map(dist(x, y)))
                    return (ds[0][1] !== ds[1][1]) ? ds[0][0] : -1
                }))

const edges = new Set(_.flatten([_.first, _.last, _.map(_.first), _.map(_.last)].map(f => f(grid)))
                       .map(_.toString))

console.log(_.pipe(_.flatten,
                   _.groupBy(_.identity),
                   _.toPairs,
                   _.reject(p => edges.has(p[0])),
                   _.map(_.pipe(_.last, _.size)),
                   _.max)(grid))
