const express = require('express');
const { fstat } = require('fs');
const path = require('path')
const app = express();
const port = 4000;
const fs = require('fs')

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get('/blockedHeaders', function (req, res){
    res.setHeader('X-CS595s22-Book', 'Gone');
    res.setHeader('X-CS595s22-Show', 'The Magicians');
    res.setHeader('X-CS595s22-Game', 'Apex Legends');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.send("You should not be able to see the custom headers in this response.");
})

app.get('/allowedHeaders', function (req, res){
    res.setHeader('X-CS595s22-Book', 'Gone');
    res.setHeader('X-CS595s22-Show', 'The Magicians');
    res.setHeader('X-CS595s22-Game', 'Apex Legends');
    res.setHeader('Access-Control-Expose-Headers', 'X-CS595s22-Book, X-CS595s22-Show, X-CS595s22-Game')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000')
    res.send("You should be able to see the custom headers in this response.")
})

app.listen(port)
console.log('HTTP Server started at http://localhost:' + port);
