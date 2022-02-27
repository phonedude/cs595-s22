const http = require('http');
const map = require('through2-map');
const fs = require('fs');


function callback(req, res){
    if (req.method == 'POST'){
        req.pipe(map(function (chunk){
          return chunk.toString().toUpperCase();})).pipe(res);

    }

}



const server = http.createServer(callback);
server.listen(process.argv[2]);
