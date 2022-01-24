const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

function callback(error, output) {
    if (error) return console.error(error)
    for(let i = 0; i < output.length; i++) {
        if (path.extname(output[i]) == ext) {
            console.log(output[i])
        }
    }
}

fs.readdir(folder, callback)