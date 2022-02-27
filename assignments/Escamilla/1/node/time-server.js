const net = require('net')

const port = process.argv[2]

function zeroFill(i) {
    if (i < 10) {
        i = '0' + i.toString()
    }
    return i
}

const server = net.createServer(function listener(socket) {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    data = year + '-' + zeroFill(month) + '-' + zeroFill(day) + ' ' + zeroFill(hour) + ":" + zeroFill(minute) + "\n"
    socket.end(data)
})
server.listen(port)