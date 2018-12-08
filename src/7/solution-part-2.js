const _ = require('../combinators.js')

const input = require('fs').readFileSync('src/7/input.txt').toString().split('\n')
const regex = / [A-Z] /g
const data = input.map(line => line.match(regex).map(_.trim))
const nworkers = 5

const nodes = _.uniq(_.flatten(data))
const ready = _.pipe(_.rejectValues(v => v.length > 0), _.sortKey, _.keys)
const times = new Map(nodes.map(e => [e, (e.charCodeAt(0) - 65) + 60]))

let deps = nodes.map(e => [e, _.keys(_.filterValues(_.eq(e))(data))])
let work = []
let next = ready(deps)
let step = 0

while (_.isNotEmpty(work) || _.isNotEmpty(next)) {
    const availableWorkers = nworkers - work.length
    work = _.concat(work, _.take(availableWorkers)(next))
    next = _.drop(availableWorkers)(next)

    const [t, f] = _.partition(n => times.get(n) > 0)(work)

    t.forEach(n => times.set(n, times.get(n) - 1))
    f.forEach(n => {
        work = _.reject(_.eq(n))(work)
        deps = _.pipe(_.rejectKeys(_.eq(n)), _.mapValues(_.reject(_.eq(n))))(deps)
        next = _.concat(next, _.reject(u => work.some(_.eq(u)))(ready(deps)))
    })

    step++
}

console.log(step) // 1133