const net = require('net');

const port = process.argv[2];
function zerofiller(n) {
    if (n<10)
        return '0' + n;
    return n;
}

const server = net.createServer(function (socket) {
    //socket handling logic
    const date = new Date();
    const year = date.getFullYear();

    let month = zerofiller(date.getMonth()+1);
    let day = zerofiller(date.getDate());
    let hour = zerofiller(date.getHours());
    let min = zerofiller(date.getMinutes());

    const fullDate = year + '-' + month + '-' + day + ' ' + hour + ':' + min;
    socket.end(fullDate + '\n');
})
server.listen(port);