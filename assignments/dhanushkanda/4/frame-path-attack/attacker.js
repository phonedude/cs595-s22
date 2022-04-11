const express = require('express')
const {createReadStream} = require('fs')
const app = express()
const port = 8001

app.get('/', (req, res) => {
  createReadStream('files/html/cookie.html').pipe(res)
})

app.listen(port, () => {
  console.log(`Attacker listens at http://localhost:${port}`)
})

app.use(express.static('files'))