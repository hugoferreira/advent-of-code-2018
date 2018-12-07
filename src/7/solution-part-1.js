const _ = require('lodash/fp')

const input = require('fs').readFileSync('src/7/input.txt').toString().split('\n')
const regex = / [A-Z] /g
const data = input.map(line => line.match(regex).map(_.trim))

const nodes = _.uniq(_.flatten(data))
let   graph = new Map(nodes.map(e => [e, new Array()]))

data.forEach(e => graph.get(e[1]).push(e[0]))

const nextUnit = () => _.first(_.sortBy(_.identity)(_.reject(k => graph.get(k).length > 0)(_.toArray(graph.keys()))))

const S = [nextUnit()]
const L = []

while (S.length > 0) {
    const n = S.shift()
    graph.delete(n)
    L.push(n)
    graph = new Map(_.map(kvp => [kvp[0], _.reject(v => v === n)(kvp[1])])(_.toPairs(graph)))

    const m = nextUnit()
    if (m !== undefined) S.push(m)
}
               // JMQZELVYXTIGPHFNSOADKWBRUC
L.join('') //?

