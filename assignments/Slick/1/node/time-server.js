const net = require('net')  
const date = new Date();

const server = net.createServer(function (socket) {  
    // socket handling logic  
    var month = date.getMonth()+1
    if (month < 10)
        month = '0'+(month).toString()

    var day = date.getDate().toString()
    if (day < 10)
        day = '0'+(day).toString()

    var year = date.getFullYear().toString()
    var hours = date.getHours().toString()
    var minutes = date.getMinutes().toString()
    datetext = date.toTimeString().split(' ')[0]
    hourMin = datetext.substring(0,datetext.length-3)

    fulldate = year+'-'+month.toString()+'-'+day+' '+hourMin+'\n'

    //socket.write(fulldate)
    socket.end(fulldate)
})  
server.listen(process.argv[2])  
