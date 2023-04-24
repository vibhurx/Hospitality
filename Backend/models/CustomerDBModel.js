const {DataTypes} = require("sequelize")
const {sequelize} = require("../utils/databaseConnnection")

const Customer = sequelize.define("Customer",{
   "customerId" : {
      type: DataTypes.STRING(30),
      primaryKey: true,
      defaultValue: function () {
         return `C${Date.now()}`; // generates a unique ID using the current timestamp
      }
   },
   "name" : {
      type: DataTypes.STRING,
      allowNull: false
   },
   "age" : {
      type: DataTypes.INTEGER 
   },
   "phoneNumber" : {
      type: DataTypes.STRING(10)
   },
   "mailId":{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
   },
   "password":{
      type: DataTypes.STRING,
      allowNull:false
   }
},{
   freezeTableName: true, // Enforcing the tableName to be the Model Name
})

// Customer.sync();
module.exports = Customer