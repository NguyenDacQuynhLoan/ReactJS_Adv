const express = require('express');
const req = require('express/lib/request');
const app = express() ; /* khoi tao */

const data = require('./data.json')
const hostname = 'localhost';
const port = 3004;

app.get('/',(req,res)=>{
    res.send('homepage')
})
app.get('/product',(req,res) =>{
    console.log(data);
    res.setHeader('Content-Type','json');
    res.status(200).end(JSON.stringify(data)) //=> String / Text 
})
app.get('/product/getByID',(req,res)=>{
    const id = req.query.id
    res.status(200).end("Product with ID = " + id);
})
app.get('/product/:id',(req,res)=>{
    const id = req.params['id']
    const product =data.find(item => item.id == id)
    res.setHeader('Content-Type','json');
    res.status(200).end(JSON.stringify(product));
})
app.get('/product/search/:from-:to',(req,res)=>{
    const from =  parseInt(req.params['from'])
    const to = parseInt(req.params['to'])
    console.log(from );
    console.log(to );
    const products = data.filter(item => from <= item.price && item.price <= to)
    res.setHeader('Content-Type','json');
    res.status(200).end(JSON.stringify(products));
})
app.listen(port , hostname , ()=>{
    console.log(`Server express is running http://${hostname}:${port}`);
})
