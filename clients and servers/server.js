const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{

    console.log(req.url,req.method);
    //set header content type
    res.setHeader('content-Type','text/html');
    
    //send an html file 
    fs.readFile('./views/index.html');

});

server.listen(3000,'localhost',()=>{
    console.log('listening on request on port 3000');
})