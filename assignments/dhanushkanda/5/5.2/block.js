const {createReadStream} = require('fs')
const express = require('express')
const app = express()
const port = 8002

app.get('/', (req, res) => {
  res.set('X-CS595s22-movie', '96')
  res.set('X-CS595s22-musicartist', 'A.R.Rahman')
  res.set('X-CS595s22-tvseries', 'Witcher') 
  res.send("<html><title>Skanda's Page 5.2</title><h1>Welcome to my page!<br></h1>Skanda Siva, CS 495/595 - Spring 2022, ODU</html>")
})

app.listen(port, () => {
  console.log(`Block server listens at http://localhost:${port}`)
})

app.use(express.static('files'))