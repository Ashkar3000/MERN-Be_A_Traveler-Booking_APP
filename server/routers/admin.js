import express from "express";
import * as controller from "../controllers/admincontrollers.js"

const router = express.Router();

//HOTEL
//CREATE HOTEL
router.post("/", controller.createHotel);
//UPDATE HOTEL
router.put("/:id", controller.updateHotel);
//DELETE HOTEL
router.delete("/:id",controller.deleteHotel);
//GET HOTEL
router.get("/:id", controller.getHotel);
//GET ALL HOTEL
router.get("/", controller.getAllHotels);



export default router;
