const http = require('http');
const url  = require('url');

const portNumber = process.argv[2];

function formatDate(date) {
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
}

function formateUnix(date) {
    return {
        unixtime: date.getTime()
    };
}

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    const urlObj = url.parse(req.url, true);
    
    const route = urlObj.pathname;
    const date = new Date(urlObj.query.iso);
    
    if (route == '/api/parsetime') {
        var data = formatDate(date);
    } else if(route == '/api/unixtime') {
        var data = formateUnix(date);
    }
    
    res.end(JSON.stringify(data));
});

server.listen(portNumber);