import express from "express";
import * as controller from "../controllers/hotel.js"

const router = express.Router();

//createHotel 
router.post("/", controller.createHotel);

//updateHotel 
router.put("/:id", controller.updateHotel);

//deleteHotel 
router.delete("/:id",controller.deleteHotel);

//getHotel 
router.get("/:id", controller.getHotel);

//getAllHotels 
router.get("/", controller.getAllHotels);



export default router;
