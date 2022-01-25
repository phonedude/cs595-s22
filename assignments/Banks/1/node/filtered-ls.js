const fs = require('fs');
var path = require('path')
function finishedReaddir(err, list){
    if (err == true){ console.log(error)}
    else {
         let filteredList = [];
         list.forEach(function f(item){
                 if (path.extname(item).replace('.','') == process.argv[3]){filteredList.push(item)}
                 })
         for (let i = 0; i < filteredList.length; i++){
             console.log(filteredList[i]);
             }
         }
}
fs.readdir(process.argv[2], finishedReaddir);

