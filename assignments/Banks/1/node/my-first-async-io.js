const fs = require('fs');

let file = fs.readFile(process.argv[2], readCallBack);


function readCallBack (err, data){
    if (err == true){
        console.log(err);
    }
    else {
        data = data.toString()
        let substrings = data.split('\n');
        let newlineCount = substrings.length - 1;
        console.log(newlineCount);
    }
}

