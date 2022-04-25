const express = require('express')
//const res = require('express/lib/response')
const { json } = require('express/lib/response')
const fs = require('fs')
const port1 = '4000'
const app1 = express()
const md5 = require('md5')
var csv = 'test.csv'

// Fingerprinting based on Res.Headers
// Takes in three header parameters, concatenates them together, hashes
// the combined variable, and returns it
function fingerPrinting(data_1, data_2, data_3){
    data_final = data_1 + data_2 + data_3
    data_hash = md5(data_final)
    return(data_hash)
}

// Prints out user-agent, accept, and accept-language headers, as well as 
// the hash value created in the fingerPrinting() function.
function printLog(data_1, data_2, data_3, data_4){
    console.log('User-Agent: ' + data_1)
    console.log('Accept: ' + data_2)
    console.log('Accept-Language: ' + data_3)
    console.log('Hash: ' + data_4 + '\n')
}

// Checks if file 'test.csv' exists.
// If it does not, it creates it.
function checkForFile(path){
    if (!fs.existsSync(csv))
        fs.writeFileSync(path, 'hash', json)
}
// Write data to file only if the value is unique.
var storeData = (data_1, path, array) => {
    try {
        // Store data parameters into string variable
        /*
        var str = JSON.stringify(data_1) + "," + 
                  JSON.stringify(data_2) + "," + 
                  JSON.stringify(data_3) + "," + 
                  JSON.stringify(data_4) + 
                  '\n'
        */
        var hash = JSON.stringify(data_1) 
        // Remove double quotes and backslash added in writing process
        var res = hash
            res = res.toString()
            res = res.replace(/\\/g, '')
            res = res.replaceAll('""', '"')
            res = res.replaceAll('"', '')

        if (!array.includes(data_1)) {
            fs.appendFile(path, '\n' + (res), function(err){
                if (err) throw err
            })
        }  
    } catch(err) {
        console.error(err)
    }
}

// Reads 'test.csv' into variable and returns it
function readData(){
    var data = fs.readFileSync('test.csv', 'utf8').toString().split("\n")
    return(data)
}

//Static Files
app1.use(express.static('public'))
app1.use('imgs', express.static(__dirname + 'public/imgs'))

//Set Views
app1.set('views', './views')
app1.set('view engine', 'ejs')

//Get pages
app1.get('/', (req, res) => {
    var ua = JSON.stringify(req.headers['user-agent'])
    var ac = JSON.stringify(req.headers['accept'])
    var al = JSON.stringify(req.headers['accept-language'])
    
    hash = fingerPrinting(ua, ac, al)

    printLog(ua, ac, al, hash)

    checkForFile(csv)
    hashArray = readData()
    res.render('homepage', {data: {hash:hash, hashArray:hashArray}})
    storeData(hash, csv, hashArray)
    
    console.log(hashArray)
    
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