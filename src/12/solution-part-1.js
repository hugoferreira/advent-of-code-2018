const _ = require('../combinators.js')

const input = require('fs').readFileSync('src/12/example.txt').toString().split('\n')
// const data = input.map(line => line.match(/-?\d+/g).map(x => parseInt(x)))

const rules = _.drop(2)(input).map(r => [_.take(5)(r.replace(/\./g, ' ')), _.nth(9)(r.replace(/\./g, ' '))])

let state = _.first(input).match(/initial state: ([\.#]+)/)[1].replace(/\./g, ' ')
let iter = 0
let rightMostIndex = 0

while (iter < 7) {
    iter += 1
    state = '    ' + state + '    ' // pad
    let newState = []
    _.range(2, state.length - 2).forEach(i => {
        const cells = _.slice(i - 2, i + 3)(state)
        let toInsert
        for (const [match, res] of rules) {
            if (_.every(p => p[0] === p[1])(_.zip(match, cells))) {
                toInsert = res
            }
        }

        if (toInsert !== undefined && i == 3) rightMostIndex -= 1
        newState.push(toInsert || ' ')
    })

    state = newState.join('').trim()
}

state //?
rightMostIndex //?

//console.log(_.sum(_.toArray(state).map((e, ix) => (e == '#') ? ix + rightMostIndex : 0)))
