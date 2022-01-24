const http = require('http')

const bl = require('bl')

const url = process.argv[2]

http.get(url, function(resp){
  
  resp.pipe(bl(function (err, data){
    if (err){
      return console.log(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }
              ))
}
         
        )