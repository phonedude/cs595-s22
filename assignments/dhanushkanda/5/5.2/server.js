const express = require('express')
const {createReadStream} = require('fs')
const app = express()
const port = 8001

app.get('/', (req, res) => {
  createReadStream('files/main.html').pipe(res)
})

app.listen(port, ()  => {
  console.log(`Main server listens at http://localhost:${port}`)
})

app.use(express.static('files'))