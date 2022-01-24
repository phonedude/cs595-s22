var http = require('http');
var fs = require('fs');
//Found on node js: https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/
var port =process.argv[2]
const filelocation = process.argv[3]
http.createServer(function(req, res) {
  // The filename is simple the local directory and tacks on the requested url

  // This line opens the file as a readable stream
  var readStream = fs.createReadStream(filelocation);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });
}).listen(port);