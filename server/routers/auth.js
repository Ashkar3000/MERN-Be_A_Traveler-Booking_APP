import express from "express";
import * as controller from "../controllers/auth.js"

const router = express.Router()

//register
router.post("/register",controller.register)

//login
router.post("/login",controller.login)

export default router 