const express = require('express')
const {createReadStream} = require('fs')
const app = express()
const port = 8002

app.get('/', (req, res) => {
  res.append('Set-Cookie', 'login=IAmIronMan; Path=/')
  res.send("<html><title>Victim Page</title><br><br>Demonstration on how the Path attribute alone is not sufficient<br><script>document.write(document.cookie)</script></html>")
})

app.listen(port, () => {
  console.log(`Victim listens at http://localhost:${port}`)
})