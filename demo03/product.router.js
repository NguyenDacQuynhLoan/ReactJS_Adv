const express = require('express');
const router = express.Router();
const app = express();

const data = require('./data.json');


app.use(router)
//end-point
app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.status(200).end("Hello World")
})
app.get('/:id',(req,res)=>{
    const id = req.params['id']
    const result = data.find(item => item.id == id)
    res.setHeader('Content-Type','application/json')
    res.status(200).send(JSON.stringify(result))
})
app.get('/category/:cate',(req,res)=>{
    const cate = req.params['cate'];
    const result = data.filter(item => item.category == cate)
    res.setHeader('Content-Type','application/json')
    res.status(200).send(JSON.stringify(result))
})

module.exports = router;
