var port = process.argv[2]
// Node.js: HTTP SERVER Handling GET and POST Request 
// Show HTML Form at GET request.
// At POST Request: Grab form data and display them.
// Get Complete Source Code from Pabbly.com
// https://www.pabbly.com/tutorials/node-js-http-server-handling-get-and-post-request/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.method === "POST") {
    
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body.toUpperCase());
        });
    }

}).listen(port);