const _ = require('../combinators.js')

const input = require('fs').readFileSync('src/10/input.txt').toString().split('\n')
const data = input.map(line => line.match(/-?\d+/g).map(x => parseInt(x)))

const compute = (step) => data.map(p => [p[0] + step * p[2], p[1] + step * p[3]])
const area = (bb) => bb[2] - bb[0] + bb[3] - bb[1]

function bbox(data) {
    let x0 = +Infinity; let x1 = -Infinity
    let y0 = +Infinity; let y1 = -Infinity

    for(const [x, y] of data) {
        if (x < x0) x0 = x; if (x > x1) x1 = x
        if (y < y0) y0 = y; if (y > y1) y1 = y
    }

    return [x0, y0, x1, y1]
}

let lastArea = +Infinity
let counter = 0

do {
    const newArea = area(bbox(compute(counter + 1)))
    if (newArea > lastArea) break
    lastArea = newArea
    counter += 1
} while(true)

console.log(counter) // 10681

const st = compute(counter)
const bb = bbox(st)
const ps = new Set(st.map(_.toString))

_.range(bb[1], bb[3] + 1).forEach(y =>
    console.log(_.range(bb[0], bb[2] + 1)
                 .map(x => ps.has(([x, y]).toString()) ? '#' : ' ')
                 .join(''))
)