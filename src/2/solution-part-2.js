const _ = require('lodash/fp')

const input = require('fs').readFileSync('src/2/input.txt').toString().split('\n').map(_.toArray)
const countEquals = _.pipe(_.zip, _.countBy(p => p[0] === p[1]))
const filterEquals = _.pipe(_.zip, _.filter(p => p[0] === p[1]), _.map(_.first))

input.forEach(a => input.forEach(b => {
    if (countEquals(a, b).false == 1)
        console.debug(filterEquals(a, b).join(''))
}))
