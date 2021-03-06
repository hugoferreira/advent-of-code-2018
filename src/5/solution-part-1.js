const input = require('fs').readFileSync('src/5/input.txt').toString()
const reacts = (a, b) => a.toLowerCase() === b.toLowerCase() && a !== b

function reduce(data) {
    let pivot = 0

    while (pivot !== data.length - 1) {
        if (reacts(data[pivot], data[pivot + 1])) {
            data = data.slice(0, pivot) + data.slice(pivot + 2)
            pivot = Math.max(0, pivot - 1)
        } else pivot += 1
    }

    return data
}

console.log(reduce(input).length)