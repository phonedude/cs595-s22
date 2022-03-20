const { timeEnd } = require('console')
var http = require('http')
var url = require('url')

var portNumber = process.argv[2]
portNumber = Number(portNumber)

var parseTime = function (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

var unixTime = function(time){
    return {
        unixtime: time.getTime() 
    }
}

var server = http.createServer(function(request, response) {
    url = url.parse(request.url, true)
    path = url.pathname
    var result
    //console.log(url)
    var date = new Date(url.query.iso)
    if (path === '/api/parsetime') {
        result = parseTime(date)
    }
    else if(path === '/api/unixtime') {
        result = unixTime(date)
    }

    if (result) {
        response.writeHead(200, { 'Content-Type' : 'application/json' })
        response.end(JSON.stringify(result))
    } else {
        response.writeHead(404)
        response.end()
    }
    //console.log(result)
})

server.listen(portNumber)