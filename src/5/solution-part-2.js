const readFileSync = require('fs').readFileSync
const _ = require('lodash/fp')

const input = readFileSync('src/5/input.txt').toString()
const reacts = (a, b) => a.toLowerCase() === b.toLowerCase() && a !== b

function reduce(data) {
    let pivot = 0

    while (pivot !== data.length - 1) {
        if (reacts(data[pivot], data[pivot + 1])) {
            data = data.slice(0, pivot) + data.slice(pivot + 2)
            pivot = Math.max(0, pivot - 1)
        } else pivot += 1
    }

    return data.length
}

const lengths = _.toArray('abcdefghijklmnopqrstuvwxyz').map(async unit => {
    const len = reduce(_.reject(l => (l === unit || l === unit.toUpperCase()))(input).join(''))
    console.debug(`Reducing without '${unit}/${unit.toUpperCase()}' results in length ${len}`)
    return len
})

console.debug(`Therefore, ${_.min(lengths)} is the ****ing answer!`)