import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// Routes
import database from "./config/db.js";
import authRouter from "./routers/auth.js";
import hotelsRouter from "./routers/hotels.js";
import userRouter from "./routers/user.js"

const app = express();
dotenv.config();

//middleware
app.use(cookieParser())

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await database();
  console.log(`Server Started ${PORT}`);
});

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/user", userRouter);

//error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(500).json({
    sucess: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack //Give more details about the error.
  });
});
