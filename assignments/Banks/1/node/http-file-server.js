const http = require('http');

const fs = require('fs');
var fileLoc = process.argv[3];
function callback(req, res){
    var readStream = fs.createReadStream(fileLoc);
    readStream.on('open', function(){
    readStream.pipe(res);
    });
}



const server = http.createServer(callback);
server.listen(process.argv[2]);
