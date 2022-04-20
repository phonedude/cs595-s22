const {createReadStream} = require('fs')
const express = require('express')
const app = express()
const port = 8002

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self' https://www.usnews.com/; script-src 'self' 'unsafe-inline'"
  );
  next();
});

app.get('/', (req, res) => {
  createReadStream('files/main.html').pipe(res)
})

app.listen(port, () => {
  console.log(`Allow server listens at http://localhost:${port}`)
})

app.use(express.static('files'))