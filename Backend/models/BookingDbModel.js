const {DataTypes} = require("sequelize")
const {sequelize} = require("../utils/databaseConnnection")
const Room = require("../models/RoomDbModel")
const Customer = require("../models/CustomerDBModel")

const Booking = sequelize.define("Bookings",{
   bookingId : {
      type: DataTypes.STRING,
       primaryKey: true
   },
   paymentAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   bookingDate: {
      type: DataTypes.DATE,
      defaultValue: function () {
         const bookingDateTime = new Date();
         const year = bookingDateTime.getFullYear();
         const month = bookingDateTime.getMonth() + 1; // add 1 to adjust for zero-indexing
         const day = bookingDateTime.getDate();
         const hours = bookingDateTime.getHours();
         const minutes = bookingDateTime.getMinutes();
         const seconds = bookingDateTime.getSeconds();
         const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

         return formattedDateTime;
      }
   },
   checkIn:{
      type: DataTypes.DATE,
      allowNull:false
   },
   checkOut:{
      type: DataTypes.DATE,
      allowNull:false
   }
},{
   freezeTableName: true, // Enforcing the tableName to be the Model Name
})

Booking.belongsTo(Room, {
    foreignKey: "roomId",
    targetKey: "roomId"
});
Booking.belongsTo(Customer, {
    foreignKey: "customerId",
    targetKey: "customerId"
});

// Booking.sync();
// Booking.drop();

module.exports = Booking