const net = require('net');
const server = net.createServer(function (socket){
    let dt = new Date();
    //dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() + " " 
    let time = dt.toISOString().slice(0,10) + " " + dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).replace(" AM", "").replace(" PM", "") + "\n";
    socket.end(time)
})


server.listen(process.argv[2]);
