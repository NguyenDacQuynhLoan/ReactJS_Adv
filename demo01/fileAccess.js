const http = require('http');
const fs = require('fs');

 const hostname = 'localhost';
 const port = 3001;

 const filePath = __dirname + '/page.html';
 const server = http.createServer((req,res) => {
     const fileContent = fs.readFileSync(filePath,'utf-8');
     res.writeHeader = (200, { 'Content-type' : 'text/html'});
     res.sendDate(fileContent);
});
 server.listen(port, hostname , ()=>{
     console.log(`Server running at http://${hostname}:${port}`);
 })
