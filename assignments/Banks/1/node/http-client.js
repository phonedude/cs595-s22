var http = require('http');
url = process.argv[2];
http.get(url, callback);

function callback (resp){
resp.setEncoding('utf-8');
    resp.on('data', function(data){

        console.log(data);
    });
}
