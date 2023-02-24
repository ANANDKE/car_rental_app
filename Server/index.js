
//import dataservice from service folder
const dataservice=require('./service/dataservice')

//import cors
const cors =  require('cors') //import cors


//import jsonwebtoken
const jwt=require('jsonwebtoken')


//importing express
const express = require('express')

//create app
const app =  express()

//connect frontend
app.use(cors({origin:'http://localhost:4200'}))

//to convert json to normal
app.use(express.json())

//middle ware for verifying the token
const jwtmiddleware = (req,res,next)=>{
    console.log("....Router specific middlware");
    try{
    const token=req.headers('access-token')
    const data=jwt.verify(token,"secretkey2022")
    console.log(data);
    next() // to exit from middleware after execution
    }
    catch{
        res.status(422).json( {
            statusCode:422,
            status:false,
            message:"please login"
        })
    } 

}

//requests

//register
app.post('/register', (req, res) => {

    dataservice.register(req.body.email,req.body.uname,req.body.pswd).then(result=>{
    res.status(result.statusCode).json(result)
       
    })
})


//login
app.post('/login', (req, res) => {

    dataservice.login(req.body.uname,req.body.pswd).then(result=>{
    res.status(result.statusCode).json(result)
    })
})


// //GET
// app.get('/', (req, res) => {
//     res.send('GET Method checking.......')
// })

// //POST
// app.post('/', (req, res) => {
//     res.send('GET Method checking.......')
// })



//set port

app.listen(3000,()=>{
    console.log('serever started at 3000.....')

})