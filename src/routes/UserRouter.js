import {Router} from 'express'
import userService from './../service/userService.js'
import verify from './../middleware/Verify.js'
import verifyAdmin from '../middleware/VerifyAdmin.js';
const routes = Router();

routes.post("/signup",userService.signupController)
routes.post("/signin",userService.signInController)
routes.post("/forgotpwd",userService.forgotPassword)
routes.post("/resetpwd",userService.resetPassword)
routes.get("/get",userService.getUsers)
routes.get("/:id",verify,verifyAdmin,userService.getUserByID)


export default routes