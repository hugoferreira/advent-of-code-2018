const readFileSync = require('fs').readFileSync
const _ = require('lodash/fp')

const input = readFileSync('src/3/input.txt').toString().split('\n')
const data = _.fromPairs(input.map(line => {
    const [ id, left, top, width, height ] = line.match(/\d+/g).map(x => +x) // thank you, javascript -_-'
    return [ id, { left, top, width, height } ]
}))

const fill = (s) => _.range(s.top, s.height + s.top).flatMap(y =>
                    _.range(s.left, s.width + s.left).map(x => [x, y]))

const grid = _.pipe(_.flatMap(fill),
                    _.groupBy(_.identity),
                    _.mapValues(_.size),
                    _.toPairs)(data)

console.debug(_.countBy(p => p[1] >= 2)(grid))
