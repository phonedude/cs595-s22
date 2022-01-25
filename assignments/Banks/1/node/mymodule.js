const fs = require('fs');
var path = require('path')

module.exports = function(dirName, ext, callback){
    fs.readdir(dirName, function (err, list){
       if (err) return callback(err);
       let filteredList = [];
       list.forEach(
           function f(item){
               if (path.extname(item).replace('.','') == ext){ filteredList.push(item); }
            })
    callback(null, filteredList);
           }
    )
}


