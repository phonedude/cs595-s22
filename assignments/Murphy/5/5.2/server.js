const express = require('express')
const port1 = '4000'
const port2 = '5000'
const app1 = express()
const app2 = express()

//Cross-Origin Request Allowance
//comment out lines 9 - 15 to block CORS requests

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-CS595s22-gold, X-CS595s22-star_wars, X-CS595s22-ratm')
    res.header('Access-Control-Expose-Headers', 'Content-Type, X-CS595s22-gold, X-CS595s22-star_wars, X-CS595s22-ratm')
    next()
}
app1.use(allowCrossDomain)


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
    res.append('X-CS595s22-ratm', 'Rage Against the Machine')
    res.render('rage-against-the-machine')
})

app1.get('/pokemon-gold', (req, res) => {
    res.append('X-CS595s22-gold', 'Pokemon Gold Version')
    res.render('pokemon-gold')
})

app1.get('/star-wars-rogue-one', (req, res) => {
    res.append('X-CS595s22-star_wars', 'Star Wars Rogue One')
    res.render('star-wars-rogue-one')
})

app2.get('/', (req, res) => {
    res.render('homepage_5000')
})

//Listening for specified host and port
app1.listen(port1)
app2.listen(port2)