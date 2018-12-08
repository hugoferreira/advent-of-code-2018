const _ = require('../combinators.js')

const input = require('fs').readFileSync('src/7/input.txt').toString().split('\n')
const regex = / [A-Z] /g
const data = input.map(line => line.match(regex).map(_.trim))

const ready = _.pipe(_.rejectValues(v => v.length > 0), _.sortKey, _.fst, _.fst)

let deps    = _.uniq(_.flatten(data)).map(e => [e, _.keys(_.filterValues(_.eq(e))(data))])
const next  = [ready(deps)]
const order = []

while (_.isNotEmpty(next)) {
    const n = next.shift()
    order.push(n)

    deps = _.pipe(_.rejectKeys(_.eq(n)), _.mapValues(_.reject(_.eq(n))))(deps)

    const m = ready(deps)
    if (m !== undefined) next.push(m)
}

console.log(order.join('')) // JMQZELVYXTIGPHFNSOADKWBRUC
