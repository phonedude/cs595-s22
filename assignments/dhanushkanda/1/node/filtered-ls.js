const fs = require('fs')

const path = require('path')

const path1 = process.argv[2]

const exten = '.' + process.argv[3]

fs.readdir(path1, function (err, contents){
if (err) {
return console.log(err)
}
contents.forEach(function (content){
if (path.extname(content) === exten){
console.log(content)
}
}

)
}

)
