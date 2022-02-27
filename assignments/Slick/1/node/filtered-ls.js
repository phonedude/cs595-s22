const fs = require('fs');
// directory
const dir = process.argv[2]
// extension
const ext = process.argv[3]
const path = require('path')
//obtain a path object and connect with user spec dir
var dirPath = path.resolve(dir); // path to your directory goes here
var filesList;
// Async directory piping
// From here: https://stackoverflow.com/questions/44199883/how-do-i-get-a-list-of-files-with-specific-file-extension-using-node-js
fs.readdir(dirPath, function(err, files){
    // filter for specified type 
    filesList = files.filter(function(e){
    // normalize casing and check for extension
    return path.extname(e).toLowerCase() === '.' + ext
  });
    // iterate through filtered file list
    for (var i = 0; i < filesList.length; i++)
    {
        //print file one at a time
        console.log(filesList[i]);
    }
});