const express = require('express')
const path = require('path')
const app = express()
const md5 = require('md5');
const fs = require('fs');

const port = 4000

var array = fs.readFileSync(path.join(__dirname, 'fingerprint_log.txt')).toString().split('\n');
var hash_array = [];
if (array[0] != '') {
    for (var i = 0; i < array.length; i++) {
        var log = array[i].split('|');
        hash_array.push(log[3]);
    }
}

app.get('/', (req, res) => {
    var accept = req.headers['accept'];
    var accept_language = req.headers['accept-language'];
    var user_agent = req.headers['user-agent'];
    var hash = md5(accept + accept_language + user_agent);
    var to_log = hash + "|" + accept + "|" + accept_language + "|" + user_agent + "\n";

    var in_log = false;
    var user = hash_array.length + 1;
    
    for (var i = 0; i < hash_array.length; i++) {
        if (hash_array[i] == hash) {
            in_log = true;
            user = i + 1;
        }
    }

    if (in_log) {
        console.log("Hello user " + user.toString());
    } else {
        fs.writeFile(path.join(__dirname, 'fingerprint_log.txt'), to_log, { flag: 'a+' }, err => {
            if (err) {
                console.error(err);
                return
            }
        });
        hash_array.push(hash);
    }

    res.render('home.pug', { "user": user});
})

app.get('/GBBO', (req, res) => {
  res.sendFile(path.join(__dirname, '/gbbo.html'))
})

app.get('/white-collar', (req, res) => {
  res.sendFile(path.join(__dirname, 'white-collar.html'))
})

app.get('/Bull', (req, res) => {
  res.sendFile(path.join(__dirname, 'bull.html'))
})

app.listen(port)
