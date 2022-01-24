const fs = require('fs')

let file = fs.readFileSync(process.argv[2])
const str = file.toString()
const newlines = str.split('\n')
let count = newlines.length - 1
console.log(count)
