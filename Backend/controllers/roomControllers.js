const Room = require("../models/RoomDbModel");
const BookedRoom = require("../models/BookedRoomDbModel")
const { Op } = require('sequelize');


const getAllRoomsHandler = async (checkIn, checkOut) => {
  const parsedCheckIn = new Date(checkIn);
  const parsedCheckOut = new Date(checkOut);

  const bookedRooms = await BookedRoom.findAll({
    attributes: ['roomId'],
    where: {
      [Op.or]: [
        { checkIn: { [Op.lte]: parsedCheckOut }, checkOut: { [Op.gte]: parsedCheckIn } },
        { checkIn: { [Op.gte]: parsedCheckIn }, checkOut: { [Op.lte]: parsedCheckOut } },
        { checkIn: { [Op.lte]: parsedCheckOut }, checkOut: { [Op.gte]: parsedCheckOut } },
      ],
    },
  });

  const bookedRoomIds = bookedRooms.map((room) => room.roomId);

  const availableRooms = await Room.findAll({
    where: {
      roomId: {
        [Op.notIn]: bookedRoomIds,
      },
    },
  });

  return availableRooms;
};

const getAllRooms = async(req,res)=>{
   const {checkIn, checkOut} = req.body;
   const data = await getAllRoomsHandler(checkIn,checkOut);
   const availableRooms = [];
   data.map((rm)=>{
      // console.log(rm.dataValues);
      availableRooms.push(rm.dataValues);
   })
   res.send(availableRooms);

   /*
   const data = await Room.findAll();

   const bookedRoomData = await BookedRoom.findAll();
   // console.log(bookedRoomData);
   const roomAvailableInGivenDate = [];
   bookedRoomData.map((bookeRm)=>{
      console.log("\nDATATATATA ===> ",bookeRm.dataValues);
   })

   const roomData = []
   data.map((rm)=>{
      const data = rm.dataValues;
      if(rm.dataValues.roomStatus == "available")
         roomData.push(data)
   })
   //console.log("Data Rooom :- ",roomData);
   res.send(roomData);
   */
}




const addRoom = async(req,res)=>{
   const {roomId,roomStatus, roomType, roomCost, roomExtraFacility} = await req.body;
   //console.log(req.body);
   const found = await Room.findByPk(roomId)
   if(found){
      res.send("Room with this ID exist")
      return;
   }
   if(!roomId || !roomStatus || !roomCost){
      res.send(400);
      throw new Error("Please Enter All Feilds!")
   }
   await Room.create(req.body)
   res.send("Room Added!");
}

const addRooms = async(req,res)=>{
   const data = req.body;
   const uniqueRooms = [];

   await Promise.all(
      data.map(async (room)=>{
         let t = await Room.findOne({
            where : {
               roomId : room.roomId
            }
         });
         if(t==null){
            uniqueRooms.push(room)
         }
      })
   )
   // console.log("UNIQUE ROOMS ",uniqueRooms);
   await Room.bulkCreate(uniqueRooms);
   res.status(200).send('Multiple Rooms Added !')
}

const removeRoom = async(req,res)=>{
   const {roomId} = req.params;
   //console.log(roomId);
   await Room.destroy({
      where:{
         roomId : roomId
         //roomStatus : "available"
      }
   })
   res.status(200).send('Room Removed !')
}

module.exports = {getAllRooms, addRoom , addRooms, removeRoom, getAllRoomsHandler}