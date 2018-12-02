import { readFileSync } from 'fs'

const f = readFileSync('src/1/input.txt')

console.debug(f.toString().split('\n').reduce((acc, e) => acc + parseInt(e), 0))
