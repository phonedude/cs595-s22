const fs = require('fs')
let x = fs.readFileSync(process.argv[2]);
const str = x.toString();
const arrsub = str.split('\n')

console.log(arrsub.length-1);