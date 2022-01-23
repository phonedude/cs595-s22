const https = require('http')

async function get_page(url) {
    var str = "";
    return new Promise((resolve) => {
        https.get(url, res => {

            res.setEncoding("utf8")
            res.on("data",function(data){
                str+= data
        
            })
        
            res.on("end",function(){
                //console.log(str.length)
                console.log(str)
        
        
            })
        
        }) 
    })
}

// usage

(async () => await get_page(process.argv[2]))();
(async () => await get_page(process.argv[3]))();
(async () => await get_page(process.argv[4]))();