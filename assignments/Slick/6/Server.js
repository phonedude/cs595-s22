const express = require('express')

var Fingerprint = require('@shwao/express-fingerprint')
var ip = require('ip');
var geoIp = require('geoip-lite');
const clc = require('cli-color');
const fs = require('fs');
const path = require('path');

const app = express()
const port = 80;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function generate_site(hash_id)
{
    const hp_data = fs.readFileSync('harrypotter.txt', 'utf8').split('\n');
    const jackass_data = fs.readFileSync('jackass.txt', 'utf8').split('\n');
    const bigd_data = fs.readFileSync('bigdandthekidstable.txt', 'utf8').split('\n');

    var hp_index = getRandomInt(hp_data.length);
    var jackass_index = getRandomInt(jackass_data.length);
    var bigd_index = getRandomInt(bigd_data.length); 

    var para_hp = hp_data[hp_index];
    var para_ass = jackass_data[jackass_index]; // ass... heh-heh
    var para_bd = bigd_data[bigd_index];

    var docheader = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Example</title>
        </head>
        <body>
        <h1>Harry Potter line just for you <3</h1> <p>` +para_hp+'</p>' +'<h1>Jackass Forever!</h1> <p>'+ para_ass+'</p>'+'<h1>Big D</h1><p>'+ para_bd+'</p>';

    var docfooter =`
        </body>
    </html>
    `;
    var htmlDoc = docheader + docfooter;
    var fileName = "/sites/"+hash_id+".html";
    fs.writeFileSync(path.join(__dirname, fileName),htmlDoc);
};
function render_user_page(hash_id)
{
    let rawdata = fs.readFileSync('users.json');
    let users= JSON.parse(rawdata);
    var found = false;
    for(var i = 0; i < users["users"].length; i++)
    {
        if (hash_id == users["users"][i])
        {
            found = true;
        }
    }
    if(found==false)
    {
        console.log("Generating...");
        console.log(found);
        users["users"].push(hash_id);
        let data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);
        // Generate new HTML page
        generate_site(hash_id);
    }
    

}
app.use(Fingerprint([
    // Defaults
Fingerprint.useragent(),
Fingerprint.acceptHeaders(),
Fingerprint.geoIp(),
Fingerprint.ip(),
Fingerprint.dnt(),

// Additional parameters
function(next) {
    // ...do something...
    next(null,{
    'param1':'value1'
    })
},
function(next) {
    // ...do something...
    next(null,{
    'param2':'value2'
    })
},
]));
 
app.get('/',function(req,res,next) {
    // Fingerprint object
    console.log(clc.green("[Unique User ID] ")+req.fingerprint.hash);
    console.log(clc.green("[Browser] ")+ JSON.stringify(req.fingerprint.components.useragent.browser));
    console.log(clc.green("[Device type] ")+ JSON.stringify(req.fingerprint.components.useragent.device));
    console.log(clc.green("[Operating system] ")+JSON.stringify(req.fingerprint.components.useragent.os));
    console.log(clc.green("[IP Address] ")+ip.address());
    //var geo = geoIp.lookup(ip.address());
    //console.log(geo);
    console.log(clc.green("[User-Agent] "),req.headers['user-agent']);
    console.log(clc.green("[Accept Headers] "),req.headers['accept']);
    console.log(clc.green("[(Non LAN connections only) Geo ip] ")+JSON.stringify(req.fingerprint.components.geoip));

    render_user_page(req.fingerprint.hash);
    fileName = '/sites/'+req.fingerprint.hash +'.html'
    res.sendFile(path.join(__dirname, fileName));
})
console.log( ip.address() );

app.listen(port,ip.address() ,() => {
    console.log(`Example app listening on port ${port}`)
  })