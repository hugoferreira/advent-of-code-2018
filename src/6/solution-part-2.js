const _ = require('lodash/fp')

const input = require('fs').readFileSync('src/6/input.txt').toString().split('\n')
const data = input.map(line => line.match(/\d+/g).map(x => parseInt(x, 10)))
const threshold = 10000

const bb = { x0: _.min(data.map(_.first)), y0: _.min(data.map(_.last)),
             x1: _.max(data.map(_.first)), y1: _.max(data.map(_.last)) }

const dist = (x, y) => (p) => Math.abs(p[0] - x) + Math.abs(p[1] - y)
const grid = _.range(bb.y0, bb.y1 + 1).map(y =>
                _.range(bb.x0, bb.x1 + 1).map(x =>
                    _.sum(data.map(dist(x, y))) < threshold))

console.debug(_.countBy(_.identity)(_.flatten(grid)).true)
