const express = require("express")
const router = express.Router();
const {getAllRooms, addRoom, addRooms, removeRoom} = require("../controllers/roomControllers")

// ? Get all avaialable rooms from Room DB
router.get("/",getAllRooms);

// ? Add a single room to DB
router.post("/add",addRoom);

// ? Add multiple rooms
router.post("/add/rooms",addRooms);

// ? Remove a particular room
router.delete("/remove/:roomId",removeRoom);

module.exports = router;

