const http = require('http')

const url = process.argv[2]
http.get(url, function(response) {
    response.setEncoding('utf-8').on('data', function (data) {
        console.log(data)
    })
})