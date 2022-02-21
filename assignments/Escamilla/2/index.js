const express = require('express')
const path = require('path')
const favicon = require('serve-favicon');
const app = express()
const port = 4000

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

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