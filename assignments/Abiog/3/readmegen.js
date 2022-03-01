const fs = require("fs");

let urls = fs.readFileSync('urls.txt', 'utf8').split('\n');
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

let readme = fs.createWriteStream('README.md')

readme.write('## Assignment 3, CS 495/595 Web Security, Spring 2022\n')
readme.write('This assignment shows a report displaying cookie practices for 100 of the Mozilla top 500 web sites.\n')
readme.write('### Specifications:\n')
readme.write('* [GetHttpResponse.sh](GetHttpResponse.sh) was used to get each url\'s http response.\n')
readme.write('* [GetTableData.sh](GetTableData.sh) was used to get status code and cookie info from each url.\n')
readme.write('* [readmegen.js](readmegen.js) was used to generate the README file with the table.\n')
readme.write('* 3 urls gave no response:\n')
readme.write('  * alicdn.com\n')
readme.write('  * ggpht.com\n')
readme.write('  * googleusercontent.com\n\n')

readme.write('|Site|Status Code|Cookies|HttpOnly|Secure|SameSite|Strict|Lax|None|Path=/|Path=/[other]|\n')
readme.write('|----|-----------|-------|--------|------|--------|------|---|----|------|-------------|\n')

for (let i = 0; i < 97; i++) {
    readme.write('|'+ urls[i] +'|'+ statuscode[i] +'|'+ setcookie[i] +'|'+ httponly[i] +'|'+ secure[i] +'|'+ samesite[i] +'|'+ strict[i] +'|'+ lax[i] +'|'+ none[i] +'|'+ path[i] +'|'+ pathset[i] +'|\n')
}

let mincookie = Math.min.apply(null, setcookie)
readme.write('\n* Cookie count Min: ' + mincookie + '\n')

let maxcookie = Math.max.apply(null, setcookie)
readme.write('* Cookie count Max: ' + maxcookie + '\n')

let total = 0;
for(let j = 0; j < setcookie.length; j++) {
    total += parseInt(setcookie[j])
}

let avgcookie = total/setcookie.length
readme.write('* Cookie count Mean: ' + avgcookie + '\n')

let setcookiesort = setcookie.sort();
let mid = Math.ceil(setcookie.length/2)

let median = (parseInt(setcookiesort[mid]) + parseInt(setcookiesort[mid - 1])) / 2
readme.write('* Cookie count Median: ' + median + '\n')

readme.write('### Extra Credit\n')
readme.write('The title of the slide \'It\'s turtles all the way down...\' is from the mythological belief that the world is resting on top of a giant turtle. It was first believed to be used in an 1854 transcript of remarks by preacher Joseph Frederick Berg according to Wikipedia and it was used in the context of wondering if the giant turtle is standing on another turtle and so on hence the saying \'It\'s turtles all the way down\'. The specific slide from the lecture was talking about having a framing chain where a website embeds a website embedding that website so in a way it is the same idea.')