const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer(function(request, response) {
    const stream = fs.createReadStream(file);
    stream.pipe(response);
});
server.listen(port);