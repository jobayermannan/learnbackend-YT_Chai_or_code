


import dotenv from 'dotenv'



import connectDB from "./db/db.js";


dotenv.config({
   path: './env'
})





connectDB()






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