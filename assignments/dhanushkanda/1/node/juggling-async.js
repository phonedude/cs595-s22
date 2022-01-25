const http = require('http')
const bl = require('bl') 

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var results = []

let count = 0
    
function printResults (){
	for (let i = 0; i < 3; i++) {
	console.log(results[i])
	}
}

function getContent (i,urlList) {
	http.get(urlList[i], function (resp) {
	resp.pipe(bl(function (err, data) {
  	if (err) {
        return console.log(err)
  	}

  	results[i] = data.toString()
  	count = count+1
  if (count === 3) {
    printResults()
  }
}
)
)
}
)
}

for (let i = 0; i < 3; i++) {
let url_list = [url1,url2,url3]

getContent(i,url_list)
}