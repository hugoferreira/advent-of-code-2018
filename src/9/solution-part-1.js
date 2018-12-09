const _ = require('lodash/fp')

Number.prototype.mod = function (n) { return ((this % n) + n) % n }

const input = require('fs').readFileSync('src/9/input.txt').toString()
const [players, lastMarble] = input.match(/\d+/g).map(x => parseInt(x, 10))

const scores = Array(players).fill(0)
const marbles = [0]
let player = 0
let marble = 1
let current = 0

while (marble <= lastMarble) {
    if ((marble % 23) === 0) {
        current = (current - 7).mod(marbles.length)
        scores[player] += marble + marbles[current]
        marbles.splice(current, 1)
    } else {
        current = (current + 2).mod(marbles.length)
        marbles.splice(current, 0, marble)
    }

    player = ((player + 1) % players)
    marble += 1
}

console.log(_.max(scores)) // 412127