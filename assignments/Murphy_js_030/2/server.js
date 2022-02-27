const express = require('express')
const port = '4000'
const app = express()

//Static Files
app.use(express.static('public'))
app.use('imgs', express.static(__dirname + 'public/imgs'))

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

//Get pages
app.get('/', (req, res) => {
    res.render('homepage')
})

app.get('/rage-against-the-machine', (req, res) => {
    res.render('rage-against-the-machine')
})

app.get('/pokemon-gold', (req, res) => {
    res.render('pokemon-gold')
})

app.get('/star-wars-rogue-one', (req, res) => {
    res.render('star-wars-rogue-one')
})


app.listen(port)