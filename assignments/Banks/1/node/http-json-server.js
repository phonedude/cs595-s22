const http = require('http');
const url = require('url');
function callback(req, res){
    if (req.method == 'GET'){
        var path = url.parse(req.url, true).pathname;
        var isoTime = url.parse(req.url, true).query.iso;
        console.log(req.path);
        if (path == '/api/parsetime'){
            console.log("AYYAYAYYA");
            date = new Date(isoTime);
            dateObj = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.
            getSeconds()};
            res.end(JSON.stringify(dateObj));

        }
        if (path == '/api/unixtime'){
            date = new Date(isoTime);
            dateObj = {'unixtime': date.valueOf()};
            res.end(JSON.stringify(dateObj));
        }

    }

}





const server = http.createServer(callback);
server.listen(process.argv[2]);
