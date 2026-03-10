
import app from "./app.js"
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config({ path :"./.env"});



connectDB()
     .then( ()=>{
     const port=process.env.PORT||7000;
    

    app.listen(port,()=>{
   console.log(`server is runnig on the http://localhost:${port}`)
})

     })
     .catch((error)=>{
          console.error("mongoDB connection error ",error);
          process.exit(1);
     })
// let myname=process.env.username;

// console.log("value: ",myname);







