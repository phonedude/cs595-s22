const mymodule = require('./mymodule.js')
function mycallback(err, list){
    if (err){return console.error(err);}
    else {
        list.forEach(name => console.log(name));
    }
}

mymodule(process.argv[2], process.argv[3], mycallback);
