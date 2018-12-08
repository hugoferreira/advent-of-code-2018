const _ = require('../combinators')

const input = require('fs').readFileSync('src/2/input.txt').toString().split('\n').map(_.toArray)
const countEquals = _.pipe(_.zip, _.countBy(_.tupleId))
const filterEquals = _.pipe(_.zip, _.filter(_.tupleId), _.firsts)

input.forEach(a => input.forEach(b => {
    if (countEquals(a, b).false == 1)
        console.log(filterEquals(a, b).join('')) // ​​​​​mkcdflathzwsvjxrevymbdpoq​​​​​
}))
