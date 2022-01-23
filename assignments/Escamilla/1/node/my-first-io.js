const fs = require('fs')

const buf = fs.readFileSync(process.argv[2])
const lines = buf.toString().split("\n")
console.log(lines.length - 1)