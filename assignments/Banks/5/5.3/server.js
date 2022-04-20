const express = require('express');
const { fstat } = require('fs');
const path = require('path')
const app = express();
const port = 4000;
const fs = require('fs')

app.get('/', function (req, res){
    // Disallows everything, so the iframe in index.html should not load
    res.setHeader('Content-Security-Policy', 'default-src none');
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port)