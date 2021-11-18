require("dotenv").config()
const mongodb=require("mongoose")

const url =process.env.URL
mongodb.connect(url,{useNewUrlParser:true})
const con=mongodb.connection

module.exports=con



