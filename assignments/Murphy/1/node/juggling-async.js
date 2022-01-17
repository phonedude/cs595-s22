var http = require('http')
var bl = require('bl')
var urls = []
var count = 0

function printUrls () {
    for (var i = 0; i < 3; i++) {
        console.log(urls[i])
    }
}

function getUrls (index) {
    http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
      urls[index] = data.toString()
      count++

      if (count == 3) {
            printUrls()
      }
    }))
    })
}

for (var i = 0; i < 3; i++){
    getUrls(i)
}