const fs = require('fs')

function finishedReading(error, output) {
    if (error) return console.error(error)
    const lines = output.split("\n")
    console.log(lines.length - 1)
}
  
fs.readFile(process.argv[2], 'utf-8', finishedReading)