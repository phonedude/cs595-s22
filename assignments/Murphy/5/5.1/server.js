const express = require('express')
const port1 = '4000'
const port2 = '5000'
const app1 = express()
const app2 = express()

//Cross-Origin Request Allowance
//comment out lines 9 - 15 to block CORS requests

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:5000")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
}
app1.use(allowCrossDomain)

//Static Files
app1.use(express.static('api'))

//Set Views
app1.set('views', './views')
app1.set('view engine', 'ejs')

app2.set('views', './views')
app2.set('view engine', 'ejs')

//Get pages
app1.get('/', (req, res) => {
    res.render('homepage')
})

app1.get('/sample.json', (req, res) => {
    res.json('sample')
})

app2.get('/', (req, res) => {
    res.render('homepage_5000')
})

//Listening for specified host and port
app1.listen(port1)
app2.listen(port2)