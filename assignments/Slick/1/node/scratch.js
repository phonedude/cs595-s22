const fs = require('fs');
function foo (folder) {
    return new Promise(function(resolve, reject) {
        fs.readdir(folder, function(err, filenames){
            if (err) 
                reject(err); 
            else 
                resolve(filenames);
        });
    });
};

foo('.')
.then((files) => console.log(files+'hey'))
.catch((error) => console.log(error));