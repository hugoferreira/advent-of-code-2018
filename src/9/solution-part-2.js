const _ = require('lodash/fp')

const input = require('fs').readFileSync('src/9/input.txt').toString()
const [players, lastMarble] = input.match(/\d+/g).map(x => parseInt(x, 10))
const scores = Array(players).fill(0)

let current = { val: 0, next: undefined, prev: undefined }
let player = 0
let marble = 1
current.next = current.prev = current

const ins = (a, b) => { return a.next.next.prev = a.next.next = b }
const del = (a) => { a.next.prev = a.prev; return a.prev.next = a.next }

while (marble <= lastMarble * 100) {
    if ((marble % 23) === 0) {
        const toDelete = current.prev.prev.prev.prev.prev.prev.prev
        scores[player] += marble + toDelete.val
        current = del(toDelete)
    } else {
        const newVal = { val: marble, next: current.next.next, prev: current.next }
        current = ins(current, newVal)
    }

    player = ((player + 1) % players)
    marble += 1
}

console.log(_.max(scores)) // ​​​​​3482394794​​​​​