const http = require('http')

const port = 8080

const server = http.createServer((req,res)=>{
    console.log("Request made");
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-CS595s22-Bull', 'Dr. Jason Bull');
    res.setHeader('X-CS595s22-WhiteCollar', 'Special Agent Peter Burke');
    res.setHeader('X-CS595s22-GBBO', 'Paul Hollywood');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    
    res.write("<h1>5.2 Server</h1><p>This page works</p>");
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})