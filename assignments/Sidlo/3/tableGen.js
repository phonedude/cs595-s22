const fs = require("fs");

let links = fs.readFileSync('workingLinks.txt', 'utf8').split('\n');
let statuscode = fs.readFileSync('statuscode.txt', 'utf8').split('\n');
let setcookie = fs.readFileSync('setcookie.txt', 'utf8').split('\n');
let httponly = fs.readFileSync('httponly.txt', 'utf8').split('\n');
let secure = fs.readFileSync('secure.txt', 'utf8').split('\n');
let samesite = fs.readFileSync('samesite.txt', 'utf8').split('\n');
let strict = fs.readFileSync('strict.txt', 'utf8').split('\n');
let lax = fs.readFileSync('lax.txt', 'utf8').split('\n');
let none = fs.readFileSync('none.txt', 'utf8').split('\n');
let path = fs.readFileSync('path.txt', 'utf8').split('\n');
let pathset = fs.readFileSync('pathset.txt', 'utf8').split('\n');

let table = fs.createWriteStream('table.txt')

table.write('|Site|Status Code|Cookies|HttpOnly|Secure|SameSite|Strict|Lax|None|Path=/|Path=/[other]|\n')
table.write('|----|-----------|-------|--------|------|--------|------|---|----|------|-------------|\n')

for (let i = 0; i < 95; i++) {
    table.write('|'+ links[i] +'|'+ statuscode[i] +'|'+ setcookie[i] +'|'+ httponly[i] +'|'+ secure[i] +'|'+ samesite[i] +'|'+ strict[i] +'|'+ lax[i] +'|'+ none[i] +'|'+ path[i] +'|'+ pathset[i] +'|\n')
}

let mincookie = Math.min.apply(null, setcookie)
table.write('\n* Cookie count Min: ' + mincookie + '\n')

let maxcookie = Math.max.apply(null, setcookie)
table.write('* Cookie count Max: ' + maxcookie + '\n')

let total = 0;
for(let j = 0; j < 95; j++) {
    total += parseInt(setcookie[j])
}

let avgcookie = total/95
table.write('* Cookie count Mean: ' + avgcookie + '\n')

let setcookiesort = setcookie.sort();
let mid = Math.ceil(setcookie.length/2)

let median = (parseInt(setcookiesort[mid]) + parseInt(setcookiesort[mid - 1])) / 2
table.write('* Cookie count Median: ' + median + '\n')
