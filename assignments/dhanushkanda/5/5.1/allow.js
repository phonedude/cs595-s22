const {createReadStream} = require('fs')
const express = require('express')
const app = express()
const port = 8002

var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  createReadStream('files/fav.json').pipe(res)
})

app.listen(port, () => {
  console.log(`Allow server listens at http://localhost:${port}`)
})

app.use(express.static('files'))