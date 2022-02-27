    const fs = require('fs')
    const path = require('path')
    
    module.exports = function (folder, exten, callback) {
      fs.readdir(folder, function (err, lst) {
        if (err) {
          return callback(err)
        }    
        lst = lst.filter(function (file) {
          return path.extname(file) === '.' + exten
        }
       )  
        callback(null, lst)
      }
     )
    }

