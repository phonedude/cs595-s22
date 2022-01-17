const http = require('http')
var map = require('through2-map')

portNumber = process.argv[2]
portNumber = Number(portNumber)

var server = http.createServer(function (request,response) {
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase()
    })).pipe(response)
    //request.pipe(response)
})
//request.pipe(response)
server.listen(portNumber)