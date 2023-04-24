const {sequelize} = require("./utils/databaseConnnection")
const Room = require("./models/RoomDbModel")
const roomRoutes = require("./routes/roomRoutes")
const customerRoutes = require("./routes/customerRoutes")
const bookingRoutes = require("./routes/bookingRoutes")

const express = require("express");
const authMiddleware = require("./middleware/authMiddleware")
const app = express();
app.use(express.json());


app.use("/api/room",roomRoutes);
app.use("/api/customer",customerRoutes)
app.use("/api/booking",bookingRoutes)

// app.use("/api/vendor/booking",vendorBooking);


//  ? Drop Tabel
// (async() => {
//    await Room.drop() 
//    console.log("Room table dropped! ");
// })();

app.listen(5000,()=>{
   console.log(`Server is running !`);
})