require('dotenv').config();
const Bookings = require("../models/BookingDbModel");
const Room = require('../models/RoomDbModel');
const jwt = require("jsonwebtoken");
const { removeRoom, getAllRoomsHandler } = require('./roomControllers');
const WELCOME_LOGIC_APP_URL = process.env.WELCOME_LOGIC_APP_URL
const axios = require('axios');
const Customer = require('../models/CustomerDBModel');
const Booking = require('../models/BookingDbModel');
const BookedRoom = require("../models/BookedRoomDbModel")

// ? Booking 
// ? Flow
// ? -> Check Use is Logged In or not
// ? -> Check that room is availabe or not
// ? -> if yes then direct to payment 
// ? ->  if payment done then book , change status of room to booked and mail user
const bookRoom = async(req,res)=>{
   const {bookingId, checkIn, checkOut, roomId} = req.body;

   // TODO :- Check room avaialble
   const roomData = await getAllRoomsHandler(checkIn, checkOut);

   const availableRoomsId = [];
   roomData.map((rm)=>{
      availableRoomsId.push(rm.dataValues.roomId)
   })
   console.log(availableRoomsId);

   const roomPresent = await availableRoomsId.includes(roomId);
   
   if(!roomPresent){
      res.send("Room not available !")
   }

   const room = await Room.findByPk(roomId);
   const customerId = req.user.customerId;
   const paymentAmount = room.roomCost;
   const paymentDone = true;

   if(paymentDone){
      const bookingInfo = {...req.body,paymentAmount,customerId};
      // console.log(bookingInfo);
      await Bookings.create(bookingInfo)

      const bookedRoomData = {bookingId, roomId, checkIn, checkOut}
      await BookedRoom.create(bookedRoomData);

      // TODO :- Mail to Customer
      //await sendBookedConfirmationMail(req.user,bookingInfo);
      
      res.end('Booking Done!')
   }else{
      res.send("Payment Failed !")
   }

   // const room = await Room.findByPk(roomId);
   // // console.log("Room :- ",room);
   // // TODO :- Checking Room Avaialble
   // const status = room.roomStatus;
   // if(status== "available"){
   //    const customerId = req.user.customerId;
   //    const paymentAmount = room.roomCost;
   //    // console.log(status);

   //    // TODO :-  Checking for Payment
   //    const paymentDone = true;
   //    if(paymentDone){
   //       const bookingInfo = {...req.body,paymentAmount,customerId};
   //       // console.log(bookingInfo);
   //       await Bookings.create(bookingInfo)

   //       //  TODO :- Change Room Status
   //       Room.update({ roomStatus: 'booked' }, { where: { roomId: room.roomId } })

   //       const bookedRoomData = {bookingId, roomId, checkIn, checkOut}
   //       await BookedRoom.create(bookedRoomData);

   //       // TODO :- Mail to Customer
   //       //await sendBookedConfirmationMail(req.user,bookingInfo);
         
   //       res.end('Booking Done!')
   //    }else{
   //       res.send("Payment Failed !")
   //    }
   // }else{
   //    res.send("This Room is already booked !")
   // }
}

const sendBookedConfirmationMail = async(user,bookingInfo)=>{
      await axios.post(WELCOME_LOGIC_APP_URL,{
         "to": user.mailId,
         "subject":"Booking Confirmed !",
         "email_body":`Dear ${user.name} ,<br><br>
Thank you for choosing to stay with us at XYZ Hotel. We appreciate your business and are thrilled to have the opportunity to serve you.<br><br>
You Booking details:-<br><br>
Check-in Date :- ${bookingInfo.checkIn}<br>
Check-out Date :- ${bookingInfo.checkOut}<br>
Room Id :- ${bookingInfo.roomId}<br><br>
Best regards,<br>
XYZ Team`
      }).then((result) => {
         console.log("Mail Sended!");
      }).catch((err) => {
         console.log(`Error occured : ${err}`);
      });
}


const userBookingHandler = async(req,res,userbookingId)=>{
   const customerId = req.user.customerId;
   const data = await Booking.findAll({
      include: Customer,
      where :{customerId : customerId}
   })
   let bookingExists = false;
   const userBooking = [];
   data.map((value)=>{
      const bookingId = value.dataValues.bookingId;
      const paymentAmount = value.dataValues.paymentAmount
      const  bookingDate= value.dataValues.bookingDate
      const checkIn = value.dataValues.checkIn
      const checkOut = value.dataValues.checkOut
      const roomId = value.dataValues.roomId
      const customerId = value.dataValues.customerId
      const customerName = value.Customer.dataValues.name;
      // console.log("NAME :============= >",customerName);

      if(bookingId == userbookingId){
         bookingExists = true;
      }

      const currrentBookingdata = {customerName,bookingId,paymentAmount,bookingDate,checkIn,checkOut,roomId,customerId};
      // console.log("Value ====> ",currrentBookingdata);
      userBooking.push(currrentBookingdata);
   })
   return {userBooking,bookingExists}
}

// ? LoggedIn user wants to get his/her all bookings
const getAllBookings = async(req,res)=>{
   const {userBooking} = await userBookingHandler(req,res);
   res.send(userBooking)
}


// ? User cancelling a booked room
const cancelBooking = async(req,res)=>{
   const {bookingId}= req.params;
   let {userBooking,bookingExists} = await userBookingHandler(req,res,bookingId);
   if(!bookingId){
      res.send('Room id not provided!')
      return;
   }
   if(bookingExists==false){
      res.send("You don't have any booking with this id!")
      return;
   }
   let bookingToCancel;
   await userBooking.forEach((i)=>{
      if(bookingId == i.bookingId){
         bookingToCancel = i
      }
   })
   console.log(bookingToCancel);
   await Bookings.destroy({where : {
      bookingId : bookingId
   }})

   await BookedRoom.destroy({where : {
      bookingId : bookingId
   }})

   await Room.update({roomStatus : "available"}, {
      where: {
         roomId: bookingToCancel.roomId
      }
   })

   //await sendCancelConfirmationMail(req.user)
   // console.log(bookingExists);
   res.send("Booking Cancelled !")

}


const sendCancelConfirmationMail = async(user,bookingInfo)=>{
      await axios.post(WELCOME_LOGIC_APP_URL,{
         "to": user.mailId,
         "subject":"Booking Cancelled !",
         "email_body":`Dear ${user.name} ,<br><br>
You booking has been cancelled successfully. Amount will be transfered to your account in 7 days.
Best regards,<br>
XYZ Team`
      }).then((result) => {
         console.log("Mail Sended!");
      }).catch((err) => {
         console.log(`Error occured : ${err}`);
      });
}



// ? Hotel only :- Wants to get all bookings
const getAllBooks = ()=>{}


module.exports = {getAllBookings, bookRoom, getAllBooks, cancelBooking}