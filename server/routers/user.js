import express from "express"
import * as controller from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

// router.get("/checkauthentication" , verifyToken, (req, res, next) => {
//     res.send("Hello users ,you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello users ,you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin ,you are logged in and you can delete your account")
// })

//updateUser
router.put("/:id", verifyUser, controller.updateUser)

//deleteUser
router.delete("/:id", verifyUser, controller.deleteUser)

//getUser
router.get("/:id", verifyUser, controller.getUser)

//getAllUsers
router.get("/", verifyAdmin, controller.getAllUsers)


export default router