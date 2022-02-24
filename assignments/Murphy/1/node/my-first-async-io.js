const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function callback(err, contents) {
  if (err){ throw err
  }
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
