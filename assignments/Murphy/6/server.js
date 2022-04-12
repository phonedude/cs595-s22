const express = require('express')
const fs = require('fs')
const port1 = '4000'
const app1 = express()
const md5 = require('md5')
//const navigator = require('navigatorJS')
var json = 'test.json'
//Fingerprint setup
//https://www.npmjs.com/package/express-fingerprint

function fingerPrinting(data_1, data_2, data_3){
    data_final = data_1 + data_2 + data_3
    data_hash = md5(data_final)
    return(data_hash)
}

function printLog(data_1, data_2, data_3, data_4){
    console.log('User-Agent: ' + data_1)
    console.log('Accept: ' + data_2)
    console.log('Accept-Language: ' + data_3)
    console.log('Hash: ' + data_4 + '\n')
}

// Write data to file
const storeData = (data, path) => {
    try {
        if (fs.existsSync(json))
            fs.appendFile("test.json", '\n'+JSON.stringify(data)+',', function(err){
                if (err) throw err
            })
        else
            fs.writeFileSync(path, JSON.stringify(data)+',')
    } catch(err) {
        console.error(err)
    }
}

// Load data from file
const loadData = (path) => {
    try {
        return fs.readFileSync(path, 'utf8')
    } catch(err) {
        console.error(err)
        return false
    }
}
//Static Files
app1.use(express.static('public'))
app1.use('imgs', express.static(__dirname + 'public/imgs'))

//Set Views
app1.set('views', './views')
app1.set('view engine', 'ejs')

//Get pages
app1.get('/', (req, res) => {
    data_hash = fingerPrinting(JSON.stringify(req.headers['user-agent']), 
                               JSON.stringify(req.headers['accept']), 
                               JSON.stringify(req.headers['accept-language']))

    printLog(JSON.stringify(req.headers['user-agent']), 
             JSON.stringify(req.headers['accept']), 
             JSON.stringify(req.headers['accept-language']),
             data_hash)

    var ua = JSON.stringify(req.headers['user-agent'])
    var ac = JSON.stringify(req.headers['accept'])
    var al = JSON.stringify(req.headers['accept-language'])
    storeData('hash: ' + data_hash, json)
    storeData('User-Agent: ' + ua, json)
    storeData('Accept: ' + ac, json)
    storeData('Accept-Language: ' + al, json)

    var hash = data_hash
    res.render('homepage', {hash:hash})
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

//Listening for specified host and port
app1.listen(port1)