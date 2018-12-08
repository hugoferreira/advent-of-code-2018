const _ = require('../combinators')

const input  = require('fs').readFileSync('src/2/input.txt').toString().split('\n')
const freqs  = input.map(_.histogram)
const twos   = _.countBy(_.contains(2))(freqs).true
const threes = _.countBy(_.contains(3))(freqs).true

console.log(twos * threes) // 7221
