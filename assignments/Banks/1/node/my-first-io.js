const fs = require('fs');

let file = fs.readFileSync(process.argv[2]);
let data = file.toString();
let substrings = data.split('\n');
let newlineCount = substrings.length - 1;
console.log(newlineCount);
