const fs = require('fs')
const path = require('path')

module.exports = function(folder, ext, callback) {
    fs.readdir(folder, function(error, output) {
        if (error) {
            return callback(error);
        }
        const e = '.' + ext
        const results = []
        for(let i = 0; i < output.length; i++) {
            if (path.extname(output[i]) == e) {
                results.push(output[i])
            }
        }
        return callback(null, results)
    })
}