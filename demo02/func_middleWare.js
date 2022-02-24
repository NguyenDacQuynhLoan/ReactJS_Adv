// const express = require("express")
// const app = express();

const { append } = require("express/lib/response");

// const hostname = 'localhost'
// const post ='3002'

// const cookie = require('cookie-parser')

// const  coockie = async ( cookies)=>{
//     try {
//         await externallyValidateCookie(cookie.testCookie)
//     }catch{

//     }
// }
// const requestTimeFunction = (req,res,next)=>{
//     req.requestTime = Date.now();
//     console.log(req.requestTime);
//     next(); //=> middle ware
// }
// const validateCookie = async (req,res,next)=>{
//     await coockieValidator (req.cookies)
//     next();
// }
// app.use(requestTimeFunction)
// app.use ( validateCookie)
// app.get('/',(req,res)=>{
//     res.setHeader('Content-Type','application/json')
//     res.status(200).end('<h1>Loan</h1>')
// })
// app.listen(port , hostname , ()=>{
//     console.log(`Server express is running http://${hostname}:${port}`);
// })

const requestTime = ( req,res) =>{
    res.setHeader('Content-Type',"text/html");
    res.status(200).end('<h1>Heelo</h1>')
}
append.post ('/product',(req,res)=>{
    let data ={
        id:1,
        name:'Loan'
        price:'No Pricee :))'
    }
})