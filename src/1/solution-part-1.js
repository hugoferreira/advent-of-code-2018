const data = require('fs').readFileSync('src/1/input.txt').toString().split('\n').map(i => parseInt(i))

console.log(data.reduce((a, e) => a + e)) // 569
