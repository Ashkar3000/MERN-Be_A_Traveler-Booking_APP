import express from "express";
import * as controller from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//createHotel 
router.post("/", verifyAdmin, controller.createHotel);

//updateHotel 
router.put("/:id", verifyAdmin, controller.updateHotel);

//deleteHotel 
router.delete("/:id", verifyAdmin, controller.deleteHotel);

//getHotel 
router.get("/:id", controller.getHotel);

//getAllHotels 
router.get("/", controller.getAllHotels);



export default router;
