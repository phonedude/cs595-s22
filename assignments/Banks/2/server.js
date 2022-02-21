const express = require('express');
const path = require('path')
const app = express();
const port = 4000;
const favicon = require('serve-favicon');

app.use(favicon('favicon.png'));

app.get('/the-magicians', function (req, res){
    res.sendFile(path.join(__dirname, 'magicians.html'));
})

app.get('/gone', function (req, res){
    res.sendFile(path.join(__dirname, 'gone.html'));
})

app.get('/apex-legends', function (req, res){
    res.sendFile(path.join(__dirname, 'apex-legends.html'));
})

app.get('/favicon.ico', function(req, res){
    res.setHeader('content-type', 'image/x-icon');
})


app.listen(port);
console.log('HTTP Server started at http://localhost:' + port);