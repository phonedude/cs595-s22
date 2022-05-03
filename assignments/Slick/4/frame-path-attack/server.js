const express = require('express');
const app = express();
const path = require('path');
var fs = require('fs');
const cookieParser = require('cookie-parser'); // in order to read cookie sent from client


const router = express.Router();
// Form here:https://codeforgeek.com/render-html-file-expressjs/
function serveFrame(url){
    var htmlDoc = '<!DOCTYPE html>'+ '<html><head></head><body><br><iframe src=http://' +url+' style="height:200px;width:300px" title="Iframe Example"></iframe></body></html>';
    return htmlDoc;
};
function buildHtml() {
    var header = 'header';
    var body = 'body';
    var data = fs.readFileSync('RSLIC001@ODU.EDU');
    // concatenate header string
    // concatenate body string
    var fNames = data.toString().split("\n");
    var htmlDoc = '<!DOCTYPE html>'+ '<html><head></head><body><br>';//; +fNames + '</body></html>';
    for(file in fNames)
    {
        
        //htmlDoc += '<a href="http://127.0.0.1:3000/render_frame?url="'+ fNames[file] +'"></a><br>';
        htmlDoc += "<a href='"+"http://127.0.0.1:3000/render_frame?url="+ fNames[file] +"'>" + fNames[file]+"</a><br>";
    }
    htmlDoc += '</body></html>';
    console.log("[INFO] Leaving build html.");
    return htmlDoc;
  };
// Try this: http://127.0.0.1:3000/?keyword=great-white

router.get('/',function(req,res){
    //res.send(req.query.url) // "great-white"
    console.log("[INFO] Request recieved.");
    res.send( buildHtml() );
    console.log("[INFO] Request sent.");

});

router.get('/render_frame',function(req,res){
    var URL = req.query.url.toString(); // "great-white"
    console.log("[INFO] Render frame recieved.");
    //res.send(serveFrame(URL));
    res.sendFile(path.join(__dirname+'/sites/iframe_template.html'));
});

router.get('/blink182',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/blink182.html'));
});

router.get('/knoxville',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/knoxville.html'));
});
router.get('/bigdandthekidstable',function(req,res){
    res.sendFile(__dirname+'/sites/bigdandthekidstable.html');
});
router.get('/harrypotter',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/harrypotter.html'));
});
router.get('/dummy-site',function(req,res){
    res.cookie('username', 'johnsnow', {path: '/' });
    res.sendFile(path.join(__dirname+'/sites/dummy-site.html'));
});
router.get('/frame-path',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/frame-path.html'));
});
//add the router
app.use(express.static('public'))
app.use('/', router);
var publicDir = require('path').join(__dirname,'/sites');
app.use(express.static(publicDir));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');