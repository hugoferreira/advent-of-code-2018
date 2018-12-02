const _ = require('lodash/fp')
const readFileSync = require('fs').readFileSync

const data = readFileSync('src/1/input.txt').toString().split('\n').map(i => parseInt(i))

console.debug(_.sum(data))
