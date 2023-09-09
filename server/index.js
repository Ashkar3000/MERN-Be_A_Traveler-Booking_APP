import express from "express";
import dotenv from "dotenv";
import database from "./config/db.js";

import userRouter from "./routers/user.js"
import adminRouter from "./routers/admin.js"

const app = express();
dotenv.config()


const PORT = process.env.PORT || 4000;

app.listen(PORT,async () =>{
    await database()
    console.log(`Server Started ${PORT}`)
})

app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)