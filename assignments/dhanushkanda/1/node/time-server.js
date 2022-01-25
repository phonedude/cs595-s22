const net = require('net')  

var strftime = require('strftime')

const port = process.argv[2]

const server = net.createServer(function (socket) {  

const d = new Date()

data = strftime('%F %R\n', d)
  
socket.end(data)
}
)  

server.listen(port)  
