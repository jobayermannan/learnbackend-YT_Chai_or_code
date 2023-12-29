import { User } from "../models/user.model.js"
import { apiError } from "../utils/api.error.js"
import { apiResponse } from "../utils/api.response.js"
import { asyncHandler } from "../utils/async.handler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"



const registerUser =asyncHandler(async (req,res) => {
 
   //get user details from frontend 

   //validation - not empty //sob kichu empty na to 

   //check if user is all ready exists : usrename, email

   //check for images 
   //check for avater 

   //upload them to cloudinary ,avater
   //create user object -create entry in db

   //remove password and refresh token field from response
   //check for user  creation
   //return user or false

     const {fullName, email,username,password}=req.body

     console.log("email",email)

   //   if(fullName === ""){
   //    throw new  apiError(400,"fullname is required")
   //   }
   if ([fullName,email,username,password].some((field)=>
   field?.trim() === "")) {
      throw new  apiError(400,"full name is required")
   }

  const existedUser= await User.findOne({
      $or:[{username},{email}]
   })

   if(existedUser){
      throw new  apiError(409,"user already exists")
   }

   const avatarLocalPath =req.files?.avatar[0]?.path
   const coverImageLocalPath = req.files?.coverImage?.[0]?.path ?? "";

   // let coverImageLocalPath ;

   // if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length>0)  {
   //    coverImageLocalPath =req.files.coverImage[0].path 
   // }


    if (!avatarLocalPath) {
      throw new  apiError(400,"avatar is required")
      
    }

  const avatar= await  uploadOnCloudinary(avatarLocalPath)
  const coverImage= await  uploadOnCloudinary(coverImageLocalPath)

  if (!avatarLocalPath) {
   throw new  apiError(400,"avatar is required")
   
 }

const user = await User.create({
     fullName,
     avatar: avatar.url,
     coverImage: coverImage?.url || "",
     email,
     username:username.toLowerCase(),
     password

            })



            const createdUser =await User.findById(user._id).select(
               " -password -refreshToken"
            )

 
            if (!createdUser) {

               throw new  apiError(500,"something went wrong while registering the user ")
               
            }


   return res.status (201).json(
      new apiResponse(200,createdUser,"user registered successfully")
   )


})


export {registerUser}