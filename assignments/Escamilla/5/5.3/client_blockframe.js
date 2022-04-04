const express = require('express')
const path = require('path')
const app = express()

const port = 8080;

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "frame-src 'self'")
    return next();
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client.html'))
})

app.listen(port)
