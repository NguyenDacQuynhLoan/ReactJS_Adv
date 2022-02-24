const express = require('express')
const app = express() ; /* khoi tao */

const hostname = 'localhost';
const port = 3002;

app.get('/',(req,res) =>{
    res.send('hello world')
})
app.listen(port , hostname , ()=>{
    console.log(`Server express is running http://${hostname}:${port}`);
})