const module1 = require('./mymodule.js')
    const folder = process.argv[2]
    const exten = process.argv[3]
    
    module1(folder, exten, function (err, list) {
      if (err) {
        return console.error(err)
      }
    
      list.forEach(function (file) {
        console.log(file)
      })
    })