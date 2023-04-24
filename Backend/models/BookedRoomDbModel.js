const {DataTypes} = require("sequelize")
const {sequelize} = require("../utils/databaseConnnection")

const BookedRoom = sequelize.define("BookedRoom",{
   bookingId : {
      type: DataTypes.STRING,
       primaryKey: true
   },
   roomId : {
      type: DataTypes.STRING(30),
      primaryKey: true
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

// BookedRoom.sync();
// BookedRoom.drop();
//  Room.update({ roomStatus: 'available' }, { where: { roomId: "rm002" } })
module.exports = BookedRoom;