const express = require('express');
const { fstat } = require('fs');
const path = require('path')
const app = express();
const port = 5000;
const fs = require('fs')

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port)
console.log('HTTP Server started at http://localhost:' + port);
