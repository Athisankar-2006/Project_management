const express=require("express");
const dotenv=require("dotenv");


const app=express();

dotenv.config({
    path :"./.env",
})

let myname=process.env.username;

console.log("value: ",myname);


app.get('/test',(req,res)=>{
    res.send("this is the get response")
})

const port=process.env.PORT||7000;


app.listen(port,()=>{
   console.log(`server is runnig on the http://localhost:${port}`)
})


