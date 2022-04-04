const express = require('express')
const port1 = '4000'
const port2 = '5000'
const app1 = express()
const app2 = express()

//Cross-Origin Request Allowance
var allowCrossDomain = function(req, res, next) {
    res.set("Content-Security-Policy", "default-src 'self'")
    next()
}
app1.use(allowCrossDomain)

//Set Views
app1.set('views', './views')
app1.set('view engine', 'ejs')

//Get pages
app1.get('/', (req, res) => {
    res.render('homepage')
})

//Listening for specified host and port
app1.listen(port1)
