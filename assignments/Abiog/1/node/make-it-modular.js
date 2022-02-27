const mf = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

mf(dir, ext, function(err, list) {
    if (err) return console.error(err)

    list.forEach(file => console.log(file));

});

