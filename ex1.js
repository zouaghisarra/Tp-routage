const { read } = require('fs');
const http = require('http')
const url = require('url')
const server=http.createServer((req,res)=>{
    const obj_url = url.parse(req.url,true)
    console.log(req.url);
    console.log(obj_url.query);
    console.log(req.method);
   if(req.url=="/"){
        console.log("bonjour tout le monde");
        
    }
    else{
        console.log("bonjour "+obj_url.query.name);
     
    }
    //res.end('done');
    
}).listen(8888)