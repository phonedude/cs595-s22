var http = require("http")
var str = ""

http.get(process.argv[2],function(res){
    res.setEncoding("utf8")
    res.on("data",function(data){
        str+= data

    })

    res.on("end",function(){
        console.log(str.length)
        console.log(str)


    })

})