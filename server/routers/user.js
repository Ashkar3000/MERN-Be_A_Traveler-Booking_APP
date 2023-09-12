import express from "express"
import * as controller from "../controllers/user.js"

const router = express.Router()

//updateUser
router.put("/:id", controller.updateUser)

//deleteUser
router.put("/:id", controller.deleteUser)

//getUser
router.put("/:id", controller.getUser)

//getAllUsers
router.put("/", controller.getAllUsers)