const _ = require('lodash/fp')

const input = require('fs').readFileSync('src/7/input.txt').toString().split('\n')
const regex = / [A-Z] /g
const data = input.map(line => line.match(regex).map(_.trim))
const workers = 5
const nodes = _.uniq(_.flatten(data))
let   graph = new Map(nodes.map(e => [e, new Array()]))
const times = new Map(nodes.map(e => [e, (e.charCodeAt(0) - 65) + 60]))

data.forEach(e => graph.get(e[1]).push(e[0]))

const nextUnits = () => _.reject(k => graph.get(k).length > 0)(_.toArray(graph.keys()))

const L = new Array()
let W = new Array()
let S = _.sortBy(_.identity)(nextUnits())
let counter = 0

while (W.length > 0 || S.length > 0) {
    const ns = _.take(workers - W.length)(S)
    S = _.drop(workers - W.length)(S)
    W = _.concat(W, ns)

    const [t, f] = _.partition(n => times.get(n) > 0)(W)
    t.forEach(n => times.set(n, times.get(n) - 1))
    f.forEach(n => {
        W = _.reject(s => s === n)(W)
        graph.delete(n)
        L.push(n)
        graph = new Map(_.map(kvp => [kvp[0], _.reject(v => v === n)(kvp[1])])(_.toPairs(graph)))

        const m = _.reject(u => W.some(w => u == w) || L.some(l => u == l) || S.some(l => u == l))(nextUnits())
        if (m.length > 0) S = _.sortBy(_.identity)(_.concat(S, m))
    })

    counter++
}
               // JMQZELVYXTIGPHFNSOADKWBRUC
counter //?