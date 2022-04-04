## Assignment 5, CS 495/595 Web Security, Spring 2022

Due: 2022-04-04

Points available: 15

For this assignment, you will need to set up two different node servers, running simultaneously on two different ports.

Relevant resources:

* [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
* [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

### CORS: Blocking and reading responses from another origin (5 points)

* Create node.js, HTML, and json files in the directory ```5.1``` that demonstrate Javascript running in one HTML file requesting a .json response from another origin.   

* Keep your json response simple, but make it convey information about your three favorite things from assignment 1.
###### File overview
* [app_cors](5.1/app_cors.js) - Non blocking app using cors
* [app](5.1/app.js) - Blocking app
* [Client.html](5.1/Client.html) - Served to make request for json object and display results
```bash

node app.js # Start both servers
# In broswer go to http://127.0.0.1:1111/Client.html to invoke request to server at port 9999
```
###### [YouTube Demo](https://youtu.be/o43UlmSHqaw)
```node
/* app.js - Begins two servers at http://127.0.0.1:9999 amnd http://127.0.0.1:1111
http://127.0.0.1:9999 - Server that takes requests as at end point /api/posts and serves JSON object, POSTS, below.
http://127.0.0.1:1111 - Server that serves Client.html which makes the request to http://127.0.0.1:9999/api/posts to acquire POSTS json object
Client.html - Driver html cope with inline JS that us served by server at Port 1111 and requests JSON object

Below is the code from app.js which begins both servers and creates the Json object.
*/
var express = require('express');
var POSTS = {
    '1':{'post':'Johnny Knxville is a steely-eyed bad man.'},
    '2':{'post':'Big D and The Kids table were once rad.'},
    '3':{'post':'Harry Potter is it.'}
};
var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(express.static(__dirname));
// This is the JSON server
serverapp.get('/api/posts',function(req,res){
    console.log('Message recieved');
    res.json(POSTS);
});
serverapp.listen(SERVER_PORT, function(){
    console.log('Server started at http://127.0.0.1:'+SERVER_PORT);
});

// This is the server requesting the JSON info from the JSON server
var CLIENT_PORT = 1111;
var clientapp = express();
clientapp.use(express.static(__dirname));
clientapp.listen(CLIENT_PORT, function(){
    console.log('Started client at http://127.0.0.1:'+CLIENT_PORT);
});
```


* Show how the json response from one server is both blocked, and what is necessary to allow the response.
In order to facilitate the cross-origin request, we use the cors package provided by node js. Below us the code that enables CORS. The main distinction is just the usage of cors within the app. The code is encapsulated in app_cors.js.
###### [YouTube Demo](https://youtu.be/yn6Px1Pe_Bo)
```bash
npm install cors
node app_cors.js
```

###### Souce Code for app_cors.js
```node
var express = require('express');
const cors = require('cors');

var POSTS = {
    '1':{'post':'Johnny knoxville is cool.'},
    '2':{'post':'Big D and the kids table is rad.'},
    '3':{'post':'blink182 is timeless!'}
};
var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(cors());
serverapp.use(express.static(__dirname));
serverapp.get('/api/posts',function(req,res){
    console.log('Message recieved');
    res.json(POSTS);
});
serverapp.listen(SERVER_PORT, function(){
    console.log('Server started at http://127.0.0.1:'+SERVER_PORT);
});
var CLIENT_PORT = 1111;
var clientapp = express();
clientapp.use(express.static(__dirname));
clientapp.listen(CLIENT_PORT, function(){
    console.log('Started client at http://localhost: '+CLIENT_PORT);
});
```


### CORS: Blocking and reading HTTP response headers from another origin (5 points)

* Create another directory ```5.2```; you can modify the files from ```5.1``` for this portion of the assignment if you'd like.

* Demonstrate how three custom HTTP response headers (```X-CS595s21-*```, where ```*``` corresponds to your three favorite things from assignment 1) are both blocked and then allowed by one server.  

###### Overview
* [app_cors.js](5.1/app_cors.js) - Begins two servers at different ports, 1111 and 9999.
* Server at port 9999 enables and and exposes header, X-CS595s22-knoxville. If that header is present, then it will serve the JSON object, POSTS. If it is not present, then it will block and return an error
* Server at port 1111 serves Client.html. Upon loading Client.html, 3 requests are made upon loading with headers: X-CS595s22-knoxville, X-CS595s22-bigdandthekidstabl and X-CS595s22-harrypotter. The results of the request are then programatically loaded onto the Client.html page.
* app_cors.js is listed below.
###### [YouTube Demo](https://youtu.be/pRKTUO9BAcA)
```node 
var express = require('express');
const cors = require('cors');
var allowlist = ['http://example1.com', 'http://example2.com','http://127.0.0.1:1111']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    console.log('In the hall the mountain king',req.header('Origin'));
    console.log((JSON.stringify(req.headers)));
    console.log(req.header("X-CS595s22-knoxville"))

    if (allowlist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }
var POSTS = {
    '1':{'post':'Knoxville is the man.'}
};
var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(cors({ allowedHeaders: ['X-CS595s22-knoxville', 'X-Bar'] ,exposedHeaders: ['X-CS595s22-knoxville', 'X-Bar']}));
//serverapp.use(cors())
serverapp.use(express.static(__dirname));
//serverapp.get('/api/posts',cors(corsOptionsDelegate,{exposedHeaders: ['X-Foo', 'X-Bar'] ,allowedHeaders: ['X-Foo', 'X-Bar'] }),function(req,res){
serverapp.get('/api/posts',cors(corsOptionsDelegate,{exposedHeaders: ['X-CS595s22-knoxville', 'X-Bar'] ,allowedHeaders: ['X-CS595s22-knoxville', 'X-Bar'] }),function(req,res){
    console.log('Message recieved');
    res.json(POSTS);
});
serverapp.listen(SERVER_PORT, function(){
    console.log('Server started at http://127.0.0.1:'+SERVER_PORT);
});
var CLIENT_PORT = 1111;
var clientapp = express();
clientapp.use(express.static(__dirname));
clientapp.listen(CLIENT_PORT, function(){
    console.log('Started client at http://127.0.0.1:'+CLIENT_PORT);
});
```


### Content-Security-Policy: embedding from another site (5 points)

* Find a site from assignment 4 that allowed embedding.  In directory ```5.3```, include the necessary files to demonstrate your local HTML file being allowed to embed the remote site as well as your local server prohibiting the embedding. Rest of code is straightforward.

We expiriment with the headers package from node and the inline script below to prevent framing of the site at port 3000 into port 5000.
```node
if (window !== top) top.location = window.location;
```
###### File overview
[ServerLocal.js](5.3/ServerLocal.js) - Serves local.html
[local.html](5.3/local.html) - attempts to embed the site served at port 3000 which has the framed external site
[EmbedServer.js](5.3/EmbedServer.js) - Serves Server.html 
[Server.html](5.3/Server.html) - Frames android.com (Our selected site)

###### [YouTube Demo](https://youtu.be/XimYUWZBXlI)


### Extra credit (6 points)

* Repeat the excercises in ```5.1```, ```5.2```, ```5.3``` but with one set of files served from [GitHub Pages](https://pages.github.com/).   Store any new files in ```5.4```.

### Setting up directory "5"

All of the code, files, images, etc. necessary to complete this assignment will be in directory ```5```.  The README.md for this assignment will have links to the pages, a short description of what each file does, screenshots of requests being blocked and allowed, as well as links to Youtube videos (one video for each of ```5.1```, ```5.2```, ```5.3```, and optionally ```5.4```) demonstrating the reading and blocking.  

