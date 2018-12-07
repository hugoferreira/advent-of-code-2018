const _ = require('lodash/fp')

const input  = require('fs').readFileSync('src/2/input.txt').toString().split('\n')
const freqs  = input.map(_.pipe(_.groupBy(_.identity), _.map(_.size)))
const twos   = _.countBy(_.contains(2))(freqs).true
const threes = _.countBy(_.contains(3))(freqs).true

console.debug(twos * threes)