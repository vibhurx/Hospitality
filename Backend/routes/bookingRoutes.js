const express = require("express")
const router = express.Router();
const {getAllBookings, bookRoom, getAllBooks, cancelBooking} = require("../controllers/bookingControllers");
const authMiddleware = require("../middleware/authMiddleware");

// ? Get specific user's all bookings
router.use(authMiddleware)
      .get('/allBookings',getAllBookings);

// ? Book a room
router.use(authMiddleware)
      .post('/book',bookRoom);

// ? Cancel Booking
router.use(authMiddleware)
      .post('/cancel/:bookingId',cancelBooking)

// ? Get all booking till date or (based on filter)
router.get('/book/all',getAllBooks);

module.exports = router;

