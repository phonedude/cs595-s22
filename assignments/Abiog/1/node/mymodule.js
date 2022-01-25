const fs = require('fs');

module.exports = function(dir, ext, mycallback) { 
    fs.readdir(dir, function(err, list){
        if (err) return mycallback(err);

        list = list.filter(file => file.endsWith('.' + ext))

        //return list.filter(file => file.endsWith('.' + ext))

        mycallback(null, list)
    })
}


