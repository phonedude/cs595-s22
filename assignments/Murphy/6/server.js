const express = require('express')
//const res = require('express/lib/response')
//const { json } = require('express/lib/response')
const fs = require('fs')
const port1 = '4000'
const app1 = express()
const md5 = require('md5')
//const navigator = require('navigatorJS')
var csv = 'test.csv'
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
const storeData = (data_1, data_2, data_3, data_4, path) => {
    try {
        // Store data parameters into string variable
        var str = JSON.stringify(data_1) + "," + 
                  JSON.stringify(data_2) + "," + 
                  JSON.stringify(data_3) + "," + 
                  JSON.stringify(data_4) + 
                  '\n'
        // Remove double quotes and backslash added in writing process
        var res = str.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
            res = res.toString()
            res = res.replace(/\\/g, '')
            res = res.replaceAll('""', '"')
        // if statement to check if csv file exists. 
        // if it does not, create it and save string to file.
        if (fs.existsSync(csv))
            fs.appendFile("test.csv", (res), function(err){
                if (err) throw err
            })
        else
            fs.writeFileSync(path, 'hash, user-agent, accept, accept-langauge\n' + res, json)
    } catch(err) {
        console.error(err)
    }
}
/*
// Load data from file
const loadData = (path) => {
    try {
        return fs.readFileSync(path, 'utf8')
    } catch(err) {
        console.error(err)
        return false
    }
}
*/
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
    /*
    storeData(data_hash + ',', csv)
    storeData(ua + ',', csv)
    storeData(ac + ',', csv)
    storeData("\n", csv)
    storeData(al + '\n', csv)
    */
   storeData(data_hash, ua, ac, al, csv)

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