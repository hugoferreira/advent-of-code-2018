const readFileSync = require('fs').readFileSync
const _ = require('lodash/fp')

const input = readFileSync('input.05').toString()
const reacts = (a, b) => b !== undefined && a.toLowerCase() === b.toLowerCase() && a !== b
const slide = (window) => (a) => _.zip(_.toArray(a))(_.drop(window)(a))

function reduce(data) {
    do {
        const pivot = _.findIndex(p => reacts(p[0], p[1]))(data)
        if (pivot == -1) {
            break
        } else if (pivot > 0) {
            data.splice(pivot - 1, 3, [data[(pivot - 1)][0], data[(pivot + 1)][1]])
        } else {
            data.splice(pivot, 2)
        }
    } while (true)

    return data.length
}

const minima = _.min(_.toArray('abcdefghijklmnopqrstuvwxyz').map(unit => {
    console.debug(`Reducing ${unit}`)
    return reduce(slide(1)(_.reject(l => (l === unit || l === unit.toUpperCase()))(input)))
}))

console.debug(minima)