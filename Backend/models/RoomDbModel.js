const {DataTypes} = require("sequelize")
const {sequelize} = require("../utils/databaseConnnection")

const Room = sequelize.define("Room",{
   roomId : {
      type: DataTypes.STRING(30),
      primaryKey: true
   },
   roomStatus : { // Available , Booked, Reserved
      type: DataTypes.STRING,
      allowNull: false
   },
   roomType : { // Basic, Premium
      type: DataTypes.STRING 
   },
   roomCost : { // Basic(3000-5000), Premium(5000-20000)
      type: DataTypes.INTEGER,
      allowNull: false
   },
   roomExtraFacility: { // [Attached Balcony, Big bathroom, Room Bar, Room Spa]
      type: DataTypes.STRING
   }
},{
   freezeTableName: true, // Enforcing the tableName to be the Model Name
})

// Room.sync();
//  Room.update({ roomStatus: 'available' }, { where: { roomId: "rm001" } })
module.exports = Room;