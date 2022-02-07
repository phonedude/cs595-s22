const express = require('express')

const applicatn = express()

const port = 4000

applicatn.get('/', (req, res) => 
              {
  res.send('<!DOCTYPE html><html><head><link rel="icon" href="/images/favicon.ico" type="image/ico" /><link rel="fav icon" href="/rahman.ico" /><title>Welcome!</title></head><body><h1>Hi there! You can learn abit more about me here.</h1><p>Skanda Siva</p><p>Various favorites of mine are listed below,</p><ul><li><a href="/rahman.html">Music Artist</a><li><a href="/96.html">Movie</a><li><a href="/series.html">TV Series</a></ul></body></html>')
              }
             )

applicatn.listen(port, () => 
                 {
                    console.log(`Follow this link to be redirected: http://localhost:${port}`)
                 }
                )

applicatn.use(express.static('files_html'))