// Include fs module
const fs = require('fs');
// counter to track total '\n' occurences
var counter = 0;
// Convert file into string: synchronous file open, return buffer, conv to string
const data = fs.readFileSync(process.argv[2], {encoding:'utf8', flag:'r'}).toString();
// iterate through string
for (var i = 0; i < data.length; i++)
{
    //check if char is newline
    if (data.charAt(i) == '\n')
    {
        //incremenet counter
        counter += 1;
    }
}
//displYAY
console.log(counter);
