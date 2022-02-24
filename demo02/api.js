const express = require('express');
const req = require('express/lib/request');
const app = express() ; /* khoi tao */

const hostname = 'localhost';
const port = 3004;

app.get('/',(req,res) =>{
    res.status(200).end('GET: get data')
})
app.post('/',(q,s)=>{
    s.status(200).end('POST : create new')
})
app.put('/',(req,res) =>{
    res.status(200).end('PUT : update object')
})
app.delete('/',(req,res)=>{
    res.status(200).end('DELETE : delete object')
})
app.listen(port , hostname , ()=>{
    console.log(`Server express is running http://${hostname}:${port}`);
})