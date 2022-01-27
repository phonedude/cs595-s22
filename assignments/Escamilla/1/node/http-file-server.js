const fs = require('fs')
const http = require('http')

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'})
    var src = fs.createReadStream(file)
    src.pipe(res)
})

server.listen(port)