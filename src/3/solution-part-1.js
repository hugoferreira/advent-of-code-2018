const _ = require('lodash/fp')

const input = require('fs').readFileSync('src/3/input.txt').toString().split('\n')
const data = input.map(l => l.match(/\d+/g).map(x => parseInt(x, 10)))

const fill = (s) => _.range(s[2], s[4] + s[2]).flatMap(y =>
                    _.range(s[1], s[3] + s[1]).map(x => [x, y]))

const solution = _.pipe(_.flatMap(fill),
                        _.groupBy(_.identity),
                        _.values,
                        _.map(_.size),
                        _.countBy(p => p >= 2))(data)

console.debug(solution.true)
