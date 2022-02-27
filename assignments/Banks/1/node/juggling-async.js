const { Buffer } = require('buffer');
var http = require('http');

let count = 0;
let responses = [];
function doStuff(index){


	    http.get(process.argv[index], function (resp){
    let chunks = [];
        resp.on('data', function(data){

            chunks.push(data);
        });

        resp.on('end', () => {
             count++;
             let data;
             data = Buffer.concat(chunks).toString('utf-8');
             responses.push(data);
             if (count == 3){
                 console.log(responses[0]);
                 console.log(responses[1]);
                 console.log(responses[2]);}
        });
    }

)}


for (let i = 2; i < 5; i++){
    doStuff(i);
}
