const http = require('http')

const url = require('url')

const port = process.argv[2]

var path =  {
  "/api/parsetime": function(URL) {
    const date = new Date(URL.query.iso)
    return  {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
            }
                                  }
  ,
  "/api/unixtime": function(URL)  {
    return {unixtime: (new Date(URL.query.iso)).getTime()}
                                  }
            }

server = http.createServer(function(req, res)   {
  URL = url.parse(req.url, true)
  resource = path[URL.pathname]
  if (res)  {
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(resource(URL)))
            }
                                                }
                          )

server.listen(port)
