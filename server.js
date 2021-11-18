require("dotenv").config()
const express=require("express")
const app=express()
const port=process.env.PORT

const router= require('./routes/index')

const db=require("./connection/db")
app.use(express.json())
app.use("/",router)

db.on('open',(err)=>{
    if(err){
        console.log(err);
    }console.log("connected..DB");
})

app.listen(port,()=>{
    console.log(`your app is running on PORT :${port}`);
})


