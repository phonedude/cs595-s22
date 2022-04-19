const express = require('express');
const app = express();
const fs = require('fs')
const md5 = require('md5')

const port = 4000;

var clients = [];


app.get('/', function (req, res){
    res.setHeader('Content-Type', 'text/html')

    let headers = [];
    
    headers.push(
        // Push the values of each of these headers onto the headers array
        req.get('Accept'),
        req.get('Accept-Language'),
        req.get('User-Agent'));
    // Concatenate all values of headers into a string
    headersStr = headers.join();
    
    // Use md5 to create a hash of this string
    let fingerprint = md5(headersStr);

    // Checks if this fingerprint has been seen before
    if (clients.includes(fingerprint)){
        console.log("Hey I've seen this guy before!");
        res.send("Hey I've seen you before. This is your fingerprint: " + fingerprint)
    }
    // If not then add this fingerprint to the list
    else {
        clients.push(fingerprint);
        console.log("Oh look, we have a new client.")
        res.send("You must be new. Here's your fingerprint: " + fingerprint);

    }

    console.log("These are their Accept, Accept-Language, and User-Agent headers:");
    headers.forEach(item => console.log(item));
    console.log("Their fingerprint: " + fingerprint + "\n");
})

app.listen(port, '0.0.0.0');
console.log("Server running on localhost:" + port);