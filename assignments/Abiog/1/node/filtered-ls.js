const fs = require('fs')
fs.readdir(process.argv[2], function(err, list){
    if (err)
        console.log(err);

    const filtered = list.filter(docu => docu.endsWith('.' + process.argv[3]))

    for (let i = 0; i < filtered.length; i++)
        console.log(filtered[i])
})