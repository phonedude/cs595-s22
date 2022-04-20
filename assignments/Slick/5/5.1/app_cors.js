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