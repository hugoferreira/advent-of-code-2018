const readFileSync = require('fs').readFileSync
const _ = require('lodash/fp')

const input = readFileSync('src/3/input.txt').toString().split('\n')
const data = input.map(line => {
    const [ id, x0, y0, width, height ] = line.match(/\d+/g).map(x => parseInt(x, 10))
    return { id, x0, y0, x1: x0 + width - 1, y1: y0 + height - 1 }
})

const bbIntersect = (a, b) => !(b.x0 > a.x1 || b.x1 < a.x0 || b.y0 > a.y1 || b.y1 < a.y0)
const dontIntersect = data.filter(a => data.every(b => a.id === b.id || !bbIntersect(a, b)))

console.debug(dontIntersect[0].id)