const http = require('http')
var fs = require('fs')

var portNumber = process.argv[2]
portNumber = Number(portNumber)

var fileContent = process.argv[3]

const server = http.createServer(function (request,response) {
    response.writeHead(200, {'content-type': 'text/plain'})
    fs.createReadStream(fileContent).pipe(response)
})
server.listen(portNumber)
