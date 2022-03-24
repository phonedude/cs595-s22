const express = require('express')
const port1 = '4000'
const port2 = '5000'
const app1 = express()
const app2 = express()

//Cross-Origin Request Allowance
//comment out lines 9 - 15 to block CORS requests
/*
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:5000")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type')
    next()
}
app1.use(allowCrossDomain)
*/
//Static Files
app1.use(express.static('api'))
app1.use(express.static('public'))
app1.use('imgs', express.static(__dirname + 'public/imgs'))

//Set Views
app1.set('views', './views')
app1.set('view engine', 'ejs')

app2.set('views_2', './views_2')
app2.set('view engine', 'ejs')

//Get pages
app1.get('/', (req, res) => {
    res.render('homepage')
})

app1.get('/sample.json', (req, res) => {
    res.json('sample')
})

app1.get('/rage-against-the-machine', (req, res) => {
    res.render('rage-against-the-machine')
})

app1.get('/pokemon-gold', (req, res) => {
    res.render('pokemon-gold')
})

app1.get('/star-wars-rogue-one', (req, res) => {
    res.render('star-wars-rogue-one')
})

app2.get('/', (req, res) => {
    res.render('homepage_5000')
})

//Listening for specified host and port
app1.listen(port1)
app2.listen(port2)