import express from "express"
import * as controller from "../controllers/user.js"
import { verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

router.get("/checkauthentication" , verifyToken, (req, res, next) => {
    res.send("Hello users ,you are logged in")
})

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello users ,you are logged in and you can delete your account")
// })

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

//updateUser
router.put("/:id", controller.updateUser)

//deleteUser
router.delete("/:id", controller.deleteUser)

//getUser
router.get("/:id", controller.getUser)

//getAllUsers
router.get("/", controller.getAllUsers)


export default router