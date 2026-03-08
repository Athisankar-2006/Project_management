import app from "./app.js"
import dotenv from "dotenv";


dotenv.config({
    path :"./.env",
})

// let myname=process.env.username;

// console.log("value: ",myname);



const port=process.env.PORT||7000;


app.listen(port,()=>{
   console.log(`server is runnig on the http://localhost:${port}`)
})


