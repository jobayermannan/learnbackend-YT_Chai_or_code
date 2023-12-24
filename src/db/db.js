import mongoose from "mongoose";
import { DB_Name } from "../constants.js";



const connectDB=async()=>{
 try {
   const connectionInstance= await mongoose.connect(`${process.env.DATABASE_URL}/${DB_Name}`)
   console.log(`\n mongodb connect: ${connectionInstance.connection.host}`);
   
 } catch (error) {

   console.log("Error connecting",error);
   process.exit(1)
   
 }
}

export default connectDB;