const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{

    //console.log(req.url,req.method);
    //set header content type
    res.setHeader('content-Type','text/html');
    let path = './views/';
    switch (req.url) {
        case '/':
            path+='index.html';
            req.statusCode =200;
            break;
        case '/about':
           path+='index.html';
           req.statusCode =200;
           break;

        case '/about-me':
            req.statusCode =301;
            res.setHeader('location','/about');
            res.end();
            break;
        
        default:
            path+='404.html';
            req.statusCode =404;
            break;
    }
    //send an html file 
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
        
    });

});

server.listen(3000,'localhost',()=>{
    console.log('listening on request on port 3000');
})