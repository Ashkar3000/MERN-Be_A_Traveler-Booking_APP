import express from "express";
import * as controller from "../controllers/room.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//createRoom 
router.post("/:hotelid", verifyAdmin, controller.createRoom);

//updateRoom 
router.put("/:id", verifyAdmin, controller.updateRoom);

//deleteRoom 
router.delete("/:id", verifyAdmin, controller.deleteRoom);

//getRoom 
router.get("/:id", controller.getRoom);

//getAllRooms 
router.get("/", controller.getAllRooms);



export default router;
