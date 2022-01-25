const http = require('http')
const bl = require('bl')
let url = 0;
const content = [];

function printContent () {
    for (let i = 0; i < 3; i++)
        console.log(content[i])
}

function getContent (element) {
    http.get(process.argv[2+element], function (response) {
        response.pipe(bl(function(err, data) {
            if (err) return console.error(err)

            content[element] = data.toString();
            url++;

            if (url == 3)
                printContent()
        }))
    })
}



for (let i = 0; i < 3; i++)
    getContent(i)

//printContent();
