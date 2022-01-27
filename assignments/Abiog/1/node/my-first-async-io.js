
const fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function(err, data){

    const arrsub = data.split('\n');
    console.log(arrsub.length-1);
})

//const arrsub = data.split('\n');
//console.log(arrsub.length-1);