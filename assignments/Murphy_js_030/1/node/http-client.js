const http = require('http')

url = process.argv[2]

http.get(url, function (response) {
    response.on('data', function (data) {
        console.log(data.toString())
    })
})