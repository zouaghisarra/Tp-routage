const http = require('http');
const path = require('path');
const fs = require('fs');
const server=http.createServer((req,res)=>{
    var file_url;
    if(req.url=="/"){
        file_url='home.html';
    }else{
        file_url=req.url;
    }
    var file_path=path.resolve('./public/'+file_url);
   
    fs.exists(file_path,(exists)=>{
        if (!exists){
            res.statusCode=404;
            res.end("cette page n existe pas");
            return;
        }
        res.statusCode=2000;
        fs.createReadStream(file_path).pipe(res);
    })
}).listen(3001)