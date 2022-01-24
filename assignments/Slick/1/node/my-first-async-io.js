// Include fs module
const fs = require('fs');
// instantiate counter w/ scope unnecesarily
var counter = undefined 
// async function
function countNewlines(filepath) {
    //readfile - async file read
    // fileContents will hold fbuffer
    fs.readFile(filepath, function doneReading(err, fileContents) {
        // load contents from buffer by splitting into array by newline
        // then uyse length of the list to det. counter
        counter = (fileContents.toString().split('\n')).length-1;
        //displYAY
        console.log(counter);
    })
}
// driver call
countNewlines(process.argv[2])

