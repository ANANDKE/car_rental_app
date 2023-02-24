//server mongodb integration

//1.import mongoose

const mongoose=require('mongoose')

//2.state connection string via mongoose

mongoose.connect('mongodb://localhost:27017/carServer',{useNewUrlParser:true})

//3.define a car database model

const User = mongoose.model('User',{
    uname: String,
    email: String,
    pswd: String
})

//4.export the schema to use in another files

module.exports={
    User
}