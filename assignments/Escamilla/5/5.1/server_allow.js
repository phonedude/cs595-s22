const http = require('http')

const port = 8080

const server = http.createServer((req,res)=>{
    console.log("Request made");
    const data = {'Lead Actors': {'Bull': ['Dr. Jason Bull'], 'GBBO': ['Prue Leith', 'Paul Hollywood'], 'White Collar': ['Special Agent Peter Burke', 'Neal Caffrey']}}
    const jsonContent = JSON.stringify(data);
    res.setHeader('Content-Type', 'text/json');

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    
    res.write(jsonContent);
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})