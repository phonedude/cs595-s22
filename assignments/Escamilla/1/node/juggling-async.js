const http = require('http')
const bl = require('bl')

let urls = []
let output = []
let count = 0

function printResults() {
    for(let i = 0; i < count; i++) {
        console.log(output[i])
    }
}

function makeRequest(url, index) {
    http.get(url, function(response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            output[index] = data.toString()
            count++
            if (count == 3) {
                printResults()
            }
        }))
    });
}

for (let i = 0; i < 3; i++) {
    let url = process.argv[i + 2]
    urls.push(url)
    makeRequest(url, i)
}
