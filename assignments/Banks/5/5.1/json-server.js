const express = require('express');
const { fstat } = require('fs');
const path = require('path')
const app = express();
const port = 4000;
const fs = require('fs')

rawData = fs.readFileSync(path.join(__dirname, "stuff.json"));
let data = JSON.parse(rawData);

app.get('/getInfo', function (req, res){
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
})

app.get('/getInfo2', function (req, res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000')
    res.json(data);
})




app.listen(port);
console.log('HTTP Server started at http://localhost:' + port);