const fs = require('fs')

const con = process.argv[2]

fs.readFile(con, function (err, contents){
if (err){
return console.log(err)
}
const lines = contents.toString().split('\n').length-1
console.log(lines)
})
