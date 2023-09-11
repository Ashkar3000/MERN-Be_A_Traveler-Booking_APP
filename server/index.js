import express from "express";
import dotenv from "dotenv";
import database from "./config/db.js";
// Routes
import authRouter from "./routers/auth.js";
import hotelsRouter from "./routers/hotels.js";

const app = express();
dotenv.config();

//middleware
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await database();
  console.log(`Server Started ${PORT}`);
});

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);

//error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(500).json({
    sucess: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack //Give more details about the error.
  });
});
