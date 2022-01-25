const http = require('http');
const fs   = require('fs');
const map  = require('through2-map');
const port = process.argv[2];

const server = http.createServer(function(request, response) {
    console.log(request.body);
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});
server.listen(port);