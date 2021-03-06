const input = require('fs').readFileSync('src/3/input.txt').toString().split('\n')
const data = input.map(line => {
    const [ id, x0, y0, width, height ] = line.match(/\d+/g).map(x => parseInt(x, 10))
    return { id, x0, y0, x1: x0 + width - 1, y1: y0 + height - 1 }
})

const disjoint = (a, b) => b.x0 > a.x1 || b.x1 < a.x0 || b.y0 > a.y1 || b.y1 < a.y0
const result = data.filter(a => data.every(b => a.id === b.id || disjoint(a, b)))

console.log(result[0].id) // 625
