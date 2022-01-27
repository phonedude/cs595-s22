const filter = require('./mymodule')

const folder = process.argv[2]
const ext = process.argv[3]

filter(folder, ext, function(error, results) {
    if (error) {
        return console.error('error:', error);
    }

    results.forEach(function (file) {
        console.log(file)
    })
});