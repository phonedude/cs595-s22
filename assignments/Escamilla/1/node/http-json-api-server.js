const http = require('http')
const url = require('url')

const port = process.argv[2]

function formatDate(iso) {
    var hours = iso.getHours()
    var minutes = iso.getMinutes()
    var seconds = iso.getSeconds()
    return {'hour': hours, 'minute': minutes, 'second': seconds}
}

function formatUnix(unix) {
    return {'unixtime': unix.getTime()}
}

const server = http.createServer(function (req, res) {
    if (req.method != 'GET') {
        return res.end('send me a GET\n')
    }
    
    var u = url.parse(req.url, 'http://example.com')
    res.writeHead(200, {'content-type': 'application/json'})
    var iso = u.query.iso
    var date = new Date(iso)

    if (u.pathname == '/api/parsetime') {
        result = formatDate(date)
    } else if (u.pathname == '/api/unixtime') {
        result = formatUnix(date)
    }

    if (result) {
        return res.end(JSON.stringify(result))
    }
})

server.listen(port)