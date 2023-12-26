import  {Router} from 'express'
import { registerUser } from '../controllers/user.controller.js'

const useRouter= Router()

useRouter.route ("/register").post(registerUser)




export {useRouter}