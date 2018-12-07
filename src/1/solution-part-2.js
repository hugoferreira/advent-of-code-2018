const fs = require('fs').readFileSync('src/1/input.txt').toString().split('\n').map(i => parseInt(i))

function* inffs() { while (true) for (const h of fs) yield h }

function solve() {
    const s = new Set([0])
    let f = 0

    for (const h of inffs()) {
        f += h

        if (s.has(f)) return f
        s.add(f)
    }
}

console.debug(solve())