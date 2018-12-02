const readFileSync = require('fs').readFileSync

const f = readFileSync('src/1/input.txt')
const listOfFrequencies = f.toString().split('\n').map(i => parseInt(i))

function* infiniteFrequencies() {
    while(true) for(const h of listOfFrequencies) yield h
}

const s = new Set([0])
let currentFrequency = 0

for (const h of infiniteFrequencies()) {
    currentFrequency += h

    if (s.has(currentFrequency)) break
    else s.add(currentFrequency)
}

console.debug(currentFrequency)
console.debug(`We tested ${s.size} different frequencies`)
console.debug('done')