var net = require('net')
var strftime = require('strftime')

var portNumber = process.argv[2]
var portNumber = Number(portNumber)
var data = strftime('%Y-%m-%d %H:%M')

var server = net.createServer(function(socket) {
    socket.write(data)
    socket.write('\n')
    socket.end()
})

server.listen(portNumber)