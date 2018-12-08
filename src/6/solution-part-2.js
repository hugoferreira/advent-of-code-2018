const _ = require('../combinators')

const input = require('fs').readFileSync('src/6/input.txt').toString().split('\n')
const data = input.map(line => line.match(/\d+/g).map(x => parseInt(x, 10)))
const threshold = 10000

const [x0, x1] = [_.min, _.max].map(f => f(data.map(_.first)))
const [y0, y1] = [_.min, _.max].map(f => f(data.map(_.last)))

const dist = (x, y) => (p) => Math.abs(p[0] - x) + Math.abs(p[1] - y)
const grid = _.range(y0, y1 + 1).flatMap(y =>
                _.range(x0, x1 + 1).map(x =>
                    _.sum(data.map(dist(x, y))) < threshold))

console.log(_.countBy(_.identity)(grid).true) // 44634