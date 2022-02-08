const { Buffer } = require('buffer');
var http = require('http');
url = process.argv[2];
http.get(url, callback);

function callback (resp){
    let chunks = [];
    //resp.setEncoding('utf-8');
    resp.on('data', function(data){

        chunks.push(data);
    });

    resp.on('end', () => {
         let data;
         data = Buffer.concat(chunks).toString('utf-8');
         console.log(data.length);
         console.log(data);
    });
}

