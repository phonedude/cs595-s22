var express = require('express');
var POSTS = {
    '1':{'post':'This is the first blog post'}
};
var SERVER_PORT = 9999;
var serverapp = express();
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
    console.log('Started client at http://127.0.0.1:'+CLIENT_PORT);
});