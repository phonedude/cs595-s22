var fs = require('fs')
var path = require('path')

const dir = process.argv[2]
const ext = process.argv[3]

fs.readdir(dir, function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + ext)
      console.log(file)
  })
})