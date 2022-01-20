const http = require('http')
const URL = require('url').URL

const port = process.argv[2]

function convertISOTimeToJson(url) {
    const date = new Date(url.searchParams.get('iso'))

    if ('/api/parsetime' === url.pathname) {
        return { 
            'hour': date.getHours(), 
            'minute': date.getMinutes(), 
            'second': date.getSeconds()
        }
    }

    if ('/api/unixtime' === url.pathname) {
        return { 
            'unixtime': date.getTime()
        }
    }
}

const server = http.createServer((request, response) => {
    const url = new URL(`${request.scheme}://${request.host}${request.url}`)
    const time = convertISOTimeToJson(url)

    if ('GET' === request.method && time) {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(JSON.stringify(time))
    } else {
        response.writeHead(404)
    }

    response.end()
})

server.listen(port)