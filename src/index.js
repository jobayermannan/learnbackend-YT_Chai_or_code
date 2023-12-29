import dotenv from 'dotenv'
import connectDB from "./db/db.js";
import app from './app.js';
import { DB_Name } from './constants.js';

dotenv.config({
   path: './.env'
})
const appPort =process.env.PORT || 5000

connectDB()
.then(()=>{
  app.listen(appPort,()=>{
      console.log(` ⚙️ SERver is listening on ${appPort}`)
   });
  
  
})
.catch((error)=>{
  console.log(`MOngo db connection failed`, error)
})







//  function connectDB(){}
                                     
// connectDB()  this is  syntax

// import express from "express";
// const app = express();

// ;(async()=>{
//    try {
//        await mongoose.connect(`${process.env.DATABASE_URL}/${DB_Name}`)

//        app.on("error", (err)=>{
//          console.log("Error",err)
//        })
//        app.listen(process.env.PORT,()=>{

//          console.log( `APP is listening on ${process.env.PORT}`)
//        })
//    } catch (error) {
//       console.error("Error:",error)

//       throw err
//    }
// })()

