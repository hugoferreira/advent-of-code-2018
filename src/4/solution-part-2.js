const _ = require('../combinators')

const input = require('fs').readFileSync('src/4/input.txt').toString().split('\n')
const regex = /\[(?<y>\d+)-(?<m>\d+)-(?<d>\d+) (?<hh>\d+):(?<mm>\d+)\] (?<msg>.*)/
const idExp = /Guard #(\d+) begins shift/

const sorted = _.pipe(_.map(line => regex.exec(line).groups),
                      _.sortBy(['y', 'm', 'd', 'hh', 'mm']))(input)

let currentId
let startSleep
let sched = new Map()

for (const e of sorted) {
    if (e.msg.match(idExp)) {
        currentId = idExp.exec(e.msg)[1]
        if (sched.get(currentId) === undefined) sched.set(currentId, new Array(60).fill(0))
    } else if (e.msg === 'falls asleep') {
        startSleep = parseInt(e.mm)
    } else if (e.msg === 'wakes up') {
        const schedId = sched.get(currentId)
        _.range(startSleep, parseInt(e.mm)).forEach(m => schedId[m] += 1)
    }
}

const sleeper = _.maxBy(p => _.max(p[1]))(_.toPairs(sched))
const minute = _.indexOf(_.max(sleeper[1]))(sleeper[1])

console.log(minute * sleeper[0]) // 78452
