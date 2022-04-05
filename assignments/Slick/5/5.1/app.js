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