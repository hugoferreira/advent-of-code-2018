const _ = require('../combinators')

const input = require('fs').readFileSync('src/3/input.txt').toString().split('\n')
const data = _.toIntArray(input.map(l => l.match(/\d+/g)))

const fill = (s) => _.range(s[2], s[4] + s[2]).flatMap(y =>
                    _.range(s[1], s[3] + s[1]).map(x => [x, y]))

const solution = _.pipe(_.flatMap(fill),
                        _.group,
                        _.values,
                        _.map(_.size),
                        _.countBy(p => p >= 2))(data)

console.log(solution.true) // 331089
