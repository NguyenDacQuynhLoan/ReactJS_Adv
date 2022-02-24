const http = require('http');
const fs = require('fs');

 const hostname = 'localhost';
 const port = 3001;

 const filePath = __dirname + '/data.json';

 const server = http.createServer((req,res) => {
     fs.readFile(filePath,'utf-8',(err,contents)=>{
        if(err !== null)
            console.error('Error 404');
         else {
             res.writeHeader = (200, { 'Content-Type' : 'json'});
             res.end(contents);
         }
     })
});
 server.listen(port, hostname , ()=>{
     console.log(`Server running at http://${hostname}:${port}`);
 })
