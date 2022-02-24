const express = require('express')
const app = express();
const hostname = 'localhost'
const port = '3002'
const log = require('./middle-ware/log.middleware')
//end-point
app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.status(200).end("Hello World")
})
const productRouter = require('./product.router')

app.use('/product',productRouter)

app.listen(port,hostname , () =>{
    console.log(`server is running at http://${hostname}:${port}`);
})